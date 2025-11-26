/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Confetti from "react-confetti";
// import { CanvasConfig } from "./components/CanvasPreview/types"
import Image from "next/image";
import DpCard from "./DpCard";
import { useSearchParams } from "next/navigation";
import { Download, MapPin, Calendar, Clock } from "lucide-react";
// import html2canvas from "html2canvas"
// import CanvasPreview from "./components/CanvasPreview/CanvasPreview";
import { toJpeg } from "html-to-image";
import { CanvasConfig } from "./components/CanvasPreview/types";
import { renderToString } from "react-dom/server";

interface DPData {
  name: string;
  photo: string;
}

// function DPPreview() {
//   const canvasRef = useRef<HTMLCanvasElement>(null)
//   const divRef = useRef<HTMLDivElement | null>(null)
//   const [dpData, setDpData] = useState<DPData | null>(null)
//   const [showConfetti, setShowConfetti] = useState(true)
//   const searchParams = useSearchParams()
//   const dpBgColor = searchParams.get("bg")!
//   const dpBackground = ["#DBE8FF", "#FFF9F9", "#ECFFF5", "#FFF8E8"]
//   const dbTextColors = ["#4285f4", "#ea4335", "#34a853", "#f9ab00"]

//   useEffect(() => {
//     const storedData = localStorage.getItem("dp")
//     if (storedData) {
//       setDpData(JSON.parse(storedData))
//     }
//   }, [])

// //   useEffect(() => {
// //     if (dpData && canvasRef.current) {
// //       const canvas = canvasRef.current
// //       const ctx = canvas.getContext("2d")
// //       if (!ctx) return

// //       // Clear the canvas
// //       ctx.clearRect(0, 0, canvas.width, canvas.height)

// //       // Background
// //       ctx.fillStyle = "#FFF5E1"
// //       ctx.fillRect(0, 0, canvas.width, canvas.height)

// //       // Draw the profile picture
// //       const img = new window.Image() as HTMLImageElement
// //       img.src = dpData.photo
// //       img.onload = () => {
// //         ctx.drawImage(img, 20, 20, 150, 150) // Adjust size and position
// //       }

// //       // Draw the name
// //       ctx.fillStyle = "#000"
// //       ctx.font = "20px Arial"
// //       ctx.fillText(dpData.name, 20, 200) // Adjust position
// //     }
// //   }, [dpData])

//   const downloadImage = () => {
//     const canvas = canvasRef.current
//     if (!canvas) return

//     const link = document.createElement("a")
//     link.download = "devfest-dp.png"
//     link.href = canvas.toDataURL("image/png")
//     document.body.appendChild(link)
//     link.click()
//     document.body.removeChild(link)
//   }

// //   const downloadImage = () => {
// //     const dpCardElement = document.getElementById("dp-card")
// //     if (!dpCardElement) return

// //     const canvas = document.createElement("canvas")
// //     const context = canvas.getContext("2d")

// //     // Set canvas size
// //     const { width, height } = dpCardElement.getBoundingClientRect()
// //     canvas.width = width
// //     canvas.height = height

// //     // Render the DP card to the canvas
// //     context?.scale(window.devicePixelRatio, window.devicePixelRatio)
// //     context?.drawImage(dpCardElement, 0, 0, width, height)

// //     // Download as JPG
// //     const link = document.createElement("a")
// //     link.download = "devfest-dp.jpg"
// //     link.href = canvas.toDataURL("image/jpeg", 0.95)
// //     document.body.appendChild(link)
// //     link.click()
// //     document.body.removeChild(link)
// //   }

// //   const downloadImage = async () => {
// //     const dpCardElement = document.getElementById("dp-card");
// //     if (!dpCardElement) return;

// //     try {
// //       const dataUrl = await domtoimage.toJpeg(dpCardElement, { quality: 0.95 });
// //       const link = document.createElement("a");
// //       link.download = "devfest-dp.jpg";
// //       link.href = dataUrl;
// //       document.body.appendChild(link);
// //       link.click();
// //       document.body.removeChild(link);
// //     } catch (error) {
// //       console.error("Error generating the image:", error);
// //     }
// //   };

// //   const downloadImage = () => {
// //     const dpImage = document.getElementById("dp-card")
// //     const canvas = canvasRef.current
// //     if (!canvas || !dpData?.photo) return

