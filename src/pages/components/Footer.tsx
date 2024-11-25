/* eslint-disable @typescript-eslint/no-explicit-any */
import { motion } from "framer-motion";
import { Globe, Twitter } from "lucide-react";

function Footer({ data }: any) {
  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <h3 className="font-bold text-xl mb-4">{data?.community.title}</h3>
              <p className="text-gray-400">
                A community-led tech conference bringing together developers,
                designers, and tech enthusiasts.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#schedule"
                    className="text-gray-400 hover:text-white"
                  >
                    Schedule
                  </a>
                </li>
                <li>
                  <a
                    href="#speakers"
                    className="text-gray-400 hover:text-white"
                  >
                    Speakers
                  </a>
                </li>
                <li>
                  <a
                    href={data?.rsvpLink}
                    target="_blank"
                    className="text-gray-400 hover:text-white"
                  >
                    {data?.actionButtonText}
                  </a>
                </li>
                <li>
                  <a href="#faqs" className="text-gray-400 hover:text-white">
                    FAQs
                  </a>
                </li>
              </ul>
            </div>

            <div className="">
              <h4 className="font-bold mb-4"></h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white"></a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Connect With Us</h4>
              <div className="flex gap-4">
                <a href={data?.community.twitter} className="text-gray-400 hover:text-white">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href={data?.community.gdg} className="text-gray-400 hover:text-white">
                  <Globe className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400">
              © 2024 GDG Ogbomoso. All rights reserved.
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
