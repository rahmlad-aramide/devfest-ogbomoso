export default DPGenerator;
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */

import DPGeneratorComponent from "./components/DPGenerator";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MetaTags from "./components/MetaTag";
import { motion } from "framer-motion";

function DPGenerator({ data }: any) {
  return (
    <>
      <Header buttonText={data?.actionButtonText} rsvpLink={data?.rsvpLink} />
      <MetaTags title="Generate your DP" description={data?.metadata?.title} />
      {/* Modern White Layout */}
      <main className="w-full min-h-screen bg-[#FFEDB8] flex flex-col items-center justify-center px-4">
        <section
          className="w-full max-w-2xl mx-auto flex flex-col items-center justify-center pb-16"
          style={{ backgroundColor: "#FFEDB8" }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="w-full"
          >
            <h1 className="hidden text-4xl md:text-5xl font-extrabold text-[#23234a] mb-4 text-center tracking-tight">
              Create Your DevFest 2025 DP
            </h1>
            <p className="hidden text-base md:text-lg text-gray-500 mb-8 text-center">
              Show your excitement for DevFest Ogbomoso! Upload, customize, and
              share your unique DP.
            </p>
            <div className="gap-6 mb-2 lg:mb-8 justify-center hidden">
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
      <Footer data={data} />
    </>
  );
}

export async function getServerSideProps() {
  const apiURL =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "https://www.devfestogbomoso.com";
  console.log(apiURL, process.env.NODE_ENV);
  const res = await fetch(`${apiURL}/details.json`);
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}
