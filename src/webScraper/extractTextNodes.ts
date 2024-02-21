import { JSDOM } from 'jsdom';
import { TextNode } from '../types/types';

export async function extractTextNodes(url: string): Promise<TextNode[]> {
    const response = await fetch(url);
    const html = await response.text();
    const dom = new JSDOM(html);
    const document = dom.window.document;
    const textNodes: TextNode[] = [];

    function traverseNodes(node: Node) {
        if (node.nodeType === Node.TEXT_NODE) {
            const parentElement = node.parentElement;
            if (parentElement) {
                const computedStyle = dom.window.getComputedStyle(parentElement);
                textNodes.push({
                    parentComponentHierarchy: getParentHierarchy(parentElement),
                    label: parentElement.tagName.toLowerCase() || parentElement.getAttribute('class'),
                    text: node.textContent || '',
                    fontFamily: computedStyle.fontFamily,
                    fontStyle: computedStyle.fontStyle,
                    fontSize: computedStyle.fontSize,
                });
            }
        } else {
            for (let i = 0; i < node.childNodes.length; i++) {
                traverseNodes(node.childNodes[i]);
            }
        }
    }

    function getParentHierarchy(element: Element): string[] {
        const hierarchy: string[] = [];
        let currentElement: Element | null = element;
        while (currentElement) {
            hierarchy.unshift(currentElement.tagName.toLowerCase());
            currentElement = currentElement.parentElement;
        }
        return hierarchy;
    }

    traverseNodes(document.body);
    return textNodes;
}