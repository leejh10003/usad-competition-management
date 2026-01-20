
import Papa from 'papaparse';
import type { ZodObject, ZodType } from 'zod';
import z from 'zod';
//eslint-disable-next-line @typescript-eslint/no-explicit-any
export function downloadCSV(input: any[]){
    const csv = Papa.unparse(input)
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const csvURL = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = csvURL;
    link.setAttribute('download', `competitions_${new Date().toISOString()}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(csvURL);
}
export async function uploadCSV<T extends ZodObject>(file: File, schema: T) : Promise<z.infer<T>[]> {
    let parsed: z.infer<T>[] = await new Promise((resolve, reject) => {
        Papa.parse<T>(file, {
            header: true,
            complete: function (results) {
                const validadation = z.array(schema).safeParse(results.data);
                if (!validadation.success) {
                    resolve(validadation.data!);
                    return;
                } else {
                    reject(validadation.error);
                }
            },
            error: function (error) {
                reject(error);
            }
        })
    });
    return parsed;
}