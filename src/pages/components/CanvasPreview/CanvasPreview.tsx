"use client";

import { useRef, useEffect, forwardRef, useImperativeHandle } from "react";

type TextConfig = {
  content: string;
  position: { x: number; y: number };
  font: string;
  color: string;
  size: number;
  weight?: "normal" | "bold" | number;
  textAlign?: "left" | "center" | "right";
  isPill?: boolean;
};

type ImageConfig = {
  src: string;
  position: { x: number; y: number };
  size: { width: number; height: number };
};

type CanvasConfig = {
  userImage: string;
  userName: string;
  texts: TextConfig[];
  images?: ImageConfig[];
  userBox: { x: number; y: number; width: number; height: number };
  backgroundColor?: string;
  nameBoxBg?: string;
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

      canvas.width = width;
      canvas.height = height;

      const userImage = new Image();
      userImage.crossOrigin = "anonymous";
      const additionalImages: HTMLImageElement[] = [];
      const imageLoadPromises: Promise<void>[] = [];

      if (config.images) {
        config.images.forEach((imgConfig) => {
          const img = new Image();
          img.crossOrigin = "anonymous";
          img.src = imgConfig.src;
          additionalImages.push(img);
          imageLoadPromises.push(
            new Promise<void>((resolve) => {
              img.onload = () => resolve();
              img.onerror = () => {
                console.warn(`Failed to load image: ${imgConfig.src}`);
                resolve();
              };
            })
          );
        });
      }

      const userImagePromise = config.userImage
        ? new Promise<void>((res) => {
            userImage.onload = () => res();
            userImage.onerror = () => {
              console.warn("Failed to load user image");
              res();
            };
            userImage.src = config.userImage;
          })
        : Promise.resolve();

      Promise.all([userImagePromise, ...imageLoadPromises])
        .then(() => {
          // Clear and fill background
          ctx.clearRect(0, 0, width, height);
          if (config.backgroundColor) {
            ctx.fillStyle = config.backgroundColor;
            ctx.fillRect(0, 0, width, height);
          }

          // Draw decorative images first (background elements)
          if (config.images && additionalImages.length > 0) {
            config.images.forEach((imageConfig, index) => {
              const img = additionalImages[index];
              if (img && img.complete && img.naturalWidth > 0) {
                try {
                  ctx.drawImage(
                    img,
                    imageConfig.position.x,
                    imageConfig.position.y,
                    imageConfig.size.width,
                    imageConfig.size.height
                  );
                } catch (e) {
                  console.warn(`Error drawing image at index ${index}:`, e);
                }
              }
            });
          }

          // Draw user photo with border
          const { x, y, width: uW, height: uH } = config.userBox;

          const borderWidth = 5;
          const borderRadius = 8.64; // 0.54rem

          // Helper to draw rounded rectangle path
          const drawRoundedRect = (
            rectX: number,
            rectY: number,
            rectW: number,
            rectH: number,
            radius: number
          ) => {
            ctx.beginPath();
            ctx.moveTo(rectX + radius, rectY);
            ctx.lineTo(rectX + rectW - radius, rectY);
            ctx.arcTo(
              rectX + rectW,
              rectY,
              rectX + rectW,
              rectY + radius,
              radius
            );
            ctx.lineTo(rectX + rectW, rectY + rectH - radius);
            ctx.arcTo(
              rectX + rectW,
              rectY + rectH,
              rectX + rectW - radius,
              rectY + rectH,
              radius
            );
            ctx.lineTo(rectX + radius, rectY + rectH);
            ctx.arcTo(
              rectX,
              rectY + rectH,
              rectX,
              rectY + rectH - radius,
              radius
            );
            ctx.lineTo(rectX, rectY + radius);
            ctx.arcTo(rectX, rectY, rectX + radius, rectY, radius);
            ctx.closePath();
          };

          // Draw border
          ctx.save();
          ctx.strokeStyle = "#000";
          ctx.lineWidth = borderWidth;
          drawRoundedRect(x, y, uW, uH, borderRadius);
          ctx.stroke();
          ctx.restore();

          // Draw user image if exists
          if (config.userImage && userImage.complete && userImage.width > 0) {
            ctx.save();
            drawRoundedRect(x, y, uW, uH, borderRadius);
            ctx.clip();

            // Calculate crop for cover effect
            const imgAspect = userImage.width / userImage.height;
            const boxAspect = uW / uH;
            let sourceX, sourceY, sourceWidth, sourceHeight;

            if (imgAspect > boxAspect) {
              sourceHeight = userImage.height;
              sourceWidth = userImage.height * boxAspect;
              sourceX = (userImage.width - sourceWidth) / 2;
              sourceY = 0;
            } else {
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
          }

          const nameBoxWidth = 320;
          const nameBoxHeight = 72;
          const nameBoxX = x + (uW - nameBoxWidth) / 2;
          const nameBoxY = y + uH - nameBoxHeight / 2;

          ctx.save();
          ctx.fillStyle = config.nameBoxBg || "#FFFBF1";
          drawRoundedRect(nameBoxX, nameBoxY, nameBoxWidth, nameBoxHeight, 4);
          ctx.fill();

          ctx.restore();

          if (config.userName) {
            ctx.save();
            ctx.font = `normal 27px Product Sans, Arial, sans-serif`;
            ctx.fillStyle = "#000000";
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.fillText(
              config.userName,
              nameBoxX + nameBoxWidth / 2,
              nameBoxY + nameBoxHeight / 2
            );
            ctx.restore();
          }

          // Draw other texts
          config.texts.forEach((text) => {
            const weight = text.weight || "normal";
            const weightStr =
              typeof weight === "number"
                ? weight.toString()
                : weight === "bold"
                ? "bold"
                : "normal";

            ctx.font = `${weightStr} ${text.size}px ${text.font}`;
            ctx.fillStyle = text.color;
            ctx.textAlign = text.textAlign || "left";
            ctx.textBaseline = "top";

            // Handle 2025 pill
            if (text.isPill) {
              const metrics = ctx.measureText(text.content);
              const textWidth = metrics.width;
              const pillPaddingX = 16;
              const pillPaddingY = 8;
              const pillWidth = textWidth + pillPaddingX * 2;
              const pillHeight = text.size + pillPaddingY * 2;
              const pillX = text.position.x - pillWidth / 2;
              const pillY = text.position.y - pillPaddingY;

              // Draw pill background
              ctx.save();
              ctx.fillStyle = "#FFF";
              ctx.beginPath();
              const pillRadius = pillHeight / 2;
              ctx.moveTo(pillX + pillRadius, pillY);
              ctx.lineTo(pillX + pillWidth - pillRadius, pillY);
              ctx.arcTo(
                pillX + pillWidth,
                pillY,
                pillX + pillWidth,
                pillY + pillRadius,
                pillRadius
              );
              ctx.lineTo(pillX + pillWidth, pillY + pillHeight - pillRadius);
              ctx.arcTo(
                pillX + pillWidth,
                pillY + pillHeight,
                pillX + pillWidth - pillRadius,
                pillY + pillHeight,
                pillRadius
              );
              ctx.lineTo(pillX + pillRadius, pillY + pillHeight);
              ctx.arcTo(
                pillX,
                pillY + pillHeight,
                pillX,
                pillY + pillHeight - pillRadius,
                pillRadius
              );
              ctx.lineTo(pillX, pillY + pillRadius);
              ctx.arcTo(pillX, pillY, pillX + pillRadius, pillY, pillRadius);
              ctx.closePath();
              ctx.fill();

              ctx.strokeStyle = "#1e1e1e";
              ctx.lineWidth = 1.6;
              ctx.stroke();
              ctx.restore();

              // Draw text centered in pill
              ctx.fillStyle = text.color;
              ctx.textAlign = "center";
              ctx.fillText(text.content, text.position.x, text.position.y);
            } else {
              // Handle multi-line text
              const lines = text.content.split("\n");
              const lineHeight = text.size * 1.2;
              lines.forEach((line, index) => {
                ctx.fillText(
                  line,
                  text.position.x,
                  text.position.y + index * lineHeight
                );
              });
            }
          });
        })
        .catch((error) => {
          console.error("Error rendering canvas:", error);
        });
    }, [config, width, height]);

    return (
      <canvas
        ref={canvasRef}
        width={width}
        height={height}
        className="w-full h-full"
        style={{
          imageRendering: "crisp-edges",
          maxWidth: "100%",
          maxHeight: "100%",
        }}
      />
    );
  }
);

CanvasPreview.displayName = "CanvasPreview";

export default CanvasPreview;
