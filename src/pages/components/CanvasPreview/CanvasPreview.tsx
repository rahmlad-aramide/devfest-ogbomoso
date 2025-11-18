"use client";
import React, {
  useRef,
  useEffect,
  forwardRef,
  useImperativeHandle,
} from "react";

type TextConfig = {
  content: string;
  position: { x: number; y: number };
  font: string;
  color: string;
  size: number;
  textAlign?: "left" | "center" | "right";
  hasGlassmorphism?: boolean;
  glassPadding?: { top: number; right: number; bottom: number; left: number };
};

type ImageConfig = {
  src: string;
  position: { x: number; y: number };
  size: { width: number; height: number };
};

type CanvasConfig = {
  baseImage: string; // imageU (green icons background)
  userImage: string; // user uploaded photo
  texts: TextConfig[];
  images?: ImageConfig[]; // Additional images
  userBox: { x: number; y: number; width: number; height: number };
  backgroundColor?: string; // Background color for the canvas
};

interface CanvasPreviewProps {
  config: CanvasConfig;
  width: number;
  height: number;
}

const CanvasPreview = forwardRef<HTMLCanvasElement, CanvasPreviewProps>(
  ({ config, width, height }, ref) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useImperativeHandle(ref, () => canvasRef.current!, []);

    useEffect(() => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      // Set canvas size
      canvas.width = width!;
      canvas.height = height!;

      // If no baseImage is provided, create a simple background
      if (!config.baseImage) {
        // Use user-selected background color or create a gradient background
        if (config.backgroundColor) {
          ctx.fillStyle = config.backgroundColor;
          ctx.fillRect(0, 0, width, height);
        } else {
          // Create a gradient background
          const gradient = ctx.createLinearGradient(0, 0, 0, 50);
          gradient.addColorStop(0, "#4285f4");
          gradient.addColorStop(0.5, "#ffffff");
          gradient.addColorStop(1, "#34a853");

          ctx.fillStyle = gradient;
          ctx.fillRect(0, 0, width, height);
        }

        // Draw user photo if available
        if (config.userImage) {
          const userImage = new Image();
          userImage.crossOrigin = "anonymous";
          userImage.src = config.userImage;

          userImage.onload = () => {
            const { x, y, width: uW, height: uH } = config.userBox;
            ctx.save();

            // Create rounded rectangle path
            const imageRadius = 10; // Adjust this value for desired roundness
            ctx.beginPath();
            ctx.moveTo(x + imageRadius, y);
            ctx.lineTo(x + uW - imageRadius, y);
            ctx.quadraticCurveTo(x + uW, y, x + uW, y + imageRadius);
            ctx.lineTo(x + uW, y + uH - imageRadius);
            ctx.quadraticCurveTo(x + uW, y + uH, x + uW - imageRadius, y + uH);
            ctx.lineTo(x + imageRadius, y + uH);
            ctx.quadraticCurveTo(x, y + uH, x, y + uH - imageRadius);
            ctx.lineTo(x, y + imageRadius);
            ctx.quadraticCurveTo(x, y, x + imageRadius, y);
            ctx.closePath();
            ctx.clip();

            // Draw image with cover behavior
            const imgAspect = userImage.width / userImage.height;
            const boxAspect = uW / uH;

            let drawWidth,
              drawHeight,
              drawX,
              drawY,
              sourceX,
              sourceY,
              sourceWidth,
              sourceHeight;

            if (imgAspect > boxAspect) {
              // Image is wider than box, fit to height and crop width
              drawHeight = uH;
              drawWidth = uH * imgAspect;
              drawX = x - (drawWidth - uW) / 2;
              drawY = y;

              sourceHeight = userImage.height;
              sourceWidth = userImage.height * boxAspect;
              sourceX = (userImage.width - sourceWidth) / 2;
              sourceY = 0;
            } else {
              // Image is taller than box, fit to width and crop height
              drawWidth = uW;
              drawHeight = uW / imgAspect;
              drawX = x;
              drawY = y - (drawHeight - uH) / 2;

              sourceWidth = userImage.width;
              sourceHeight = userImage.width / boxAspect;
              sourceX = 0;
              sourceY = (userImage.height - sourceHeight) / 2;
            }

            ctx.drawImage(
              userImage,
              sourceX,
              sourceY,
              sourceWidth,
              sourceHeight,
              x,
              y,
              uW,
              uH
            );
            ctx.restore();

            // Draw texts after image is loaded
            config.texts.forEach((text) => {
              // Handle different font weights
              let fontWeight = "normal";
              let fontFamily = text.font;

              if (text.font.includes("bold")) {
                fontWeight = "bold";
                fontFamily = text.font.replace("bold ", "");
              } else if (text.font.match(/^\d+/)) {
                // Handle numeric font weights
                const weight = text.font.match(/^\d+/)?.[0];
                if (weight) {
                  if (parseInt(weight) >= 700) fontWeight = "bold";
                  else if (parseInt(weight) >= 600) fontWeight = "600";
                  else if (parseInt(weight) >= 500) fontWeight = "500";
                  else fontWeight = "normal";
                  fontFamily = text.font.replace(/^\d+\s/, "");
                }
              }

              ctx.font = `${fontWeight} ${text.size}px ${fontFamily}`;

              // Draw glassmorphism box if needed
              if (text.hasGlassmorphism) {
                const padding = text.glassPadding || {
                  top: 8,
                  right: 16,
                  bottom: 8,
                  left: 16,
                };
                const metrics = ctx.measureText(text.content);
                const textWidth = metrics.width;
                const textHeight = text.size;

                let boxX = text.position.x - padding.left;
                if (text.textAlign === "center") {
                  boxX = text.position.x - textWidth / 2 - padding.left;
                } else if (text.textAlign === "right") {
                  boxX = text.position.x - textWidth - padding.left;
                }

                const boxY = text.position.y - textHeight - padding.top;
                const boxWidth = textWidth + padding.left + padding.right;
                const boxHeight = textHeight + padding.top + padding.bottom;
                const boxRadius = 8;

                // Draw glassmorphism background
                ctx.save();
                ctx.fillStyle = "rgba(255, 255, 255, 0.5)";
                ctx.beginPath();
                ctx.moveTo(boxX + boxRadius, boxY);
                ctx.lineTo(boxX + boxWidth - boxRadius, boxY);
                ctx.quadraticCurveTo(
                  boxX + boxWidth,
                  boxY,
                  boxX + boxWidth,
                  boxY + boxRadius
                );
                ctx.lineTo(boxX + boxWidth, boxY + boxHeight - boxRadius);
                ctx.quadraticCurveTo(
                  boxX + boxWidth,
                  boxY + boxHeight,
                  boxX + boxWidth - boxRadius,
                  boxY + boxHeight
                );
                ctx.lineTo(boxX + boxRadius, boxY + boxHeight);
                ctx.quadraticCurveTo(
                  boxX,
                  boxY + boxHeight,
                  boxX,
                  boxY + boxHeight - boxRadius
                );
                ctx.lineTo(boxX, boxY + boxRadius);
                ctx.quadraticCurveTo(boxX, boxY, boxX + boxRadius, boxY);
                ctx.closePath();
                ctx.fill();

                // Add border
                ctx.strokeStyle = "rgba(255, 255, 255, 0.3)";
                ctx.lineWidth = 1;
                ctx.stroke();
                ctx.restore();
              }

              ctx.fillStyle = text.color;
              ctx.textAlign = text.textAlign || "left";
              ctx.fillText(text.content.toUpperCase(), text.position.x, text.position.y);
            });

            // Draw additional images if any
            if (config.images) {
              config.images.forEach((imageConfig) => {
                const additionalImage = new Image();
                additionalImage.crossOrigin = "anonymous";
                additionalImage.src = imageConfig.src;
                additionalImage.onload = () => {
                  ctx.drawImage(
                    additionalImage,
                    imageConfig.position.x,
                    imageConfig.position.y,
                    imageConfig.size.width,
                    imageConfig.size.height
                  );
                };
              });
            }
          };

          userImage.onerror = () => {
            console.error("Failed to load user image");
            // Draw texts even if image fails
            config.texts.forEach((text) => {
              // Handle different font weights
              let fontWeight = "normal";
              let fontFamily = text.font;

              if (text.font.includes("bold")) {
                fontWeight = "bold";
                fontFamily = text.font.replace("bold ", "");
              } else if (text.font.match(/^\d+/)) {
                // Handle numeric font weights
                const weight = text.font.match(/^\d+/)?.[0];
                if (weight) {
                  if (parseInt(weight) >= 700) fontWeight = "bold";
                  else if (parseInt(weight) >= 600) fontWeight = "600";
                  else if (parseInt(weight) >= 500) fontWeight = "500";
                  else fontWeight = "normal";
                  fontFamily = text.font.replace(/^\d+\s/, "");
                }
              }

              ctx.font = `${fontWeight} ${text.size}px ${fontFamily}`;
              ctx.fillStyle = text.color;
              ctx.textAlign = text.textAlign || "left";
              ctx.fillText(text.content, text.position.x, text.position.y);
            });
          };
        } else {
          // Draw texts if no user image
          config.texts.forEach((text) => {
            // Handle different font weights
            let fontWeight = "normal";
            let fontFamily = text.font;

            if (text.font.includes("bold")) {
              fontWeight = "bold";
              fontFamily = text.font.replace("bold ", "");
            } else if (text.font.match(/^\d+/)) {
              // Handle numeric font weights
              const weight = text.font.match(/^\d+/)?.[0];
              if (weight) {
                if (parseInt(weight) >= 700) fontWeight = "bold";
                else if (parseInt(weight) >= 600) fontWeight = "600";
                else if (parseInt(weight) >= 500) fontWeight = "500";
                else fontWeight = "normal";
                fontFamily = text.font.replace(/^\d+\s/, "");
              }
            }

            ctx.font = `${fontWeight} ${text.size}px ${fontFamily}`;
            ctx.fillStyle = text.color;
            ctx.textAlign = text.textAlign || "left";
            ctx.fillText(text.content, text.position.x, text.position.y);
          });
        }
        return;
      }

      // Original logic for when baseImage is provided
      const baseImage = new Image();
      baseImage.crossOrigin = "anonymous";
      baseImage.src = config.baseImage;

      const userImage = new Image();
      userImage.crossOrigin = "anonymous";
      userImage.src = config.userImage;

      Promise.all([
        new Promise<void>((res, rej) => {
          baseImage.onload = () => res();
          baseImage.onerror = () => rej(new Error("Failed to load base image"));
        }),
        new Promise<void>((res, rej) => {
          userImage.onload = () => res();
          userImage.onerror = () => rej(new Error("Failed to load user image"));
        }),
      ])
        .then(() => {
          // Clear canvas and fill with background color
          ctx.clearRect(0, 0, width, height);

          // Fill with user-selected background color if provided
          if (config.backgroundColor) {
            ctx.fillStyle = config.backgroundColor;
            ctx.fillRect(0, 0, width, height);
          }

          // === Draw top imageU ===
          ctx.drawImage(baseImage, 0, 0, width, 30);

          // === Draw bottom imageU ===
          ctx.drawImage(baseImage, 0, height - 30, width, 30);

          // === Draw user photo on right ===
          const { x, y, width: uW, height: uH } = config.userBox;
          ctx.save();

          // Create rounded rectangle path
          const imageRadius = 10; // Adjust this value for desired roundness
          ctx.beginPath();
          ctx.moveTo(x + imageRadius, y);
          ctx.lineTo(x + uW - imageRadius, y);
          ctx.quadraticCurveTo(x + uW, y, x + uW, y + imageRadius);
          ctx.lineTo(x + uW, y + uH - imageRadius);
          ctx.quadraticCurveTo(x + uW, y + uH, x + uW - imageRadius, y + uH);
          ctx.lineTo(x + imageRadius, y + uH);
          ctx.quadraticCurveTo(x, y + uH, x, y + uH - imageRadius);
          ctx.lineTo(x, y + imageRadius);
          ctx.quadraticCurveTo(x, y, x + imageRadius, y);
          ctx.closePath();
          ctx.clip();

          // Draw image with cover behavior
          const imgAspect = userImage.width / userImage.height;
          const boxAspect = uW / uH;

          let drawWidth,
            drawHeight,
            drawX,
            drawY,
            sourceX,
            sourceY,
            sourceWidth,
            sourceHeight;

          if (imgAspect > boxAspect) {
            // Image is wider than box, fit to height and crop width
            drawHeight = uH;
            drawWidth = uH * imgAspect;
            drawX = x - (drawWidth - uW) / 2;
            drawY = y;

            sourceHeight = userImage.height;
            sourceWidth = userImage.height * boxAspect;
            sourceX = (userImage.width - sourceWidth) / 2;
            sourceY = 0;
          } else {
            // Image is taller than box, fit to width and crop height
            drawWidth = uW;
            drawHeight = uW / imgAspect;
            drawX = x;
            drawY = y - (drawHeight - uH) / 2;

            sourceWidth = userImage.width;
            sourceHeight = userImage.width / boxAspect;
            sourceX = 0;
            sourceY = (userImage.height - sourceHeight) / 2;
          }

          ctx.drawImage(
            userImage,
            sourceX,
            sourceY,
            sourceWidth,
            sourceHeight,
            x,
            y,
            uW,
            uH
          );
          ctx.restore();

          // === Draw texts ===
          config.texts.forEach((text) => {
            // Handle different font weights
            let fontWeight = "normal";
            let fontFamily = text.font;

            if (text.font.includes("bold")) {
              fontWeight = "bold";
              fontFamily = text.font.replace("bold ", "");
            } else if (text.font.match(/^\d+/)) {
              // Handle numeric font weights
              const weight = text.font.match(/^\d+/)?.[0];
              if (weight) {
                if (parseInt(weight) >= 700) fontWeight = "bold";
                else if (parseInt(weight) >= 600) fontWeight = "600";
                else if (parseInt(weight) >= 500) fontWeight = "500";
                else fontWeight = "normal";
                fontFamily = text.font.replace(/^\d+\s/, "");
              }
            }

            ctx.font = `${fontWeight} ${text.size}px ${fontFamily}`;

            // Draw glassmorphism box if needed
            if (text.hasGlassmorphism) {
              const padding = text.glassPadding || {
                top: 8  ,
                right: 16,
                bottom: 8,
                left: 16,
              };
              const metrics = ctx.measureText(text.content);
              const textWidth = metrics.width;
              const textHeight = text.size;

              let boxX = text.position.x - padding.left;
              if (text.textAlign === "center") {
                boxX = text.position.x - textWidth / 2 - padding.left;
              } else if (text.textAlign === "right") {
                boxX = text.position.x - textWidth - padding.left;
              }

              const boxY = text.position.y - textHeight - padding.top;
              const boxWidth = textWidth + padding.left + padding.right;
              const boxHeight = textHeight + padding.top + padding.bottom;
              const boxRadius = 8;

              // Draw glassmorphism background
              ctx.save();
              ctx.fillStyle = "rgba(255, 255, 255, 0.2)";
              ctx.beginPath();
              ctx.moveTo(boxX + boxRadius, boxY);
              ctx.lineTo(boxX + boxWidth - boxRadius, boxY);
              ctx.quadraticCurveTo(
                boxX + boxWidth,
                boxY,
                boxX + boxWidth,
                boxY + boxRadius
              );
              ctx.lineTo(boxX + boxWidth, boxY + boxHeight - boxRadius);
              ctx.quadraticCurveTo(
                boxX + boxWidth,
                boxY + boxHeight,
                boxX + boxWidth - boxRadius,
                boxY + boxHeight
              );
              ctx.lineTo(boxX + boxRadius, boxY + boxHeight);
              ctx.quadraticCurveTo(
                boxX,
                boxY + boxHeight,
                boxX,
                boxY + boxHeight - boxRadius
              );
              ctx.lineTo(boxX, boxY + boxRadius);
              ctx.quadraticCurveTo(boxX, boxY, boxX + boxRadius, boxY);
              ctx.closePath();
              ctx.fill();

              // Add border
              ctx.strokeStyle = "rgba(255, 255, 255, 0.3)";
              ctx.lineWidth = 1;
              ctx.stroke();
              ctx.restore();
            }

            ctx.fillStyle = text.color;
            ctx.textAlign = text.textAlign || "left";
            ctx.fillText(text.content, text.position.x, text.position.y);
          });

          // === Draw additional images ===
          if (config.images) {
            config.images.forEach((imageConfig) => {
              const additionalImage = new Image();
              additionalImage.crossOrigin = "anonymous";
              additionalImage.src = imageConfig.src;
              additionalImage.onload = () => {
                ctx.drawImage(
                  additionalImage,
                  imageConfig.position.x,
                  imageConfig.position.y,
                  imageConfig.size.width,
                  imageConfig.size.height
                );
              };
            });
          }
        })
        .catch((error) => {
          console.error("Error loading images:", error);
          // Fallback: draw without images
          ctx.fillStyle = "#f0f0f0";
          ctx.fillRect(0, 0, width, height);
          config.texts.forEach((text) => {
            // Handle different font weights
            let fontWeight = "normal";
            let fontFamily = text.font;

            if (text.font.includes("bold")) {
              fontWeight = "bold";
              fontFamily = text.font.replace("bold ", "");
            } else if (text.font.match(/^\d+/)) {
              // Handle numeric font weights
              const weight = text.font.match(/^\d+/)?.[0];
              if (weight) {
                if (parseInt(weight) >= 700) fontWeight = "bold";
                else if (parseInt(weight) >= 600) fontWeight = "600";
                else if (parseInt(weight) >= 500) fontWeight = "500";
                else fontWeight = "normal";
                fontFamily = text.font.replace(/^\d+\s/, "");
              }
            }

            ctx.font = `${fontWeight} ${text.size}px ${fontFamily}`;
            ctx.fillStyle = text.color;
            ctx.textAlign = text.textAlign || "left";
            ctx.fillText(text.content, text.position.x, text.position.y);
          });
        });
    }, [config, width, height]);

    return (
      <canvas
        ref={canvasRef}
        width={width}
        height={height}
        className="border rounded-lg shadow-lg"
      />
    );
  }
);

CanvasPreview.displayName = "CanvasPreview";

export default CanvasPreview;
