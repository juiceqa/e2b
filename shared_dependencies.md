Shared Dependencies:

1. **Exported Variables**: 
   - `figmaPlugin`: The main Figma plugin instance.
   - `webScraper`: The main web scraping tool.
   - `compareData`: Function to compare data from Figma and sitemap CSVs.
   - `regex`: Regular expression utility for text matching.
   - `csvWriter`: Utility for writing CSV files.
   - `fetchAPI`: Utility for making fetch API calls.
   - `nodehun`: Utility for spell checking and language processing.

2. **Data Schemas**: 
   - `TextNode`: Schema for text nodes extracted from Figma and web pages.
   - `CSVData`: Schema for data to be written into CSV files.

3. **DOM Element IDs**: 
   - `submit-button`: ID for the Submit button.
   - `compare-button`: ID for the Compare button.
   - `text-input`: ID for the text input field for sitemap URL.
   - `csv-export`: ID for the CSV export component.

4. **Message Names**: 
   - `SUBMIT_CLICKED`: Message name for when the Submit button is clicked.
   - `COMPARE_CLICKED`: Message name for when the Compare button is clicked.

5. **Function Names**: 
   - `extractTextNodes`: Function to extract text nodes from Figma and web pages.
   - `extractURLs`: Function to extract URLs from user input.
   - `crawlURLs`: Function to crawl each URL and locate all text nodes.
   - `exportCSV`: Function to export data as CSV.
   - `compareTextNodes`: Function to compare text nodes from Figma and web pages.
   - `writeCSV`: Function to write data into CSV files.
   - `fetchData`: Function to make fetch API calls.
   - `spellCheck`: Function to perform spell checking and language processing.