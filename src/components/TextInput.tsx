```tsx
import React, { useState } from 'react';

const TextInput = ({ onURLSubmit }) => {
  const [url, setUrl] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onURLSubmit(url);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="sitemap-url">Sitemap URL:</label>
      <input
        type="text"
        id="text-input"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default TextInput;
```