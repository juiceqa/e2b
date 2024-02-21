```tsx
import React from 'react';
import { csvWriter } from '../utils/csvWriter';

interface CSVExportProps {
  data: any[];
}

const CSVExport: React.FC<CSVExportProps> = ({ data }) => {
  const handleExport = async () => {
    try {
      await csvWriter.writeRecords(data);
      alert('CSV file successfully exported');
    } catch (error) {
      console.error('Failed to export CSV:', error);
    }
  };

  return (
    <button id="csv-export" onClick={handleExport}>
      Export CSV
    </button>
  );
};

export default CSVExport;
```