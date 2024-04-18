// import React, { useRef, useEffect, useState } from 'react';
// import CanvasImage from './CanvasImage'; // Import the Image component
// import ColorPicker from './ColorPicker'; // Import the ColorPicker component
// import InputContent from './InputContent'; // Import the InputContent component for caption
// import CtaContent from './CtaContent'; // Import the CtaContent component for CTA

// // Import the URLs from the assets/images.js file
// import { mask,stroke,design_pattern } from '../assets/images';

// const Canvas = ({ templateData }) => {
//   const canvasRef = useRef(null);
//   const [canvasContext, setCanvasContext] = useState(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const context = canvas.getContext('2d');
//     setCanvasContext(context);
//   }, []);

//   useEffect(() => {
//     if (canvasContext) {
//       // Clear canvas
//       canvasContext.clearRect(0, 0, canvasContext.canvas.width, canvasContext.canvas.height);

//       // Draw elements
//       drawBackground();
//       drawDesignPattern();
//       drawMask();
//       drawMaskStroke();
//       drawText();
//     }
//   }, [canvasContext, templateData]);

//   const drawBackground = () => {
//     if (canvasContext) {
//       canvasContext.fillStyle = templateData?.background_color || '#0369A1';
//       canvasContext.fillRect(0, 0, canvasContext.canvas.width, canvasContext.canvas.height);
//     }
//   };

//   const drawDesignPattern = () => {
//     const img = new Image();
//     img.src = design_pattern;
//     img.onload = () => {
//       canvasContext.drawImage(img, 0, 0, canvasContext.canvas.width, canvasContext.canvas.height);
//     };
//   };

//   const drawMask = () => {
//     const img = new Image();
//     img.src = mask; // Use the mask URL for image mask
//     img.onload = () => {
//       canvasContext.drawImage(img, 0, 0, canvasContext.canvas.width, canvasContext.canvas.height);
//     };
//   };

//   const drawMaskStroke = () => {
//     const img = new Image();
//     img.src = stroke;
//     img.onload = () => {
//       canvasContext.drawImage(img, 0, 0, canvasContext.canvas.width, canvasContext.canvas.height);
//     };
//   };

//   const drawText = () => {
//     if (canvasContext && templateData) {
//       const { caption, cta } = templateData;
      
//       if (caption) {
//         // Render caption text
//         canvasContext.fillStyle = caption.text_color || '#FFFFFF';
//         canvasContext.font = `${caption.font_size || 30}px Arial`;
//         const lines = wrapText(caption.text, caption.max_characters_per_line);
//         const lineHeight = caption.font_size * 1.2; // Adjust line height as needed
//         const x = caption.position.x;
//         let y = caption.position.y;
//         lines.forEach(line => {
//           canvasContext.fillText(line, x, y);
//           y += lineHeight;
//         });
//       }
      
//       if (cta) {
//         // Render CTA text
//         canvasContext.fillStyle = cta.text_color || '#FFFFFF';
//         canvasContext.font = `${cta.font_size || 30}px Arial`;
//         canvasContext.textAlign = 'center';
//         canvasContext.textBaseline = 'middle';
//         canvasContext.fillStyle = cta.text_color || '#FFFFFF';
//         canvasContext.fillStyle = cta.background_color || '#000000';
//         canvasContext.fillRect(cta.position.x, cta.position.y, 200, 50); // Adjust dimensions as needed
//         canvasContext.fillStyle = cta.text_color || '#FFFFFF';
//         canvasContext.fillText(cta.text, cta.position.x + 100, cta.position.y + 25); // Adjust position as needed
//       }
//     }
//   };
  

//   const wrapText = (text, maxLength) => {
//     const words = text.split(' ');
//     let lines = [];
//     let currentLine = '';

//     words.forEach(word => {
//       const testLine = currentLine + word + ' ';
//       if (testLine.length > maxLength) {
//         lines.push(currentLine);
//         currentLine = word + ' ';
//       } else {
//         currentLine = testLine;
//       }
//     });

//     lines.push(currentLine.trim());
//     return lines;
//   };

//   return (
//     <div>
//       {/* Only render the selected photo if it's provided */}
//       {templateData && templateData.image_mask && (
//         <>
//           <CanvasImage /> {/* Render the Image component */}
//           <ColorPicker /> {/* Render the ColorPicker component */}
//           <InputContent /> {/* Render the InputContent component for caption */}
//           <CtaContent /> {/* Render the CtaContent component for CTA */}
//         </>
//       )}
//       <canvas ref={canvasRef} width={1080} height={1080} style={{ width: '400px', height: '400px' }} />
//     </div>
//   );
// };

// export default Canvas;
// Canvas.js
import React from 'react';

class Canvas extends React.Component {
  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
  }

  componentDidMount() {
    this.drawCanvas();
  }

  componentDidUpdate() {
    this.drawCanvas();
  }

  drawCanvas() {
    const canvas = this.canvasRef.current;
    const context = canvas.getContext('2d');
    const { backgroundColor, image, templateData, captionText, ctaText } = this.props;

    this.clearCanvas(context);
    this.drawBackground(context, backgroundColor);
    this.drawDesignPattern(context, templateData.design_pattern);
    this.drawMask(context, templateData.mask);
    this.drawMaskStroke(context, templateData.stroke);
    this.drawImage(context, image, templateData.image_mask);
    this.drawText(context, captionText, templateData.caption);
    this.drawCTA(context, ctaText, templateData.cta);
  }

  clearCanvas(ctx) {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  }

  drawBackground(ctx, color) {
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  }

  drawDesignPattern(ctx, pattern) {
    if (pattern) {
      const img = new Image();
      img.src = pattern;
      img.onload = () => {
        ctx.drawImage(img, 0, 0);
      };
    }
  }

  drawMask(ctx, maskData) {
    if (maskData) {
      const img = new Image();
      img.src = maskData;
      img.onload = () => {
        ctx.drawImage(img, 0, 0);
      };
    }
  }

  drawMaskStroke(ctx, strokeData) {
    if (strokeData) {
      const img = new Image();
      img.src = strokeData;
      img.onload = () => {
        ctx.drawImage(img, 0, 0);
      };
    }
  }

  drawImage(ctx, image, maskData) {
    if (image && maskData) {
      const { x, y, width, height } = maskData;
      const img = new Image();
      img.src = image;
      img.onload = () => {
        ctx.drawImage(img, x, y, width, height);
      };
    }
  }

  drawText(ctx, captionText, captionData) {
    if (captionText && captionData) {
      const { text, position, font_size, alignment, text_color, max_characters_per_line } = captionData;
      ctx.fillStyle = text_color;
      ctx.font = `${font_size}px Arial`;
      ctx.textAlign = alignment;
      ctx.fillText(text, position.x, position.y, max_characters_per_line);
    }
  }

  drawCTA(ctx, ctaText, ctaData) {
    if (ctaText && ctaData) {
      const { text, position, font_size, text_color, background_color } = ctaData;
      const padding = 24;
      const width = ctx.measureText(ctaText).width + 2 * padding;
      const height = font_size + 2 * padding;

      ctx.fillStyle = background_color;
      ctx.fillRect(position.x, position.y, width, height);

      ctx.fillStyle = text_color;
      ctx.font = `${font_size}px Arial`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(text, position.x + width / 2, position.y + height / 2);
    }
  }

  render() {
    return (
      <canvas
        ref={this.canvasRef}
        width={1080}
        height={1080}
        style={{ width: '400px', height: '400px' }}
      />
    );
  }
}

export default Canvas;





