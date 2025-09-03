import { motion } from "framer-motion";
import { Globe, Twitter } from "lucide-react";
import Image from "next/image";

function Footer({ data }: any) {
  return (
    <footer className="bg-[319047] text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Image 
                  src="/icon.svg" 
                  alt="GDG Ogbomoso" 
                  width={40} 
                  height={40} 
                  className="w-10 h-10"
                />
                <h3 className="font-bold text-xl">{data && data.community && data.community.title}</h3>
              </div>
              <p className="text-gray-300">
                A community-led tech conference bringing together developers,
                designers, and tech enthusiasts in Ogbomoso.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#schedule"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Schedule
                  </a>
                </li>
                <li>
                  <a
                    href="#speakers"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Speakers
                  </a>
                </li>
                <li>
                  <a
                    href={data && data.rsvpLink}
                    target="_blank"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {data && data.actionButtonText}
                  </a>
                </li>
                <li>
                  <a href="#faqs" className="text-gray-300 hover:text-white transition-colors">
                    FAQs
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Connect With Us</h4>
              <div className="flex gap-4 mb-4">
                <a 
                  href={data && data.community && data.community.twitter} 
                  className="text-gray-300 hover:text-white transition-colors p-2 bg-white/10 rounded-full hover:bg-white/20"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a 
                  href={data && data.community && data.community.gdg} 
                  className="text-gray-300 hover:text-white transition-colors p-2 bg-white/10 rounded-full hover:bg-white/20"
                >
                  <Globe className="w-5 h-5" />
                </a>
              </div>
              <p className="text-gray-300 text-sm">
                Join our community for updates and announcements
              </p>
            </div>
          </div>

          
          <div className="mt-12 text-center mb-8">
            <div className="flex flex-col md:flex-row items-center justify-center">
              <Image 
                src="/icon.svg" 
                alt="GDG Ogbomoso" 
                width={150} 
                height={150} 
                className="md:mr-4 opacity-90 mb-4 md:mb-0 w-20 h-20 md:w-32 md:h-32"
              />
              <h2 
                className="text-4xl sm:text-5xl md:text-8xl font-bold tracking-wide"
                style={{
                  background: "linear-gradient(to bottom, white 0%, rgba(255,255,255,0.7) 30%, rgba(255,255,255,0.3) 70%, transparent 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                GDG OGBOMOSO
              </h2>
            </div>
          </div>

          <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-300 text-sm order-2 md:order-1">
              © 2025 GDG Ogbomoso. All rights reserved.
            </p>
            
            <motion.div
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
              className="text-gray-300 order-1 md:order-2"
            >
              <Globe className="w-6 h-6" />
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;