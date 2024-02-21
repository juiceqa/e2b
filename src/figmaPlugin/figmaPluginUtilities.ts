```typescript
import { emit, on } from '@create-figma-plugin/utilities'

export function sendMessageToUI(message: string, data: any) {
  emit(message, data);
}

export function listenToUIMessage(message: string, callback: Function) {
  on(message, callback);
}

export function extractTextNodes(node: SceneNode): Array<TextNode> {
  let textNodes: Array<TextNode> = [];
  if ("children" in node) {
    for (const child of node.children) {
      if (child.type === "TEXT") {
        textNodes.push(child);
      } else {
        textNodes = textNodes.concat(extractTextNodes(child));
      }
    }
  }
  return textNodes;
}

export function createCSVData(textNodes: Array<TextNode>): Array<CSVData> {
  return textNodes.map(node => ({
    ID: node.id,
    Label: node.name,
    Text: node.characters,
    Corrections: '',
    'Parent Component': node.parent?.name || ''
  }));
}
```