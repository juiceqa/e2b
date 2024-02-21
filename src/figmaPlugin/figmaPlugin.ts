import { emit, on } from '@create-figma-plugin/utilities'
import { exportCsv } from './figmaPluginUtilities'
import { TextNode } from '../types/types'

let sitemapUrls: string[] = []

on('SUBMIT_CLICKED', async () => {
  const textNodes: TextNode[] = []
  const nodes = figma.currentPage.findAll(node => node.type === 'TEXT')

  for (const node of nodes) {
    const textNode: TextNode = {
      id: node.id,
      label: node.name,
      text: node.characters,
      corrections: '',
      parentComponent: node.parent.name
    }
    textNodes.push(textNode)
  }

  const csvData = textNodes.map(node => ({
    ID: node.id,
    Label: node.label,
    Text: node.text,
    Corrections: node.corrections,
    'Parent Component': node.parentComponent
  }))

  await exportCsv('figma.csv', csvData)
})

on('COMPARE_CLICKED', async () => {
  const differences = await fetch('/compare', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ figmaCsv: 'figma.csv', sitemapCsv: 'sitemap.csv' })
  })

  if (differences.ok) {
    const data = await differences.json()
    emit('SHOW_DIFFERENCES', data)
  } else {
    console.error('Error comparing CSVs')
  }
})

figma.ui.onmessage = message => {
  if (message.type === 'sitemap-input') {
    sitemapUrls = message.urls
  }
}