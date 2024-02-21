const express = require('express');
const webScraper = require('../../webScraper/webScraper');
const router = express.Router();

router.post('/scrape', async (req, res) => {
  try {
    const sitemap = req.body.sitemap;
    const data = await webScraper.crawlUrls(sitemap);
    const textNodes = webScraper.extractTextNodes(data);
    const csvData = webScraper.exportCsv(textNodes);
    res.status(200).json(csvData);
  } catch (error) {
    res.status(500).json({ error: error.toString() });
  }
});

router.post('/compare', async (req, res) => {
  try {
    const figmaCsv = req.body.figmaCsv;
    const sitemapCsv = req.body.sitemapCsv;
    const differences = webScraper.compareCsvs(figmaCsv, sitemapCsv);
    res.status(200).json(differences);
  } catch (error) {
    res.status(500).json({ error: error.toString() });
  }
});

module.exports = router;