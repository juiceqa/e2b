```typescript
import { JSDOM } from 'jsdom';
import { fetchData } from './utils/fetchAPI';

export interface TextNode {
  parentComponentHierarchy: string;
  label: string;
  text: string;
  fontFamily: string;
  fontStyle: string;
  fontSize: string;
}

export async function webScraper(url: string): Promise<TextNode[]> {
  const response = await fetchData(url);
  const dom = new JSDOM(response);
  const { document } = dom.window;

  const textNodes: TextNode[] = [];

  function traverseNodes(node: ChildNode, hierarchy: string[] = []) {
    if (node.nodeType === Node.TEXT_NODE && node.textContent?.trim()) {
      const parent = node.parentNode as HTMLElement;
      textNodes.push({
        parentComponentHierarchy: [...hierarchy, document.title].reverse().join(' > '),
        label: parent.tagName || parent.className,
        text: node.textContent.trim(),
        fontFamily: window.getComputedStyle(parent).fontFamily,
        fontStyle: window.getComputedStyle(parent).fontStyle,
        fontSize: window.getComputedStyle(parent).fontSize,
      });
    } else {
      const newHierarchy = node.nodeName === 'BODY' ? [] : [...hierarchy, node.nodeName];
      node.childNodes.forEach((child) => traverseNodes(child, newHierarchy));
    }
  }

  traverseNodes(document.body);
  return textNodes;
}
```