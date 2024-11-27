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
      <div className="h-fit bg-[#FFF5E1] w-screen overflow-hidden">
        <div className="relative px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <div className="relative">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                className="absolute -top-12 -left-12 text-blue-500"
              >
                <div className="w-16 h-16 transform rotate-45 bg-blue-500" />
              </motion.div>
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute top-0 right-0 text-green-500"
              >
                <div className="w-12 h-12 transform -rotate-45 bg-green-500" />
              </motion.div>
              <h1 className="md:ml-24 md:text-8xl text-6xl font-bold leading-tight text-black">
                Generate your DP
                <br />
                for DevFest
                <br />
                Ogbomoso 2024
              </h1>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-32 left-48 text-[#FF9800]"
              >
                <div className="w-20 h-20 transform rotate-45 bg-[#FF9800]" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      <DPGeneratorComponent />
      <Footer data={data} />
    </>
  );
}

export default DPGenerator;

export async function getServerSideProps() {
  const apiURL =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "https://devfestogbomoso.netlify.app";
  console.log(apiURL, process.env.NODE_ENV);
  const res = await fetch(`${apiURL}/details.json`);
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}
