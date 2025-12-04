import { motion } from "framer-motion";
import {
  Calendar,
  Clock,
  MapPin,
  User,
  ChevronRight,
  Download,
} from "lucide-react";
import { useEffect, useState } from "react";

interface Session {
  time: string;
  duration?: string;
  title: string;
  speaker?: string;
  description?: string;
  track?: string;
  room?: string;
}

interface DaySchedule {
  day: string;
  date: string;
  sessions: Session[];
}

function ScheduleSection({ data }: any) {
  const [activeDay, setActiveDay] = useState<number>(0);
  const [currentBg, setCurrentBg] = useState(0);

  const scheduleData: DaySchedule[] = [
    {
      day: "Pre-DevFest Series",
      date: "Online Events",
      sessions: [
        {
          time: "Online",
          duration: "60mins",
          title:
            "Scaling Databases for the Future: Strategies That Power Millions",
          speaker: "Paul Edward",
        },
        {
          time: "Online",
          duration: "60mins",
          title:
            "Testing the Limits of Frontier AI Models - Understanding their Strengths and Differences",
          speaker: "Asoluka Tochukwu Austin",
          description: "CTO/Co-Founder, Preview AI",
        },
        {
          time: "Online",
          duration: "60mins",
          title:
            "AI on Android: Enriching User Experience on Africa's Mobile Platform of Choice",
          speaker: "Tashinga Pemhiwa",
          description: "Android Technology Lead, Absa",
        },
        {
          time: "Online",
          duration: "60mins",
          title:
            "Welcome to Web3: The Internet of Ownership, Trust, and Transparency",
          speaker: "Ridwan Adewole",
          description: "Software Engineer, AlgramX",
        },
      ],
    },
    {
      day: "Day 1",
      date: "December 5th - Workshops",
      sessions: [
        {
          time: "8:00 AM - 9:00 AM",
          duration: "60mins",
          title: "Registration",
          speaker: "",
        },
        {
          time: "9:00 AM - 9:30 AM",
          duration: "30mins",
          title: "Welcome to Devfest Ogbomoso 2025, Ground Rules",
          speaker: "Glory Olaifa",
        },
        {
          time: "9:35 AM - 10:05 AM",
          duration: "30mins",
          title:
            "Breaking Barriers: How to Build a High-Impact Tech Career from Anywhere",
          speaker: "Ola Okegbemi",
        },
        {
          time: "10:05AM - 10:30AM",
          duration: "25mins",
          title: "Career Session: The Power of Doing: Learning by Building",
          speaker: "Favour Afolabi",
        },
        {
          time: "10:40AM - 11:50PM",
          duration: "70mins",
          title: "Track 1 - Parallel Sessions",
          track: "TRACK 1",
          description:
            "\n• Designing the Invisible: Prototyping Trust and Feedback in Intelligent Interfaces. (Design and Product) - Timothy Ogundipe\n\n • Flutter + WebAssembly: Building High-Performance Cross-Platform Apps (Engineering and Security) - David Oluwabusayo\n\n • Building a Real-Time Fraud Detection System with AI and Cloud (AI and Cloud) - Ojo Ilesanmi",
        },
        {
          time: "11:50PM - 1:00PM",
          duration: "70mins",
          title: "Track 2 - Parallel Sessions",
          track: "TRACK 2",
          description:
            "\n• Design - Intentional Creativity, Not Automation (Design and Product) - Oluwatobi Immanuel\n\n • Migration to Microfrontends (Engineering and Security) - Adeniji Oluwaferanmi\n\n • Hands-On with Gemini and Google ADK: Building Full-Stack AI Agents MaaS (AI and Cloud) - Ahm'd Olanrewaju",
        },
        {
          time: "1:00PM - 2:50PM",
          duration: "110mins",
          title: "JUMAT/LUNCH BREAK",
        },
        {
          time: "2:50PM - 4PM",
          duration: "70mins",
          title: "Track 3 - Parallel Sessions",
          track: "TRACK 3",
          description:
            "\n• Designing Trust: Building Human-Centered Brands and Interfaces in the Age of AI (Design and Product) - TITCOMBE MICHAEL\n\n • Building Clean and Scalable AI Powered Flutter Apps (Engineering and Security) - Taiwo Farinu \n\n • Gemma: Inferences and building a MaaS (AI and Cloud DevOps) - MUDASIRU Rasheed Taiwo",
        },
        {
          time: "Bonus Session",
          duration: "TBD",
          title:
            "Hands-On: Building an AI-Powered Website Builder Like Bolt & Lovable — From Scratch",
          speaker: "Daniel Olowoniyi",
          track: "AI & Engineering",
        },
      ],
    },
    {
      day: "Day 2",
      date: "December 6th - Main Conference",
      sessions: [
        {
          time: "8:00 AM - 9:00 AM",
          duration: "60mins",
          title: "Registration and Networking",
        },
        {
          time: "9:00 AM - 9:30 AM",
          duration: "30mins",
          title: "Welcome to DevFest Ogbomoso 2025",
        },
        {
          time: "10:00AM - 10:30AM",
          duration: "30mins",
          title:
            "Keynote 1 - ENGINEERING TRUST: The Future of Safe, Secure and Scalable AI Systems for Africa’s Digital Economy.",
          speaker: "Dr Aderinto",
        },
        {
          time: "10:35AM - 11:10AM",
          duration: "35mins",
          title:
            "Keynote 2 - Building Beyond Boundaries: Raising Africa's Next Generation of Scalable Solution Builders",
          speaker: "Dr Niyi Olubiri",
        },
        {
          time: "11:10AM - 11:30AM",
          duration: "20mins",
          title: "Becoming a 10x engineer with AI",
          speaker: "Boluwatife Olaifa",
        },
        {
          time: "11:35AM - 12:20AM",
          duration: "45mins",
          title:
            "PANEL 1: Building Nigeria's Tech Talent Pipeline: Realities, Challenges, and the Road Ahead",
          speaker: "Dr Aderinto and Dr Niyi",
        },
        {
          time: "12:25PM - 12: 45PM",
          duration: "20mins",
          title: "Community & People: Leveraging Community for Growth",
          speaker: "Tope James",
        },
        {
          time: "12:50:PM - 1:00PM",
          duration: "10mins",
          title: "Sponsors Slot",
          speaker: "ORC (Oluseun Onigbinde Resource Center)",
        },
        {
          time: "1:00PM - 1:40PM",
          duration: "40mins",
          title: "Photograph, Lunch Break",
          speaker: "All Attendees",
        },
        {
          time: "1:40PM-1:50PM",
          duration: "10mins",
          title:
            "Challenging the Social Perception Around Self Promotion in Tech",
          speaker: "Steven Edache Paul",
        },
        {
          time: "1:50PM - 2:35PM",
          duration: "45mins",
          title:
            "PANEL 2: The Secrets Behind Successful Engineering Careers: Tools, Mindsets, and Habits",
          speaker: "Immanuel, Feranmi, Rasheed, Favour",
        },
        {
          time: "2:35PM - 2:50PM",
          duration: "15mins",
          title:
            "The Fine Art of Prompting: Getting Unbeatable Results with Gemini",
          speaker: "Daniel Esuola",
        },
        {
          time: "2:50PM - 4:00PM",
          duration: "70mins",
          title: "Games and Networking",
        },
      ],
    },
  ];

  const backgroundImages = [
    "/Bold-glyphs.png",
    // We can add more images here if you want a slideshow effect
  ];

  const days = scheduleData.map((day) => ({ day: day.day, date: day.date }));

  useEffect(() => {
    if (backgroundImages.length > 1) {
      const interval = setInterval(() => {
        setCurrentBg((prev) => (prev + 1) % backgroundImages.length);
      }, 5000); // Change every 5 seconds
      return () => clearInterval(interval);
    }
  }, []);

  return (
    <section
      className="py-20 lg:py-28 bg-gradient-to-tr from-[#f8f1d8] via-[#f0f0f0] to-[#f8f1d8] text-[#1e1e1e] relative overflow-hidden"
      id="schedule"
    >
      {/* Background Decorations */}
      {/* <div className="absolute inset-0 opacity-40">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#4285f4]/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#34a853]/10 rounded-full blur-3xl animate-pulse-slow delay-1000" />
      </div> */}

      <div className="absolute inset-0">
        {backgroundImages.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: currentBg === index ? 0.4 : 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              filter: "blur(5px) brightness(1.1)",
            }}
          />
        ))}

        {/* Semi-transparent overlay to ensure text readability */}
        <div className="absolute inset-0 bg-yellow/70"></div>
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
            className="inline-flex items-center gap-2 px-6 py-2 font-semibold bg-[#4285f4]/20 backdrop-blur-sm rounded-full text-sm mb-6 border border-[#4285f4]/30 text-[#4285f4]"
          >
            <Calendar className="w-4 h-4" />
            EVENT SCHEDULE
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-[#4285f4] to-[#34a853] bg-clip-text py-2 text-transparent"
          >
            Event Agenda
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Explore our carefully curated schedule featuring insightful talks,
            hands-on workshops, and networking opportunities across multiple
            tracks.
          </motion.p>
        </motion.div>

        {/* Day Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          viewport={{ once: true }}
          className="grid grid-cols-3 md:gap-8 px-4 items-center flex-wrap justify-center gap-4 mb-12"
        >
          {days.map((day, index) => (
            <button
              key={index}
              onClick={() => setActiveDay(index)}
              className={`group relative px-8 py-4 rounded-2xl font-semibold text-base transition-all duration-300 overflow-hidden ${
                activeDay === index
                  ? "bg-[#4285f4] text-white shadow-xl scale-105"
                  : "bg-white text-gray-700 hover:bg-gray-50 border-2 border-gray-200 hover:border-[#4285f4]/50"
              }`}
            >
              <span className="relative z-10 flex flex-col items-center gap-1">
                <span className="font-bold">{day.day}</span>
                <span className="text-xs opacity-90">{day.date}</span>
              </span>
              {activeDay === index && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-[#4285f4]"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </button>
          ))}
        </motion.div>

        {/* Schedule Content */}
        <motion.div
          key={activeDay}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-5xl mx-auto"
        >
          <div className="space-y-4">
            {scheduleData[activeDay].sessions.map((session, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, x: 10 }}
                className="group relative bg-white rounded-2xl p-6 shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#4285f4]/30 overflow-hidden"
              >
                <div
                  className={`absolute left-0 top-0 bottom-0 w-1.5 transition-all duration-300 ${
                    index % 4 === 0
                      ? "bg-[#4285f4]"
                      : index % 4 === 1
                      ? "bg-[#ea4335]"
                      : index % 4 === 2
                      ? "bg-[#fbbc04]"
                      : "bg-[#34a853]"
                  } group-hover:w-2`}
                />

                <div className="ml-4">
                  <div className="flex flex-col lg:flex-row lg:items-start gap-4">
                    {/* Time Column */}
                    <div className="lg:w-48 flex-shrink-0">
                      <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full text-sm font-semibold text-gray-700">
                        <Clock className="w-4 h-4 text-[#4285f4]" />
                        {session.time}
                      </div>
                      {session.duration && (
                        <div className="mt-2 text-xs text-gray-500 ml-4">
                          Duration: {session.duration}
                        </div>
                      )}
                    </div>

                    {/* Content Column */}
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          {session.track && (
                            <span className="inline-block px-3 py-1 bg-gradient-to-r from-[#4285f4]/20 to-[#34a853]/20 text-[#4285f4] rounded-full text-xs font-bold mb-2 border border-[#4285f4]/30">
                              {session.track}
                            </span>
                          )}
                          <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#4285f4] transition-colors">
                            {session.title}
                          </h3>

                          {session.speaker && (
                            <div className="flex items-center gap-2 text-gray-600 mb-2">
                              <User className="w-4 h-4 text-[#34a853]" />
                              <span className="font-medium">
                                {session.speaker}
                              </span>
                            </div>
                          )}

                          {session.description && (
                            <p className="text-gray-600 text-base font-medium leading-relaxed whitespace-pre-line mt-2">
                              {session.description}
                            </p>
                          )}

                          {session.room && (
                            <div className="flex items-center gap-2 text-gray-500 text-sm mt-2">
                              <MapPin className="w-4 h-4" />
                              <span>{session.room}</span>
                            </div>
                          )}
                        </div>

                        <ChevronRight className="w-6 h-6 text-[#4285f4] opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-2 transition-all duration-300" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute inset-0 bg-gradient-to-r from-[#4285f4]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Download Schedule CTA */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <button className="inline-flex items-center gap-2 bg-[#4285f4] hover:bg-[#3367d6] text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              <Download className="w-5 h-5" />
              Download Full Schedule
            </button> */}
        {/* <button className="inline-flex items-center gap-2 border-2 border-[#34a853] text-[#34a853] hover:bg-[#34a853] hover:text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105">
              <Calendar className="w-5 h-5" />
              Add to Calendar
            </button> */}
        {/* </div>
        </motion.div> */}
      </div>
    </section>
  );
}

export default ScheduleSection;
