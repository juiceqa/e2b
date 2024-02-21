```typescript
import { createFigma } from 'create-figma-plugin'
import { fetchAPI } from './utils/fetchAPI'
import { extractTextNodes, extractURLs } from './webScraper'
import { compareData } from './compareData'
import { writeCSV } from './utils/csvWriter'

createFigma(
  {
    async 'SUBMIT_CLICKED'() {
      const sitemapURL = figma.currentPage.selection[0].characters
      const urls = await extractURLs(sitemapURL)
      const textNodes = await Promise.all(urls.map(url => fetchAPI(url).then(extractTextNodes)))
      const csvData = textNodes.flat()
      writeCSV('sitemap.csv', csvData)
    },
    async 'COMPARE_CLICKED'() {
      const figmaTextNodes = extractTextNodes(figma.root)
      const sitemapTextNodes = await fetchAPI('sitemap.csv').then(res => res.json())
      const comparisonData = compareData(figmaTextNodes, sitemapTextNodes)
      writeCSV('comparison.csv', comparisonData)
    }
  },
  {
    components: {
      'submit-button': () => import('./components/SubmitButton'),
      'compare-button': () => import('./components/CompareButton'),
      'text-input': () => import('./components/TextInput'),
      'csv-export': () => import('./components/CSVExport')
    }
  }
)
```