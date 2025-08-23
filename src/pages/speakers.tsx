/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter } from "lucide-react";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import MetaTags from "./components/MetaTag";
import Footer from "./components/Footer";
import Image from "next/image";

const days: any = [];

function Speakers({ data }: any) {
  const [speakers, _] = useState(data?.speakers);
  const [selectedDay, setSelectedDay] = useState("All");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [speaker, setSpeaker] = useState<any>(null);
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => {
    // this forces a rerender
    setHydrated(true);
  }, []);

  if (!hydrated) {
    // this returns null on first render, so the client and server match
    return null;
  }

  const filteredSpeakers = speakers.filter((speaker: any) => {
    if (selectedDay !== "All" && speaker.day !== selectedDay) return false;
    if (
      selectedCategory !== "All" &&
      !speaker.categories.includes(selectedCategory)
    )
      return false;
    return true;
  });

  return (
    <>
      <Header buttonText={data?.actionButtonText} rsvpLink={data?.rsvpLink} />
      <div className="min-h-screen bg-[#FFF5E1] w-screen overflow-hidden">
        <MetaTags title="Speakers" description={data?.speakerSection.title} />

        {/* Hero Section */}
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
                Meet The
                <br />
                DevFest
                <br />
                Ogbomoso 2024
                <br />
                Speakers!
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

        {/* Filters */}
        <div className="px-8 py-8">
          <div className="flex gap-4 mb-8">
            {days.map((day: any) => (
              <button
                key={day}
                onClick={() => setSelectedDay(day)}
                className={`px-6 py-2 rounded-full ${
                  selectedDay === day
                    ? "bg-[#FF9800] text-black"
                    : "bg-white/50 hover:bg-white/80"
                }`}
              >
                {day}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap gap-4">
            {data?.speakerSection.categories.map((category: string) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`text-black px-4 py-2 rounded-full text-sm ${
                  selectedCategory === category
                    ? "bg-green-500 text-white"
                    : "bg-white/50 hover:bg-white/80"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Speakers Grid */}
        <div className="px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-24">
            {filteredSpeakers.map((speaker: any) => (
              <motion.div
                key={speaker.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-3xl p-8 hover:bg-[#f9ab00] cursor-pointer  hover:-mt-5 border-black hover:border outline-offset-8 transition-all"
                onClick={() => setSpeaker(speaker)}
              >
                <div className="flex items-center justify-between">
                  <span className="text-8xl font-bold text-black top-8 left-8">
                    {speaker.name
                      .split(" ")
                      .map((name: string) => name[0])
                      .join("")}
                  </span>
                  <Image
                    src={speaker.image}
                    alt={speaker.name}
                    className="w-44 h-44 rounded-2xl object-cover float-right ml-4 -mt-24"
                    unoptimized
                  />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-black">
                  {speaker.name}
                </h3>
                <p className="text-gray-600 mb-4">{speaker.title}</p>
                <p className="text-gray-500">{speaker.time}</p>
                <button
                  className="mt-4 bg-black text-white px-6 py-2 rounded-full"
                  onClick={() => setSpeaker(speaker)}
                >
                  View Bio
                </button>
              </motion.div>
            ))}
          </div>
        </div>
        <Footer data={data} />
      </div>
      {speaker && (
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: 0 }}
          className="fixed top-0 bottom-0 left-0 right-0 text-black backdrop-blur-sm overflow-hidden h-screen w-screen snap-both flex items-center justify-center transition-all p-6"
        >
          <div className="flex items-center justify-center h-full w-full flex-col md:w-[50%]">
            <motion.div
              initial={{ y: -1200 }}
              animate={{ y: 0 }}
              transition={{ type: "keyframes", damping: 5 }}
              className="bg-white rounded-3xl p-8 border-black border-2 outline-offset-8 transition-all"
            >
              <div className="flex items-center justify-between">
                <span className="text-8xl font-bold text-black top-8 left-8">
                  {speaker.name
                    .split(" ")
                    .map((name: string) => name[0])
                    .join("")}
                </span>
                <Image
                  src={speaker.image}
                  alt={speaker.name}
                  className="w-44 h-44 rounded-2xl object-cover float-right ml-4 -mt-24"
                  unoptimized
                />
              </div>
              <h3 className="text-2xl font-bold mb-4">{speaker.name}</h3>
              <p className="text-gray-600 mb-4 font-semibold">
                {speaker.title}
              </p>
              <p className="text-gray-600 mb-4">{speaker.bio}</p>
              <p className="text-gray-500">{speaker.time}</p>
              {speaker.socials && (
                <div className="flex gap-4 mt-2">
                  {speaker.socials?.twitter && (
                    <a
                      href={`https://twitter.com/${speaker.socials?.twitter}`}
                      target="_blank"
                    >
                      <Twitter className="w-5 h-5 text-gray-400 hover:text-black cursor-pointer" />
                    </a>
                  )}
                  {speaker.socials?.linkedin && (
                    <a
                      href={`https://linkedin.com/in/${speaker.socials?.linkedin}`}
                      target="_blank"
                    >
                      <Linkedin className="w-5 h-5 text-gray-400 hover:text-black cursor-pointer" />
                    </a>
                  )}
                  {speaker.socials?.github && (
                    <a
                      href={`https://github.com/${speaker.socials?.github}`}
                      target="_blank"
                    >
                      <Github className="w-5 h-5 text-gray-400 hover:text-black cursor-pointer" />
                    </a>
                  )}
                </div>
              )}
            </motion.div>
            <button
              className="bg-[#FF9800] text-black px-6 py-3 rounded-full font-medium inline-flex items-center gap-2 mt-12"
              onClick={() => setSpeaker(null)}
            >
              Close
            </button>
          </div>
        </motion.div>
      )}
    </>
  );
}
export default Speakers;

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
