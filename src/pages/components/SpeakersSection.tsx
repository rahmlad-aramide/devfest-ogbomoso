// import { useState, useEffect } from "react"
// import { motion, AnimatePresence } from "framer-motion"
// import { Twitter, Linkedin, Github, ExternalLink, X, Calendar, Award, Mic, Clock, FileText, Send } from "lucide-react"
// import Link from "next/link"
// import Image from "next/image"

// function SpeakersSection({ data }: any) {
//   const dataSpeakers = data?.speakers || []
//   const [pastSpeakers, setPastSpeakers] = useState([...dataSpeakers])
//   const [showPastSpeakers, setShowPastSpeakers] = useState(false)

//   const cfsData = {
//     submissionDeadline: "30th September",
//     eventDate: "December 5-6, 2025",
//     tracks: [
//       "Artificial Intelligence & Machine Learning",
//       "Cloud & DevOps",
//       "Web Technologies",
//       "Mobile Development",
//       "Agentic Experience",
//       "Web3"
//     ],
//     guidelines: {
//       abstractLength: "NIL",
//       sessionDuration: "NIL",
//       submissionLink: "https://bit.ly/devfestogbo25-cfs"
//     }
//   }

//   return (
//     <section className="py-20 bg-white text-black relative overflow-hidden" id="cfp">

//       <div className="absolute inset-0">
//         <div className="absolute top-20 right-20 w-80 h-80 bg-[#4285f4]/5 rounded-full blur-3xl" />
//         <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#34a853]/5 rounded-full blur-3xl" />
//       </div>

//       <div className="container mx-auto px-4 relative z-10">

//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="text-center mb-16"
//         >
//           <motion.span
//             initial={{ scale: 0.8, opacity: 0 }}
//             whileInView={{ scale: 1, opacity: 1 }}
//             transition={{ delay: 0.2, duration: 0.6 }}
//             className="inline-flex items-center gap-2 px-6 py-2 bg-[#4285f4]/10 backdrop-blur-sm rounded-full text-sm mb-6 border border-[#4285f4]/20 font-semibold"
//           >
//             <Calendar className="w-4 h-4 text-[#4285f4]" />
//             2025 SPEAKERS
//           </motion.span>

//           <motion.h2
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.3, duration: 0.8 }}
//             className="text-4xl lg:text-6xl font-bold pb-6 bg-gradient-to-r from-black to-gray-700 bg-clip-text text-transparent"
//           >
//             Amazing Speakers Coming Soon
//           </motion.h2>

//           <motion.p
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.4, duration: 0.8 }}
//             className="text-xl text-gray-600 max-w-2xl mx-auto mb-12"
//           >
//             We&apos;re curating an incredible lineup of experts for DevFest 2025. The wait will be worth it!
//           </motion.p>

//           <div className="grid lg:grid-cols-2 gap-12 items-center">

//             <motion.div
//               initial={{ opacity: 0, x: -50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ delay: 0.5, duration: 0.8 }}
//               className="flex flex-col items-center justify-center space-y-8"
//             >

//               <div className="flex justify-center relative">
//                 <motion.div
//                   className="relative"
//                   animate={{
//                     y: [0, -15, 0],
//                   }}
//                   transition={{
//                     duration: 4,
//                     repeat: Infinity,
//                     ease: "easeInOut"
//                   }}
//                 >
//                   <div className="w-56 h-56 bg-white/80 backdrop-blur-xl rounded-3xl flex items-center justify-center border-2 border-dashed border-[#4285f4]/30 shadow-2xl relative overflow-hidden">
//                     <motion.div
//                       className="text-6xl"
//                       animate={{
//                         scale: [1, 1.2, 1],
//                         rotate: [0, 5, 0, -5, 0],
//                       }}
//                       transition={{
//                         duration: 3,
//                         repeat: Infinity,
//                         ease: "easeInOut"
//                       }}
//                     >
//                       🎤
//                     </motion.div>

