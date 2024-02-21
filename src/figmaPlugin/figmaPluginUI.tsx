```tsx
import { emit, on } from '@create-figma-plugin/utilities'
import { Button, TextInput, VerticalSpace } from '@create-figma-plugin/ui'
import * as React from 'react'

export function FigmaPluginUI() {
  const [sitemap, setSitemap] = React.useState('')

  const handleSitemapChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSitemap(event.target.value)
  }

  const handleSubmit = () => {
    emit('SUBMIT_CLICKED', { sitemap })
  }

  const handleCompare = () => {
    emit('COMPARE_CLICKED')
  }

  return (
    <div>
      <TextInput
        id="sitemap-input"
        value={sitemap}
        onChange={handleSitemapChange}
        placeholder="Enter sitemap"
      />
      <VerticalSpace space="extraLarge" />
      <Button id="submit-button" fullWidth onClick={handleSubmit}>
        Submit
      </Button>
      <VerticalSpace space="extraLarge" />
      <Button id="compare-button" fullWidth onClick={handleCompare}>
        Compare
      </Button>
    </div>
  )
}

on('SUBMIT_CLICKED', (data) => {
  console.log('Submit clicked with data:', data)
})

on('COMPARE_CLICKED', () => {
  console.log('Compare clicked')
})
```