import { motion, AnimatePresence } from "framer-motion"
import { ChevronRight, X } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

function ThrowbackSection({ data }: { data: any }) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  // Updated image paths
  const throwbackData = {
    images: [
      {
        image: "/1.jpg",
        text: "Keynote Session",
        subtext:
          "Sodiq Akinjobi, GDG Regional Lead, delivering the keynote session",
      },
      {
        image: "/2.jpg",
        text: "Group Picture",
        subtext: "Faces of the attendees at Devfest '24",
      },
      {
        image: "/3.jpg",
        text: "Check-in point",
        subtext: "Volunteers on duty, checking the attendees in to the hall",
      },
      {
        image: "/4.jpg",
        text: "W/ D Lead Organizers",
        subtext:
          "GDG Ogbomoso Lead Organizers (Miracle and Boluwatife) and Sodiq Akinjobi",
      },
      {
        image: "/5.jpg",
        text: "GDSC Leads at Devfest",
        subtext:
          "Lautech Past and Present GDGoC (formerly GDSC) Leads in a group picture with Sodiq",
      },
      {
        image: "/6.jpg",
        text: "Enda Rae and Rahmlad",
        subtext: "Preparing for the Panelist session and Website showcase",
      },
      {
        image: "/7.jpg",
        text: "Gaming Session w/ Splash",
        subtext: "Splash anchoring the gaming session on Menti",
      },
      {
        image: "/8.jpg",
        text: "Organizers in action",
        subtext:
          "Boluwatife Adebisi, Miracle Olabode, Abdrahman Oladimeji, Glory Olaifa",
      },
    ],
    testimonials: [
      {
        text: "An unforgettable experience that shaped my career!",
        author: "Olusegun O.",
        role: "Frontend Engineer",
      },
      {
        text: "The energy and knowledge sharing was incredible!",
        author: "Veronica A.",
        role: "UX Designer",
      },
    ],
  }

  const filteredImages = throwbackData.images.slice(0, 9)

  return (
    <section className="py-20 lg:py-28 bg-black text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#4285f4]/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#ea4335]/10 rounded-full blur-3xl animate-pulse-slow delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#f9ab00]/10 rounded-full blur-3xl animate-pulse-slow delay-2000" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
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
            className="inline-block px-6 py-2 font-semibold bg-[#4285f4]/20 backdrop-blur-sm rounded-full text-sm mb-6 border border-[#4285f4]/30"
          >
            🎉 RELIVE DEVFEST 2024
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent"
          >
            Moments That Made History
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
          >
            Step back into the energy, innovation, and connections that made
            DevFest 2024 an unforgettable experience.
          </motion.p>
        </motion.div>

        {/* Masonry Grid Gallery */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {filteredImages.map((img: any, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.7 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="relative group cursor-pointer rounded-2xl overflow-hidden shadow-2xl"
              onClick={() => setSelectedImage(index)}
            >
              {/* Glassmorphism Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />

              {/* Hover Info */}
              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-10 group-hover:translate-y-0 transition-transform duration-500">
                <div className="bg-black/50 backdrop-blur-md rounded-xl p-4 border border-white/20">
                  <h3 className="font-semibold text-white mb-1">{img.text}</h3>
                  <p className="text-gray-300 text-sm">{img.subtext}</p>
                </div>
              </div>

              <div className="w-full h-[250px] overflow-hidden">
                <Image
                  src={img.image}
                  alt={`DevFest 2023 Moment ${index + 1}`}
                  width={400}
                  height={300}
                  className={`w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ${
                    index === 0 ? "object-top" : "object-center"
                  }`}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonial Section with GIF Layout */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <motion.h3
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 0.7 }}
            className="text-2xl lg:text-3xl font-bold text-center mb-8 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
          >
            Voices From Our Community
          </motion.h3>

          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Testimonials on the Left - Now 2 instead of 3 */}
            <div className="space-y-4">
              {throwbackData.testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.1 + index * 0.2, duration: 0.8 }}
                  viewport={{ once: true }}
                  className={`p-4 rounded-xl backdrop-blur-sm border text-sm ${
                    index === 0
                      ? "bg-[#4285f4]/10 border-[#4285f4]/30"
                      : "bg-[#34a853]/10 border-[#34a853]/30"
                  }`}
                >
                  <div className="text-amber-400 text-xl mb-2">&lsquo;</div>
                  <p className="text-gray-200 mb-3 text-base leading-relaxed italic">
                    {testimonial.text}
                  </p>
                  <div className="border-t border-white/10 pt-2">
                    <p className="font-semibold text-white text-sm">
                      {testimonial.author}
                    </p>
                    <p className="text-gray-400 text-xs">{testimonial.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* GIF on the Right */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.3, duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-[#4285f4]/10 to-[#ea4335]/10 rounded-2xl p-2 backdrop-blur-md border border-white/20">
                <Image
                  src="/makenewfriends.gif"
                  width={960}
                  height={540}
                  alt="DevFest attendees making new friends and connections"
                  className="w-full h-auto rounded-xl shadow-lg"
                  unoptimized
                />
              </div>

              {/* Optional: Add a subtle decorative element */}
              <div className="absolute -top-3 -right-3 w-6 h-6 bg-[#f9ab00]/30 rounded-full blur-sm" />
              <div className="absolute -bottom-3 -left-3 w-8 h-8 bg-[#34a853]/30 rounded-full blur-sm" />
            </motion.div>
          </div>
        </motion.div>

        {/* CTA Section - Updated Button Style */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <a
            href="https://drive.google.com/drive/folders/1K14ZyWATbvsgd9Hl3zd0dRYwEoef9Zgl?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 border-2 border-[#4285f4] text-[#4285f4] hover:bg-[#4285f4] hover:text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group/cta"
          >
            <span>Explore Full Gallery</span>
            <ChevronRight className="w-5 h-5 group-hover/cta:translate-x-2 transition-transform duration-300" />
          </a>

          <p className="text-gray-400 mt-4 text-sm">
            600+ unforgettable moments waiting
          </p>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
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
                src={filteredImages[selectedImage].image}
                alt={`DevFest 2023 Moment ${selectedImage + 1}`}
                width={800}
                height={600}
                className="rounded-2xl shadow-2xl"
                onClick={() => setSelectedImage(null)}
              />
              {/* Hover Info */}
              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-10 group-hover:translate-y-0 transition-transform duration-500">
                <div className="bg-black/50 backdrop-blur-md rounded-xl p-4 border border-white/20">
                  <h3 className="font-semibold text-white mb-1">
                    {filteredImages[selectedImage].text}
                  </h3>
                  <p className="text-gray-300 text-sm">
                    {filteredImages[selectedImage].subtext}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default ThrowbackSection
