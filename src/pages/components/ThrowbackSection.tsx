/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import { motion } from 'framer-motion';
import { Play, Image } from 'lucide-react';

function ThrowbackSection({ data }: { data: any }) {
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
              {data?.title}
            </h2>
            <p className="text-xl text-gray-300">
              {data?.subtitle}
            </p>
          </motion.div>
          <a href={data?.driveLink} target='_blank'>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative group cursor-pointer"
            >
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                <Play className="w-12 h-12" />
              </div>
              <img 
                src={data?.images[0]} 
                alt="DevFest 2023 Highlights"
                className="w-full h-[300px] object-cover rounded-xl"
              />
            </motion.div>
            
            <div className="grid gap-4">
              {data?.images.slice(1).map((img: string, i: number) => (
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
          </a>
        </div>
      </div>
    </section>
  );
}

export default ThrowbackSection;