import fetch from 'node-fetch';
import { crawlUrls } from './crawlUrls';
import { extractTextNodes } from './extractTextNodes';
import { exportCsv } from './exportCsv';

export class WebScraper {
  private urls: string[];
  private textNodes: any[];

  constructor() {
    this.urls = [];
    this.textNodes = [];
  }

  async scrape(sitemap: string) {
    this.urls = await this.extractUrls(sitemap);
    for (const url of this.urls) {
      const html = await this.fetchHtml(url);
      const textNodes = extractTextNodes(html);
      this.textNodes.push(...textNodes);
    }
    return this.textNodes;
  }

  async fetchHtml(url: string) {
    const response = await fetch(url);
    const html = await response.text();
    return html;
  }

  async extractUrls(sitemap: string) {
    const sitemapXml = await this.fetchHtml(sitemap);
    const urls = crawlUrls(sitemapXml);
    return urls;
  }

  async exportData(filename: string) {
    await exportCsv(this.textNodes, filename);
  }
}