const express = require('express');
const router = express.Router();

const figmaController = require('./controllers/figmaController');
const webScraperController = require('./controllers/webScraperController');

// Route to handle Figma file extraction
router.post('/extractFigma', figmaController.extractFigma);

// Route to handle sitemap URL extraction
router.post('/extractUrls', webScraperController.extractUrls);

// Route to handle crawling URLs and extracting text nodes
router.post('/crawlUrls', webScraperController.crawlUrls);

// Route to handle exporting CSV
router.post('/exportCsv', webScraperController.exportCsv);

// Route to handle comparing CSVs
router.post('/compareCsvs', webScraperController.compareCsvs);

module.exports = router;