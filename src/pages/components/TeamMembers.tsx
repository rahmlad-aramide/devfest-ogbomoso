import { motion } from "framer-motion";
import { Linkedin, Users2, ChevronLeft } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

import Footer from "./Footer";
import Link from "next/link";
import { teamData, TeamMember } from "../../lib/TeamData";

function TeamMembers() {
  const [activeFilter, setActiveFilter] = useState<string>("Organizers");

  const filters = [
    "All",
    "Organizers",
    "Content",
    "Operations",
    "Partnership",
    "Dev Team",
  ];

  // Helper function to check if a member is a lead for the currently active team filter
  const isMemberLeadForFilter = (
    member: TeamMember,
    activeFilter: string
  ): boolean => {
    // Check for explicit team leads for the current filter
    if (
      member.isTeamLead &&
      (member.team === activeFilter || member.subTeam === activeFilter)
    ) {
      return true;
    }

    // Organizers are implicitly leads only for the "Organizers" filter
    if (
      activeFilter === "Organizers" &&
      (member.role === "Lead Organizer" || member.role === "Co-Organizer")
    ) {
      return true;
    }

    return false;
  };

  const filterTeamMembers = (member: TeamMember, activeFilter: string) => {
    // Check the main team
    if (member.team === activeFilter) {
      return true;
    }

    // Check the subTeam (if it exists)
    if (member.subTeam === activeFilter) {
      return true;
    }

    return false;
  };

  // 1. Filter the data based on the active filter
  let filteredTeam =
    activeFilter === "All"
      ? teamData
      : teamData.filter((member) => filterTeamMembers(member, activeFilter));

  // 2. Sort the filtered array to prioritize Team Leads for the CURRENT activeFilter
  filteredTeam = filteredTeam.sort((a, b) => {
    // Determine lead status for the current filter for both members
    const aIsLead = isMemberLeadForFilter(a, activeFilter);
    const bIsLead = isMemberLeadForFilter(b, activeFilter);

    // If 'a' is a lead and 'b' is not, 'a' comes first (-1)
    if (aIsLead && !bIsLead) {
      return -1;
    }

    // If 'b' is a lead and 'a' is not, 'b' comes first (1)
    if (!aIsLead && bIsLead) {
      return 1;
    }

    // If both have the same lead status, maintain existing order (0)
    return 0;
  });

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
          <Link
            href="/#team"
            className="inline-flex items-center gap-2 text-[#4285f4] hover:text-[#3367d6] font-bold transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
            Home
          </Link>
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
            className="text-sm lg:text-xl text-[#1e1e1e]/80 max-w-3xl mx-auto leading-relaxed font-semibold"
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
                <div className="relative w-full h-[320px] overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-[center_10%] group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-bl from-[#4d8bee] via-transparent to-[#47a760] opacity-80 group-hover:opacity-0 transition-all duration-500" />
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
                <div className="bg-black/50 backdrop-blur-md rounded-xl py-2 px-4 border-2 border-white/20">
                  <h3 className="font-extrabold text-white mb-1">
                    {member.name}
                  </h3>

                  <div className="flex gap-2 justify-between items-center">
                    {/* Display Main Role/Title */}
                    <p className="text-white text-xs font-semibold mb-2">
                      {member.role}
                    </p>

                    {/* Display sub-team if exists */}
                    {/* {member.subTeam && (
                      <p className="text-white/80 text-xs font-medium">
                        {member.subTeam}
                      </p>
                    )} */}
                  </div>

                  {/* Display Team Lead Badge */}
                  {/* {isMemberLeadForFilter(member, activeFilter) &&
                    activeFilter !== "Organizers" && (
                      <span className="bg-[#47a760] text-white text-xs font-bold px-2 py-0.5 rounded-full mt-2 inline-block">
                        Team LEAD
                      </span>
                    )} */}
                </div>
              </div>
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
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
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
                {teamData.filter((m) => m.team === "Content").length}
              </p>
              <p className="text-sm text-[#1e1e1e]/70 font-semibold">Content</p>
            </div>
            <div>
              <p className="text-4xl font-extrabold text-[#f9ab00] mb-2">
                {teamData.filter((m) => m.team === "Operations").length}
              </p>
              <p className="text-sm text-[#1e1e1e]/70 font-semibold">
                Operations
              </p>
            </div>
            <div>
              <p className="text-4xl font-extrabold text-[#34a853] mb-2">
                {teamData.filter((m) => m.team === "Partnership").length}
              </p>
              <p className="text-sm text-[#1e1e1e]/70 font-semibold">
                Partnership
              </p>
            </div>
            <div>
              <p className="text-4xl font-extrabold text-[#9334e9] mb-2">
                {teamData.length}
              </p>
              <p className="text-sm text-[#1e1e1e]/70 font-semibold">
                Total Team
              </p>
            </div>
          </div>
        </motion.div>
      </div>
      <div className="bg-black">
        <Footer />
      </div>
    </div>
  );
}

export default TeamMembers;