// //     const context = canvas.getContext("2d")
// //     const img = new window.Image()
// //     img.src = dpImage!

// //     img.onload = () => {
// //       const width = img.width
// //       const height = img.height

// //       canvas.width = width
// //       canvas.height = height

// //       // Draw the selected image onto the canvas
// //       context?.drawImage(img, 0, 0, width, height)

// //       // Download the image as JPG
// //       const link = document.createElement("a")
// //       link.download = "devfest-dp.jpg"
// //       link.href = canvas.toDataURL("image/jpeg", 0.95) // Save as JPG
// //       document.body.appendChild(link)
// //       link.click()
// //       document.body.removeChild(link)
// //     }
// //   }

// //   const downloadImage = async () => {
// //     const dpCardElement = document.getElementById("dp-card")
// //     if (!dpCardElement) return

// //     try {
// //       const canvas = await html2canvas(dpCardElement, { useCORS: true })
// //       const link = document.createElement("a")
// //       link.download = "devfest-dp.jpeg"
// //       link.href = canvas.toDataURL("image/jpeg", 0.95)
// //       document.body.appendChild(link)
// //       link.click()
// //       document.body.removeChild(link)
// //     } catch (error) {
// //       console.error("Error generating the image:", error)
// //     }
// //   }

// //   const downloadImage = async () => {
// //     if (divRef.current) {
// //       try {
// //         const dataUrl = await toJpeg(divRef.current)
// //         const link = document.createElement("a")
// //         link.download = "screenshot.png"
// //         link.href = dataUrl
// //         link.click()
// //       } catch (error) {
// //         console.error("Failed to capture image:", error)
// //       }
// //     }
// //   }

//   if (!dpData) {
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         <p className="text-gray-500">No DP generated yet. Please create one first.</p>
//       </div>
//     )
//   }
//   const config: CanvasConfig = {
//     baseImage: "",
//     overlayImage: "",
//     texts: [
//       {
//         content: "I will be attending",
//         position: { x: 25, y: 230 },
//         font: "Arial",
//         color: "#FFFFFF",
//         size: 18,
//         background: {
//           color: "#FF9800",
//           padding: {
//             top: 0,
//             right: 5,
//             bottom: 5,
//             left: 5,
//           },
//           borderRadius: 8,
//         },
//       },
//     ],
//     overlayPosition: { x: 20, y: 80 },
//     overlaySize: { width: 150, height: 150 },
//   }

//   return (
//     <section className="min-h-screen bg-[#FFF5E1] py-16 text-black">
//       {showConfetti && <Confetti recycle={false} numberOfPieces={200} />}
//       <div className="container mx-auto px-4">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="text-center mb-12"
//         >
//           <h1 className="text-4xl font-bold mb-2">
//             <span className="text-2xl">Viola ✨</span>
//             <br />
//             Here's your DP
//           </h1>
//         </motion.div>
//         {/* <div className="w-[350px] lg:w-[500px] h-[220px] lg:h-[300px] mx-auto">
//           <DpCard
//             id={divRef}
//             background={dpBackground[parseInt(dpBgColor)]}
//             textColor={dbTextColors[parseInt(dpBgColor)]}
//             name={dpData.name}
//             image={dpData.photo}
//           />
//         </div> */}

//         <canvas ref={canvasRef} width={500} height={300} className="hidden" />

//         {/* <button
//           onClick={downloadImage}
//           style={{
//             backgroundColor: dbTextColors[parseInt(dpBgColor)],
//             color: dpBackground[parseInt(dpBgColor)],
//           }}
//           className="w-[350px] lg:w-[500px] h-[40px] rounded-full flex items-center gap-2 justify-center mx-auto mt-7"
//         >
//           Download Your DP <Download className="w-5 h-5" />
//         </button> */}
//         <CanvasPreview
//           config={config}
//           width={500}
//           height={550}
//           onError={(error) => console.error(error)}
//         />
//       </div>
//     </section>
//   )
// }

// export default DPPreview

import CanvasPreview from "./components/CanvasPreview/CanvasPreview";

