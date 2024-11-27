import { motion } from "framer-motion";
import { useCanvas } from "./useCanvas";
import { PreviewProps } from "./types";
import { Download } from "lucide-react";

export default function CanvasPreview({
  config,
  width = 800,
  height = 600,
  onError,
}: PreviewProps) {
  const { canvasRef, error, isLoading, downloadImage } = useCanvas(
    config,
    width,
    height
  );

  if (error) {
    onError?.(error);
    return (
      <div className="flex items-center justify-center w-full h-full bg-red-50 rounded-lg p-4">
        <p className="text-red-500">Failed to load preview: {error.message}</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0.5 : 1 }}
        className="relative flex w-full items-center justify-center"
      >
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-white/50">
            <div className="w-8 h-8 border-4 border-[#FF9800] border-t-transparent rounded-full animate-spin" />
          </div>
        )}
        <canvas
          ref={canvasRef}
          className="w-full h-full rounded-lg shadow-lg"
        />
      </motion.div>

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={downloadImage}
        disabled={isLoading}
        className="w-full px-6 py-3 bg-[#FF9800] text-black rounded-full font-medium flex items-center justify-center gap-2 disabled:opacity-50"
      >
        <Download className="w-5 h-5" />
        Download DP
      </motion.button>
    </div>
  );
}
