import { pgTable, text } from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';

// --- Enums ---
// Prisma의 Enum은 TypeScript의 'const' 배열로 정의
export const roles = ['STUDENT', 'COACH', 'VOLUNTEER', 'STATE_DIRECTOR', 'USAD_BOARD'] as const;
export const divisions = ['H', 'S', 'V'] as const;

// --- 테이블 정의 ---

// 모든 '사람'의 공통 정보
export const users = pgTable('User', {
  id: text('id').primaryKey(), // Prisma의 cuid() 대신, 애플리케이션에서 생성해서 넣어야 함
  firstName: text('firstName').notNull(),
  lastName: text('lastName').notNull(),
  role: text('role', { enum: roles }).notNull(),
});

// 학교 정보
export const schools = pgTable('School', {
  id: text('id').primaryKey(),
  name: text('name').notNull().unique(),
  city: text('city'),
  state: text('state'),
});

// 코치 정보
export const coaches = pgTable('Coach', {
  id: text('id').primaryKey(), // 내부 ID
  userId: text('userId').notNull().unique().references(() => users.id),
  externalId: text('externalId').unique(), // USAD가 제공하는 코치 ID #
  schoolId: text('schoolId').notNull().references(() => schools.id),
});

// 팀 정보 (코치와 도메인의 조합)
export const teams = pgTable('Team', {
  id: text('id').primaryKey(),
  domain: text('domain').notNull().unique(),
  coachId: text('coachId').notNull().references(() => coaches.id),
});

// 학생 정보
export const students = pgTable('Student', {
  id: text('id').primaryKey(),
  userId: text('userId').notNull().unique().references(() => users.id),
  externalId: text('externalId').notNull().unique(), // USAD가 제공하는 학생 ID #
  username: text('username').notNull().unique(), // {ID #}@{school domain}
  division: text('division', { enum: divisions }).notNull(),
  loginId: text('loginId').unique(),
  pin: text('pin'),
  teamId: text('teamId').notNull().references(() => teams.id),
  // createdAt, updatedAt은 Drizzle에서 애플리케이션 레벨에서 처리하는 것을 권장
});

// --- 관계(Relations) 정의 ---
// Drizzle에게 각 테이블이 어떻게 연결되는지 알려주는 부분

export const usersRelations = relations(users, ({ one }) => ({
  student: one(students, { fields: [users.id], references: [students.userId] }),
  coach: one(coaches, { fields: [users.id], references: [coaches.userId] }),
}));

export const schoolsRelations = relations(schools, ({ many }) => ({
  coaches: many(coaches),
}));

export const coachesRelations = relations(coaches, ({ one, many }) => ({
  user: one(users, { fields: [coaches.userId], references: [users.id] }),
  school: one(schools, { fields: [coaches.schoolId], references: [schools.id] }),
  teams: many(teams),
}));

export const teamsRelations = relations(teams, ({ one, many }) => ({
  coach: one(coaches, { fields: [teams.coachId], references: [coaches.id] }),
  students: many(students),
}));

export const studentsRelations = relations(students, ({ one }) => ({
  user: one(users, { fields: [students.userId], references: [users.id] }),
  team: one(teams, { fields: [students.teamId], references: [teams.id] }),
}));