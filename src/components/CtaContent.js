import React, { useState } from 'react';

const CtaContent = ({ setCtaText }) => {
  const [message, setMessage] = useState('');

  const handleChange = (event) => {
    setMessage(event.target.value);
    setCtaText(event.target.value);
  };

  return (
    <div>
      <h2>CTA : {message}</h2>
      <input
        type="text"
        id="message"
        name="message"
        placeholder="Contact us"
        onChange={handleChange}
        value={message}
      />
    </div>
  );
};

export default CtaContent;

