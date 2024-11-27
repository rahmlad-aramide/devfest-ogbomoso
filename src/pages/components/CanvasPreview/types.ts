export interface TextConfig {
  content: string;
  position: { x: number; y: number };
  font: string;
  color: string;
  size: number;
  background?: {
    color: string;
    padding: {
      top: number;
      right: number;
      bottom: number;
      left: number;
    };
    borderRadius?: number;
  };
}

export interface CanvasConfig {
  baseImage: string;
  overlayImage: string;
  texts: TextConfig[];
  overlayPosition: { x: number; y: number };
  overlaySize: { width: number; height: number };
}

export interface PreviewProps {
  config: CanvasConfig;
  width?: number;
  height?: number;
  onError?: (error: Error) => void;
}