import { z } from "@hono/zod-openapi";
import { insertCoaches, insertTeams, TransactionSessionType } from ".";
import { schoolsInsertSchema, schoolSelectFieldsSchema, coachTeamMappings } from 'usad-scheme';
import { omit } from 'es-toolkit';
import { Prisma } from "@prisma/client";
type SchoolInsertItem = z.infer<typeof schoolsInsertSchema>['schools'][number];
type CoachTeamMappingsInsertItem = z.infer<typeof coachTeamMappings>;

export async function insertSchools(tx: TransactionSessionType, schools: SchoolInsertItem[]) {
  // 1. 학교 인서트 (mutationIndex로 정렬해서 순서 보장)
  const insertSchoolsData = schools.map((school, i) => ({
    ...omit(school, ['teams', 'coaches', 'coachTeamMappings', 'primaryCoachIndex']),
    mutationIndex: i
  }));

  const insertedSchools = (await tx.school.createManyAndReturn({
    data: insertSchoolsData,
    select: schoolSelectFieldsSchema,
  })).sort((a, b) => a.mutationIndex - b.mutationIndex);

  // 2. 역지도 생성: School ID -> Original Index (O(1) 조회를 위함)
  const idToSchoolIndexMap = new Map<string, number>();
  insertedSchools.forEach(s => idToSchoolIndexMap.set(s.id, s.mutationIndex));

  // 3. 하위 엔티티 인서트 데이터 준비
  const teamsToInsert = schools.flatMap((school, i) => 
    school.teams?.map((t, ti) => ({ ...t, schoolId: insertedSchools[i].id, mutationIndex: ti, competitionId: school.competitionId })) ?? []
  );
  const coachesToInsert = schools.flatMap((school, i) => 
    school.coaches?.map((c, ci) => ({ ...c, schoolId: insertedSchools[i].id, mutationIndex: ci })) ?? []
  );

  // 4. 하위 엔티티 벌크 인서트 (여기서 전체 오브젝트가 반환된다고 가정)
  const [insertedTeams, insertedCoaches] = await Promise.all([
    insertTeams(tx, teamsToInsert),
    insertCoaches(tx, coachesToInsert)
  ]);

  // 5. 관계 매핑 및 데이터 조립을 위한 그룹화 (ID가 아닌 '오브젝트'를 담음)
  const fullCoachesBySchoolIndex = new Map<number, typeof insertedCoaches>();
  const fullTeamsBySchoolIndex = new Map<number, typeof insertedTeams>();

  insertedCoaches.forEach(c => {
    const schoolIdx = idToSchoolIndexMap.get(c.schoolId)!;
    if (!fullCoachesBySchoolIndex.has(schoolIdx)) fullCoachesBySchoolIndex.set(schoolIdx, []);
    fullCoachesBySchoolIndex.get(schoolIdx)!.push(c);
  });
  insertedTeams.forEach(t => {
    const schoolIdx = idToSchoolIndexMap.get(t.schoolId)!;
    if (!fullTeamsBySchoolIndex.has(schoolIdx)) fullTeamsBySchoolIndex.set(schoolIdx, []);
    fullTeamsBySchoolIndex.get(schoolIdx)!.push(t);
  });

  // 6. 관계 데이터 및 벌크 업데이트 준비
  const relationships: CoachTeamMappingsInsertItem[] = [];
  const primaryCoachUpdates: Prisma.Sql[] = [];

  schools.forEach((school, i) => {
    const schoolId = insertedSchools[i].id;
    const coachList = fullCoachesBySchoolIndex.get(i) || [];
    const teamList = fullTeamsBySchoolIndex.get(i) || [];

    // Team-Coach Mappings (인덱스 기반 매핑)
    school.coachTeamMappings?.forEach(m => {
      relationships.push({ 
        coachId: coachList[m.coachIndex].id, 
        teamId: teamList[m.teamIndex].id 
      });
    });

    // Primary Coach 업데이트 준비
    if (school.primaryCoachIndex !== undefined) {
      primaryCoachUpdates.push(Prisma.sql`(${schoolId}::UUID, ${coachList[school.primaryCoachIndex].id}::UUID)`);
    }
  });

  // 7. DB 관계 설정 및 벌크 업데이트 실행
  await Promise.all([
    tx.teamCoachRelationship.createMany({ data: relationships }),
    primaryCoachUpdates.length > 0 ? tx.$executeRaw`
      UPDATE "schools" as s
      SET "primary_coach_id" = v.p_id
      FROM (VALUES ${Prisma.join(primaryCoachUpdates)}) AS v(s_id, p_id)
      WHERE s.id = v.s_id
    ` : Promise.resolve()
  ]);

  // 8. 최종 결과 조립: 원본 데이터 구조를 유지하며 DB에서 생성된 값들을 포함
  return insertedSchools.map((s, i) => ({
    ...s,
    coaches: fullCoachesBySchoolIndex.get(i) || [],
    teams: fullTeamsBySchoolIndex.get(i) || [],
    // Primary Coach 정보도 갱신된 값으로 리턴
    primaryCoachId: schools[i].primaryCoachIndex !== undefined 
      ? (fullCoachesBySchoolIndex.get(i) || [])[schools[i].primaryCoachIndex].id 
      : s.primaryCoachId
  }));
}