import { z } from "@hono/zod-openapi";
import { eventsInsertSchema } from 'usad-scheme';
import { TransactionSessionType } from ".";

type EventInsertItem = z.infer<typeof eventsInsertSchema>['events'][number];

export async function insertEvents(tx: TransactionSessionType, events: EventInsertItem[]) {
    return (await tx.event.createManyAndReturn({
        data: events.map((e, i) => ({
            ...e,
            mutationIndex: i
        }))
    })).sort((a, b) => a.mutationIndex - b.mutationIndex);
}