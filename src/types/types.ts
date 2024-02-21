```typescript
export interface TextNode {
  id: string;
  label: string;
  text: string;
  corrections: string;
  parentComponent: string;
}

export interface CSVData {
  parentComponentHierarchy: string;
  label: string;
  text: string;
  fontFamily: string;
  fontStyle: string;
  fontSize: string;
  differences?: string;
}
```