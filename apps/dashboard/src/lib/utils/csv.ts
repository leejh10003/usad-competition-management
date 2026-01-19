
import Papa from 'papaparse';
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