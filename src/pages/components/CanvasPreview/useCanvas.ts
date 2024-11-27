import { useEffect, useRef, useState } from 'react';
import { CanvasConfig, TextConfig } from './types';

function drawTextWithBackground(
  ctx: CanvasRenderingContext2D,
  text: TextConfig,
  scale: number
) {
  ctx.save();
  
  // Scale text properties
  const scaledSize = text.size * scale;
  ctx.font = `${scaledSize}px ${text.font}`;
  const metrics = ctx.measureText(text.content);
  const textHeight = scaledSize;

  if (text.background) {
    const padding = text.background.padding;
    const scaledPadding = {
      top: padding.top * scale,
      right: padding.right * scale,
      bottom: padding.bottom * scale,
      left: padding.left * scale,
    };
    const totalWidth = metrics.width + scaledPadding.left + scaledPadding.right;
    const totalHeight = textHeight + scaledPadding.top + scaledPadding.bottom;
    const radius = (text.background.borderRadius || 0) * scale;
    const scaledX = text.position.x * scale;
    const scaledY = text.position.y * scale;

    ctx.beginPath();
    ctx.fillStyle = text.background.color;
    
    if (radius > 0) {
      ctx.moveTo(scaledX + radius, scaledY);
      ctx.lineTo(scaledX + totalWidth - radius, scaledY);
      ctx.quadraticCurveTo(scaledX + totalWidth, scaledY, scaledX + totalWidth, scaledY + radius);
      ctx.lineTo(scaledX + totalWidth, scaledY + totalHeight - radius);
      ctx.quadraticCurveTo(scaledX + totalWidth, scaledY + totalHeight, scaledX + totalWidth - radius, scaledY + totalHeight);
      ctx.lineTo(scaledX + radius, scaledY + totalHeight);
      ctx.quadraticCurveTo(scaledX, scaledY + totalHeight, scaledX, scaledY + totalHeight - radius);
      ctx.lineTo(scaledX, scaledY + radius);
      ctx.quadraticCurveTo(scaledX, scaledY, scaledX + radius, scaledY);
    } else {
      ctx.rect(scaledX, scaledY, totalWidth, totalHeight);
    }
    
    ctx.fill();

    // Draw the text
    ctx.fillStyle = text.color;
    ctx.fillText(
      text.content,
      scaledX + scaledPadding.left,
      scaledY + scaledPadding.top + textHeight
    );
  } else {
    // Draw text without background
    ctx.fillStyle = text.color;
    ctx.fillText(
      text.content,
      text.position.x * scale,
      text.position.y * scale + textHeight
    );
  }

  ctx.restore();
}

export function useCanvas(config: CanvasConfig, width: number, height: number) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  
  // Use a higher scale factor for better quality
  const scale = 2;
  const scaledWidth = width * scale;
  const scaledHeight = height * scale;

  const drawCanvas = async (
    ctx: CanvasRenderingContext2D,
    baseImage: HTMLImageElement,
    overlayImage: HTMLImageElement
  ) => {
    // Clear canvas
    ctx.clearRect(0, 0, scaledWidth, scaledHeight);
    
    // Enable image smoothing
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';
    
    // Draw base image
    ctx.drawImage(baseImage, 0, 0, scaledWidth, scaledHeight);
    
    // Draw overlay image
    ctx.drawImage(
      overlayImage,
      config.overlayPosition.x * scale,
      config.overlayPosition.y * scale,
      config.overlaySize.width * scale,
      config.overlaySize.height * scale
    );

    // Draw all text elements
    config.texts.forEach(text => {
      drawTextWithBackground(ctx, text, scale);
    });
  };

  const downloadImage = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Create a temporary link
    const link = document.createElement('a');
    link.download = 'devfest-dp.png';
    link.href = canvas.toDataURL('image/png');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Set actual canvas dimensions
    canvas.width = scaledWidth;
    canvas.height = scaledHeight;
    
    // Set display size
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    const ctx = canvas.getContext('2d');
    if (!ctx) {
      setError(new Error('Canvas context not supported'));
      return;
    }

    const baseImage = new Image();
    const overlayImage = new Image();
    let loadedImages = 0;

    function handleLoad() {
      loadedImages++;
      if (loadedImages === 2) {
        try {
          drawCanvas(ctx, baseImage, overlayImage);
          setIsLoading(false);
        } catch (err) {
          setError(err instanceof Error ? err : new Error('Failed to draw canvas'));
        }
      }
    }

    function handleError(err: ErrorEvent) {
      setError(new Error(`Failed to load image: ${err.message}`));
      setIsLoading(false);
    }

    baseImage.onload = handleLoad;
    baseImage.onerror = handleError;
    overlayImage.onload = handleLoad;
    overlayImage.onerror = handleError;

    baseImage.src = config.baseImage;
    overlayImage.src = config.overlayImage;

    return () => {
      baseImage.onload = null;
      baseImage.onerror = null;
      overlayImage.onload = null;
      overlayImage.onerror = null;
    };
  }, [config, width, height, scale, scaledWidth, scaledHeight]);

  return { canvasRef, error, isLoading, downloadImage };
}