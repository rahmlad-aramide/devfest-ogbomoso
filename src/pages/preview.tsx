/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { motion } from "framer-motion";
import { ArrowUpRight, Quote } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import Confetti from "react-confetti";

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

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", duration: 0.5 }}
          className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-6"
        >
          <div className="grid grid-cols-6 grid-rows-6 gap-3 aspect-square">
            {/* Top Section */}
            <div className="col-span-4 row-span-2 bg-emerald-500 p-4 relative">
              <ArrowUpRight className="absolute top-2 left-2 text-white w-5 h-5" />
              <div className="flex space-x-2 absolute top-2 right-2">
                <div className="w-2 h-2 bg-white rounded-full" />
                <div className="w-2 h-2 bg-white rounded-full" />
                <div className="w-2 h-2 bg-white rounded-full" />
              </div>
              <div className="flex items-end h-full">
                <div className="text-white text-lg font-medium">
                  LOOKING VERY
                  <br />
                  MINDFUL AND DEMURE
                </div>
              </div>
              <Quote className="absolute bottom-2 left-2 text-white/50 w-8 h-8" />
            </div>

            {/* Top Right */}
            <div className="col-span-2 row-span-3 bg-coral-400 p-4 relative overflow-hidden">
              <div className="absolute inset-0">
                <div className="absolute inset-4 bg-[#FFF5E1] rounded-full">
                  <img
                    src={dpData.photo}
                    alt="Profile"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
            </div>

            {/* Middle Left */}
            <div className="col-span-4 row-span-2 bg-blue-400 p-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="h-full flex flex-col justify-center"
              >
                <div className="text-white text-3xl font-bold mb-1">
                  {dpData.name}
                </div>
                <div className="text-white/80 text-lg">WILL BE AT</div>
              </motion.div>
            </div>

            {/* Bottom Section */}
            <div className="col-span-6 row-span-2 bg-amber-300 p-4 items-center w-full flex justify-between">
              <div className="w-[70%] flex items-center justify-center">
              <Image
                src="/devfest-ogbomoso-logo.svg"
                alt="GDG Logo"
                width={200}
                height={32}
              />
              </div>
              <div className="flex flex-col gap-2">
                <div className="bg-[#8ab4f7] p-1">
                  <div className="text-white text-sm">
                    <div className="font-medium text-gray-600">Date</div>
                    <div className="text-black text-lg font-bold">
                      15 - 16th Nov
                    </div>
                  </div>
                </div>
                <div className="bg-[#8ab4f7] p-3">
                  <div className="text-sm">
                    <div className="font-medium mb-1 text-gray-600">Venue</div>
                    <div className="text-black font-bold">
                      Landmark Event Center
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* City Skyline */}
          <div className="mt-4 h-12 bg-gradient-to-r from-coral-400 via-emerald-500 to-coral-400 rounded-xl relative overflow-hidden">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute inset-0 flex items-end"
            >
              <svg
                className="w-full"
                viewBox="0 0 400 50"
                preserveAspectRatio="none"
              >
                <path
                  d="M0,50 L0,30 C30,25 60,40 90,35 C120,30 150,15 180,20 C210,25 240,40 270,35 C300,30 330,15 360,20 L400,30 L400,50 Z"
                  fill="rgba(16,185,129,1)"
                />
              </svg>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-8"
        >
          <button
            onClick={() => {
              const link = document.createElement("a");
              link.download = "devfest-dp.png";
              link.href = dpData.photo;
              link.click();
            }}
            className="bg-[#FF9800] text-black px-8 py-3 rounded-full font-medium inline-flex items-center gap-2"
          >
            Download DP
          </button>
        </motion.div>
      </div>
    </section>
  );
}

export default DPPreview;
