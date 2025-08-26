import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Upload, Palette, Eye, Download, Share2 } from "lucide-react";

function DPSection() {
  return (
    <section className="relative bg-white overflow-hidden">
      {/* Top decorative image - full width, no margins, no spacing */}
      <div className="w-full">
        <Image
          src="/Screenshot 2025-08-24 at 21.21.37.png"
          alt="Decorative pattern"
          width={1920}
          height={80}
          className="w-full h-16 md:h-20 object-cover"
        />
      </div>

      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-80 h-80 bg-[#4285f4]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#34a853]/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#ea4335]/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-12 md:py-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <motion.span 
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-2 px-6 py-2 bg-black/5 backdrop-blur-sm rounded-full text-sm mb-6 border border-black/10 font-semibold text-black"
          >
            DP GENERATOR
          </motion.span>

          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl lg:text-6xl font-bold mb-6 text-black"
          >
            Create Your DevFest Ogbomoso 2025 DP
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl text-gray-800 max-w-2xl mx-auto mb-8 md:mb-12"
          >
            Show your excitement for DevFest 2025 with a personalized display picture. Let everyone know you'll be there!
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left side - Enhanced DP Preview with Glassmorphism */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto">
              <motion.div
                initial={{ rotate: -5, scale: 0.95 }}
                whileInView={{ rotate: 0, scale: 1 }}
                transition={{ duration: 0.7, type: "spring" }}
                className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl p-6 md:p-8 border-2 border-white/70 relative overflow-hidden"
              >
                {/* Glassmorphism effect elements */}
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-[#4285f4]/20 rounded-full blur-md" />
                <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-[#34a853]/20 rounded-full blur-md" />
                
                <div className="grid grid-cols-3 grid-rows-3 gap-3 md:gap-4 aspect-square relative z-10">
                  {/* Top Row */}
                  <div className="bg-gradient-to-br from-[#34a853] to-[#34a853]/90 col-span-2 rounded-2xl p-3 md:p-4 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/10"></div>
                    <div className="flex space-x-2 absolute top-2 md:top-3 left-2 md:left-3">
                      <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-white/90 rounded-full" />
                      <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-white/90 rounded-full" />
                      <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-white/90 rounded-full" />
                    </div>
                    <div className="text-white text-xs font-medium mt-4 md:mt-6">
                      WITH 100% STEEZE,
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-[#fbbc04] to-[#fbbc04]/90 rounded-2xl row-span-2 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/10"></div>
                    <Image
                      src="/devfest.jpeg"
                      alt="Profile"
                      fill
                      className="object-cover rounded-2xl"
                    />
                  </div>

                  {/* Middle Row */}
                  <div className="bg-gradient-to-br from-[#ea4335] to-[#ea4335]/90 col-span-2 rounded-2xl p-3 md:p-4 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/10"></div>
                    <div className="text-white text-base md:text-lg font-bold">Osamudiame</div>
                    <div className="text-white text-xs opacity-90">WILL BE AT</div>
                  </div>

                  {/* Bottom Row */}
                  <div className="bg-gradient-to-br from-[#4285f4] to-[#4285f4]/90 col-span-2 rounded-2xl p-3 md:p-4 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/10"></div>
                    <div className="text-white text-sm md:text-md font-bold flex items-center gap-1">
                      <span>{`{`}</span>
                      <span>DevFest</span>
                      <span>{`}`}</span>
                    </div>
                    <div className="bg-white/90 text-[#4285f4] rounded-lg px-2 py-1 text-xs font-bold inline-block mt-1">
                      Ogbomoso 2025
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-[#34a853] to-[#34a853]/90 rounded-2xl p-3 md:p-4 relative overflow-hidden flex items-center justify-center">
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/10"></div>
                    <div className="text-white text-sm font-bold text-center">
                      Dec 5-6
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right side - Content and Steps */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-black"
          >
            <h3 className="text-2xl font-bold mb-6 md:mb-8">Create your DP in 4 simple steps:</h3>
            
            {/* Steps */}
            <div className="space-y-4 md:space-y-6 mb-8 md:mb-10">
              {/* Step 1 */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="flex items-start gap-4 p-4 md:p-5 bg-white/90 backdrop-blur-sm rounded-xl border border-white/70 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 bg-[#4285f4] rounded-full flex items-center justify-center text-white font-bold shadow-md">
                  1
                </div>
                <div>
                  <h4 className="font-semibold mb-1 flex items-center gap-2">
                    <Upload className="w-4 h-4 text-[#4285f4]" />
                    Upload your picture
                  </h4>
                  <p className="text-sm text-gray-700">Select a photo from your device to personalize your DP</p>
                </div>
              </motion.div>

              {/* Step 2 */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="flex items-start gap-4 p-4 md:p-5 bg-white/90 backdrop-blur-sm rounded-xl border border-white/70 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 bg-[#34a853] rounded-full flex items-center justify-center text-white font-bold shadow-md">
                  2
                </div>
                <div>
                  <h4 className="font-semibold mb-1 flex items-center gap-2">
                    <Palette className="w-4 h-4 text-[#34a853]" />
                    Select your color theme
                  </h4>
                  <p className="text-sm text-gray-700">Choose from our Google-inspired color palette</p>
                </div>
              </motion.div>

              {/* Step 3 */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9, duration: 0.6 }}
                className="flex items-start gap-4 p-4 md:p-5 bg-white/90 backdrop-blur-sm rounded-xl border border-white/70 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 bg-[#fbbc04] rounded-full flex items-center justify-center text-white font-bold shadow-md">
                  3
                </div>
                <div>
                  <h4 className="font-semibold mb-1 flex items-center gap-2">
                    <Eye className="w-4 h-4 text-[#fbbc04]" />
                    Preview your DP
                  </h4>
                  <p className="text-sm text-gray-700">See how your personalized DP will look before finalizing</p>
                </div>
              </motion.div>

              {/* Step 4 */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.0, duration: 0.6 }}
                className="flex items-start gap-4 p-4 md:p-5 bg-white/90 backdrop-blur-sm rounded-xl border border-white/70 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 bg-[#ea4335] rounded-full flex items-center justify-center text-white font-bold shadow-md">
                  4
                </div>
                <div>
                  <h4 className="font-semibold mb-1 flex items-center gap-2">
                    <Download className="w-4 h-4 text-[#ea4335]" />
                    Download & Share
                  </h4>
                  <p className="text-sm text-gray-700">Download your DP or share it directly on social media</p>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.6 }}
            >
              <Link href="/dp">
                <motion.button
                  whileHover={{ 
                    scale: 1.05, 
                    backgroundColor: "#4285f4",
                    color: "white"
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full border-2 border-[#4285f4] text-[#4285f4] px-6 py-3 md:px-8 md:py-4 rounded-full font-semibold transition-all duration-300 inline-flex items-center justify-center gap-2"
                >
                  <span>Create Your DP Now</span>
                  <Share2 className="w-4 h-4 md:w-5 md:h-5" />
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom decorative image - full width, no margins */}
      <div className="w-full">
        <Image
          src="/Screenshot 2025-08-24 at 21.21.37.png"
          alt="Decorative pattern"
          width={1920}
          height={80}
          className="w-full h-16 md:h-20 object-cover"
        />
      </div>
    </section>
  );
}

export default DPSection;