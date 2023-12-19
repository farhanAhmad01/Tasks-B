


import React, { useState } from 'react';

const ColorChangingBox = () => {
  const [boxColor, setBoxColor] = useState('lightgray');

  const handleBoxClick = () => {
    // Toggle between blue and the default color on click
    setBoxColor((prevColor) => (prevColor === 'blue' ? 'lightgray' : 'blue'));
  };

  return (
    <div
      style={{
        width: '100px',
        height: '100px',
        backgroundColor: boxColor,
        margin: '20px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
        border: '1px solid #000',
      }}
      onClick={handleBoxClick}
    >
      Click me to change color
    </div>
  );
};

export default ColorChangingBox;
