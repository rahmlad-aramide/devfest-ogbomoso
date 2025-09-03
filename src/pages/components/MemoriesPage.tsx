import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import Footer from '../components/Footer' 

function MemoriesPage({data}: any) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const memories = [
      {
        image: "/webp/1.webp",
        text: "Keynote Session",
        subtext:
          "Sodiq Akinjobi, GDG Regional Lead, delivering the keynote session",
      },
      {
        image: "/webp/2.webp",
        text: "Group Picture",
        subtext: "Faces of the attendees at Devfest '24",
      },
      {
        image: "/webp/3.webp",
        text: "Check-in point",
        subtext: "Volunteers on duty, checking the attendees in to the hall",
      },
      {
        image: "/webp/4.webp",
        text: "W/ D Lead Organizers",
        subtext:
          "GDG Ogbomoso Lead Organizers (Miracle and Boluwatife) and Sodiq Akinjobi",
      },
      {
        image: "/webp/5.webp",
        text: "GDSC Leads at Devfest",
        subtext:
          "Lautech Past and Present GDGoC (formerly GDSC) Leads in a group picture with Sodiq",
      },
      {
        image: "/webp/6.webp",
        text: "Enda_rae and Rahmlad",
        subtext: "Organizers Preparing for a couple of other upcoming sessions",
      },
      {
        image: "/webp/7.webp",
        text: "Gaming Session w/ Splash",
        subtext: "Splash anchoring the gaming session on Menti",
      },
      {
        image: "/webp/8.webp",
        text: "Organizers in action",
        subtext:
          "Boluwatife Adebisi, Miracle Olabode, Abdrahman Oladimeji, Glory Olaifa",
      },
      {
        image: "/9.jpg",
        text: "Recap of a session",
        subtext:
          "A speaker's session recap being displayed on the screen.",
      },
    ];

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">

      <div className="container mx-auto px-4 relative z-10">
       
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 pt-8"
        >
          <Link href="/" className="inline-flex items-center gap-2 text-gray-300 hover:text-white transition-colors mb-6">
            <ChevronLeft className="w-5 h-5" />
            <span>Back to Home</span>
          </Link>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent"
          >
            DevFest Memories
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
          >
            Relive every moment of DevFest 2024 through our collection of memories.
          </motion.p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-12"
        >
          {memories.map((memory, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.7 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="relative group cursor-pointer rounded-2xl overflow-hidden shadow-2xl"
              onClick={() => setSelectedImage(index)}
            >
             
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 z-10" />
              
              
              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-10 group-hover:translate-y-0 transition-transform duration-500 z-20">
                <div className="bg-black/50 backdrop-blur-md rounded-xl p-4 border border-white/20">
                  <h3 className="font-semibold text-white mb-1">{memory.text}</h3>
                  <p className="text-gray-300 text-sm">{memory.subtext}</p>
                </div>
              </div>

             
              <div className="w-full h-[250px] overflow-hidden">
                <Image
                  src={memory.image}
                  alt={memory.text}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>

            </motion.div>
          ))}
        </motion.div>

      
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-gradient-to-r from-[#4285f4]/10 to-[#34a853]/10 border-t border-white/10 py-12 rounded-2xl mb-8"
        >
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold mb-4">Want to see more?</h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Explore our complete collection of DevFest 2024 memories and relive every moment of this incredible event.
            </p>
            <a
              href="https://drive.google.com/drive/folders/1K14ZyWATbvsgd9Hl3zd0dRYwEoef9Zgl?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#4285f4] hover:bg-[#3367d6] text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
            >
              <span>Explore Full Gallery on Drive</span>
              <ChevronLeft className="w-5 h-5 rotate-180" />
            </a>
          </div>
        </motion.div>
      </div>

     
      <Footer data={data} />

      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-2xl z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              className="relative max-w-4xl max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-[#ea4335] transition-colors duration-300 z-10"
              >
                <X className="w-8 h-8" />
              </button>
              
              <Image
                src={memories[selectedImage].image}
                alt={memories[selectedImage].text}
                width={800}
                height={600}
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default MemoriesPage