//                     <motion.div
//                       className="absolute -top-3 -left-3 w-12 h-12 bg-[#4285f4]/20 rounded-full blur-sm"
//                       animate={{
//                         x: [0, 8, 0],
//                         y: [0, -8, 0],
//                       }}
//                       transition={{
//                         duration: 6,
//                         repeat: Infinity,
//                         ease: "easeInOut",
//                         delay: 0.5
//                       }}
//                     />
//                     <motion.div
//                       className="absolute -bottom-3 -right-3 w-16 h-16 bg-[#34a853]/20 rounded-full blur-sm"
//                       animate={{
//                         x: [0, -8, 0],
//                         y: [0, 8, 0],
//                       }}
//                       transition={{
//                         duration: 5,
//                         repeat: Infinity,
//                         ease: "easeInOut",
//                         delay: 1
//                       }}
//                     />
//                     <motion.div
//                       className="absolute top-4 -right-4 w-8 h-8 bg-[#f9ab00]/20 rounded-full blur-sm"
//                       animate={{
//                         x: [0, 5, 0],
//                         y: [0, 5, 0],
//                       }}
//                       transition={{
//                         duration: 4,
//                         repeat: Infinity,
//                         ease: "easeInOut",
//                         delay: 1.5
//                       }}
//                     />

//                     <motion.div
//                       className="absolute inset-0 rounded-3xl border-2 border-[#4285f4]/30"
//                       animate={{
//                         scale: [1, 1.1, 1],
//                         opacity: [0.3, 0.6, 0.3],
//                       }}
//                       transition={{
//                         duration: 2,
//                         repeat: Infinity,
//                         ease: "easeOut"
//                       }}
//                     />
//                     <motion.div
//                       className="absolute inset-0 rounded-3xl border-2 border-[#34a853]/30"
//                       animate={{
//                         scale: [1, 1.2, 1],
//                         opacity: [0.2, 0.4, 0.2],
//                       }}
//                       transition={{
//                         duration: 2.5,
//                         repeat: Infinity,
//                         ease: "easeOut",
//                         delay: 0.5
//                       }}
//                     />
//                   </div>
//                 </motion.div>
//               </div>

//               <div className="grid grid-cols-3 gap-4 max-w-md mx-auto">
//                 <div className="text-center">
//                   <div className="w-10 h-10 bg-[#4285f4]/10 rounded-full flex items-center justify-center mx-auto mb-2">
//                     <Mic className="w-5 h-5 text-[#4285f4]" />
//                   </div>
//                   <p className="text-xl font-bold text-[#4285f4]">15+</p>
//                   <p className="text-xs text-gray-600">Expected Speakers</p>
//                 </div>
//                 <div className="text-center">
//                   <div className="w-10 h-10 bg-[#34a853]/10 rounded-full flex items-center justify-center mx-auto mb-2">
//                     <Award className="w-5 h-5 text-[#34a853]" />
//                   </div>
//                   <p className="text-xl font-bold text-[#34a853]">12+</p>
//                   <p className="text-xs text-gray-600">Sessions</p>
//                 </div>
//                 <div className="text-center">
//                   <div className="w-10 h-10 bg-[#ea4335]/10 rounded-full flex items-center justify-center mx-auto mb-2">
//                     <Calendar className="w-5 h-5 text-[#ea4335]" />
//                   </div>
//                   <p className="text-xl font-bold text-[#ea4335]">2</p>
//                   <p className="text-xs text-gray-600">Days</p>
//                 </div>
//               </div>
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, x: 50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ delay: 0.6, duration: 0.8 }}
//               className="bg-gradient-to-r from-[#4285f4]/5 to-[#34a853]/5 backdrop-blur-sm rounded-3xl p-6 lg:p-8 border-2 border-dashed border-[#4285f4]/30 h-full flex flex-col justify-center"
//             >
//               <div className="text-center mb-6">
//                 <motion.span
//                   initial={{ scale: 0.9, opacity: 0 }}
//                   whileInView={{ scale: 1, opacity: 1 }}
//                   transition={{ delay: 0.8, duration: 0.6 }}
//                   className="inline-flex items-center gap-2 px-4 py-1 bg-[#4285f4]/20 backdrop-blur-sm rounded-full text-xs mb-3 border border-[#4285f4]/30 font-semibold"
//                 >
//                   <FileText className="w-3 h-3 text-[#4285f4]" />
//                   CALL FOR SPEAKERS
//                 </motion.span>
//                 <h3 className="text-xl lg:text-2xl font-bold text-[#4285f4] mb-3">
//                   Share Your Knowledge
//                 </h3>
//                 <p className="text-gray-600 text-sm">
//                   We&apos;re looking for passionate speakers to share their expertise at DevFest Ogbomoso 2025.
//                 </p>
//               </div>

