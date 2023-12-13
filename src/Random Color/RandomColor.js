// import React, { useState } from 'react';

// const RandomColorGenerator = () => {
//   const [colors, setColors] = useState([]);

//   const generateRandomColor = () => {
//     return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
//   };

//   const handleGenerateColors = () => {
//     const generatedColors = [];
//     for (let i = 0; i < 30; i++) {
//       generatedColors.push(generateRandomColor());
//     }
//     setColors(generatedColors);
//   };

//   return (
//     <div>
//       <h1>Random Color Generator</h1>
//       <button onClick={handleGenerateColors}>Generate Colors</button>

//       <div style={{ display: 'flex', flexWrap: 'wrap', marginTop: '20px' }}>
//         {colors.map((color, index) => (
//           <div
//             key={index}
//             style={{
//               backgroundColor: color,
//               width: '50px',
//               height: '50px',
//               margin: '5px',
//             }}
//           ></div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default RandomColorGenerator;


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
