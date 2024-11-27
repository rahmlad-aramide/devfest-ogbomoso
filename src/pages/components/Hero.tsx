/* eslint-disable @typescript-eslint/no-explicit-any */
import { motion } from "framer-motion";
import { MapPin, Calendar, Globe } from "lucide-react";
import Header from "./Header";
import Typewriter from "typewriter-effect";

function Hero({ data }: any) {
  return (
    <section className="min-h-screen relative bg-black text-[#FFF5E1] snap-both">
      <div className="absolute inset-0 bg-[url('/devfest.jpeg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/50" />
      </div>
      <Header buttonText={data?.actionButtonText} rsvpLink={data?.rsvpLink} />
      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <span className="inline-block px-4 py-1 bg-[#FFF5E1]/10 rounded-full text-sm mb-8 font-bold">
            {data?.tag}
          </span>
        </motion.div>

        <motion.h1
          className="text-7xl md:text-8xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString(data?.title)
                .pauseFor(1000)
                .deleteAll()
                .start();
            }}
            options={{
              loop: true,
            }}
          />
          
          <br />
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString(data?.year)
                .pauseFor(3000)
                .start();
            }}
          />
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col items-center gap-8"
        >
          <a href={data?.rsvpLink} target="_blank">
          <button className="bg-[#FF9800] text-black px-8 py-4 rounded-full text-lg font-medium">
            {data?.actionButtonText}
          </button>
          </a>

          <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto mt-16">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-[#FFF5E1]/10 rounded-lg">
                <MapPin className="w-6 h-6" />
              </div>
              <div className="text-left">
                <p className="text-sm text-gray-400">Where</p>
                <p className="font-medium">{data?.location}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2 bg-[#FFF5E1]/10 rounded-lg">
                <Calendar className="w-6 h-6" />
              </div>
              <div className="text-left">
                <p className="text-sm text-gray-400">When</p>
                <p className="font-medium">{data?.date}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2 bg-[#FFF5E1]/10 rounded-lg">
                <Globe className="w-6 h-6" />
              </div>
              <div className="text-left">
                <p className="text-sm text-gray-400">Who</p>
                <p className="font-medium">Everyone</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
export default Hero;
