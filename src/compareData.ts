```typescript
import { TextNode, CSVData } from './types';
import { regex } from './utils/regex';

export function compareData(figmaCSV: CSVData[], sitemapCSV: CSVData[]): CSVData[] {
  const differences: CSVData[] = [];

  figmaCSV.forEach((figmaRow) => {
    const matchedSitemapRow = sitemapCSV.find((sitemapRow) =>
      regex(figmaRow.parentComponentHierarchy, sitemapRow.parentComponentHierarchy)
    );

    if (matchedSitemapRow) {
      const difference: CSVData = {
        parentComponentHierarchy: figmaRow.parentComponentHierarchy,
        label: figmaRow.label,
        text: figmaRow.text,
        fontFamily: figmaRow.fontFamily,
        fontStyle: figmaRow.fontStyle,
        fontSize: figmaRow.fontSize,
        differences: [],
      };

      if (figmaRow.text !== matchedSitemapRow.text) {
        difference.differences.push(`Text: ${figmaRow.text} -> ${matchedSitemapRow.text}`);
      }

      if (figmaRow.fontFamily !== matchedSitemapRow.fontFamily) {
        difference.differences.push(`Font Family: ${figmaRow.fontFamily} -> ${matchedSitemapRow.fontFamily}`);
      }

      if (figmaRow.fontStyle !== matchedSitemapRow.fontStyle) {
        difference.differences.push(`Font Style: ${figmaRow.fontStyle} -> ${matchedSitemapRow.fontStyle}`);
      }

      if (figmaRow.fontSize !== matchedSitemapRow.fontSize) {
        difference.differences.push(`Font Size: ${figmaRow.fontSize} -> ${matchedSitemapRow.fontSize}`);
      }

      if (difference.differences.length === 0) {
        difference.differences.push('Match');
      }

      differences.push(difference);
    }
  });

  return differences;
}
```