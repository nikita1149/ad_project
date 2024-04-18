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
    this.drawDesignPattern(context, templateData.urls.design_pattern);
    this.drawMask(context, templateData.urls.mask);
    this.drawMaskStroke(context, templateData.urls.stroke);
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
      const width = ctx.measureText(text).width + 2 * padding;
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
