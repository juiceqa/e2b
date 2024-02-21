const express = require('express');
const router = express.Router();
const figmaPlugin = require('../../figmaPlugin/figmaPlugin');

router.post('/extract', async (req, res) => {
    try {
        const { figmaFileId } = req.body;
        const textNodes = await figmaPlugin.extractTextNodes(figmaFileId);
        res.status(200).json(textNodes);
    } catch (error) {
        res.status(500).json({ error: error.toString() });
    }
});

router.post('/export', async (req, res) => {
    try {
        const { textNodes } = req.body;
        const csvData = await figmaPlugin.exportCsv(textNodes);
        res.status(200).json(csvData);
    } catch (error) {
        res.status(500).json({ error: error.toString() });
    }
});

router.post('/compare', async (req, res) => {
    try {
        const { figmaCsv, sitemapCsv } = req.body;
        const comparisonResult = await figmaPlugin.compareCsvs(figmaCsv, sitemapCsv);
        res.status(200).json(comparisonResult);
    } catch (error) {
        res.status(500).json({ error: error.toString() });
    }
});

module.exports = router;