"use client";

import { useEffect, useRef, useState, Suspense } from "react";
import Confetti from "react-confetti";
import { Download } from "lucide-react";
import { useSearchParams } from "next/navigation";
import CanvasPreview from "./components/CanvasPreview/CanvasPreview";

interface DPData {
  name: string;
  photo: string;
}

function DPPreviewContent() {
  const [dpData, setDpData] = useState<DPData | null>(null);
  const [showConfetti, setShowConfetti] = useState(true);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const searchParams = useSearchParams();
  const dpBgColor = searchParams.get("bg") || "0";

  const templates = [
    {
      bg: "#FFFFFF",
      topRight: "/dp/green-vector.svg",
      bottomLeft: "/dp/blue-vector.svg",
      bottomRight: "/dp/pink-vector.svg",
      arrows: "/dp/white-arrows.svg",
      nameBoxBg: "#FFFBF1",
    },
    {
      bg: "#F8D8D8", // Pink background
      topRight: "/dp/green-vector.svg",
      bottomLeft: "/dp/grey-vector.svg",
      bottomRight: "/dp/pink-vector.svg",
      arrows: "/dp/white-arrows.svg",
      nameBoxBg: "#FAE4E4",
    },
    {
      bg: "#CCF6C5", // Green background
      topRight: "/dp/dark-yellow-vector.svg",
      bottomLeft: "/dp/grey-vector.svg",
      bottomRight: "/dp/pink-vector.svg",
      arrows: "/dp/green-arrows.svg",
      nameBoxBg: "#EEFCEC",
    },
    {
      bg: "#C3EBF5", // Blue background
      topRight: "/dp/dark-yellow-vector.svg",
      bottomLeft: "/dp/grey-vector.svg",
      bottomRight: "/dp/pink-vector.svg",
      arrows: "/dp/blue-arrows.svg",
      nameBoxBg: "#ECF9FC",
    },
  ];

  const templateIndex = Math.min(
    Number.parseInt(dpBgColor),
    templates.length - 1
  );
  const template = templates[templateIndex];

  useEffect(() => {
    const storedData = localStorage.getItem("dp");
    if (storedData) {
      setDpData(JSON.parse(storedData));
    }
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setShowConfetti(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  const downloadImage = async () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const link = document.createElement("a");
    link.download = `devfest-dp-${Date.now()}.png`;
    link.href = canvas.toDataURL("image/png", 1.0);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (!dpData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 to-orange-100">
        <div className="text-center">
          <p className="text-gray-600 text-lg mb-4">
            No DP generated yet. Please create one first.
          </p>
          <a
            href="/"
            className="inline-block px-6 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors"
          >
            Go Back
          </a>
        </div>
      </div>
    );
  }

  // Container: 67.5rem = 1080px (1rem = 16px)
  // pt-[3.5rem] = 56px
  // pb-10 = 40px after h1
  // DevFest logo y = 56 + 40 = 96px area (logo height ~100px)
  // pt-20 = 80px before photo box
  // Photo box starts at approximately: 56 + 64 + 100 + 80 = 300px (adjusted for centering)
  // Photo: w-[26rem] = 416px, h-[24rem] = 384px
  // Photo x = (1080 - 416) / 2 = 332px

  const canvasConfig = {
    userImage: dpData.photo,
    userName: dpData.name, // Pass name separately for name box
    userBox: {
      x: 332,
      y: 300,
      width: 416,
      height: 384,
    },
    backgroundColor: template.bg,
    nameBoxBg: template.nameBoxBg,
    images: [
      // Yellow vector - absolute top-0 left-0
      {
        src: "/dp/yellow-vector.svg",
        position: { x: -20, y: -20 },
        size: { width: 140, height: 140 },
      },

      {
        src: template.topRight,
        position: { x: 770, y: -20 },
        size: { width: 180, height: 125 },
      },
      // Blue path/brackets - right side
      {
        src: "/dp/blue-path.svg",
        position: { x: 790, y: 350 },
        size: { width: 140, height: 150 },
      },
      // Arrows - left side
      {
        src: template.arrows,
        position: { x: 80, y: 540 },
        size: { width: 120, height: 100 },
      },
      // Bottom left vector
      {
        src: template.bottomLeft,
        position: { x: -40, y: 860 },
        size: { width: 140, height: 140 },
      },
      // Bottom right vector (pink)
      {
        src: template.bottomRight,
        position: { x: 980, y: 680 },
        size: { width: 160, height: 160 },
      },
      // DevFest logo - centered
      {
        src: "/dp/devfest-logo.png",
        position: { x: 356, y: 120 },
        size: { width: 368, height: 100 },
      },

      {
        src: "/dp/calendar.svg",
        position: { x: 375, y: 778 },
        size: { width: 32, height: 32 },
      },
      // Location icon
      {
        src: "/dp/location.svg",
        position: { x: 270, y: 838 },
        size: { width: 32, height: 32 },
      },

      {
        src: "/dp/gdg-logo.svg",
        position: { x: 473, y: 948 },
        size: { width: 123, height: 60 },
      },
    ],
    texts: [
      {
        content: "I will be attending",
        position: { x: 540, y: 56 },
        font: "Product Sans, Arial, sans-serif",
        color: "#000000",
        size: 40,
        weight: "normal" as const,
        textAlign: "center" as const,
      },
      {
        content: "5th & 6th December, 2025",
        position: { x: 431, y: 780 },
        font: "Product Sans, Arial, sans-serif",
        color: "rgba(30,30,30,0.93)",
        size: 27,
        weight: "normal" as const,
        textAlign: "left" as const,
      },
      {
        content: "The Assembly,   ",
        position: { x: 318, y: 838 },
        font: "Product Sans, Arial, sans-serif",
        color: "#1e1e1e",
        size: 26,
        weight: "bold" as const,
        textAlign: "left" as const,
      },
      {
        content: "   beside LAUTECH, Ogbomoso,",
        position: { x: 486, y: 838 },
        font: "Product Sans, Arial, sans-serif",
        color: "#1e1e1e",
        size: 26,
        weight: "normal" as const,
        textAlign: "left" as const,
      },
      {
        content: "Ogbomoso - Ilorin Rd., Oyo State, Nigeria.",
        position: { x: 318, y: 875 },
        font: "Product Sans, Arial, sans-serif",
        color: "#1e1e1e",
        size: 26,
        weight: "normal" as const,
        textAlign: "left" as const,
      },
      // Pill center x = 359 + 45 = 404
      {
        content: "2025",
        position: { x: 404, y: 965 },
        font: "Product Sans, Arial, sans-serif",
        color: "#000000",
        size: 34,
        weight: "normal" as const,
        textAlign: "center" as const,
        isPill: true,
      },
      // Text x = 473 + 123 + 24 = 620
      {
        content: "Google\nDeveloper\nGroups",
        position: { x: 620, y: 948 },
        font: "Product Sans, Arial, sans-serif",
        color: "#1e1e1e",
        size: 19,
        weight: "normal" as const,
        textAlign: "left" as const,
      },
    ],
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-orange-50 to-orange-100 py-12 text-gray-900">
      {showConfetti && <Confetti recycle={false} numberOfPieces={200} />}

      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-2">
            <span className="text-3xl">Viola</span>
            <br />
            {"Here's your DP"}
          </h1>
        </div>

        <div className="flex flex-col items-center gap-8">
          <div className="w-full max-w-2xl aspect-square rounded-2xl shadow-2xl overflow-hidden bg-white">
            <CanvasPreview
              ref={canvasRef}
              config={canvasConfig}
              width={1080}
              height={1080}
            />
          </div>

          <button
            onClick={downloadImage}
            className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-3 rounded-full flex items-center gap-2 hover:shadow-lg transition-all font-semibold text-lg cursor-pointer"
          >
            Download Your DP
            <Download className="w-5 h-5" />
          </button>

          <a
            href="/dp"
            className="text-orange-600 hover:text-orange-700 font-medium transition-colors"
          >
            Create Another DP
          </a>
        </div>
      </div>
    </section>
  );
}

export default function DPPreview() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          Loading...
        </div>
      }
    >
      <DPPreviewContent />
    </Suspense>
  );
}
