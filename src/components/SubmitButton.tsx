```tsx
import React from 'react';

interface SubmitButtonProps {
    onSubmit: () => void;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ onSubmit }) => {
    return (
        <button id="submit-button" onClick={onSubmit}>
            Submit
        </button>
    );
};

export default SubmitButton;
```