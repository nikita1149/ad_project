import './App.css';
import React, { useState } from 'react';
import Canvas from './components/Canvas';
import CanvasImage from './components/CanvasImage';
import InputContent from './components/InputContent';
import CtaContent from './components/CtaContent';
import ColorPicker from './components/ColorPicker';

function App() {
  const [background, setBackground] = useState('#0369A1');
  const [imageFile, setImageFile] = useState(null);
  const [caption, setCaption] = useState('1 & 2 BHK Luxury Apartments at just Rs.34.97 Lakhs');
  const [cta, setCta] = useState('Shop Now');

  const templateData = {
    caption: {
      text: caption,
      position: { x: 50, y: 50 },
      max_characters_per_line: 31,
      font_size: 44,
      alignment: 'left',
      text_color: '#FFFFFF'
    },
    cta: {
      text: cta,
      position: { x: 190, y: 320 },
      text_color: '#FFFFFF',
      background_color: '#000000'
    },
    image_mask: { x: 56, y: 442, width: 970, height: 600 },
    urls: {
      mask: 'https://d273i1jagfl543.cloudfront.net/templates/global_temp_landscape_temp_10_mask.png',
      stroke: 'https://d273i1jagfl543.cloudfront.net/templates/global_temp_landscape_temp_10_Mask_stroke.png',
      design_pattern: 'https://d273i1jagfl543.cloudfront.net/templates/global_temp_landscape_temp_10_Design_Pattern.png'
    }
  };

  return (
    <div className="outer-div">
      <div className="canvas-div">
        <Canvas
          backgroundColor={background}
          image={imageFile}
          templateData={templateData}
          captionText={caption}
          ctaText={cta}
        />
      </div>
      <div className="input">
        <div className="ini-text">
          <h4>Ad Customisation</h4>
          <p>Customise your ad and get the templates accordingly</p>
        </div>
        <div className="input-img">
          <CanvasImage setImage={setImageFile} />
        </div>
        <div className="input-content">
          <InputContent setCaptionText={setCaption} />
        </div>
        <div className="input-cta">
          <CtaContent setCtaText={setCta} />
        </div>
        <div className="input-color">
          <ColorPicker setBackground={setBackground} />
        </div>
      </div>
    </div>
  );
}

export default App;
