/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion"
import { Globe, Calendar } from "lucide-react"
import Confetti from "react-confetti"
import { useEffect, useState } from "react"
import Image from "next/image"

function Preview() {
  const [showConfetti, setShowConfetti] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setShowConfetti(false), 5000)
    return () => clearTimeout(timer)
  }, [])

  const decorativeElements = [
    { type: "square", color: "#FFD700", rotate: 45 },
    { type: "circle", color: "#FF69B4", rotate: 0 },
    { type: "bracket", color: "#32CD32", rotate: 0 },
    { type: "arrow", color: "#FFA500", rotate: 0 },
  ]

  return (
    <section className="min-h-screen bg-[#90EE90] py-16 relative overflow-hidden">
      {showConfetti && <Confetti recycle={false} numberOfPieces={200} />}

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-3xl font-bold mb-8">See you @</h1>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Side - Payment Preview */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white rounded-2xl p-6 shadow-lg"
            >
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Total Payment</span>
                  <span className="text-blue-600">Apply Now</span>
                </div>
                <div className="text-2xl font-bold">₦0.00</div>
                <button className="w-full bg-blue-600 text-white py-2 rounded-lg">
                  Let's Move
                </button>
                <div className="text-sm text-gray-500">
                  Available Limit: ₦750,000.00
                </div>
              </div>
            </motion.div>

            {/* Right Side - DevFest Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                className="text-4xl font-bold flex items-center gap-2"
              >
                <span>{`{`}</span>
                <span className="text-[#2E8B57]">DevFest</span>
                <span>{`}`}</span>
              </motion.div>

              <div className="space-y-4">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-white rounded-full py-2 px-4 inline-flex items-center gap-2"
                >
                  <Globe className="w-5 h-5" />
                  <span>devfestIlorin.com</span>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-white rounded-full py-2 px-4 inline-flex items-center gap-2"
                >
                  <Calendar className="w-5 h-5" />
                  <span>17th-19th Oct, 2024</span>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-white rounded-full py-2 px-4 inline-flex items-center gap-2"
                >
                  <Image
                    src="/gdg-ogbomoso-logo.svg"
                    alt="GDG Logo"
                    width={20}
                    height={20}
                    className="w-5 h-5"
                  />
                  <span>Metropolitan Square</span>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Decorative Elements */}
          {decorativeElements.map((element, index) => (
            <motion.div
              key={index}
              className="absolute"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: "30px",
                height: "30px",
                background: element.color,
                borderRadius: element.type === "circle" ? "50%" : "0",
                transform: `rotate(${element.rotate}deg)`,
              }}
              animate={{
                y: [0, -10, 0],
                rotate: [0, 360],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}

          {/* Username Display */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8"
          >
            <div className="bg-[#2E8B57] text-white py-3 px-6 rounded-lg text-xl font-bold text-center">
              feranmi
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Preview
