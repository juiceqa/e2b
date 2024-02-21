import { createObjectCsvWriter as createCsvWriter } from 'csv-writer';
import { CSVData } from '../types/types';

export async function exportCsv(data: CSVData[], filename: string): Promise<void> {
    const csvWriter = createCsvWriter({
        path: `./output/${filename}.csv`,
        header: [
            { id: 'parentComponentHierarchy', title: 'Parent Component Hierarchy' },
            { id: 'label', title: 'Label' },
            { id: 'text', title: 'Text' },
            { id: 'fontFamily', title: 'Font Family' },
            { id: 'fontStyle', title: 'Font Style' },
            { id: 'fontSize', title: 'Font Size' },
        ],
    });

    await csvWriter.writeRecords(data);
}