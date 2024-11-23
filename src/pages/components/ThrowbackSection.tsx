import { motion } from 'framer-motion';
import { Play, Image } from 'lucide-react';

const images = [
  'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80',
  'https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800&q=80',
  'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&q=80',
];

export function ThrowbackSection() {
  return (
    <section className="py-24 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-1 bg-white/10 rounded-full text-sm mb-4">
              THROWBACK
            </span>
            <h2 className="text-4xl font-bold mb-4">
              Throwback to DevFest '23: Vibes and Tech All the Way
            </h2>
            <p className="text-xl text-gray-300">
              Remember the energy? The pictures, the jollof, the pure tech vibes? Last year, 
              we turned up and showed out. From inspiring sessions to unforgettable 
              connections, DevFest 2023 was everything and more.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative group cursor-pointer"
            >
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                <Play className="w-12 h-12" />
              </div>
              <img 
                src={images[0]} 
                alt="DevFest 2023 Highlights"
                className="w-full h-[300px] object-cover rounded-xl"
              />
            </motion.div>
            
            <div className="grid gap-4">
              {images.slice(1).map((img, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.02 }}
                  className="relative group cursor-pointer"
                >
                  <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                    <Image className="w-8 h-8" />
                  </div>
                  <img 
                    src={img} 
                    alt={`DevFest 2023 Moment ${i + 1}`}
                    className="w-full h-[140px] object-cover rounded-xl"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}