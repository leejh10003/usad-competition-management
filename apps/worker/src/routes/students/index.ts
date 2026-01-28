import {
  studentsResponseSchema,
  studentQuerySchema,
  studentsInsertSchema,
  studentsUpdateSchema,
  basicFailed,
  studentSelectFieldsSchema,
} from "usad-scheme";
// --- 🧑‍🎓 학생 (Students) 관련 엔드포인트 ---
import { OpenAPIHono, z } from "@hono/zod-openapi";
import { id } from "./:id";
import _ from "lodash";
import { Prisma, Student } from "@prisma/client";
import { insertStudentWithIndividualAddress, insertStudentWithSchoolId } from "usad-scheme/src/student";
const students = new OpenAPIHono();
type InsertStudentWithIndividualAddress = z.infer<typeof insertStudentWithIndividualAddress>;
type InsertStudentWithSchoolId = z.infer<typeof insertStudentWithSchoolId>;
students.openapi(
  {
    method: "get",
    path: "",
    summary: "Retrieve a list of students with pagination",
    description: "Fetches a paginated list of students from the database.",
    request: {
      query: studentQuerySchema,
    },
    responses: {
      200: {
        content: {
          "application/json": {
            schema: studentsResponseSchema,
          },
        },
        description: "Retrieve the user",
      },
      500: {
        content: {
          "application/json": {
            schema: basicFailed,
          },
        },
        description: "Describe the reason",
      },
    },
  },
  async (c) => {
    try {
      const condition =
        c.req.valid("query");
      const { skip, take, where } = condition;
      console.log(`Fetching students with offset ${skip} and limit ${take}`);
      const prisma = c.get("prisma");
      const result = await prisma.student.findMany({
        ...condition,
        select: studentSelectFieldsSchema,
      });
      const count = await prisma.student.count({where});
      return c.json({ success: true, students: result, count }, 200);
    } catch (e) {
      if (e instanceof Error) {
        console.error(e.stack, "\n", e.message);
      } else {
        console.error("no stack trace \n", e);
      }
      return c.json({ success: false, message: JSON.stringify(e) }, 500);
    }
  }
);

// [생성] 새로운 학생 생성
students.openapi(
  {
    method: "post",
    path: "",
    summary: "Create a new student",
    description: "Creates a new student record in the database.",
    request: {
      body: {
        content: {
          "application/json": {
            schema: studentsInsertSchema,
          },
        },
      },
    },
    responses: {
      200: {
        "application/json": {
          schema: studentsResponseSchema,
        },
        description: "Student created successfully",
      },
    },
  },
  async (c) => {
    const prisma = c.get("prisma");
    const { students } = c.req.valid("json");
    const result = (await prisma.student.createManyAndReturn({
      data: students,
      select: studentSelectFieldsSchema,
    })).sort((a, b) => a.mutationIndex - b.mutationIndex);
    return c.json({ success: true, students: result }, 200);
  }
);

