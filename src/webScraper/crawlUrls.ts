import fetch from 'node-fetch';
import { JSDOM } from 'jsdom';

async function crawlUrls(urls: string[]): Promise<JSDOM[]> {
    const doms: JSDOM[] = [];

    for (const url of urls) {
        try {
            const response = await fetch(url);
            const html = await response.text();
            const dom = new JSDOM(html);
            doms.push(dom);
        } catch (error) {
            console.error(`Failed to fetch and parse URL: ${url}`, error);
        }
    }

    return doms;
}

export default crawlUrls;