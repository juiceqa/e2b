```typescript
import * as Nodehun from 'nodehun';
import * as fs from 'fs';

const affix = fs.readFileSync('path/to/.aff');
const dictionary = fs.readFileSync('path/to/.dic');

const nodehun = new Nodehun(affix, dictionary);

export const spellCheck = async (text: string) => {
  try {
    const isCorrect = await nodehun.spell(text);
    if (!isCorrect) {
      const suggestions = await nodehun.suggest(text);
      return { isCorrect, suggestions };
    }
    return { isCorrect, suggestions: [] };
  } catch (error) {
    console.error(error);
    return { isCorrect: false, suggestions: [] };
  }
};
```