/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { motion } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import Confetti from "react-confetti"
// import { CanvasConfig } from "./components/CanvasPreview/types"
// import Image from "next/image"
import DpCard from "./DpCard"
import { useSearchParams } from "next/navigation"
import { Download } from "lucide-react"
// import html2canvas from "html2canvas"
// import CanvasPreview from "./components/CanvasPreview/CanvasPreview";
import { toPng } from "html-to-image"

interface DPData {
  name: string
  photo: string
}

function DPPreview() {
  // const canvasRef = useRef<HTMLCanvasElement>(null)
  const divRef = useRef<HTMLDivElement>(null)
  const [dpData, setDpData] = useState<DPData | null>(null)
  const [showConfetti, setShowConfetti] = useState(true)
  const searchParams = useSearchParams()
  const dpBgColor = searchParams.get("bg")!
  const dpBackground = ["#DBE8FF", "#FFF9F9", "#ECFFF5", "#FFF8E8"]
  const dbTextColors = ["#4285f4", "#ea4335", "#34a853", "#f9ab00"]

  useEffect(() => {
    const storedData = localStorage.getItem("dp")
    if (storedData) {
      setDpData(JSON.parse(storedData))
    }
  }, [])

  // useEffect(() => {
  //   if (dpData && canvasRef.current) {
  //     const canvas = canvasRef.current
  //     const ctx = canvas.getContext("2d")
  //     if (!ctx) return

  //     // Clear the canvas
  //     ctx.clearRect(0, 0, canvas.width, canvas.height)

  //     // Background
  //     ctx.fillStyle = "#FFF5E1"
  //     ctx.fillRect(0, 0, canvas.width, canvas.height)

  //     // Draw the profile picture
  //     const img = new window.Image() as HTMLImageElement
  //     img.src = dpData.photo
  //     img.onload = () => {
  //       ctx.drawImage(img, 20, 20, 150, 150) // Adjust size and position
  //     }

  //     // Draw the name
  //     ctx.fillStyle = "#000"
  //     ctx.font = "20px Arial"
  //     ctx.fillText(dpData.name, 20, 200) // Adjust position
  //   }
  // }, [dpData])

  // const downloadImage = () => {
  //   const canvas = canvasRef.current
  //   if (!canvas) return

  //   const link = document.createElement("a")
  //   link.download = "devfest-dp.png"
  //   link.href = canvas.toDataURL("image/png")
  //   document.body.appendChild(link)
  //   link.click()
  //   document.body.removeChild(link)
  // }

  // const downloadImage = () => {
  //   const dpCardElement = document.getElementById("dp-card")
  //   if (!dpCardElement) return

  //   const canvas = document.createElement("canvas")
  //   const context = canvas.getContext("2d")

  //   // Set canvas size
  //   const { width, height } = dpCardElement.getBoundingClientRect()
  //   canvas.width = width
  //   canvas.height = height

  //   // Render the DP card to the canvas
  //   context?.scale(window.devicePixelRatio, window.devicePixelRatio)
  //   context?.drawImage(dpCardElement, 0, 0, width, height)

  //   // Download as JPG
  //   const link = document.createElement("a")
  //   link.download = "devfest-dp.jpg"
  //   link.href = canvas.toDataURL("image/jpeg", 0.95)
  //   document.body.appendChild(link)
  //   link.click()
  //   document.body.removeChild(link)
  // }

  // const downloadImage = async () => {
  //   const dpCardElement = document.getElementById("dp-card");
  //   if (!dpCardElement) return;

  //   try {
  //     const dataUrl = await domtoimage.toJpeg(dpCardElement, { quality: 0.95 });
  //     const link = document.createElement("a");
  //     link.download = "devfest-dp.jpg";
  //     link.href = dataUrl;
  //     document.body.appendChild(link);
  //     link.click();
  //     document.body.removeChild(link);
  //   } catch (error) {
  //     console.error("Error generating the image:", error);
  //   }
  // };

  // const downloadImage = () => {
  //   const dpImage = document.getElementById("dp-card")
  //   const canvas = canvasRef.current
  //   if (!canvas || !dpData?.photo) return

  //   const context = canvas.getContext("2d")
  //   const img = new window.Image()
  //   img.src = dpImage!

  //   img.onload = () => {
  //     const width = img.width
  //     const height = img.height

  //     canvas.width = width
  //     canvas.height = height

  //     // Draw the selected image onto the canvas
  //     context?.drawImage(img, 0, 0, width, height)

  //     // Download the image as JPG
  //     const link = document.createElement("a")
  //     link.download = "devfest-dp.jpg"
  //     link.href = canvas.toDataURL("image/jpeg", 0.95) // Save as JPG
  //     document.body.appendChild(link)
  //     link.click()
  //     document.body.removeChild(link)
  //   }
  // }

  // const downloadImage = async () => {
  //   const dpCardElement = document.getElementById("dp-card")
  //   if (!dpCardElement) return

  //   try {
  //     const canvas = await html2canvas(dpCardElement, { useCORS: true })
  //     const link = document.createElement("a")
  //     link.download = "devfest-dp.jpeg"
  //     link.href = canvas.toDataURL("image/jpeg", 0.95)
  //     document.body.appendChild(link)
  //     link.click()
  //     document.body.removeChild(link)
  //   } catch (error) {
  //     console.error("Error generating the image:", error)
  //   }
  // }

  const downloadImage = async () => {
    if (divRef.current) {
      try {
        const dataUrl = await toPng(divRef.current)
        const link = document.createElement("a")
        link.download = "screenshot.png"
        link.href = dataUrl
        link.click()
      } catch (error) {
        console.error("Failed to capture image:", error)
      }
    }
  }

  if (!dpData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500">No DP generated yet. Please create one first.</p>
      </div>
    )
  }
  // const config: CanvasConfig = {
  //   baseImage: "/io.jpeg",
  //   overlayImage: dpData.photo,
  //   texts: [
  //     {
  //       content: "Feranmi Adeniji",
  //       position: { x: 25, y: 230 },
  //       font: "Arial",
  //       color: "#FFFFFF",
  //       size: 18,
  //       background: {
  //         color: "#FF9800",
  //         padding: {
  //           top: 0,
  //           right: 5,
  //           bottom: 5,
  //           left: 5,
  //         },
  //         borderRadius: 8,
  //       },
  //     },
  //   ],
  //   overlayPosition: { x: 20, y: 80 },
  //   overlaySize: { width: 150, height: 150 },
  // }

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
        <div className="w-[350px] lg:w-[500px] h-[200px] lg:h-[300px] mx-auto">
          <DpCard
            id={divRef}
            background={dpBackground[parseInt(dpBgColor)]}
            textColor={dbTextColors[parseInt(dpBgColor)]}
            name={dpData.name}
            image={dpData.photo}
          />
        </div>

        {/* <canvas ref={divRef} width={500} height={300} className="hidden" /> */}

        <button
          onClick={downloadImage}
          style={{
            backgroundColor: dbTextColors[parseInt(dpBgColor)],
            color: dpBackground[parseInt(dpBgColor)],
          }}
          className="w-[350px] lg:w-[500px] h-[40px] rounded-full flex items-center gap-2 justify-center mx-auto mt-7"
        >
          Download Your DP <Download className="w-5 h-5" />
        </button>
        {/* <CanvasPreview
          config={config}
          width={500}
          height={550}
          onError={(error) => console.error(error)}
        /> */}
      </div>
    </section>
  )
}

export default DPPreview
