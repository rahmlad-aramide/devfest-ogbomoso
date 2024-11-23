/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter } from "lucide-react";
import { useState } from "react";
import Header from "./components/Header";
import MetaTags from "./components/MetaTag";

const categories = [
  "All",
  "Cloud",
  "ML / AI",
  "Web",
  "Mobile",
  "Web3",
  "Writing",
];

const days: any = [];

export const speakers = [
  {
    id: "adejoke",
    name: "Adejoke Haastrup",
    role: "Developer Advocate",
    title:
      "Creating Developer-Centric Content: How to Write for a Technical Audience",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
    day: "Day 1 - Friday",
    categories: ["Writing"],
    initial: "A",
    description:
      "This session will focus on the nuances of writing for developers, including tips on simplifying complex concepts, structuring technical tutorials, and using code snippets effectively.",
    bio: "Adejoke Haastrup is a Developer Advocate at Google, where she focuses on helping developers build scalable applications. She has a background in computer science and has been working in the tech industry for over 10 years.",
    time: "1:00 PM - 1:45 PM",
  },
  {
    id: "adeyanju",
    name: "Adeyanju Michael",
    role: "Software Engineer",
    title: "Building Resilient APIs: Strategies for Handling API Attacks",
    image:
      "https://images.unsplash.com/photo-1572561300743-2dd367ed0c9a?w=400&q=80",
    day: "Day 1 - Friday",
    categories: ["Cybersecurity", "Web"],
    initial: "A",
    description:
      "This session will focus on the nuances of writing for developers, including tips on simplifying complex concepts, structuring technical tutorials, and using code snippets effectively.",
    bio: "Adeyanju Michael is a Software Engineer at Facebook, where he focuses on building scalable and reliable APIs. He has a background in computer science and has been working in the tech industry for over 10 years.",
    time: "1:50 PM - 2:35 PM",
  },
  {
    id: "anita",
    name: "Anita Ihuman",
    role: "Machine Learning Engineer at Google",
    title:
      "Leveling up the Kubernetes Development Experience with Remocal development",
    image:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&q=80",
    day: "Day 1 - Friday",
    categories: ["Cloud", "Developer Relations"],
    initial: "A",
    description:
      "This session will focus on the nuances of writing for developers, including tips on simplifying complex concepts, structuring technical tutorials, and using code snippets effectively.",
    bio: "Anita Ihuman is a Machine Learning Engineer at Google, where she focuses on building scalable and reliable APIs. She has a background in computer science and has been working in the tech industry for over 10 years.",
    time: "1:50 PM - 3:35 PM",
  },
];

function Speakers() {
  const [selectedDay, setSelectedDay] = useState("All");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [speaker, setSpeaker] = useState<any>(null);

  const filteredSpeakers = speakers.filter((speaker) => {
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
      <div className="min-h-screen bg-[#FFF5E1] w-screen overflow-hidden">
        <Header />
        <MetaTags title="Speakers" description="Meet the DevFest Ogbomoso 2024 Speakers!" />

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
            {categories.map((category) => (
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
            {filteredSpeakers.map((speaker) => (
              <motion.div
                key={speaker.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-3xl p-8 hover:bg-[#f9ab00] cursor-pointer  hover:-mt-5 border-black hover:border outline-offset-8 transition-all"
                onClick={() => setSpeaker(speaker)}
              >
                <div className="flex items-center justify-between">
                  <span className="text-8xl font-bold text-black top-8 left-8">
                  {speaker.name.split(" ").map((name: string) => name[0]).join("")}
                  </span>
                  <img
                    src={speaker.image}
                    alt={speaker.name}
                    className="w-44 h-44 rounded-2xl object-cover float-right ml-4 -mt-24"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-black">{speaker.name}</h3>
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
                    {speaker.name.split(" ").map((name: string) => name[0]).join("")}
                </span>
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="w-44 h-44 rounded-2xl object-cover float-right ml-4 -mt-24"
                />
              </div>
              <h3 className="text-2xl font-bold mb-4">{speaker.name}</h3>
              <p className="text-gray-600 mb-4 font-semibold">{speaker.title}</p>
              <p className="text-gray-600 mb-4">{speaker.bio}</p>
              <p className="text-gray-500">{speaker.time}</p>
              <div className="flex gap-4 mt-2">
                <Twitter className="w-5 h-5 text-gray-400 hover:text-black cursor-pointer" />
                <Linkedin className="w-5 h-5 text-gray-400 hover:text-black cursor-pointer" />
                <Github className="w-5 h-5 text-gray-400 hover:text-black cursor-pointer" />
              </div>
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
