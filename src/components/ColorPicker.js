import React, { useState } from 'react';
import { SketchPicker } from 'react-color';
import './ColorPicker.css'; // Import CSS file

const ColorPicker = ({ setBackground }) => {
  const [sketchPickerColor, setSketchPickerColor] = useState({
    r: '3',
    g: '105',
    b: '161',
    a: '1',
  });
  const [selectedColors, setSelectedColors] = useState([]);
  const [showPicker, setShowPicker] = useState(false);

  const handleColorChange = (color) => {
    // Update the selected color
    setSketchPickerColor(color.rgb);
    setBackground(`rgba(${color.rgb.r}, ${color.rgb.g}, ${color.rgb.b}, ${color.rgb.a})`);

    // Add the selected color to the list of selected colors
    setSelectedColors(prevColors => {
      // Limit the list to store only the last 5 selected colors
      const updatedColors = [{ ...color.rgb }, ...prevColors.slice(0, 4)];
      return updatedColors;
    });
  };

  const togglePicker = () => {
    setShowPicker(!showPicker);
  };

  return (
    <div className="color-picker-container">
      <div className="sketch-picker-container">
        <h6>Sketch Picker</h6>
        <div
          className="color-display"
          style={{
            backgroundColor: `rgba(${sketchPickerColor.r},${sketchPickerColor.g},${sketchPickerColor.b},${sketchPickerColor.a})`,
          }}
          onClick={togglePicker}
        ></div>
        {showPicker && <SketchPicker onChange={handleColorChange} color={sketchPickerColor} />}
      </div>
      <div className="selected-colors-container">
        <p className="instruction">Click to change the background color</p>
        <p className="last-colors-label">Last 5 Selected Colors:</p>
        <div className="color-list">
          {selectedColors.map((color, index) => (
            <div
              key={index}
              className="color-item"
              style={{
                backgroundColor: `rgba(${color.r},${color.g},${color.b},${color.a})`,
              }}
              onClick={() => setSketchPickerColor(color)}
            ></div>
          ))}
          <button className="toggle-picker" onClick={togglePicker}>+</button>
        </div>
      </div>
    </div>
  );
};

export default ColorPicker;