/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Confetti from "react-confetti";
import { CanvasConfig } from "./components/CanvasPreview/types";
import { CanvasPreview } from "./components/CanvasPreview/CanvasPreview";

interface DPData {
  name: string;
  photo: string;
}

function DPPreview() {
  const [dpData, setDpData] = useState<DPData | null>(null);
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    const storedData = localStorage.getItem("dp");
    if (storedData) {
      setDpData(JSON.parse(storedData));
    }
  }, []);

  if (!dpData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500">
          No DP generated yet. Please create one first.
        </p>
      </div>
    );
  }
  const config: CanvasConfig = {
    baseImage: "/io.jpeg",
    overlayImage: dpData.photo,
    texts: [
      {
        content: "Feranmi Adeniji",
        position: { x: 25, y: 230 },
        font: "Arial",
        color: "#FFFFFF",
        size: 18,
        background: {
          color: "#FF9800",
          padding: {
            top: 0,
            right: 5,
            bottom: 5,
            left: 5,
          },
          borderRadius: 8,
        },
      },
    ],
    overlayPosition: { x: 20, y: 80 },
    overlaySize: { width: 150, height: 150 },
  };

  return (
    <section className="min-h-screen bg-[#FFF5E1] py-16 text-black">
      {showConfetti && <Confetti recycle={false} numberOfPieces={200} />}
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-2">
            <span className="text-2xl">Viola ✨</span>
            <br />
            Here's your DP
          </h1>
        </motion.div>

        <CanvasPreview
          config={config}
          width={500}
          height={550}
          onError={(error) => console.error(error)}
        />
      </div>
    </section>
  );
}

export default DPPreview;
