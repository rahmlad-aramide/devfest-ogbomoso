export default DPGenerator;
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */

import DPGeneratorComponent from "./components/DPGenerator";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MetaTags from "./components/MetaTag";
import { motion } from "framer-motion";

function DPGenerator() {
  return (
    <>
      <Header
        buttonText={"RSVP Now"}
        rsvpLink={
          "https://gdg.community.dev/events/details/google-gdg-ogbomoso-presents-devfest-ogbomoso-2025/"
        }
      />
      <MetaTags title="Generate your DP" description={"DevFest Ogbomoso"} />
      {/* Modern White Layout */}
      <main className="w-full min-h-screen bg-[#FFEDB8] flex flex-col items-center justify-center px-4">
        <section
          className="w-full max-w-2xl mx-auto flex flex-col items-center justify-center pb-10"
          style={{ backgroundColor: "#FFEDB8" }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="w-full h-full py-[150px]"
          >
            <h1 className=" text-4xl md:text-5xl font-extrabold text-[#23234a] mb-4 text-center tracking-tight">
              Create Your DevFest 2025 DP
            </h1>
            <p className=" text-base md:text-lg text-gray-500 mb-8 text-center">
              Show your excitement for DevFest Ogbomoso! Upload, customize, and
              share your unique DP.
            </p>
            <div className="gap-6 mb-2 lg:mb-8 flex flex-col lg:flex-row justify-center ">
              <div className="flex items-center gap-2">
                <span className="w-8 h-8 flex items-center justify-center rounded-full bg-[#FF9800] text-white font-bold">
                  1
                </span>
                <span className="text-gray-700 text-xs">Upload your photo</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-8 h-8 flex items-center justify-center rounded-full bg-[#FF9800] text-white font-bold">
                  2
                </span>
                <span className="text-gray-700 text-xs">Customize your DP</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-8 h-8 flex items-center justify-center rounded-full bg-[#FF9800] text-white font-bold">
                  3
                </span>
                <span className="text-gray-700 text-xs">Download or Share</span>
              </div>
            </div>
            <div className="flex justify-center">
              <DPGeneratorComponent />
            </div>
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  );
}