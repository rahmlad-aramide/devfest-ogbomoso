import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, Download, Share, Heart, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import Footer from '../components/Footer' 

function MemoriesPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  
  const memories = [
    { id: 1, src: "/1.jpg", category: "event", likes: 42, caption: "Opening ceremony of DevFest 2024" },
    { id: 2, src: "/3.jpg", category: "workshop", likes: 38, caption: "Hands-on AI workshop session" },
    { id: 3, src: "/2.jpg", category: "networking", likes: 56, caption: "Participants connecting and sharing ideas" },
    { id: 4, src: "/4.jpg", category: "event", likes: 29, caption: "Keynote speech by our special guest" },
    { id: 5, src: "/5.jpg", category: "workshop", likes: 34, caption: "Cloud computing deep dive session" },
    { id: 6, src: "/6.jpg", category: "networking", likes: 47, caption: "Community members collaborating" },
    { id: 7, src: "/7.jpg", category: "event", likes: 63, caption: "Closing ceremony and awards" },
    { id: 8, src: "/8.jpg", category: "workshop", likes: 31, caption: "Participants working on projects" },
    { id: 9, src: "/9.jpg", category: "networking", likes: 52, caption: "Making new connections at the event" },
  ]

  const filteredMemories = selectedCategory === "all" 
    ? memories 
    : memories.filter(memory => memory.category === selectedCategory)

  const categories = [
    { id: "all", name: "All Memories", count: memories.length },
    { id: "event", name: "Main Event", count: memories.filter(m => m.category === "event").length },
    { id: "workshop", name: "Workshops", count: memories.filter(m => m.category === "workshop").length },
    { id: "networking", name: "Networking", count: memories.filter(m => m.category === "networking").length },
  ]

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
   
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#4285f4]/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#ea4335]/10 rounded-full blur-3xl animate-pulse-slow delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#f9ab00]/10 rounded-full blur-3xl animate-pulse-slow delay-2000" />
      </div>

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
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap gap-3 justify-center mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? "bg-[#4285f4] text-white"
                  : "bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white"
              }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </motion.div>

        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-12"
        >
          {filteredMemories.map((memory, index) => (
            <motion.div
              key={memory.id}
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
                  <h3 className="font-semibold text-white mb-1">{memory.caption}</h3>
                  <p className="text-gray-300 text-sm">Click to view full size</p>
                </div>
              </div>

             
              <div className="w-full h-[250px] overflow-hidden">
                <Image
                  src={memory.src}
                  alt={memory.caption}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              
              <div className="absolute top-4 left-4 flex items-center gap-1 text-white z-20">
                <Heart className="w-4 h-4 fill-current" />
                <span className="text-sm font-medium">{memory.likes}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

       
        {filteredMemories.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <div className="text-6xl mb-4">📸</div>
            <h3 className="text-xl text-gray-400 mb-2">No memories found</h3>
            <p className="text-gray-500">Try selecting a different category</p>
          </motion.div>
        )}

       
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

     
      <Footer data={null} />

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
                src={filteredMemories[selectedImage].src}
                alt={filteredMemories[selectedImage].caption}
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