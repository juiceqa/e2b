import { createObjectCsvWriter as createCsvWriter } from 'csv-writer';

export const writeCSV = async (data: any[], path: string) => {
  const header = [
    { id: 'parentComponentHierarchy', title: 'Parent Component Hierarchy' },
    { id: 'label', title: 'Label' },
    { id: 'text', title: 'Text' },
    { id: 'fontFamily', title: 'Font Family' },
    { id: 'fontStyle', title: 'Font Style' },
    { id: 'fontSize', title: 'Font Size' },
    { id: 'differences', title: 'Differences' },
  ];

  const csvWriter = createCsvWriter({
    path,
    header,
  });

  return csvWriter.writeRecords(data);
};