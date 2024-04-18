
import React, { useState } from 'react';

const InputContent = ({ setCaptionText }) => {
  const [message, setMessage] = useState('');

  const handleChange = (event) => {
    const inputValue = event.target.value;
    setMessage(inputValue);
    setCaptionText(inputValue);
  };

  return (
    <div>
      <h2>Ad Content: {message}</h2>
      <input
        type="text"
        id="message"
        name="message"
        onChange={handleChange}
        value={message}
      />
    </div>
  );
};

export default InputContent;

