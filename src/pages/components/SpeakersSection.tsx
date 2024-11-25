/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Twitter,
  Linkedin,
  Github,
} from "lucide-react";
import Link from "next/link";

function SpeakersSection({ data }: any) {
  const dataSpeakers = data?.speakers || [];
  const [speakers, _] = useState([...dataSpeakers]);
  const [currentSpeaker, setCurrentSpeaker] = useState(0);
  const nextSpeaker = () => {
    setCurrentSpeaker((prev) => (prev + 1) % speakers.length);
  };

  const prevSpeaker = () => {
    setCurrentSpeaker((prev) => (prev - 1 + speakers.length) % speakers.length);
  };
  //(speakers, currentSpeaker);
  return (
    <section
      className="py-24 bg-primary min-h-screen w-screen overflow-hidden"
      id="speakers"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-black/10 rounded-full text-sm mb-4">
            SPEAKERS
          </span>
          <h2 className="text-6xl font-bold mb-4">
            {data?.speakerSection.title}
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            {data?.speakerSection.subtitle}
          </p>
        </div>

        <div className="relative md:max-w-6xl mx-auto">
          <button
            onClick={prevSpeaker}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 w-12 h-12 rounded-full border border-black/20 flex items-center justify-center hover:bg-black hover:text-white transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <div className="flex items-center justify-center gap-4 md:mt-[300px] mt-[200px]">
            {speakers.map((speaker: any, index: number) => {
              const position = index - currentSpeaker;
              const isActive = index === currentSpeaker;
              let xPos = 200;
              if (typeof window !== "undefined") {
                xPos =
                  (isActive ? 0 : 20) +
                  position * (window && window.innerWidth < 768 ? 180 : 200);
              }
              return (
                <motion.div
                  key={speaker.id}
                  animate={{
                    scale: isActive ? 1 : 0.8,
                    opacity: isActive ? 1 : 0.3,
                    x: xPos,
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  className={`absolute ${
                    isActive
                      ? "md:w-[350px] w-[250px] rounded-lg z-10"
                      : "w-32 rounded-full"
                  } md:h-[500px] h-[290px]  overflow-hidden cursor-pointer`}
                  onClick={() => setCurrentSpeaker(index)}
                >
                  <div className="relative w-full h-full">
                    <img
                      src={speaker.image}
                      alt={speaker.name}
                      className="w-full h-full object-cover"
                    />
                    {isActive && (
                      <div className="absolute bottom-16 left-0 right-0 text-white text-center transform -rotate-30 flex justify-center">
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="w-[90%] absolute bg-white p-2 rounded-xl shadow-lg max-w-2xl mx-auto"
                        >
                          <div className="flex items-center gap-4 justify-between">
                            <div className="text-left">
                              <h3 className="md:text-sm text-xs font-bold text-black">
                                {speakers[currentSpeaker].name}
                              </h3>
                              <p className="text-gray-600 text-xs">
                                {speakers[currentSpeaker].role}
                              </p>
                            </div>
                            {speakers[currentSpeaker]?.socials &&
                            <div className="flex gap-4 items-center">
                              {speakers[currentSpeaker].socials.twitter && (
                                <a
                                  href={`https://twitter.com/${speakers[currentSpeaker].socials?.twitter}`}
                                  target="_blank"
                                >
                                  <Twitter className="md:w-5 md:h-5 w-3 h-3 text-gray-400 hover:text-black cursor-pointer" />
                                </a>
                              )}

                              {speakers[currentSpeaker].socials?.linkedin && (
                                <a
                                  href={`https://linkedin.com/in/${speakers[currentSpeaker].socials.linkedin}`}
                                  target="_blank"
                                >
                                  <Linkedin className="md:w-5 md:h-5 w-3 h-3 text-gray-400 hover:text-black cursor-pointer" />
                                </a>
                              )}

                              {speakers[currentSpeaker].socials?.github && (
                                <a
                                  href={`https://github.com/${speakers[currentSpeaker].socials.github}`}
                                  target="_blank"
                                >
                                  <Github className="md:w-5 md:h-5 w-3 h-3 text-gray-400 hover:text-black cursor-pointer" />
                                </a>
                              )}
                            </div>
            }
                          </div>
                        </motion.div>
                      </div>
                    )}
                    <div className="absolute bottom-8 left-0 right-0 text-white text-center transform -rotate-90 hidden">
                      <p className="font-bold">{speaker.name}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {speakers[currentSpeaker] && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="hidden mt-8 bg-white p-6 rounded-2xl shadow-lg max-w-2xl mx-auto"
            >
              <div className="flex items-center gap-4">
                <img
                  src={speakers[currentSpeaker].image}
                  alt={speakers[currentSpeaker].name}
                  className="w-24 h-24 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-xl font-bold">
                    {speakers[currentSpeaker].name}
                  </h3>
                  <p className="text-gray-600">
                    {speakers[currentSpeaker].role}
                  </p>
                  <div className="flex gap-4 mt-2">
                    <Twitter className="w-5 h-5 text-gray-400 hover:text-black cursor-pointer" />
                    <Linkedin className="w-5 h-5 text-gray-400 hover:text-black cursor-pointer" />
                    <Github className="w-5 h-5 text-gray-400 hover:text-black cursor-pointer" />
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          <button
            onClick={nextSpeaker}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 w-12 h-12 rounded-full border border-black/20 flex items-center justify-center hover:bg-black hover:text-white transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        <div className="text-center mt-48 md:mt-96">
          <div className="w-full flex justify-center md:hidden">
            <button
              onClick={prevSpeaker}
              className="left-0 top-1/2 -translate-y-1/2 -translate-x-12 w-12 h-12 rounded-full border border-black/20 flex items-center justify-center hover:bg-black hover:text-white transition-colors border-white"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSpeaker}
              className="right-0 top-1/2 -translate-y-1/2 translate-x-12 w-12 h-12 rounded-full border border-black/20 flex items-center justify-center hover:bg-black hover:text-white transition-colors border-white"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
          <Link href="/speakers">
            <button className="bg-[#FF9800] text-black px-6 py-3 rounded-full font-medium inline-flex items-center gap-2">
              See all Speakers <span>👋</span>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default SpeakersSection;
