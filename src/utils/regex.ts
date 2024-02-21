```typescript
export function matchWords(text1: string, text2: string): number {
    const words1 = text1.split(/\s+/);
    const words2 = text2.split(/\s+/);
    const wordSet = new Set([...words1, ...words2]);
    let matchCount = 0;

    wordSet.forEach(word => {
        if (words1.includes(word) && words2.includes(word)) {
            matchCount++;
        }
    });

    return matchCount;
}

export function compareValues(value1: string, value2: string): string {
    return value1 === value2 ? "Match" : "Differences";
}
```