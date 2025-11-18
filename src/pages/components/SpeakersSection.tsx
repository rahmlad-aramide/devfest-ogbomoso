import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Twitter, Linkedin, Github, ExternalLink, X, Calendar, Award, Mic, Clock, FileText, Send } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

function SpeakersSection({ data }: any) {
  const dataSpeakers = data?.speakers || []
  const [pastSpeakers, setPastSpeakers] = useState([...dataSpeakers])
  const [showPastSpeakers, setShowPastSpeakers] = useState(false)

 
  const cfsData = {
    submissionDeadline: "30th September",
    eventDate: "December 5-6, 2025",
    tracks: [
      "Artificial Intelligence & Machine Learning",
      "Cloud & DevOps", 
      "Web Technologies",
      "Mobile Development",
      "Agentic Experience",
      "Web3"
    ],
    guidelines: {
      abstractLength: "NIL",
      sessionDuration: "NIL",
      submissionLink: "https://bit.ly/devfestogbo25-cfs"
    }
  }

  return (
    <section className="py-20 bg-white text-black relative overflow-hidden" id="cfp">
      
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
            className="inline-flex items-center gap-2 px-6 py-2 bg-[#4285f4]/10 backdrop-blur-sm rounded-full text-sm mb-6 border border-[#4285f4]/20 font-semibold"
          >
            <Calendar className="w-4 h-4 text-[#4285f4]" />
            2025 SPEAKERS
          </motion.span>

          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl lg:text-6xl font-bold pb-6 bg-gradient-to-r from-black to-gray-700 bg-clip-text text-transparent"
          >
            Amazing Speakers Coming Soon
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto mb-12"
          >
            We&apos;re curating an incredible lineup of experts for DevFest 2025. The wait will be worth it!
          </motion.p>

          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex flex-col items-center justify-center space-y-8"
            >
              
              <div className="flex justify-center relative">
                <motion.div 
                  className="relative"
                  animate={{
                    y: [0, -15, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <div className="w-56 h-56 bg-white/80 backdrop-blur-xl rounded-3xl flex items-center justify-center border-2 border-dashed border-[#4285f4]/30 shadow-2xl relative overflow-hidden">
                    <motion.div 
                      className="text-6xl"
                      animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 5, 0, -5, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      🎤
                    </motion.div>
                    
                   
                    <motion.div 
                      className="absolute -top-3 -left-3 w-12 h-12 bg-[#4285f4]/20 rounded-full blur-sm"
                      animate={{
                        x: [0, 8, 0],
                        y: [0, -8, 0],
                      }}
                      transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 0.5
                      }}
                    />
                    <motion.div 
                      className="absolute -bottom-3 -right-3 w-16 h-16 bg-[#34a853]/20 rounded-full blur-sm"
                      animate={{
                        x: [0, -8, 0],
                        y: [0, 8, 0],
                      }}
                      transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1
                      }}
                    />
                    <motion.div 
                      className="absolute top-4 -right-4 w-8 h-8 bg-[#f9ab00]/20 rounded-full blur-sm"
                      animate={{
                        x: [0, 5, 0],
                        y: [0, 5, 0],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1.5
                      }}
                    />
                    
                  
                    <motion.div 
                      className="absolute inset-0 rounded-3xl border-2 border-[#4285f4]/30"
                      animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.3, 0.6, 0.3],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeOut"
                      }}
                    />
                    <motion.div 
                      className="absolute inset-0 rounded-3xl border-2 border-[#34a853]/30"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.2, 0.4, 0.2],
                      }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        ease: "easeOut",
                        delay: 0.5
                      }}
                    />
                  </div>
                </motion.div>
              </div>

              
              <div className="grid grid-cols-3 gap-4 max-w-md mx-auto">
                <div className="text-center">
                  <div className="w-10 h-10 bg-[#4285f4]/10 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Mic className="w-5 h-5 text-[#4285f4]" />
                  </div>
                  <p className="text-xl font-bold text-[#4285f4]">15+</p>
                  <p className="text-xs text-gray-600">Expected Speakers</p>
                </div>
                <div className="text-center">
                  <div className="w-10 h-10 bg-[#34a853]/10 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Award className="w-5 h-5 text-[#34a853]" />
                  </div>
                  <p className="text-xl font-bold text-[#34a853]">12+</p>
                  <p className="text-xs text-gray-600">Sessions</p>
                </div>
                <div className="text-center">
                  <div className="w-10 h-10 bg-[#ea4335]/10 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Calendar className="w-5 h-5 text-[#ea4335]" />
                  </div>
                  <p className="text-xl font-bold text-[#ea4335]">2</p>
                  <p className="text-xs text-gray-600">Days</p>
                </div>
              </div>
            </motion.div>

            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="bg-gradient-to-r from-[#4285f4]/5 to-[#34a853]/5 backdrop-blur-sm rounded-3xl p-6 lg:p-8 border-2 border-dashed border-[#4285f4]/30 h-full flex flex-col justify-center"
            >
              <div className="text-center mb-6">
                <motion.span 
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  className="inline-flex items-center gap-2 px-4 py-1 bg-[#4285f4]/20 backdrop-blur-sm rounded-full text-xs mb-3 border border-[#4285f4]/30 font-semibold"
                >
                  <FileText className="w-3 h-3 text-[#4285f4]" />
                  CALL FOR SPEAKERS
                </motion.span>
                <h3 className="text-xl lg:text-2xl font-bold text-[#4285f4] mb-3">
                  Share Your Knowledge
                </h3>
                <p className="text-gray-600 text-sm">
                  We&apos;re looking for passionate speakers to share their expertise at DevFest Ogbomoso 2025.
                </p>
              </div>

              <div className="space-y-4 mb-6">
                
                <div className="bg-white/80 backdrop-blur-md rounded-xl p-4 border border-gray-200">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 bg-[#4285f4]/10 rounded-full flex items-center justify-center">
                      <Mic className="w-4 h-4 text-[#4285f4]" />
                    </div>
                    <h4 className="font-bold text-[#4285f4]">Preferred Tracks</h4>
                  </div>
                  <ul className="space-y-1 text-xs text-gray-600">
                    {cfsData.tracks.map((track, index) => (
                      <li key={index} className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-[#34a853] rounded-full mr-2" />
                        {track}
                      </li>
                    ))}
                  </ul>
                </div>

               
                <div className="bg-white/80 backdrop-blur-md rounded-xl p-4 border border-gray-200">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 bg-[#ea4335]/10 rounded-full flex items-center justify-center">
                      <Clock className="w-4 h-4 text-[#ea4335]" />
                    </div>
                    <h4 className="font-bold text-[#ea4335]">Important Dates</h4>
                  </div>
                  <div className="space-y-2 text-xs text-gray-600">
                    <div className="flex justify-between">
                      <span>Submission Deadline:</span>
                      <span className="font-semibold text-[#ea4335]">{cfsData.submissionDeadline}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Event Date:</span>
                      <span className="font-semibold text-[#ea4335]">{cfsData.eventDate}</span>
                    </div>
                  </div>
                </div>
              </div>

              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
                className="text-center"
              >
                <a
                  href={cfsData.guidelines.submissionLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 bg-[#4285f4] hover:bg-[#3367d6] text-white px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl w-full justify-center"
                >
                  <Send className="w-4 h-4" />
                  Submit Your Proposal
                  <ExternalLink className="w-3 h-3 opacity-70 group-hover:opacity-100 transition-opacity" />
                </a>
              </motion.div>
            </motion.div>
          </div>
          
         
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            onClick={() => setShowPastSpeakers(true)}
            className="group border-2 border-[#4285f4] text-[#4285f4] hover:bg-[#4285f4] hover:text-white px-6 py-3 rounded-full font-semibold text-base transition-all duration-300 inline-flex items-center gap-2 relative overflow-hidden max-w-xs mx-auto mt-12"
          >
            <span className="relative z-10">See 2024 Speakers</span>
            <ExternalLink className="w-4 h-4 relative z-10" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -skew-x-12" />
          </motion.button>
        </motion.div>
      </div>
 
      
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
              className="bg-white/95 backdrop-blur-2xl rounded-3xl p-6 lg:p-8 max-w-6xl w-full max-h-[90vh] overflow-y-auto relative"
              onClick={(e) => e.stopPropagation()}
            >
              
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#4285f4]/10 rounded-full blur-2xl -translate-y-16 translate-x-16" />
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#34a853]/10 rounded-full blur-2xl translate-y-16 -translate-x-16" />

             
              <div className="flex items-center justify-between mb-8 relative z-10">
                <div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-[#4285f4] mb-2">
                    2024 Speakers
                  </h3>
                  <p className="text-gray-600">The amazing minds from last year&apos;s DevFest</p>
                </div>
                <button
                  onClick={() => setShowPastSpeakers(false)}
                  className="w-10 h-10 border-2 border-gray-300 text-gray-500 rounded-full flex items-center justify-center hover:border-[#ea4335] hover:text-[#ea4335] transition-all duration-300 backdrop-blur-sm"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

            
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
                {pastSpeakers.map((speaker, index) => (
                  <motion.div
                    key={speaker.id}
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="bg-white/80 backdrop-blur-md rounded-2xl p-6 border border-gray-200/50 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
                  >
                   
                    <div className="absolute -top-3 -left-3 w-8 h-8 bg-[#4285f4]/20 rounded-full blur-sm group-hover:bg-[#4285f4]/30 transition-colors" />
                    <div className="absolute -bottom-3 -right-3 w-10 h-10 bg-[#34a853]/20 rounded-full blur-sm group-hover:bg-[#34a853]/30 transition-colors" />

                   
                    <div className="relative w-32 h-32 mx-auto mb-4 rounded-2xl overflow-hidden border-4 border-white shadow-lg group-hover:border-[#4285f4]/20 transition-colors duration-300">
                      <Image
                        src={speaker.image}
                        alt={speaker.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>

                   
                    <div className="text-center">
                      <h4 className="font-bold text-lg text-[#4285f4] mb-1 group-hover:text-[#3367d6] transition-colors">
                        {speaker.name}
                      </h4>
                      <p className="text-sm text-[#ea4335] mb-3 font-medium">
                        {speaker.role}
                      </p>

                      
                      {speaker.socials && (
                        <div className="flex justify-center gap-2">
                          {speaker.socials.twitter && (
                            <a
                              href={`https://twitter.com/${speaker.socials.twitter}`}
                              target="_blank"
                              className="w-8 h-8 border-2 border-[#4285f4] text-[#4285f4] rounded-full flex items-center justify-center hover:bg-[#4285f4] hover:text-white transition-all duration-300 backdrop-blur-sm"
                            >
                              <Twitter className="w-3 h-3" />
                            </a>
                          )}
                          {speaker.socials.linkedin && (
                            <a
                              href={`https://linkedin.com/in/${speaker.socials.linkedin}`}
                              target="_blank"
                              className="w-8 h-8 border-2 border-[#4285f4] text-[#4285f4] rounded-full flex items-center justify-center hover:bg-[#4285f4] hover:text-white transition-all duration-300 backdrop-blur-sm"
                            >
                              <Linkedin className="w-3 h-3" />
                            </a>
                          )}
                          {speaker.socials.github && (
                            <a
                              href={`https://github.com/${speaker.socials.github}`}
                              target="_blank"
                              className="w-8 h-8 border-2 border-[#4285f4] text-[#4285f4] rounded-full flex items-center justify-center hover:bg-[#4285f4] hover:text-white transition-all duration-300 backdrop-blur-sm"
                            >
                              <Github className="w-3 h-3" />
                            </a>
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
                  className="border-2 border-[#ea4335] text-[#ea4335] hover:bg-[#ea4335] hover:text-white px-6 py-2 rounded-full font-medium transition-all duration-300 backdrop-blur-sm"
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

export default SpeakersSection