students.openapi(
  {
    method: "put",
    description: "Update multiple students",
    summary: "Update multiple students",
    path: "",
    request: {
      body: {
        content: {
          "application/json": {
            schema: studentsUpdateSchema,
          },
        },
      },
    },
    responses: {
      200: {
        content: {
          "application/json": {
            schema: studentsResponseSchema,
          },
        },
        description: "Update multiple students success",
      },
    },
  },
  async (c) => {
    const { students } = c.req.valid("json");
    const prisma = c.get("prisma");
    const valueRows = students.map((e, i) => Prisma.sql`(
      ${e.id}::UUID,
      ${e.student.externalStudentId}::TEXT,
      ${e.student.division}::"Division",
      ${e.student.gpa}::FLOAT8,
      ${e.student.firstName}::TEXT,
      ${e.student.lastName}::TEXT,
      ${e.student.usadPin}::TEXT,
      ${e.student.signature}::TEXT,
      ${e.student.attachmentOnRegistering}::TEXT,
      ${(e.student as InsertStudentWithIndividualAddress).streetAddress}::TEXT,
      ${(e.student as InsertStudentWithIndividualAddress).city}::TEXT,
      ${(e.student as InsertStudentWithIndividualAddress).state}::"State",
      ${(e.student as InsertStudentWithIndividualAddress).zipCode}::TEXT,
      ${(e.student as InsertStudentWithIndividualAddress).guardianFirstName}::TEXT,
      ${(e.student as InsertStudentWithIndividualAddress).guardianLastName}::TEXT,
      ${(e.student as InsertStudentWithIndividualAddress).guardianPhone}::TEXT,
      ${(e.student as InsertStudentWithIndividualAddress).guardianEmail}::TEXT,
      ${e.student.objectiveScore}::FLOAT8,
      ${e.student.subjectiveScore}::FLOAT8,
      ${e.student.teamId}::UUID,
      ${e.student.type}::"StudentType",
      ${(e.student as InsertStudentWithSchoolId).schoolId}::UUID,
      ${i}::INTEGER,
      ${e.student.externalStudentId !== undefined}::BOOLEAN,
      ${e.student.division !== undefined}::BOOLEAN,
      ${e.student.gpa !== undefined}::BOOLEAN,
      ${e.student.firstName !== undefined}::BOOLEAN,
      ${e.student.lastName !== undefined}::BOOLEAN,
      ${e.student.usadPin !== undefined}::BOOLEAN,
      ${e.student.signature !== undefined}::BOOLEAN,
      ${e.student.attachmentOnRegistering !== undefined}::BOOLEAN,
      ${(e.student as InsertStudentWithIndividualAddress).streetAddress !== undefined}::BOOLEAN,
      ${(e.student as InsertStudentWithIndividualAddress).city !== undefined}::BOOLEAN,
      ${(e.student as InsertStudentWithIndividualAddress).state !== undefined}::BOOLEAN,
      ${(e.student as InsertStudentWithIndividualAddress).zipCode !== undefined}::BOOLEAN,
      ${(e.student as InsertStudentWithIndividualAddress).guardianFirstName !== undefined}::BOOLEAN,
      ${(e.student as InsertStudentWithIndividualAddress).guardianLastName !== undefined}::BOOLEAN,
      ${(e.student as InsertStudentWithIndividualAddress).guardianPhone !== undefined}::BOOLEAN,
      ${(e.student as InsertStudentWithIndividualAddress).guardianEmail !== undefined}::BOOLEAN,
      ${e.student.objectiveScore !== undefined}::BOOLEAN,
      ${e.student.subjectiveScore !== undefined}::BOOLEAN,
      ${e.student.teamId !== undefined}::BOOLEAN,
      ${e.student.type !== undefined}::BOOLEAN,
      ${(e.student as InsertStudentWithSchoolId).schoolId !== undefined}::BOOLEAN
    )`)
    const result = await prisma.$queryRaw<Student[]>`
      UPDATE "students" as s
      SET
        "external_student_id" = CASE WHEN v."update_external_student_id" THEN v."external_student_id" ELSE s."external_student_id" END,
        "division" = CASE WHEN v."update_division" THEN v."division" ELSE s."division" END,
        "gpa" = CASE WHEN v."update_gpa" THEN v."gpa" ELSE s."gpa" END,
        "first_name" = CASE WHEN v."update_first_name" THEN v."first_name" ELSE s."first_name" END,
        "last_name" = CASE WHEN v."update_last_name" THEN v."last_name" ELSE s."last_name" END,
        "usad_pin" = CASE WHEN v."update_usad_pin" THEN v."usad_pin" ELSE s."usad_pin" END,
        "signature" = CASE WHEN v."update_signature" THEN v."signature" ELSE s."signature" END,
        "attachment_on_registering" = CASE WHEN v."update_attachment_on_registering" THEN v."attachment_on_registering" ELSE s."attachment_on_registering" END,
        "street_address" = CASE WHEN v."update_street_address" THEN v."street_address" ELSE s."street_address" END,
        "city" = CASE WHEN v."update_city" THEN v."city" ELSE s."city" END,
        "state" = CASE WHEN v."update_state" THEN v."state" ELSE s."state" END,
        "zip_code" = CASE WHEN v."update_zip_code" THEN v."zip_code" ELSE s."zip_code" END,
        "guardian_first_name" = CASE WHEN v."update_guardian_first_name" THEN v."guardian_first_name" ELSE s."guardian_first_name" END,
        "guardian_last_name" = CASE WHEN v."update_guardian_last_name" THEN v."guardian_last_name" ELSE s."guardian_last_name" END,
        "guardian_phone" = CASE WHEN v."update_guardian_phone" THEN v."guardian_phone" ELSE s."guardian_phone" END,
        "guardian_email" = CASE WHEN v."update_guardian_email" THEN v."guardian_email" ELSE s."guardian_email" END,
        "mutation_index" = v."mutation_index",
        "objective_score" = CASE WHEN v."update_objective_score" THEN v."objective_score" ELSE s."objective_score" END,
        "subjective_score" = CASE WHEN v."update_subjective_score" THEN v."subjective_score" ELSE s."subjective_score" END,
        "team_id" = CASE WHEN v."update_team_id" THEN v."team_id" ELSE s."team_id" END,
        "type" = CASE WHEN v."update_type" THEN v."type" ELSE s."type" END,
        "school_id" = CASE WHEN v."update_school_id" THEN v."school_id" ELSE s."school_id" END
      FROM (VALUES ${Prisma.join(valueRows)}) AS v(
        id,
        external_student_id,
        division,
        gpa,
        first_name,
        last_name,
        usad_pin,
        signature,
        attachment_on_registering,
        street_address,
        city,
        state,
        zip_code,
        guardian_first_name,
        guardian_last_name,
        guardian_phone,
        guardian_email,
        objective_score,
        subjective_score,
        team_id,
        type,
        school_id,
        mutation_index,
        update_external_student_id,
        update_division,
        update_gpa,
        update_first_name,
        update_last_name,
        update_usad_pin,
        update_signature,
        update_attachment_on_registering,
        update_street_address,
        update_city,
        update_state,
        update_zip_code,
        update_guardian_first_name,
        update_guardian_last_name,
        update_guardian_phone,
        update_guardian_email,
        update_objective_score,
        update_subjective_score,
        update_team_id,
        update_type,
        update_school_id
      )
      WHERE s.id = v.id
      RETURNING 
        s.id,
        s."external_student_id" AS "externalStudentId",
        s."division"
        s."gpa"
        s."first_name" AS "firstName",
        s."last_name" AS "lastName",
        s."usad_pin" AS "usadPin",
        s."signature",
        s."attachment_on_registering" AS "attachmentOnRegistering",
        s."street_address" AS "streetAddress",
        s."city",
        s."state",
        s."zip_code" AS "zipCode",
        s."guardian_first_name" AS "guardianFirstName",
        s."guardian_last_name" AS "guardianLastName",
        s."guardian_phone" AS "guardianPhone",
        s."guardian_email" AS "guardianEmail",
        s."mutation_index" AS "mutationIndex",
        s."objective_score" AS "objectiveScore",
        s."subjective_score" AS "subjectiveScore",
        s."team_id" AS "teamId",
        s."type" AS "type",
        s."school_id" AS "schoolId",
        s."competition_id" AS "competitionId"
      ;
      `
    return c.json({ success: true, students: result, count: result.length }, 200);
  }
);

students.route("/:id", id);

export { students };
