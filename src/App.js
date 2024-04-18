
// import './App.css';
// import Canvas from './components/CanvasPart';
// import CanvasImage from './components/CanvasImage';
// import ColorPicker from './components/ColorPicker';
// import InputContent from './components/InputContent';
// import CtaContent from './components/CtaContent';

// function App() {
//   return (
//     <div className = "outer-div">
//       <div className = "canvas-div">
//         <div className='canvas'><Canvas/></div>
//         </div>
//       <div className = "input">
//         <div className="ini-text">
//           <h4>Ad Customisation</h4>
//           <p>customise your ad and get the templates accordingly</p>
//         </div>
//         <div className = "input-img"><CanvasImage/></div>
//         <div className = "input-content"><InputContent/></div>
//         <div className="input-cta"><CtaContent/></div>
//         <div className="input-color"><ColorPicker/></div>
//       </div>
//     </div>
//   );
// }

// export default App;
import './App.css';
import React, { useState } from 'react';
import Canvas from './components/Canvas';
import CanvasImage from './components/CanvasImage';
import InputContent from './components/InputContent';
import CtaContent from './components/CtaContent';
import ColorPicker from './components/ColorPicker';
import { mask, stroke, design_pattern } from './assets/images'; // Importing image URLs

function App() {
  const [background, setColor] = useState('#0369A1'); // Default background color
  const [imageFile, setImageFile] = useState(null); // State to store image file
  const [caption, setCaption] = useState(''); // State to store caption text
  const [cta, setCta] = useState(''); // State to store CTA text

  return (
    <div className="outer-div">
      <div className="canvas-div">
        <div className='canvas'><Canvas
          templateData={{ mask, stroke, design_pattern }} // Pass template data as props
          backgroundColor={background} // Pass background color as props
          image={imageFile} // Pass image file as props
          captionText={caption} // Pass caption text as props
          ctaText={cta} // Pass CTA text as props
        /></div>
        
      </div>
      <div className="input">
        <div className="ini-text">
          <h4>Ad Customisation</h4>
          <p>Customise your ad and get the templates accordingly</p>
        </div>
        <div className="input-img">
          <CanvasImage setImage={setImageFile} /> {/* Pass setImage function as props */}
        </div>
        <div className="input-content">
          <InputContent setCaptionText={setCaption} /> {/* Pass setCaptionText function as props */}
        </div>
        <div className="input-cta">
          <CtaContent setCtaText={setCta} /> {/* Pass setCtaText function as props */}
        </div>
        <div className="input-color">
          <ColorPicker setBackground={setColor} /> {/* Pass setBackground function as props */}
        </div>
      </div>
    </div>
  );
}

export default App;



