import { OpenAPIHono } from "@hono/zod-openapi";
import {
  teamSelectFieldsSchema,
  teamsListRequestQuerySchema,
  teamsListResponseSchema,
} from "../../schema";
const teams = new OpenAPIHono();
teams.openapi(
  {
    path: "",
    method: "get",
    description: "Get Teams Information list",
    summary: "Get Teams",
    request: {
      query: teamsListRequestQuerySchema,
    },
    responses: {
      200: {
        description: "Successful Response",
        content: {
          "application/json": {
            schema: teamsListResponseSchema,
          },
        },
      },
    },
  },
  async (c) => {
    const prisma = c.get("prisma");
    const { offset, limit, id, externalTeamId } = c.req.valid("query");
    const result = await prisma.team.findMany({
      select: teamSelectFieldsSchema,
      where: {
        id: id
          ? {
              equals: id,
            }
          : undefined,
        externalTeamId: externalTeamId
          ? {
              contains: externalTeamId,
            }
          : undefined,
      },
      skip: offset,
      take: limit,
    });
    return c.json({ success: true, data: result });
  }
);
/*api.post('/check-ins', (c) => {
  // body에는 { "qrData": "...", "eventType": "speech" } 같은 정보가 담길 것
  return c.json({ message: 'Student checked in' });
});



// --- 📁 대량 작업 (Bulk Operations) 관련 엔드포인트 ---
const bulk = api.basePath('/import');
// [생성/수정] 학생 정보 CSV 파일로 대량 업로드
bulk.post('/students', (c) => {
  return c.json({ message: 'Bulk import for students received' });
});
// [생성/수정] 코치 정보 CSV 파일로 대량 업로드
bulk.post('/coaches', (c) => {
  return c.json({ message: 'Bulk import for coaches received' });
});*/
export { teams };
