/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import { Play, Image } from "lucide-react";

function ThrowbackSection({ data }: { data: any }) {
  return (
    <section className="relative pt-24 bg-blue text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-1 font-bold bg-white/10 rounded-full text-sm mb-4">
              THROWBACK
            </span>
            <h2 className="text-5xl font-bold mb-4">{data.title}</h2>
            <p className="text-xl text-[#c3ecf6]]">{data.subtitle}</p>
          </motion.div>
          <a href={data.driveLink} target="_blank">
            {/* <div className="absolute flex inset-0 justify-between px-10">
              <div className="flex flex-col justify-around">
                <img src="/sticker.png" alt="throwback" className="w-22" />
                  <img src="/sticker-2.png" alt="throwback" className="w-40" />
                  <img src="/sticker-1.png" alt="throwback" className="w-40" />
              </div>
              <div className="pt-52">
                <img src="/sticker-3.png" alt="throwback" className="w-40" />
              </div>
            </div> */}
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative group cursor-pointer"
              >
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                  <Play className="w-12 h-12" />
                </div>
                <img
                  src={data.images[0]}
                  alt="DevFest 2023 Highlights"
                  className="w-full h-[300px] object-cover rounded-xl"
                />
              </motion.div>

              <div className="grid gap-4">
                {data.images.slice(1).map((img: string, i: number) => (
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
      <div className="w-full flex justify-center">
      <img src='/devfest-lanyard.png' alt="lanyard" className="px-20 py-6" width={800} height={100} />
      </div> 
    </section>
  );
}

export default ThrowbackSection;
