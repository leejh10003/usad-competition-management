import { studentListInsertResponseSchema, studentListInsertSchema, studentQuerySchema, testError, testResponse } from '../../schema';
// --- 🧑‍🎓 학생 (Students) 관련 엔드포인트 ---
import { OpenAPIHono } from '@hono/zod-openapi';
import { id } from './:id';
const students = new OpenAPIHono();
students.openapi({
  method: 'get',
  path: '',
  summary: 'Retrieve a list of students with pagination',
  description: 'Fetches a paginated list of students from the database.',
  request: {
    query: studentQuerySchema
  },
  responses: {
    200: {
      content: {
        'application/json': {
          schema: testResponse,
        },
      },
      description: 'Retrieve the user',
    },
    500: {
      content: {
        'application/json': {
          schema: testError,
        },
      },
      description: 'Describe the reason',
    }
  }
}, async (c) => {
  try {
    const { offset, limit, firstName, lastName, division } = c.req.valid('query');
    console.log(`Fetching students with offset ${offset} and limit ${limit}`);
    const prisma = c.get('prisma');
    const result = await prisma.student.findMany({
      take: limit,
      skip: offset,
      where: {
        firstName: {
          contains: firstName
        },
        lastName: {
          contains: lastName
        },
        division: {
          in: division.length > 0 ? division : undefined
        }
      },
      select: {
        id: true,
        externalStudentId: true,
        division: true,
        gpa: true,
        firstName: true,
        lastName: true,
        usadPin: false,
        teamId: false,
        schoolId: false,
      }
    });
    return c.json({ success: true, data: result }, 200);
  } catch (e) {
    if (e instanceof Error) {
      console.error(e.stack, '\n', e.message);
    } else {
      console.error('no stack trace \n', e);
    }
    return c.json({ success: false, message: JSON.stringify(e) }, 500);
  }
});

// [생성] 새로운 학생 생성
students.openapi({
  method: 'post',
  path: '',
  summary: 'Create a new student',
  description: 'Creates a new student record in the database.',
  request: {
    body: {
      content: {
        'application/json': {
          schema: studentListInsertSchema,
        }
      }
    }
  },
  responses: {
    200: {
      'application/json': {
        schema: studentListInsertResponseSchema,
      },
      description: 'Student created successfully',
    }
  }
}, async (c) => {
  const prisma = c.get('prisma');
  const { students } = c.req.valid('json');
  const result = await prisma.student.createManyAndReturn({
    data: students,
    skipDuplicates: true,
    select: { id: true }
  });
  return c.json({ success: true, students: result }, 200);
});

students.route('/:id', id);

export { students };