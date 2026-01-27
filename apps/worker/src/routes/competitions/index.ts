import {
  competitionQuerySchema,
  competitionsFieldsSchema,
  competitionsInsertSchema,
  competitionsResponse,
  competitionsUpdateSchema,
} from "usad-scheme";
import { OpenAPIHono, z } from "@hono/zod-openapi";
import { id } from "./:id";
import { omit } from "lodash";
import {EventCreateManyInputObjectSchema} from 'database/src/generated/schemas/objects/EventCreateManyInput.schema';
import {CompetitionAvailableStateCreateManyInputObjectSchema} from 'database/src/generated/schemas/objects/CompetitionAvailableStateCreateManyInput.schema';
//import {SchoolCreateManyInputObjectSchema} from 'database/src/generated/schemas/objects/SchoolCreateManyInput.schema';
//import {SchoolCreateInputObjectSchema} from 'database/src/generated/schemas/objects/SchoolCreateInput.schema';

const competitions = new OpenAPIHono();

competitions.openapi(
  {
    method: "get",
    path: "",
    request: {
      query: competitionQuerySchema
    },
    responses: {
      200: {
        content: {
          "application/json": {
            schema: competitionsResponse,
          },
        },
        description: "Retrieve competitions list",
      },
    },
  },
  async (c) => {
    const prisma = c.get("prisma");
    const { take, orderBy, where, skip } = c.req.valid('query');
    const result = (await prisma.competition.findMany({
      select: competitionsFieldsSchema,
      take,
      orderBy,
      where,
      skip,
    })) as z.infer<typeof competitionsResponse>['competitions'];
    const count = await prisma.competition.count({
      where,
    });
    return c.json({ success: true, competitions: result, count }, 200); //TODO: Add offset, limit
  }
);

competitions.openapi(
  {
    method: "put",
    path: "",
    request: {
      body: {
        content: {
          "application/json": {
            schema: competitionsUpdateSchema,
          },
        },
      },
    },
    responses: {
      200: {
        content: {
          "application/json": {
            schema: competitionsResponse,
          },
        },
        description: "Update competitions",
      },
    },
  },
  async (c) => {
    const prisma = c.get("prisma");
    const { competitions } = c.req.valid("json");
    const result = await prisma.$transaction((tx) => {
      return Promise.all(
        competitions.map(async ({ id, competition }) => {
          const result = (await tx.competition.update({
            where: { id },
            data: {
              ...omit(competition, 'competitionAvailableStates'),
              ...(competition.competitionAvailableStates ? {competitionAvailableStates: {
                ...(competition.competitionAvailableStates.create ? {create: competition.competitionAvailableStates.create.map((state) => ({
                  state
                })),} : {}),
                ...(competition.competitionAvailableStates.delete ? {delete: competition.competitionAvailableStates.delete.map((state) => ({
                  competitionId_state: {
                    competitionId: id,
                    state,
                  },
                })),} : {}),
              }} : {})
            },
            select: competitionsFieldsSchema,
          }))  as z.infer<typeof competitionsResponse>['competitions'][number];
          return result;
        })
      );
    });
    return c.json(
      { success: true, competitions: result, count: result.length },
      200
    );
  }
);

competitions.openapi(
  {
    method: "post",
    path: "",
    request: {
      body: {
        content: {
          "application/json": {
            schema: competitionsInsertSchema,
          },
        },
      },
    },
    responses: {
      200: {
        content: {
          "application/json": {
            schema: competitionsResponse,
          },
        },
        description: "Insert competitions",
      },
    },
  },
  async (c) => {
    const prisma = c.get("prisma");
    const { competitions } = c.req.valid("json");
    
    const result = await prisma.$transaction(async (tx) => {
      const eventOnly: {[competitionIndex: number]: Omit<z.infer<typeof EventCreateManyInputObjectSchema>, 'competitionId'>[]} = {};
      const statesOnly: {[competitionIndex: number]: Omit<z.infer<typeof CompetitionAvailableStateCreateManyInputObjectSchema>, 'competitionId'>[]} = {};
      const schoolsOnly: {[competitionIndex: number]: z.infer<typeof competitionsInsertSchema>['competitions'][number]['schools']} = {};
      const competitionOnly = competitions.map((competition, i) => {
        const {events, schools, competitionAvailableStates, ...rest} = competition;
        competition.mutationIndex = i;
        eventOnly[competition.mutationIndex] = events;
        statesOnly[competition.mutationIndex] = competitionAvailableStates;
        schoolsOnly[competition.mutationIndex] = schools;
        return rest;
      });
      const result = ((await tx.competition.createManyAndReturn({
        data: competitionOnly,
        select: omit(competitionsFieldsSchema, ['events', 'schools', 'competitionAvailableStates']),
      })).sort((a, b) => a.mutationIndex - b.mutationIndex)) as z.infer<typeof competitionsResponse>['competitions'];
      const events = Object.entries(eventOnly).reduce<z.infer<typeof EventCreateManyInputObjectSchema>[]>((prev, [competitionIndex, event]) => {
        return [...prev, ...event.map((e) => {
          const competitionId = result.find((r) => r.mutationIndex === Number(competitionIndex))!.id;
          return {...e, competitionId};
        })]
      }, []).map((e, i) => ({
        ...e,
        mutationIndex: i
      }));
      const states = Object.entries(statesOnly).reduce<z.infer<typeof CompetitionAvailableStateCreateManyInputObjectSchema>[]>((prev, [competitionIndex, state]) => {
        return [...prev, ...state.map((s) => {
          const competitionId = result.find((r) => r.mutationIndex === Number(competitionIndex))!.id;
          return {...s, competitionId};
        })]
      }, []);
      /*const coachesOnly: {[schoolIndex: number]: }
      const teamsOnly: {[schoolIndex: number]: }
      const schools = Object.entries(schoolsOnly).reduce<z.infer<typeof competitionsInsertSchema>['competitions'][number]['schools']>((prev, [competitionIndex, school]) => {
        return [...prev, ...school.map((s) => {
          const competitionId = result.find((r) => r.mutationIndex === Number(competitionIndex))!.id;
          return {
            ...s,
            competitionId,
          } as z.infer<typeof competitionsInsertSchema>['competitions'][number]['schools'][number];
        })]
      }, []).map((s, i) => {
        const {coaches, teams,...schoolOnlyInformation} = s;
        return {
          ...schoolOnlyInformation,
          mutationIndex: i
        };
      });*/
      await Promise.all([(await tx.event.createManyAndReturn(
        {data: events,
        skipDuplicates: true,}
      )).sort((a, b) => a.mutationIndex - b.mutationIndex), await tx.competitionAvailableState.createManyAndReturn(
        { 
        data: states,
        skipDuplicates: true,}
      )]);
      return result;
    })
    
    //console.log(result);

    return c.json(
      { success: true, competitions: result, count: result.length },
      //{success: true, competitions: [], count: 0},
      200
    );
  }
);

competitions.route("/:id", id);

export { competitions };
