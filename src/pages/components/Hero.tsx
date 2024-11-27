/* eslint-disable @typescript-eslint/no-explicit-any */
import { motion } from "framer-motion"
import { MapPin, Calendar, Globe, Clock } from "lucide-react"
import Header from "./Header"
import Typewriter from "typewriter-effect"

function Hero({ data }: any) {
  return (
    <section className="min-h-screen relative bg-black text-[#FFF5E1] snap-both">
      {/* <div className="absolute inset-0 bg-[url('/devfest.jpeg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black" />
      </div> */}
      <div>
        <img
          src="/devfest2.jpg"
          alt=""
          className="absolute inset-0 w-screen h-screen object-cover"
        />
        <div className="bg-gradient-to-r from-[#000000] w-screen  absolute bg-opacity-80" />
      </div>
      <Header buttonText={data?.actionButtonText} rsvpLink={data?.rsvpLink} />
      {/* Main Content */}
      {/* <div className="relative z-10 container mx-auto px-4 pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <span className="inline-block px-4 py-1 bg-[#FFF5E1]/10 rounded-full text-sm mb-8 font-bold">
            {data?.tag}
          </span>
        </motion.div>

        <motion.h1
          className="text-7xl md:text-8xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Typewriter
            onInit={(typewriter) => {
              typewriter.typeString(data?.title).pauseFor(1000).deleteAll().start()
            }}
            options={{
              loop: true,
            }}
          />

          <br />
          <Typewriter
            onInit={(typewriter) => {
              typewriter.typeString(data?.year).pauseFor(3000).start()
            }}
          />
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col items-center gap-8"
        >
          <a href={data?.rsvpLink} target="_blank">
            <button className="bg-[#FF9800] text-black px-8 py-4 rounded-full text-lg font-medium">
              {data?.actionButtonText}
            </button>
          </a>

          <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto mt-16">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-[#FFF5E1]/10 rounded-lg">
                <MapPin className="w-6 h-6" />
              </div>
              <div className="text-left">
                <p className="text-sm text-gray-400">Where</p>
                <p className="font-medium">{data?.location}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2 bg-[#FFF5E1]/10 rounded-lg">
                <Calendar className="w-6 h-6" />
              </div>
              <div className="text-left">
                <p className="text-sm text-gray-400">When</p>
                <p className="font-medium">{data?.date}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2 bg-[#FFF5E1]/10 rounded-lg">
                <Globe className="w-6 h-6" />
              </div>
              <div className="text-left">
                <p className="text-sm text-gray-400">Who</p>
                <p className="font-medium">Everyone</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div> */}

      <div className="w-full h-full flex items-center relative">
        <div className="h-[650px] lg:h-[700px] w-full max-w-[320px] lg:max-w-[1270px] mx-auto flex flex-col justify-center">
          <div className="flex flex-col justify-center">
            <p className="text-[12px] lg:text-[16px] text-center lg:text-start font-bold">
              Biggest Tech Event
            </p>
            <h1 className="text-[30px] lg:text-[70px] leading-[50px] lg:leading-[90px] text-center lg:text-start font-bold lg:w-[700px]">
              Developer's Festival <span className="text-amber-500">Ogbomoso - 24</span>
            </h1>
            <p className="text-center lg:text-start text-[14px] mt-[20px] lg:w-[700px] leading-[30px]">
              Step into the future of technology at DevFest! Discover the latest trends, sharpen
              your skills with expert-led sessions, and explore innovative ideas shaping the tech
              world. Together, let's code the future.
            </p>
          </div>

          <div className="w-full mt-[50px]">
            <div className="lg:w-[350px] h-[150px] bg-amber-500 bg-opacity-30 rounded-md flex items-center relative">
              <div className="max-w-[300px] mx-auto w-full h-[100px] flex flex-col gap-[15px]">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  <span className="font-bold">Saturday, November 30 2024</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  <span className="font-bold">10 : 00 AM</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  <span className="font-bold">The Hall, Lautech Ogbomoso</span>
                </div>
              </div>

              <button className="w-[150px] h-[50px] bg-[#FF9800] hidden absolute right-[-100px] rounded lg:flex items-center gap-2 justify-center">
                RSVP NOW <span className="text-xl">🎟️</span>
              </button>
            </div>
            <button className="w-full h-[50px] bg-[#FF9800] rounded flex items-center gap-2 justify-center mt-10 lg:hidden">
              RSVP NOW <span className="text-xl">🎟️</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Hero
