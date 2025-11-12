import { motion } from "framer-motion";
import { Linkedin, Users2 } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface TeamMember {
  name: string;
  role: string;
  image: string;
  team: string;
}

function TeamSection({ data }: { data: any }) {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const teamData: TeamMember[] = [
    {
      name: "Miracle Apata",
      role: "Lead Organizer",
      image: "/team/miracle.jpg",
      team: "Organizers",
    },
    {
      name: "Boluwatife Ayorinde",
      role: "Co-Lead Organizer",
      image: "/team/boluwatife.jpg",
      team: "Organizers",
    },
    {
      name: "Monsurat Adesanya",
      role: "Community Manager",
      image: "/team/monsurat.jpg",
      team: "Organizers",
    },
    {
      name: "Team Member",
      role: "Social Media Team",
      image: "/team/member1.jpg",
      team: "Social Media Team",
    },
    {
      name: "Team Member",
      role: "Social Media Team",
      image: "/team/member2.jpg",
      team: "Social Media Team",
    },
    {
      name: "Team Member",
      role: "Social Media Team",
      image: "/team/member3.jpg",
      team: "Social Media Team",
    },
    {
      name: "Team Member",
      role: "Graphics Design Team",
      image: "/team/member4.jpg",
      team: "Graphics Design Team",
    },
    {
      name: "Team Member",
      role: "Graphics Design Team",
      image: "/team/member5.jpg",
      team: "Graphics Design Team",
    },
    {
      name: "Team Member",
      role: "LASU Team",
      image: "/team/member6.jpg",
      team: "LASU Team",
    },
    {
      name: "Team Member",
      role: "Dev Team",
      image: "/team/member7.jpg",
      team: "Dev Team",
    },
    {
      name: "Team Member",
      role: "Volunteers",
      image: "/team/member8.jpg",
      team: "Volunteers",
    },
    {
      name: "Team Member",
      role: "Volunteers",
      image: "/team/member9.jpg",
      team: "Volunteers",
    },
  ];

  const filters = [
    "All",
    "Organizers",
    "Social Media Team",
    "Graphics Design Team",
    "LASU Team",
    "Dev Team",
    "Volunteers",
  ];

  const filteredTeam =
    activeFilter === "All"
      ? teamData
      : teamData.filter((member) => member.team === activeFilter);

  return (
    <section className="pb-20 lg:pb-28 bg-[#F8D8D8] text-gray-900 relative overflow-hidden">
      <div className="w-full pb-28">
        <Image
          src="/Screenshot 2025-08-24 at 21.21.37.png"
          alt="Decorative pattern"
          width={1920}
          height={80}
          className="w-full h-16 md:h-20 object-cover"
        />
      </div>
      {/* Background Decorations */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#4285f4]/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#ea4335]/10 rounded-full blur-3xl animate-pulse-slow delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#f9ab00]/10 rounded-full blur-3xl animate-pulse-slow delay-2000" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
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
            className="inline-flex items-center gap-2 px-6 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm mb-6 border border-white/30 font-semibold text-black"
          >
            <Users2 className="w-4 h-4" />
            OUR AMAZING TEAM
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-gray-700 to-gray-600 bg-clip-text text-transparent"
          >
            Meet the Humans Behind the Fest
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
          >
            Our passionate and dedicated team has been preparing hard to deliver
            an incredible DevFest experience, and here&apos;s a quick
            introduction to the humans working behind the scenes!
          </motion.p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2.5 rounded-full font-medium text-sm transition-all duration-300 border-2 ${
                activeFilter === filter
                  ? "bg-[#4285f4] text-white border-[#4285f4] shadow-lg scale-105"
                  : "bg-white text-gray-700 border-gray-300 hover:border-[#4285f4] hover:text-[#4285f4] hover:shadow-md"
              }`}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        {/* Team Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.7 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredTeam.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.7 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="relative group cursor-pointer rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br from-white to-gray-50 border border-gray-200"
            >
              {/* Image Container */}
              <div className="relative w-full h-[320px] overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50 opacity-80 group-hover:opacity-0 transition-all duration-500" />
              </div>

              {/* Member Info - Always Visible at Bottom */}
              <div className="absolute bottom-0 left-0 right-0 pb-8 p-6 transform translate-y-10 group-hover:hidden duration-500">
                <div className="bg-black/50 backdrop-blur-md rounded-xl p-4 border border-white/20">
                  <h3 className="font-bold text-white text-lg mb-1">
                    {member.name}
                  </h3>
                  <div className="flex gap-2">
                    <p className="text-white flex w-full text-sm font-light">
                      {member.role}
                    </p>
                    <div className="flex gap-2 items-center w-full justify-end">
                      <Image
                        src="/x.svg"
                        alt="Twitter Logo"
                        width={12}
                        height={12}
                      />
                      <Linkedin className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Team Badge */}
                  {/* <div className="mt-3 inline-block">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        member.team === "Organizers"
                          ? "bg-[#4285f4]/20 text-[#4285f4] border border-[#4285f4]/30"
                          : member.team === "Social Media Team"
                          ? "bg-[#ea4335]/20 text-[#ea4335] border border-[#ea4335]/30"
                          : member.team === "Graphics Design Team"
                          ? "bg-[#f9ab00]/20 text-[#f9ab00] border border-[#f9ab00]/30"
                          : member.team === "LASU Team"
                          ? "bg-[#34a853]/20 text-[#34a853] border border-[#34a853]/30"
                          : member.team === "Dev Team"
                          ? "bg-purple-500/20 text-purple-600 border border-purple-500/30"
                          : "bg-pink-500/20 text-pink-600 border border-pink-500/30"
                      }`}
                    >
                      {member.team}
                    </span>
                  </div> */}
                </div>
              </div>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#4285f4]/50 rounded-2xl transition-all duration-300" />
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-[#FFE7A5]/20 via-[#ea4335]/10 to-[#FFE7A5]/20 rounded-2xl p-8 border border-gray-200 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Want to Be a Part of It?
            </h3>
            <p className="text-gray-600 mb-6">
              We&apos;re always looking for passionate individuals to join our
              team and help make DevFest even better. Let us know if you&apos;re
              interested!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center justify-center gap-2 bg-[#f9ab00] hover:bg-[#e69900] text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                Become A Sponsor
              </button>
              <button className="inline-flex items-center justify-center gap-2 border-2 border-[#4285f4] text-[#4285f4] hover:bg-[#4285f4] hover:text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
                Join As A Volunteer
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default TeamSection;
