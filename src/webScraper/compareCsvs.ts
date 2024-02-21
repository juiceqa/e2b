import { TextNode, CSVData } from '../types/types';
import * as fs from 'fs';
import * as csv from 'csv-parser';

export function compareCsvs(figmaCsvPath: string, sitemapCsvPath: string): void {
  const figmaData: CSVData[] = [];
  const sitemapData: CSVData[] = [];
  const differences: string[] = [];

  fs.createReadStream(figmaCsvPath)
    .pipe(csv())
    .on('data', (row: CSVData) => {
      figmaData.push(row);
    })
    .on('end', () => {
      fs.createReadStream(sitemapCsvPath)
        .pipe(csv())
        .on('data', (row: CSVData) => {
          sitemapData.push(row);
        })
        .on('end', () => {
          figmaData.forEach((figmaRow) => {
            const matchingSitemapRow = sitemapData.find(
              (sitemapRow) =>
                sitemapRow.parentComponentHierarchy === figmaRow.parentComponentHierarchy
            );

            if (matchingSitemapRow) {
              const difference = compareRows(figmaRow, matchingSitemapRow);
              differences.push(difference);
            }
          });

          fs.writeFileSync('differences.csv', differences.join('\n'));
        });
    });
}

function compareRows(figmaRow: CSVData, sitemapRow: CSVData): string {
  let difference = '';

  if (figmaRow.text !== sitemapRow.text) {
    difference += `Text: Figma - ${figmaRow.text}, Sitemap - ${sitemapRow.text}\n`;
  }

  if (figmaRow.fontFamily !== sitemapRow.fontFamily) {
    difference += `Font Family: Figma - ${figmaRow.fontFamily}, Sitemap - ${sitemapRow.fontFamily}\n`;
  }

  if (figmaRow.fontStyle !== sitemapRow.fontStyle) {
    difference += `Font Style: Figma - ${figmaRow.fontStyle}, Sitemap - ${sitemapRow.fontStyle}\n`;
  }

  if (figmaRow.fontSize !== sitemapRow.fontSize) {
    difference += `Font Size: Figma - ${figmaRow.fontSize}, Sitemap - ${sitemapRow.fontSize}\n`;
  }

  return difference === '' ? 'Match' : difference;
}