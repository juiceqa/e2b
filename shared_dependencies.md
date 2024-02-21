Shared Dependencies:

1. **Exported Variables**: 
   - `figmaPlugin`: Exported from `figmaPlugin.ts` and used in `index.ts`.
   - `webScraper`: Exported from `webScraper.ts` and used in `index.ts`.
   - `figmaController`: Exported from `figmaController.js` and used in `routes.js`.
   - `webScraperController`: Exported from `webScraperController.js` and used in `routes.js`.

2. **Data Schemas**: 
   - `TextNode`: Defined in `types.ts` and used in `figmaPlugin.ts`, `webScraper.ts`, `extractTextNodes.ts`, and `compareCsvs.ts`.
   - `CSVData`: Defined in `types.ts` and used in `exportCsv.ts` and `compareCsvs.ts`.

3. **ID Names of DOM Elements**: 
   - `submit-button`: Used in `figmaPluginUI.tsx` and `figmaPlugin.ts`.
   - `compare-button`: Used in `figmaPluginUI.tsx` and `figmaPlugin.ts`.
   - `sitemap-input`: Used in `figmaPluginUI.tsx` and `figmaPlugin.ts`.

4. **Message Names**: 
   - `SUBMIT_CLICKED`: Used in `figmaPlugin.ts` and `figmaPluginUI.tsx`.
   - `COMPARE_CLICKED`: Used in `figmaPlugin.ts` and `figmaPluginUI.tsx`.

5. **Function Names**: 
   - `crawlUrls`: Defined in `crawlUrls.ts` and used in `webScraper.ts`.
   - `extractTextNodes`: Defined in `extractTextNodes.ts` and used in `webScraper.ts`.
   - `exportCsv`: Defined in `exportCsv.ts` and used in `webScraper.ts` and `figmaPlugin.ts`.
   - `compareCsvs`: Defined in `compareCsvs.ts` and used in `figmaPlugin.ts`.