//               <div className="space-y-4 mb-6">

//                 <div className="bg-white/80 backdrop-blur-md rounded-xl p-4 border border-gray-200">
//                   <div className="flex items-center gap-3 mb-3">
//                     <div className="w-8 h-8 bg-[#4285f4]/10 rounded-full flex items-center justify-center">
//                       <Mic className="w-4 h-4 text-[#4285f4]" />
//                     </div>
//                     <h4 className="font-bold text-[#4285f4]">Preferred Tracks</h4>
//                   </div>
//                   <ul className="space-y-1 text-xs text-gray-600">
//                     {cfsData.tracks.map((track, index) => (
//                       <li key={index} className="flex items-center">
//                         <div className="w-1.5 h-1.5 bg-[#34a853] rounded-full mr-2" />
//                         {track}
//                       </li>
//                     ))}
//                   </ul>
//                 </div>

//                 <div className="bg-white/80 backdrop-blur-md rounded-xl p-4 border border-gray-200">
//                   <div className="flex items-center gap-3 mb-3">
//                     <div className="w-8 h-8 bg-[#ea4335]/10 rounded-full flex items-center justify-center">
//                       <Clock className="w-4 h-4 text-[#ea4335]" />
//                     </div>
//                     <h4 className="font-bold text-[#ea4335]">Important Dates</h4>
//                   </div>
//                   <div className="space-y-2 text-xs text-gray-600">
//                     <div className="flex justify-between">
//                       <span>Submission Deadline:</span>
//                       <span className="font-semibold text-[#ea4335]">{cfsData.submissionDeadline}</span>
//                     </div>
//                     <div className="flex justify-between">
//                       <span>Event Date:</span>
//                       <span className="font-semibold text-[#ea4335]">{cfsData.eventDate}</span>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 1, duration: 0.6 }}
//                 className="text-center"
//               >
//                 <a
//                   href={cfsData.guidelines.submissionLink}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="group inline-flex items-center gap-2 bg-[#4285f4] hover:bg-[#3367d6] text-white px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl w-full justify-center"
//                 >
//                   <Send className="w-4 h-4" />
//                   Submit Your Proposal
//                   <ExternalLink className="w-3 h-3 opacity-70 group-hover:opacity-100 transition-opacity" />
//                 </a>
//               </motion.div>
//             </motion.div>
//           </div>

//           <motion.button
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.7, duration: 0.6 }}
//             onClick={() => setShowPastSpeakers(true)}
//             className="group border-2 border-[#4285f4] text-[#4285f4] hover:bg-[#4285f4] hover:text-white px-6 py-3 rounded-full font-semibold text-base transition-all duration-300 inline-flex items-center gap-2 relative overflow-hidden max-w-xs mx-auto mt-12"
//           >
//             <span className="relative z-10">See 2024 Speakers</span>
//             <ExternalLink className="w-4 h-4 relative z-10" />
//             <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -skew-x-12" />
//           </motion.button>
//         </motion.div>
//       </div>

//       <AnimatePresence>
//         {showPastSpeakers && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 bg-black/70 backdrop-blur-2xl z-50 flex items-center justify-center p-4"
//             onClick={() => setShowPastSpeakers(false)}
//           >
//             <motion.div
//               initial={{ scale: 0.9, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               exit={{ scale: 0.9, opacity: 0 }}
//               transition={{ type: "spring", damping: 25, stiffness: 300 }}
//               className="bg-white/95 backdrop-blur-2xl rounded-3xl p-6 lg:p-8 max-w-6xl w-full max-h-[90vh] overflow-y-auto relative"
//               onClick={(e) => e.stopPropagation()}
//             >

