import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { useState, useEffect } from "react"
import {
  Calendar,
  Clock,
  Users,
  MapPin,
  ExternalLink,
  X,
  Mic,
} from "lucide-react"

function ScheduleSection({ data }: any) {
  const [show2024Agenda, setShow2024Agenda] = useState(false)
  const [currentBg, setCurrentBg] = useState(0)

  // Background images for the fading effect
  const backgroundImages = [
    "/Bold-glyphs.png",
    // We can add more images here if you want a slideshow effect
  ]

  
  const agenda2024 = [
    {
      time: "1:00 - 1:15 PM",
      title: "From Concept to Prototype: Rapid Prototyping",
      speaker: "Adeola Adegoke",
      track: "Product Design",
      description:
        "This session explored how ideas quickly transform into functional prototypes, emphasizing speed, user feedback, and iterative design to validate concepts before full development.",
      image: "/speakers/adeola-adegoke.jpg",
    },
    {
      time: "12:30 - 12:45 PM",
      title:
        "Design Systems: A Unified Language Between Designers and Developers",
      speaker: "Courage Egbude",
      track: "UI/UX Track",
      description:
        "This session discussed building design systems as shared frameworks, improving collaboration, ensuring consistency, and streamlining workflows between designers and developers across projects.",
      image: "/speakers/courage-egbude.jpg",
    },
    {
      time: "1:00 - 1:15 PM",
      title: "Authentication Strategies in iOS with Firebase",
      speaker: "Daniel Jermaine",
      track: "Mobile Developement",
      description:
        "This session covered implementing secure authentication in iOS apps using Firebase, highlighting email, social logins, and best practices for user data protection.",
      image: "/speakers/daniel-jermaine.jpg",
    },
  ]


  useEffect(() => {
    if (backgroundImages.length > 1) {
      const interval = setInterval(() => {
        setCurrentBg((prev) => (prev + 1) % backgroundImages.length)
      }, 5000) // Change every 5 seconds
      return () => clearInterval(interval)
    }
  }, [])

  return (
    <section
      className="py-20 relative overflow-hidden"
      id="schedule"
      style={{ backgroundColor: "#FFEDB8" }}
    >
      {/* Enhanced background image with more prominence and blur */}
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

      
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-80 h-80 bg-[#4285f4]/15 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#34a853]/15 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#ea4335]/15 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-2 px-6 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm mb-6 border border-white/30 font-semibold text-black"
          >
            <Calendar className="w-4 h-4" />
            SCHEDULE
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl lg:text-6xl font-bold mb-6 text-black"
          >
            Agenda Coming Soon!
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl text-gray-800 max-w-2xl mx-auto mb-8"
          >
            We're crafting an incredible lineup of sessions and speakers for
            DevFest 2025.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-col items-center"
          >
            {/* Rewind to 2024 button - Changed to blue */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShow2024Agenda(true)}
              className="group bg-[#4285f4] text-white hover:bg-[#3367d6] px-6 py-3 rounded-full font-semibold transition-all duration-300 inline-flex items-center gap-2 shadow-lg hover:shadow-xl mb-12"
            >
              <span>View 2024 Agenda</span>
              <ExternalLink className="w-4 h-4" />
            </motion.button>
          </motion.div>
        </motion.div>

        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex justify-center mb-16"
        >
          <div className="relative bg-white/80 backdrop-blur-md rounded-3xl p-6 border-2 border-dashed border-white/30 shadow-2xl overflow-hidden max-w-2xl mx-auto">
            
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-[#4285f4]/20 rounded-full blur-xl" />
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#34a853]/20 rounded-full blur-xl" />

            <div className="relative z-10 text-center">
              <h3 className="text-2xl font-bold text-black mb-4">
                Save the Date!
              </h3>

              {/* GIF Container */}
              <div className="rounded-2xl overflow-hidden border-4 border-white shadow-2xl mx-auto max-w-md">
                <Image
                  src="/DF25_SocialGifs_SaveTheDate_v01.gif"
                  alt="DevFest Ogbomoso 2025 Save the Date"
                  width={400}
                  height={300}
                  className="w-full h-auto object-cover"
                  unoptimized
                  priority
                />
              </div>

              <p className="text-sm text-gray-600 mt-4">
                Stay tuned for the amazing sessions we're preparing for you!
              </p>
            </div>
          </div>
        </motion.div>

        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center"
        >
          <div className="inline-flex flex-wrap justify-center gap-4 bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/30">
            <div className="text-center px-4 py-2">
              <div className="text-2xl font-bold text-[#4285f4]">December</div>
              <div className="text-sm text-gray-700">Month</div>
            </div>
            <div className="text-center px-4 py-2">
              <div className="text-2xl font-bold text-[#34a853]">5th</div>
              <div className="text-sm text-gray-700">Workshop</div>
            </div>
            <div className="text-center px-4 py-2">
              <div className="text-2xl font-bold text-[#f9ab00]">6th</div>
              <div className="text-sm text-gray-700">Main Event</div>
            </div>
            <div className="text-center px-4 py-2">
              <div className="text-2xl font-bold text-[#ea4335]">2025</div>
              <div className="text-sm text-gray-700">Year</div>
            </div>
          </div>
        </motion.div>
      </div>

     
      <AnimatePresence>
        {show2024Agenda && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-2xl z-50 flex items-center justify-center p-4"
            onClick={() => setShow2024Agenda(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-white/95 backdrop-blur-2xl rounded-3xl p-6 lg:p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto relative"
              onClick={(e) => e.stopPropagation()}
            >
             
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#4285f4]/10 rounded-full blur-2xl -translate-y-16 translate-x-16" />
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#34a853]/10 rounded-full blur-2xl translate-y-16 -translate-x-16" />

           
              <div className="flex items-center justify-between mb-8 relative z-10">
                <div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-[#4285f4] mb-2">
                    DevFest 2024 Agenda
                  </h3>
                  <p className="text-gray-600">
                    Saturday, 30, November, 2024 • Single Day Event
                  </p>
                </div>
                <button
                  onClick={() => setShow2024Agenda(false)}
                  className="w-10 h-10 border-2 border-gray-300 text-gray-500 rounded-full flex items-center justify-center hover:border-[#ea4335] hover:text-[#ea4335] transition-all duration-300 backdrop-blur-sm"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              
              <div className="relative z-10">
                <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-200" />

                {agenda2024.map((session, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="mb-8 relative pl-10"
                  >
                    <div
                      className="absolute left-0 top-4 w-4 h-4 bg-[#FF9800] rounded-full border-4 border-white"
                      style={{
                        boxShadow: "0 0 0 2px #FF9800",
                        marginLeft: "-8px",
                      }}
                    />

                    {/* Time badge */}
                    <div className="mb-2">
                      <span className="px-3 py-1 bg-[#4285f4]/10 text-[#4285f4] rounded-full text-sm font-medium">
                        {session.time}
                      </span>
                    </div>

                    {/* Session card */}
                    <div className="bg-white/80 backdrop-blur-sm rounded-xl p-5 border border-gray-200/50 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="flex flex-col md:flex-row gap-5">
                        
                        <div className="flex-shrink-0">
                          <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-[#4285f4]/30 shadow-md bg-gray-200 flex items-center justify-center">
                            {session.image ? (
                              <Image
                                src={session.image}
                                alt={session.speaker}
                                width={80}
                                height={80}
                                className="w-full h-full object-cover rounded-full"
                                onError={(e) => {
                                  // Fallback if image fails to load
                                  e.currentTarget.style.display = "none"
                                }}
                              />
                            ) : null}
                            <div className="hidden w-full h-full items-center justify-center bg-[#4285f4]/20 text-[#4285f4] font-bold text-lg">
                              {session.speaker
                                .split(" ")
                                .map((name) => name[0])
                                .join("")}
                            </div>
                          </div>
                        </div>

                        {/* Session details */}
                        <div className="flex-1">
                          <h4 className="text-lg font-bold text-gray-800 mb-2">
                            {session.title}
                          </h4>

                          <div className="flex flex-wrap items-center gap-3 mb-3">
                            <span className="px-3 py-1 bg-[#34a853]/10 text-[#34a853] rounded-full text-xs font-medium flex items-center gap-1">
                              <MapPin className="w-3 h-3" />
                              {session.track}
                            </span>
                          </div>

                          <p className="text-gray-600 text-sm mb-3">
                            {session.description}
                          </p>

                          <div className="flex items-center gap-2 text-sm text-[#ea4335] font-medium">
                            <Mic className="w-4 h-4" />
                            <span>{session.speaker}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

           
              <div className="mt-10 p-5 bg-gray-50/50 rounded-xl border border-gray-200/50">
                <h4 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#4285f4]" />
                  Event Timeline
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-2 text-xs">
                  <div className="text-center p-2 bg-[#4285f4]/10 text-[#4285f4] rounded-lg">
                    <div className="font-bold">9:00 AM</div>
                    <div>Registration</div>
                  </div>
                  <div className="text-center p-2 bg-[#34a853]/10 text-[#34a853] rounded-lg">
                    <div className="font-bold">10:00 AM</div>
                    <div>Opening Keynote</div>
                  </div>
                  <div className="text-center p-2 bg-[#fbbc04]/10 text-[#fbbc04] rounded-lg">
                    <div className="font-bold">12:30 PM</div>
                    <div>Technical Sessions</div>
                  </div>
                  <div className="text-center p-2 bg-[#ea4335]/10 text-[#ea4335] rounded-lg">
                    <div className="font-bold">5:00 PM</div>
                    <div>Networking & Close</div>
                  </div>
                </div>
              </div>

            
              <div className="text-center mt-8 relative z-10">
                <button
                  onClick={() => setShow2024Agenda(false)}
                  className="border-2 border-[#ea4335] text-[#ea4335] hover:bg-[#ea4335] hover:text-white px-6 py-2 rounded-full font-medium transition-all duration-300"
                >
                  Close Preview
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default ScheduleSection
