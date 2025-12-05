import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Twitter,
  Linkedin,
  Github,
  X,
  Calendar,
  Award,
  Mic,
  MapPin,
  Clock,
} from "lucide-react";
import Link from "next/link";
import currentSpeakers from "../../lib/speakersData";

interface Speaker {
  id: string;
  name: string;
  role: string;
  bio: string;
  bioLong: string; // Add this field
  company?: string;
  image?: string;
  socials?: {
    twitter?: string;
    linkedin?: string;
    github?: string;
  };
  session?: {
    title: string;
    // description?: string;
    track: string;
    time?: string;
    day?: string;
  };
}

function SpeakersSection({ data }: any) {
  const [flippedCard, setFlippedCard] = useState<string | null>(null);
  const [showPastSpeakers, setShowPastSpeakers] = useState(false);
  const [activeTab, setActiveTab] = useState<string>("all");

  const dataSpeakers = data?.speakers || [];
  const pastSpeakers = [...dataSpeakers];  

  const filteredSpeakers =
    activeTab === "all"
      ? currentSpeakers
      : currentSpeakers.filter((speaker) => {
          if (activeTab === "pre-devfest")
            return speaker.session?.day === "Pre-DevFest";
          if (activeTab === "day1") return speaker.session?.day === "Workshop";
          if (activeTab === "day2")
            return speaker.session?.day === "Main Conference";
          return true;
        });

  return (
    <section
      className="py-20 bg-white text-[#1e1e1e] relative overflow-hidden"
      id="speakers"
    >
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-80 h-80 bg-[#4285f4]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#34a853]/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-2 px-6 py-2 bg-[#4285f4]/10 backdrop-blur-sm rounded-full text-sm mb-6 border-2 border-[#4285f4]/20 font-bold text-[#4285f4]"
          >
            <Calendar className="w-4 h-4" />
            2025 SPEAKERS
          </motion.span>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-center"
            >
              <div className="w-12 h-12 bg-[#4285f4]/10 rounded-full flex items-center justify-center mx-auto mb-2 border-2 border-[#4285f4]/20">
                <Mic className="w-6 h-6 text-[#4285f4]" />
              </div>
              <p className="text-3xl font-extrabold text-[#4285f4]">
                {currentSpeakers.length}
              </p>
              <p className="text-sm text-[#1e1e1e]/70 font-semibold">
                Amazing Speakers
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-center"
            >
              <div className="w-12 h-12 bg-[#34a853]/10 rounded-full flex items-center justify-center mx-auto mb-2 border-2 border-[#34a853]/20">
                <Award className="w-6 h-6 text-[#34a853]" />
              </div>
              <p className="text-3xl font-extrabold text-[#34a853]">
                {currentSpeakers.length}+
              </p>
              <p className="text-sm text-[#1e1e1e]/70 font-semibold">
                Sessions
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-center"
            >
              <div className="w-12 h-12 bg-[#ea4335]/10 rounded-full flex items-center justify-center mx-auto mb-2 border-2 border-[#ea4335]/20">
                <Calendar className="w-6 h-6 text-[#ea4335]" />
              </div>
              <p className="text-3xl font-extrabold text-[#ea4335]">2</p>
              <p className="text-sm text-[#1e1e1e]/70 font-semibold">Days</p>
            </motion.div>
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-4xl lg:text-6xl font-extrabold pb-6 text-[#1e1e1e]"
          >
            Meet Our Amazing Speakers
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-xl text-[#1e1e1e]/80 max-w-2xl mx-auto mb-12 font-semibold"
          >
            Learn from industry experts across AI, Cloud, Design, and
            Engineering at DevFest 2025
          </motion.p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {[
              { id: "all", label: "All Speakers" },
              { id: "pre-devfest", label: "Pre-DevFest" },
              { id: "day1", label: "Workshop" },
              { id: "day2", label: "Conference" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-2.5 rounded-full font-bold text-sm transition-all duration-300 ${
                  activeTab === tab.id
                    ? "bg-[#4285f4] text-white shadow-lg"
                    : "bg-white text-[#1e1e1e] border-2 border-[#f0f0f0] hover:border-[#4285f4] hover:text-[#4285f4]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Speakers Grid with Flip Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredSpeakers.map((speaker, index) => (
            <motion.div
              key={speaker.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              viewport={{ once: true }}
              className="relative h-[480px] lg:h-[460px]"
              style={{ perspective: "1000px" }}
            >
              <motion.div
                className="relative w-full h-full cursor-pointer"
                style={{ transformStyle: "preserve-3d" }}
                animate={{ rotateY: flippedCard === speaker.id ? 180 : 0 }}
                transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
                onClick={() =>
                  setFlippedCard(flippedCard === speaker.id ? null : speaker.id)
                }
                onMouseEnter={() =>
                  window.innerWidth >= 768 && setFlippedCard(speaker.id)
                }
                onMouseLeave={() =>
                  window.innerWidth >= 768 && setFlippedCard(null)
                }
              >
                {/* Front of Card */}
                <div
                  className="absolute inset-0 bg-white rounded-2xl border-2 border-[#f0f0f0] shadow-lg hover:shadow-xl transition-all duration-300"
                  style={{ backfaceVisibility: "hidden" }}
                >
                  <div className="relative w-90 h-60 m-6 -mb-4 rounded-2xl p-1 bg-gradient-to-br from-[#4d8bee] to-[#47a760] overflow-hidden">
                    {speaker.image ? (
                      <img
                        src={speaker.image}
                        alt={speaker.name}
                        className="object-cover object-[center_30%] w-full h-full rounded-xl"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-5xl font-extrabold text-[#4285f4]/30">
                        {speaker.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")
                          .toUpperCase()}
                      </div>
                    )}
                  </div>

                  <div className="text-left p-6">
                    <div className="flex items-center justify-between">
                      <h4 className="font-extrabold text-lg text-[#1e1e1e] mb-1 w-1/2">
                        {speaker.name}
                      </h4>
                      <div className="inline-block px-3 py-1 bg-gradient-to-r from-[#4285f4]/10 to-[#34a853]/10 rounded-full">
                        <p className="text-xs text-[#1e1e1e]/70 font-bold">
                          {speaker.session?.day}
                        </p>
                      </div>
                    </div>
                    <p className="text-sm text-[#4285f4] mb-1 font-bold">
                      {speaker.role}
                    </p>
                    <div className="flex gap-6 items-center">
                      {speaker.company && (
                        <p className="text-xs text-[#1e1e1e]/60 mb-3 font-semibold">
                          {speaker.company}
                        </p>
                      )}
                    </div>

                    {/* Use short bio on front */}
                    <p className="text-xs text-[#1e1e1e]/60 mt-2 font-semibold line-clamp-3">
                      {speaker.bio}
                    </p>

                    {/* Mobile hint */}
                    <p className="text-xs text-[#4285f4] mt-2 font-bold md:hidden">
                      Tap to see session details
                    </p>
                  </div>
                </div>

                {/* Back of Card */}
                <div
                  className="absolute inset-0 bg-gradient-to-br from-[#4d8bee] to-[#47a760] rounded-2xl p-6 shadow-lg text-white overflow-y-auto"
                  style={{
                    backfaceVisibility: "hidden",
                    transform: "rotateY(180deg)",
                  }}
                >
                  <div className="h-full flex flex-col">
                    <div className="mb-4">
                      <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-xs font-bold mb-3 border border-white/30">
                        {speaker.session?.track}
                      </span>
                      <h4 className="font-extrabold text-base mb-2 leading-tight">
                        {speaker.session?.title}
                      </h4>
                      {/* {speaker.session?.description && (
                        <p className="text-sm opacity-90 mb-3 font-medium">
                          {speaker.session.description}
                        </p>
                      )} */}

                      {/* Use long bio on back */}
                      <p className="text-xs opacity-90 mb-3 font-normal leading-relaxed">
                        {speaker.bioLong}
                      </p>
                    </div>

                    <div className="mt-auto space-y-2">
                      {speaker.session?.time && (
                        <div className="flex items-center gap-2 text-sm font-semibold bg-white/20 rounded-lg px-3 py-2 border border-white/30">
                          <Clock className="w-4 h-4" />
                          <span>{speaker.session.time}</span>
                        </div>
                      )}
                      <div className="flex items-center gap-2 text-xs font-semibold bg-white/10 rounded-lg px-3 py-2">
                        <MapPin className="w-3 h-3" />
                        <span>{speaker.session?.day}</span>
                      </div>

                      {/* Mobile hint to flip back */}
                      <p className="text-xs opacity-75 text-center pt-2 md:hidden">
                        Tap again to flip back
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* View 2024 Speakers Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center"
        >
          <button
            onClick={() => setShowPastSpeakers(true)}
            className="group border-2 border-[#4285f4] text-[#4285f4] hover:bg-[#4285f4] hover:text-white px-8 py-3 rounded-full font-bold text-base transition-all duration-300 inline-flex items-center gap-2 shadow-md hover:shadow-lg"
          >
            <span>See 2024 Speakers</span>
            <Calendar className="w-4 h-4" />
          </button>
        </motion.div>
      </div>

      {/* 2024 Speakers Modal */}
      <AnimatePresence>
        {showPastSpeakers && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-2xl z-50 flex items-center justify-center p-4"
            onClick={() => setShowPastSpeakers(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-white rounded-3xl p-6 lg:p-8 max-w-6xl w-full max-h-[90vh] overflow-y-auto relative"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#4285f4]/10 rounded-full blur-2xl -translate-y-16 translate-x-16" />
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#34a853]/10 rounded-full blur-2xl translate-y-16 -translate-x-16" />

              <div className="flex items-center justify-between mb-8 relative z-10">
                <div>
                  <h3 className="text-2xl lg:text-3xl font-extrabold text-[#4285f4] mb-2">
                    2024 Speakers
                  </h3>
                  <p className="text-[#1e1e1e]/70 font-semibold">
                    The amazing minds from last year's DevFest
                  </p>
                </div>
                <button
                  onClick={() => setShowPastSpeakers(false)}
                  className="w-10 h-10 border-2 border-[#f0f0f0] text-[#1e1e1e]/70 rounded-full flex items-center justify-center hover:border-[#ea4335] hover:text-[#ea4335] transition-all duration-300"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
                {pastSpeakers.map((speaker: any, index: number) => (
                  <motion.div
                    key={speaker.id}
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="bg-white rounded-2xl p-6 border-2 border-[#f0f0f0] shadow-md hover:shadow-xl hover:border-[#4285f4]/30 transition-all duration-300 relative overflow-hidden group"
                  >
                    <div className="absolute -top-3 -left-3 w-8 h-8 bg-[#4285f4]/20 rounded-full blur-sm group-hover:bg-[#4285f4]/30 transition-colors" />
                    <div className="absolute -bottom-3 -right-3 w-10 h-10 bg-[#34a853]/20 rounded-full blur-sm group-hover:bg-[#34a853]/30 transition-colors" />

                    <div className="relative w-32 h-32 mx-auto mb-4 rounded-2xl overflow-hidden border-4 border-[#4285f4]/20 shadow-lg bg-gradient-to-br from-[#c3ecf6] to-[#c2f6c5]">
                      <div className="w-full h-full flex items-center justify-center text-4xl font-extrabold text-[#4285f4]/30">
                        {speaker.name
                          .split(" ")
                          .map((n: string) => n[0])
                          .join("")}
                      </div>
                    </div>

                    <div className="text-center">
                      <h4 className="font-extrabold text-lg text-[#1e1e1e] mb-1">
                        {speaker.name}
                      </h4>
                      <p className="text-sm text-[#ea4335] mb-3 font-bold">
                        {speaker.role}
                      </p>

                      {speaker.socials && (
                        <div className="flex justify-center gap-2">
                          {speaker.socials.twitter && (
                            <Link
                              href={`https://twitter.com/${speaker.socials.twitter}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-8 h-8 border-2 border-[#4285f4]/20 text-[#4285f4] rounded-full flex items-center justify-center hover:bg-[#4285f4] hover:text-white hover:border-[#4285f4] transition-all duration-300"
                            >
                              <Twitter className="w-3 h-3" />
                            </Link>
                          )}
                          {speaker.socials.linkedin && (
                            <Link
                              href={`https://linkedin.com/in/${speaker.socials.linkedin}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-8 h-8 border-2 border-[#4285f4]/20 text-[#4285f4] rounded-full flex items-center justify-center hover:bg-[#4285f4] hover:text-white hover:border-[#4285f4] transition-all duration-300"
                            >
                              <Linkedin className="w-3 h-3" />
                            </Link>
                          )}
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="text-center mt-8 relative z-10">
                <button
                  onClick={() => setShowPastSpeakers(false)}
                  className="border-2 border-[#ea4335] text-[#ea4335] hover:bg-[#ea4335] hover:text-white px-6 py-2 rounded-full font-bold transition-all duration-300"
                >
                  Close Preview
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default SpeakersSection;