//               <div className="absolute top-0 right-0 w-32 h-32 bg-[#4285f4]/10 rounded-full blur-2xl -translate-y-16 translate-x-16" />
//               <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#34a853]/10 rounded-full blur-2xl translate-y-16 -translate-x-16" />

//               <div className="flex items-center justify-between mb-8 relative z-10">
//                 <div>
//                   <h3 className="text-2xl lg:text-3xl font-bold text-[#4285f4] mb-2">
//                     2024 Speakers
//                   </h3>
//                   <p className="text-gray-600">The amazing minds from last year&apos;s DevFest</p>
//                 </div>
//                 <button
//                   onClick={() => setShowPastSpeakers(false)}
//                   className="w-10 h-10 border-2 border-gray-300 text-gray-500 rounded-full flex items-center justify-center hover:border-[#ea4335] hover:text-[#ea4335] transition-all duration-300 backdrop-blur-sm"
//                 >
//                   <X className="w-5 h-5" />
//                 </button>
//               </div>

//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
//                 {pastSpeakers.map((speaker, index) => (
//                   <motion.div
//                     key={speaker.id}
//                     initial={{ opacity: 0, y: 20, scale: 0.95 }}
//                     animate={{ opacity: 1, y: 0, scale: 1 }}
//                     transition={{ delay: index * 0.1 }}
//                     whileHover={{ y: -5, scale: 1.02 }}
//                     className="bg-white/80 backdrop-blur-md rounded-2xl p-6 border border-gray-200/50 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
//                   >

//                     <div className="absolute -top-3 -left-3 w-8 h-8 bg-[#4285f4]/20 rounded-full blur-sm group-hover:bg-[#4285f4]/30 transition-colors" />
//                     <div className="absolute -bottom-3 -right-3 w-10 h-10 bg-[#34a853]/20 rounded-full blur-sm group-hover:bg-[#34a853]/30 transition-colors" />

//                     <div className="relative w-32 h-32 mx-auto mb-4 rounded-2xl overflow-hidden border-4 border-white shadow-lg group-hover:border-[#4285f4]/20 transition-colors duration-300">
//                       <Image
//                         src={speaker.image}
//                         alt={speaker.name}
//                         fill
//                         className="object-cover group-hover:scale-110 transition-transform duration-500"
//                       />
//                       <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//                     </div>

//                     <div className="text-center">
//                       <h4 className="font-bold text-lg text-[#4285f4] mb-1 group-hover:text-[#3367d6] transition-colors">
//                         {speaker.name}
//                       </h4>
//                       <p className="text-sm text-[#ea4335] mb-3 font-medium">
//                         {speaker.role}
//                       </p>

//                       {speaker.socials && (
//                         <div className="flex justify-center gap-2">
//                           {speaker.socials.twitter && (
//                             <a
//                               href={`https://twitter.com/${speaker.socials.twitter}`}
//                               target="_blank"
//                               className="w-8 h-8 border-2 border-[#4285f4] text-[#4285f4] rounded-full flex items-center justify-center hover:bg-[#4285f4] hover:text-white transition-all duration-300 backdrop-blur-sm"
//                             >
//                               <Twitter className="w-3 h-3" />
//                             </a>
//                           )}
//                           {speaker.socials.linkedin && (
//                             <a
//                               href={`https://linkedin.com/in/${speaker.socials.linkedin}`}
//                               target="_blank"
//                               className="w-8 h-8 border-2 border-[#4285f4] text-[#4285f4] rounded-full flex items-center justify-center hover:bg-[#4285f4] hover:text-white transition-all duration-300 backdrop-blur-sm"
//                             >
//                               <Linkedin className="w-3 h-3" />
//                             </a>
//                           )}
//                           {speaker.socials.github && (
//                             <a
//                               href={`https://github.com/${speaker.socials.github}`}
//                               target="_blank"
//                               className="w-8 h-8 border-2 border-[#4285f4] text-[#4285f4] rounded-full flex items-center justify-center hover:bg-[#4285f4] hover:text-white transition-all duration-300 backdrop-blur-sm"
//                             >
//                               <Github className="w-3 h-3" />
//                             </a>
//                           )}
//                         </div>
//                       )}
//                     </div>
//                   </motion.div>
//                 ))}
//               </div>

