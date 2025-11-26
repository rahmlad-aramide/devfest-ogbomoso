import { motion } from "framer-motion";
import { Users2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface TeamMember {
  name: string;
  role: string;
  image: string;
  team: string;
}

function TeamSection({ data }: { data: any }) {
  const [activeFilter, setActiveFilter] = useState<string>("Organizers");
  const [viewTeam, setViewTeam] = useState<boolean>(false);

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
      image: "/team/abdrahman.jpg",
      team: "Organizers",
    },
  ];

  const filters = [
    "Organizers",
    "Media and Publicity Team",
    "Graphics Design Team",
    "Dev Team",
    "Operations Team",
  ];

  const filteredTeam = teamData.filter(
    (member) => member.team === "Organizers"
  );

  return (
    <section
      id="team"
      className="pb-20 lg:pb-28 bg-gradient-to-br from-[#f8d8d8] via-[#f0f0f0] to-[#f8d8d8] text-[#1e1e1e] relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#4285f4]/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#ea4335]/10 rounded-full blur-3xl animate-pulse-slow delay-1000" />
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-24">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-2 px-6 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm mb-6 border-2 border-[#4285f4]/20 font-bold text-[#4285f4]"
          >
            <Users2 className="w-4 h-4" />
            OUR AMAZING TEAM
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl lg:text-6xl font-extrabold mb-6 text-[#1e1e1e]"
          >
            Meet the Humans Behind the Fest
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-sm lg:text-xl text-[#1e1e1e]/80 max-w-2xl mx-auto leading-relaxed font-semibold"
          >
            Our passionate and dedicated team has been preparing hard to deliver
            an incredible DevFest experience!
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.7 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
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
                  </div>
                </div>
              </div>

              {/* <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#4285f4]/50 rounded-2xl transition-all duration-300" /> */}
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.7 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-[#ffe7a5]/40 via-[#f8d8d8]/40 to-[#ffe7a5]/40 rounded-2xl p-8 border-2 border-[#f0f0f0] max-w-3xl mx-auto shadow-lg">
            <h3 className="text-2xl font-extrabold text-[#1e1e1e] mb-3">
              Want to Be a Part of It?
            </h3>
            <p className="text-[#1e1e1e]/80 mb-6 font-semibold">
              We're always looking for passionate individuals to join our team
              and help make DevFest even better!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center justify-center gap-2 bg-[#f9ab00] hover:bg-[#e69900] text-white px-8 py-3 rounded-full font-bold transition-all duration-300 transform hover:scale-105 shadow-lg">
                Become A Sponsor
              </button>
              <Link
                className="inline-flex items-center justify-center gap-2 border-2 border-[#4285f4] text-[#4285f4] hover:bg-[#4285f4] hover:text-white px-8 py-3 rounded-full font-bold transition-all duration-300 transform hover:scale-105 shadow-md"
                href="/team-members"
              >
                View Entire Team
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default TeamSection;
