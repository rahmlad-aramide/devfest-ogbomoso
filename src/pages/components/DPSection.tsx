/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

function DPSection() {
  return (
    <section className="relative min-h-[80vh] bg-[#FFF5E1] flex items-center">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - DP Preview */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto">
              <motion.div
                initial={{ rotate: -5 }}
                animate={{ rotate: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-lg shadow-xl p-4"
              >
                <div className="grid grid-cols-3 grid-rows-3 gap-2 aspect-square">
                  {/* Top Row */}
                  <div className="bg-green-400 col-span-2 rounded-lg p-4 relative">
                    <div className="flex space-x-2 absolute top-2 left-2">
                      <div className="w-2 h-2 bg-white rounded-full" />
                      <div className="w-2 h-2 bg-white rounded-full" />
                      <div className="w-2 h-2 bg-white rounded-full" />
                    </div>
                    <div className="text-white text-sm mt-4">
                      WITH 100% STEEZE,
                    </div>
                  </div>
                  <div className="bg-yellow-300 rounded-lg row-span-2 relative">
                    <Image
                      src="/devfest.jpeg"
                      alt="Profile"
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>

                  {/* Middle Row */}
                  <div className="bg-red-400 col-span-2 rounded-lg p-4">
                    <div className="text-white text-xl">Osamudiame</div>
                    <div className="text-white text-sm">WILL BE AT</div>
                  </div>

                  {/* Bottom Row */}
                  <div className="bg-blue-400 col-span-2 rounded-lg p-4">
                    <div className="text-white text-lg flex items-center gap-2">
                      <span>{`{`}</span>
                      <span>DevFest</span>
                      <span>{`}`}</span>
                    </div>
                    <div className="bg-white text-blue-400 rounded px-2 text-sm inline-block mt-1">
                      Lagos
                    </div>
                  </div>
                  <div className="bg-green-400 rounded-lg p-2">
                    <div className="text-white text-xs">
                      24th Nov
                      <div className="mt-2">Landmark Event Center</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right side - Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center text-black flex flex-col items-center gap-6"
          >
            <div className="inline-block w-fit px-4 py-2 bg-white rounded-full text-sm mb-6">
              DP GENERATOR
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Generate your Devfest Lagos '24 DP
            </h1>
            <p className="text-gray-600 mb-8 text-lg">
              Let everyone know that you will be at Devfest 2024 no matter what.
              Create your own super cool DP
            </p>
            <Link href="/dp">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#FF9800] text-black px-8 py-4 rounded-full font-medium inline-flex items-center gap-2"
              >
                Let's go
                <span className="text-xl">→</span>
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default DPSection;
