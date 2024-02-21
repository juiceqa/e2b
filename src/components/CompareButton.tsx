```tsx
import React from 'react';
import { emit } from '@create-figma-plugin/utilities';

const CompareButton = () => {
  const handleClick = () => {
    emit('COMPARE_CLICKED');
  };

  return (
    <button id="compare-button" onClick={handleClick}>
      Compare
    </button>
  );
};

export default CompareButton;
```