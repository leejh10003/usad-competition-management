import { TransactionSessionType } from ".";
import { Prisma } from "@prisma/client";
import { chunk } from 'es-toolkit';

const MAX_SQL_PARAMETERS = 65535;

export async function updateChunking<T, S>(
  tx: TransactionSessionType,
  {convert, outputParameterCount}: {
    convert: (input: T) => Prisma.Sql;
    outputParameterCount: number;
  },
  mutation: (tx: TransactionSessionType, inputs: Prisma.Sql[],) => Promise<S[]>,
  inputs: T[],
): Promise<S[]> {
    const eachChunkSize = Math.floor(MAX_SQL_PARAMETERS / Math.max(1, outputParameterCount));
    const chunks = chunk<T>(inputs, eachChunkSize);
    let results: S[] = [];
    for (const chunkedInputs of chunks) {
        const chunkedInputsSql = chunkedInputs.map(convert);
        const chunkedResults = await mutation(tx, chunkedInputsSql);
        results = results.concat(chunkedResults);
    }
    return results;
}