export default function DPPreview() {
  const [dpData, setDpData] = useState<DPData | null>(null);
  const [showConfetti, setShowConfetti] = useState(true);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const searchParams = useSearchParams();
  const dpBgColor = searchParams.get("bg") || "0";
  const dpBackground = ["#DBE8FF", "#FFF9F9", "#ECFFF5", "#FFF8E8"];
  const dbTextColors = ["#4285f4", "#ea4335", "#34a853", "#f9ab00"];

  // Function to convert Lucide icon to data URL
  const createIconDataUrl = (IconComponent: any, color = "#444", size = 16) => {
    const svg = renderToString(<IconComponent size={size} color={color} />);

    const svgBlob = new Blob([svg], { type: "image/svg+xml" });
    return URL.createObjectURL(svgBlob);
  };

  useEffect(() => {
    const storedData = localStorage.getItem("dp");
    if (storedData) {
      setDpData(JSON.parse(storedData));
    }
  }, []);

  useEffect(() => {
    // Hide confetti after 3 seconds
    const timer = setTimeout(() => setShowConfetti(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  const downloadImage = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const link = document.createElement("a");
    link.download = "devfest-dp.png";
    link.href = canvas.toDataURL("image/png");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (!dpData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#FFF5E1]">
        <p className="text-gray-500">
          No DP generated yet. Please create one first.
        </p>
      </div>
    );
  }

  const config = {
    baseImage:
      dpBgColor === "0"
        ? "/2025/Doodles - Section Divider - Blue.svg"
        : dpBgColor === "1"
        ? "/2025/Doodles - Section Divider - Red.svg"
        : dpBgColor === "2"
        ? "/2025/Doodles - Section Divider - Green.svg"
        : "/2025/Doodles - Section Divider - Amber.svg", // Use an existing image from public folder as background
    userImage: dpData?.photo || "", // user photo
    userBox: { x: 613, y: 213, width: 533, height: 560 },
    backgroundColor: dpBackground[Number.parseInt(dpBgColor)], // User-selected background color
    images: [
      {
        src: "/2025/devfest-2025.svg",
        position: { x: 53, y: 320 },
        size: { width: 453, height: 133 },
      },
      // Location icon
      {
        src: createIconDataUrl(MapPin, "#444", 16),
        position: { x: 53, y: 507 },
        size: { width: 53, height: 53 },
      },
      // Calendar icon for date
      {
        src: createIconDataUrl(Calendar, "#444", 16),
        position: { x: 53, y: 600 },
        size: { width: 53, height: 53 },
      },
      // Clock icon for time
      {
        src: createIconDataUrl(Clock, "#444", 16),
        position: { x: 53, y: 707 },
        size: { width: 53, height: 53 },
      },
    ],
    texts: [
      {
        content: "I will be attending",
        position: { x: 53, y: 267 },
        font: "'poppins', sans-serif",
        color: "#2b2b2b",
        size: 48,
      },
      // Location
      {
        content: "Ogbomoso, Nigeria",
        position: { x: 133, y: 547 },
        font: "poppins",
        color: "#444",
        size: 43,
      },
      // Date
      {
        content: "December 5&6, 2025",
        position: { x: 133, y: 640 },
        font: "poppins",
        color: "#444",
        size: 40,
      },
      // Time
      {
        content: "9:00 AM - 5:00 PM",
        position: { x: 133, y: 747 },
        font: "poppins",
        color: "#444",
        size: 43,
      },
      {
        content: dpData.name.toUpperCase(),
        position: { x: 600, y: 960 },
        font: "600 poppins",
        color: "#000",
        size: 53,
        textAlign: "center",
        hasGlassmorphism: true,
        glassPadding: { top: 48, right: 427, bottom: 48, left: 427 },
      },
      //       {
      //         content: "DevFest Attendee",
      //         position: { x: 320, y: 390 },
      //         font: "poppins",
      //         color: "#555",
      //         size: 18,
      //       },
    ],
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

        <div className="flex flex-col items-center gap-6">
          <div className="w-[450px] h-[450px]">
            <CanvasPreview
              ref={canvasRef}
              config={config as any}
              width={1200}
              height={1200}
            />
          </div>

          <button
            onClick={downloadImage}
            className="bg-[#FF9800] text-white px-8 py-3 rounded-full flex items-center gap-2 hover:bg-[#FF9800]/90 transition-colors font-semibold"
          >
            Download Your DP <Download className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
