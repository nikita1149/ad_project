// import { SketchPicker } from "react-color";
// import { useState } from "react";

// const ColorPicker =()=> {
    
//   const [sketchPickerColor, setSketchPickerColor] = useState({
//     r: "241",
//     g: "112",
//     b: "19",
//     a: "1",
//   });
//   // destructuring rgba from state
//   const { r, g, b, a } = sketchPickerColor;

//   //creating state to store our color and also set color using onChange event for block picker
 

//   return (
//     <div
//       className="App"
//       style={{ display: "flex", justifyContent: "space-around" }}
//     >
//       <div className="sketchpicker">
//         <h6>Sketch Picker</h6>
//         {/* Div to display the color  */}
//         <div
//           style={{
//             backgroundColor: `rgba(${r},${g},${b},${a})`,
//             width: 100,
//             height: 50,
//             border: "2px solid white",
//           }}
//         ></div>
//         {/* Sketch Picker from react-color and handling color on onChange event */}
//         <SketchPicker
//           onChange={(color) => {
//             setSketchPickerColor(color.rgb);
//           }}
//           color={sketchPickerColor}
//         />
//       </div>
      
//     </div>
//   );
// };
 
// export default ColorPicker;
import React, { useState } from 'react';
import { SketchPicker } from 'react-color';

const ColorPicker = ({ setBackground }) => {
  const [sketchPickerColor, setSketchPickerColor] = useState({
    r: '3',
    g: '105',
    b: '161',
    a: '1',
  });

  const handleColorChange = (color) => {
    setSketchPickerColor(color.rgb);
    setBackground(`rgba(${color.rgb.r}, ${color.rgb.g}, ${color.rgb.b}, ${color.rgb.a})`);
  };

  return (
    <div className="App" style={{ display: 'flex', justifyContent: 'space-around' }}>
      <div className="sketchpicker">
        <h6>Sketch Picker</h6>
        <div
          style={{
            backgroundColor: `rgba(${sketchPickerColor.r},${sketchPickerColor.g},${sketchPickerColor.b},${sketchPickerColor.a})`,
            width: 100,
            height: 50,
            border: '2px solid white',
          }}
        ></div>
        <SketchPicker onChange={handleColorChange} color={sketchPickerColor} />
      </div>
    </div>
  );
};

export default ColorPicker;

