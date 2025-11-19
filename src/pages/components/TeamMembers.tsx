import { motion } from "framer-motion";
import { Linkedin, Users2, ChevronLeft } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface TeamMember {
  name: string;
  role: string;
  image: string;
  team: string;
}

function TeamMembers() {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const teamData: TeamMember[] = [
    {
      name: "Miracle Olabode",
      role: "Lead Organizer",
      image: "/team/miracle.jpg",
      team: "Organizers",
    },
    {
      name: "Boluwatife Adebisi",
      role: "Lead Organizer",
      image: "/team/boluwatife.jpg",
      team: "Organizers",
    },
    {
      name: "Esuola Daniel",
      role: "Co-Organizer",
      image: "/team/daniel.png",
      team: "Organizers",
    },
    {
      name: "Glory Olaifa",
      role: "Co-Organizer",
      image: "/team/glory.jpg",
      team: "Organizers",
    },
    {
      name: "Blessed-Agboola Jesujoba",
      role: "Co-Organizer",
      image: "/team/blessed.jpeg",
      team: "Organizers",
    },
    {
      name: "Abdrahman Oladimeji",
      role: "Co-Organizer",
      image: "/team/abdrahman.jpeg",
      team: "Organizers",
    },
    {
      name: "Isaac Oke",
      role: "Volunteer",
      image: "/team/isaac.jpg",
      team: "Design Team",
    },
    {
      name: "Olatunji Ezekiel",
      role: "Volunteer",
      image: "/team/olatunji.jpg",
      team: "Design Team",
    },
    {
      name: "Isaac Oke",
      role: "Volunteer",
      image: "/team/isaac.jpg",
      team: "Design Team",
    },
    {
      name: "Olatunji Ezekiel",
      role: "Volunteer",
      image: "/team/olatunji.jpg",
      team: "Design Team",
    },
    {
      name: "Olurinto Boluwatife",
      role: "Volunteer",
      image: "/team/olurinto.jpeg",
      team: "Design Team",
    },
    {
      name: "Eniola Adesina",
      role: "Volunteer",
      image: "/team/eniola.jpg",
      team: "Media and Publicity Team",
    },
  ];

  const filters = [
    "All",
    "Organizers",
    "Media and Publicity Team",
    "Design Team",
    "Dev Team",
    "Operations Team",
  ];

  const filteredTeam =
    activeFilter === "All"
      ? teamData
      : teamData.filter((member) => member.team === activeFilter);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8d8d8] via-[#f0f0f0] to-[#f8d8d8] text-[#1e1e1e] relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#4285f4]/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#ea4335]/10 rounded-full blur-3xl animate-pulse-slow delay-1000" />
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-10 pb-24">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <a
            href="/#team"
            className="inline-flex items-center gap-2 text-[#4285f4] hover:text-[#3367d6] font-bold transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
            Home
          </a>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-2 px-6 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm mb-6 border-2 border-[#4285f4]/20 font-bold text-[#4285f4]"
          >
            <Users2 className="w-4 h-4" />
            MEET THE TEAM
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl lg:text-6xl font-extrabold mb-6 text-[#1e1e1e]"
          >
            Our Incredible Team
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl text-[#1e1e1e]/80 max-w-3xl mx-auto leading-relaxed font-semibold"
          >
            Meet all the passionate individuals working tirelessly behind the
            scenes to make DevFest Ogbomoso 2025 an unforgettable experience!
          </motion.p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2.5 rounded-full font-bold text-sm transition-all duration-300 border-2 shadow-md ${
                activeFilter === filter
                  ? "bg-[#4285f4] text-white border-[#4285f4] shadow-lg scale-105"
                  : "bg-white text-[#1e1e1e] border-[#f0f0f0] hover:border-[#4285f4] hover:text-[#4285f4] hover:shadow-lg"
              }`}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        {/* Team Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.7 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {filteredTeam.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.7 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="relative group cursor-pointer rounded-2xl overflow-hidden shadow-xl bg-white border border-[#f0f0f0] transition-all duration-300"
            >
              {member.image ? (
                // <div className="relative w-full h-[280px] overflow-hidden">
                <div className="relative w-full h-[320px] overflow-hidden border border-red-500">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-[center_10%] group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0  bg-gradient-to-bl from-[#4d8bee] via-transparent to-[#47a760] opacity-80 group-hover:opacity-0 transition-all duration-500" />
                </div>
              ) : (
                /* Image/Placeholder Container */
                <div className="relative w-full h-[320px] overflow-hidden bg-gradient-to-br from-[#c3ecf6] to-[#c2f6c5]">
                  <div className="w-full h-full flex items-center justify-center text-6xl font-extrabold text-[#4285f4]/30">
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50 opacity-80 group-hover:opacity-0 transition-all duration-500" />
                </div>
              )}

              <div className="absolute bottom-0 left-0 right-0 pb-8 p-6 transform translate-y-10 group-hover:hidden duration-500">
                <div className="bg-black/50 backdrop-blur-md rounded-xl p-4 border-2 border-white/20">
                  <h3 className="font-bold text-white text-lg mb-1">
                    {member.name}
                  </h3>
                  <div className="flex gap-2">
                    <p className="text-white flex w-full text-sm font-semibold">
                      {member.role}
                    </p>
                    <div className="flex gap-2 items-center w-full justify-end">
                      <div className="w-5 h-5 bg-gradient-to-bl from-[#4d8bee] to-[#47a760] rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-bold">X</span>
                      </div>
                      <div className="w-5 h-5 bg-gradient-to-bl from-[#4d8bee] to-[#47a760] rounded-full flex items-center justify-center">
                        <Linkedin className="w-3 h-3 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#4285f4]/50 rounded-2xl transition-all duration-300" /> */}
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.7 }}
          className="mt-16 bg-white/80 backdrop-blur-sm rounded-2xl p-8 border-2 border-[#f0f0f0] max-w-4xl mx-auto"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <p className="text-4xl font-extrabold text-[#4285f4] mb-2">
                {teamData.filter((m) => m.team === "Organizers").length}
              </p>
              <p className="text-sm text-[#1e1e1e]/70 font-semibold">
                Organizers
              </p>
            </div>
            <div>
              <p className="text-4xl font-extrabold text-[#ea4335] mb-2">
                {teamData.filter((m) => m.team === "Social Media Team").length}
              </p>
              <p className="text-sm text-[#1e1e1e]/70 font-semibold">
                Social Media
              </p>
            </div>
            <div>
              <p className="text-4xl font-extrabold text-[#f9ab00] mb-2">
                {teamData.filter((m) => m.team === "Dev Team").length}
              </p>
              <p className="text-sm text-[#1e1e1e]/70 font-semibold">
                Developers
              </p>
            </div>
            <div>
              <p className="text-4xl font-extrabold text-[#34a853] mb-2">
                {teamData.length}
              </p>
              <p className="text-sm text-[#1e1e1e]/70 font-semibold">
                Total Team
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default TeamMembers;