//               <div className="text-center mt-8 relative z-10">
//                 <button
//                   onClick={() => setShowPastSpeakers(false)}
//                   className="border-2 border-[#ea4335] text-[#ea4335] hover:bg-[#ea4335] hover:text-white px-6 py-2 rounded-full font-medium transition-all duration-300 backdrop-blur-sm"
//                 >
//                   Close Preview
//                 </button>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </section>
//   )
// }

// export default SpeakersSection

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
    description?: string;
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

  const currentSpeakers: Speaker[] = [
    // Pre-DevFest Series
    {
      id: "paul-edward",
      name: "Paul Edward",
      role: "CTO",
      company: "Afrinvest West Africa",
      image: "./speakers/paule.jpg",
      bio: "CTO with 12+ years architecting high-performance fintech systems. Built open-source tools with 300K+ downloads worldwide.",
      bioLong:
        "A seasoned software engineer and CTO with 12 years of experience architecting and scaling secure, high-performance web and mobile systems across fintech, DevOps, and developer tooling. He has worked with leading companies globally, delivering mission-critical platforms to millions of users. Paul has led large-scale system redesigns handling millions of transactions, built advanced fraud detection pipelines, and created open-source developer tools with over 300,000 downloads worldwide. He is also the founder of Infinite Community, empowering developers through mentorship and collaborative projects.",
      session: {
        title:
          "Scaling Databases for the Future: Strategies That Power Millions",
        track: "Pre-DevFest Series",
        time: "Online",
        day: "Pre-DevFest",
      },
    },
    {
      id: "asoluka-tochukwu",
      name: "Asoluka Tochukwu Austin",
      role: "CTO, Co-founder",
      company: "Preview AI",
      image: "./speakers/asoluka.jpeg",
      bio: "CTO & Co-founder with 10+ years building systems and educating thousands. Full-stack expert in AI, web3, and system design.",
      bioLong:
        "A systems builder and educator with over 10 years of experience who has taught thousands of learners through platforms such as Ustacky, HNG Tech, Zuri Team and the freeCodeCamp community while co-founding PreviewAI and SlikRide. With expertise spanning full-stack development, system design, web3 and emerging AI technologies, he brings a unique blend of engineering practice and teaching experience to his sessions, equipping audiences to learn, build, and innovate in the AI-driven future.",
      session: {
        title:
          "Testing the Limits of Frontier AI Models - Understanding their Strengths and Differences",
        track: "Pre-DevFest Series",
        time: "Online",
        day: "Pre-DevFest",
      },
    },
    {
      id: "tashinga-pemhiwa",
      name: "Tashinga Pemhiwa",
      role: "Android Technology Lead",
      company: "Absa",
      image: "./speakers/tashinga.jpeg",
      bio: "Android Technology Lead with 20 years building mobile solutions. Specialist in cross-platform apps solving real-world problems.",
      bioLong:
        "An Android Technology Lead at Absa with 20 years of software development experience, specializing in building mobile apps that solve real-world problems across multiple platforms. With deep expertise in Android development and a passion for innovation, Tashinga creates user-centric applications that deliver exceptional experiences on Africa's mobile platform of choice. He is dedicated to enriching user experiences through cutting-edge mobile technology.",
      session: {
        title:
          "AI on Android: Enriching User Experience on Africa's Mobile Platform of Choice",
        track: "Pre-DevFest Series",
        time: "Online",
        day: "Pre-DevFest",
      },
    },
    {
      id: "ridwan-adewole",
      name: "Ridwan Adewole",
      role: "Software Engineer",
      company: "AlgramX",
      image: "./speakers/ridwan.jpg",
      bio: "Software Engineer building intuitive mobile apps with AI. Active mentor exploring tech for social impact.",
      bioLong:
        "A curious software engineer at AlgramX passionate about building intuitive mobile apps and exploring AI for social impact while actively mentoring in tech communities. Ridwan combines technical expertise with a deep commitment to using technology as a force for positive change, particularly in Web3 and blockchain technologies. His work focuses on creating transparent, trustworthy digital experiences that empower users and communities across Africa.",
      session: {
        title:
          "Welcome to Web3: The Internet of Ownership, Trust, and Transparency",
        track: "Pre-DevFest Series",
        time: "Online",
        day: "Pre-DevFest",
      },
    },

    // Day 1 - Workshop Speakers
    {
      id: "timothy-ogundipe",
      name: "Timothy Ogundipe",
      role: "Product Designer",
      company: "Grey",
      image: "./speakers/timothyo.jpg",
      bio: "Product Designer with 5+ years at Grey. Expert in creating intuitive experiences at design-code intersection.",
      bioLong:
        "A Product and Interaction Designer at Grey with 5+ years of experience creating intuitive digital experiences at the intersection of design and code. Timothy specializes in prototyping trust and feedback in intelligent interfaces, focusing on making AI-powered systems more transparent, predictable, and user-friendly. His work emphasizes the invisible aspects of UX that build user confidence and enable seamless human-AI interaction.",
      session: {
        title:
          "Designing the Invisible: Prototyping Trust and Feedback in Intelligent Interfaces",
        track: "Design and Product",
        time: "10:00 AM - 11:00 AM",
        day: "Workshop",
      },
    },
    {
      id: "david-oluwabusayo",
      name: "David Oluwabusayo",
      role: "CTO",
      company: "Paperless",
      image: "./speakers/davido.jpg",
      bio: "CTO at Paperless with 4+ years Flutter expertise. Building high-performance cross-platform mobile experiences.",
      bioLong:
        "A mobile engineer and CTO at Paperless with 4+ years of Flutter expertise, passionate about building high-quality, cross-platform apps that deliver exceptional user experiences. David specializes in leveraging cutting-edge technologies like WebAssembly to create blazing-fast mobile applications that work seamlessly across platforms. His focus on performance optimization and modern architecture patterns makes him a leader in next-generation mobile development.",
      session: {
        title:
          "Flutter + WebAssembly: Building High-Performance Cross-Platform Apps",
        track: "Engineering and Security",
        time: "10:00 AM - 11:00 AM",
        day: "Workshop",
      },
    },
    {
      id: "ojo-ilesanmi",
      name: "Ojo Ilesanmi",
      role: "Java Backend Engineer",
      company: "ATBTech",
      image: "./speakers/ojoi.jpg",
      bio: "Java Backend Engineer at ATBTech with 5+ years. Expert in secure, scalable cloud-native systems.",
      bioLong:
        "A Software Engineer at ATBTech with 5+ years building secure, scalable cloud-native systems while expanding expertise at the intersection of data and software engineering. Ojo specializes in real-time fraud detection systems and AI-powered cloud solutions, combining robust backend architecture with intelligent data processing. His work focuses on building production-ready systems that are both highly secure and infinitely scalable.",
      session: {
        title: "Building a Real-Time Fraud Detection System with AI and Cloud",
        description: "Secure, Scalable, and Hands-On",
        track: "AI and Cloud",
        time: "10:00 AM - 11:00 AM",
        day: "Workshop",
      },
    },
    {
      id: "oluwatobi-immanuel",
      name: "Oluwatobi Immanuel",
      role: "Founder",
      company: "Concreap Technology Solutions",
      image: "./speakers/oluwatobii.jpg",
      bio: "Founder at Concreap with 10+ years fullstack & blockchain experience. Led teams processing billions in transactions.",
      bioLong:
        "A Fullstack Software & Blockchain Engineer and Founder of Concreap Technology Solutions with 10+ years of experience who has led engineering teams processing billions in transactions and built innovative gaming platforms. His technical journey spans from creating Gamr's Gaming and Tournament Bracket Software (considered the first in Africa) to leading payment switching systems processing over 1 Billion Naira. A Technical Force Multiplier who combines engineering excellence with product design thinking.",
      session: {
        title: "Design - Intentional Creativity, Not Automation",
        track: "Design and Product",
        time: "11:00 AM - 12:00 PM",
        day: "Workshop",
      },
    },
    {
      id: "adeniji-oluwaferanmi",
      name: "Adeniji Oluwaferanmi",
      role: "Software Engineer",
      company: "Moniepoint",
      image: "./speakers/adenijio.png",
      bio: "Senior Software Engineer at Moniepoint. Microfrontend expert with open-source libraries in 15+ projects.",
      bioLong:
        "A Senior Software Engineer at Moniepoint specializing in React, TypeScript, and microfrontend architectures with open-source libraries like Connectic (3K+ downloads) used across 15+ projects. Oluwaferanmi leads cross-team engineering efforts and focuses on practical solutions that scale in production environments. His expertise in migrating legacy applications to modern architectures and creating reusable development templates makes him a key contributor to large-scale frontend innovation.",
      session: {
        title: "Migration to Microfrontends",
        track: "Engineering and Security",
        time: "11:00 AM - 12:00 PM",
        day: "Workshop",
      },
    },
    {
      id: "ahmd-olanrewaju",
      name: "Ahm'd Olanrewaju",
      role: "Fullstack Software Engineer",
      company: "INDICINA",
      image: "./speakers/ahmd.jpg",
      bio: "Fullstack Engineer at INDICINA building AI agents. Teacher and mentor in tech communities.",
      bioLong:
        "A full-stack software engineer at INDICINA building AI-powered applications with Gemini and Google ADK while teaching and mentoring developers in tech communities. Ahm'd specializes in creating full-stack AI agents and Model-as-a-Service (MaaS) solutions, bridging the gap between cutting-edge AI capabilities and practical application development. His passion for education drives him to make complex AI concepts accessible to developers at all levels.",
      session: {
        title:
          "Hands-On with Gemini and Google ADK: Building Full-Stack AI Agents MaaS",
        track: "AI and Cloud",
        time: "11:00 AM - 12:00 PM",
        day: "Workshop",
      },
    },
    {
      id: "titcombe-michael",
      name: "Titcombe Michael",
      role: "CEO/Brand Identity Designer",
      company: "HUELUMINATE",
      image: "./speakers/titcombe.JPG",
      bio: "CEO at HUELUMINATE with 4+ years. Brand designer building trust in the AI age.",
      bioLong:
        "A Brand Identity Designer and CEO of HUELUMINATE with 4+ years of experience working with organizations like NITDA, passionate about leveraging design and AI to build brand trust. Titcombe focuses on designing human-centered brands and interfaces that communicate safety, reliability, and authenticity in the age of AI. His expertise in visual hierarchy, color psychology, and scalable design systems helps brands create trustworthy digital experiences.",
      session: {
        title:
          "Designing Trust: Building Human-Centered Brands and Interfaces in the Age of AI",
        track: "Design and Product",
        time: "12:00 PM - 1:00 PM",
        day: "Workshop",
      },
    },

    // Day 2 - Main Conference
    {
      id: "esuola-daniel",
      name: "Esuola Daniel Okikiola",
      role: "Founder & Errand Boy",
      company: "Provolo",
      image: "./speakers/esuola.png",
      bio: "Founder at Provolo transforming ideas into scalable digital experiences. Multidisciplinary creative exploring AI innovation.",
      bioLong:
        "Esuola Daniel is a multidisciplinary creative, digital builder, and Founder at Provolo who transforms ideas into scalable online experiences while exploring AI's impact on technology and business. Beyond software development, Daniel actively contributes to conversations on how artificial intelligence is reshaping technology and business with multiple published articles. His ability to bridge strategy, aesthetics, and technical execution positions him at the forefront of AI-driven digital innovation.",
      session: {
        title:
          "The Fine Art of Prompting: Getting Unbeatable Results with Gemini",
        track: "AI & ML",
        time: "10:30 AM - 11:15 AM",
        day: "Main Conference",
      },
    },
    {
      id: "chukwuemeka-chukwurah",
      name: "Chukwuemeka Chukwurah",
      role: "Senior Software Engineer",
      company: "Rocksteady Technology",
      image: "./speakers/chukwuemeka.jpg",
      bio: "Senior Engineer at Rocksteady, co-lead of GDG Cloud Lagos. Expert in large-scale resilient systems.",
      bioLong:
        "A Senior Software Engineer at Rocksteady Technology focused on systems design and infrastructure, co-leading GDG Cloud Lagos while building large-scale, resilient backend systems. Chukwuemeka specializes in AI-powered observability with Google Cloud Platform, helping teams transform raw logs into actionable insights. His expertise in cloud-native architectures and production monitoring makes him invaluable for teams running mission-critical services at scale.",
      session: {
        title: "From Logs to Insights: AI-Powered Observability with GCP",
        track: "Cloud & DevOps",
        time: "11:15 AM - 12:00 PM",
        day: "Main Conference",
      },
    },
    {
      id: "tope-james",
      name: "Tope James Moses",
      role: "Co-Founder",
      company: "ATC Africa",
      image: "./speakers/topejames.jpg",
      bio: "Co-Founder of ATC Africa with 6+ years. Award-winning community manager growing ecosystems.",
      bioLong:
        "An award-winning Program and Community Manager and Co-Founder of ATC Africa with 6+ years of experience growing developer communities across the continent. Tope's work focuses on leveraging community as a catalyst for professional and personal growth, demonstrating how active participation, open-source contribution, and genuine networking directly impact career trajectories. His expertise in community building has empowered thousands of developers across Africa.",
      session: {
        title: "Community & People: Leveraging Community for Growth",
        track: "Community",
        time: "12:00 PM - 12:45 PM",
        day: "Main Conference",
      },
    },
    {
      id: "boluwatife-olaifa",
      name: "Boluwatife Olaifa",
      role: "Software Engineer",
      company: "Wewire",
      image: "./speakers/boluwatifeo.jpg",
      bio: "Software Engineer at Wewire on the cutting edge. Building with blockchain and AI expertise.",
      bioLong:
        "Boluwatife Busta is a Software Engineer at Wewire who stays on the edge of latest tech trends, building products with blockchain and AI expertise. Specializing in backend development with Python, Django, Flask, and FastAPI, he is deeply invested in developer productivity, clean code, and workflows that improve speed and quality. His passion for leveraging AI to become a 10x engineer makes him a valuable voice on modern development practices.",
      session: {
        title: "Becoming a 10x engineer with AI",
        track: "Engineering",
        time: "12:45 PM - 1:30 PM",
        day: "Main Conference",
      },
    },
    // {
    //   id: "joy-ndukwe",
    //   name: "Joy Ndukwe",
    //   role: "Community Manager & Content Creator",
    //   company: "Independent / Freelance",
    //   image: "./speakers/joyn.png",
    //   bio: "Community Manager & Content Creator with 3+ years. Leading tech ecosystems across Africa.",
    //   bioLong:
    //     "An independent Community Manager and Content Creator with 3+ years leading tech communities across Africa and creating content on AI and developer growth. Joy specializes in showing how AI can power the future of communities through safer spaces, personalized learning, and scalable content creation. Her experience managing developer ecosystems positions her as a bridge between AI innovation and practical community building for builders and creators.",
    //   session: {
    //     title:
    //       "How AI Is Powering the Future of Communities: Lessons for Builders & Creators",
    //     track: "AI & Community",
    //     time: "3:15 PM - 4:00 PM",
    //     day: "Main Conference",
    //   },
    // },
  ];

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
              { id: "day1", label: "Day 1 - Workshop" },
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
              className="relative h-[460px]"
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
                      {speaker.session?.description && (
                        <p className="text-sm opacity-90 mb-3 font-medium">
                          {speaker.session.description}
                        </p>
                      )}

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
