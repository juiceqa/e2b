```typescript
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { SubmitButton } from './components/SubmitButton';
import { CompareButton } from './components/CompareButton';
import { TextInput } from './components/TextInput';
import { CSVExport } from './components/CSVExport';
import { figmaPlugin } from './figmaPlugin';
import { webScraper } from './webScraper';
import { compareData } from './compareData';

ReactDOM.render(
  <React.StrictMode>
    <TextInput />
    <SubmitButton onClick={webScraper.crawlURLs} />
    <CompareButton onClick={compareData.compareTextNodes} />
    <CSVExport />
  </React.StrictMode>,
  document.getElementById('root')
);

figmaPlugin.on('SUBMIT_CLICKED', webScraper.extractTextNodes);
figmaPlugin.on('COMPARE_CLICKED', compareData.compareTextNodes);
```