import { MapPin, Calendar, Clock, ImageIcon } from "lucide-react"
import Header from "./Header"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

function Hero({ data }: any) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  const [currentTime, setCurrentTime] = useState("")
  const [currentDate, setCurrentDate] = useState("")

  useEffect(() => {
    // Create the target date properly for November 30, 2024, 10:00 AM WAT
    const targetDate = new Date(Date.UTC(2024, 10, 30, 9, 0, 0)); // 9:00 UTC = 10:00 AM WAT (UTC+1)
    
    const updateTime = () => {
      const now = new Date();
      
      // Update current time and date in WAT (UTC+1)
      const watOptions: Intl.DateTimeFormatOptions = {
        timeZone: 'Africa/Lagos',
        hour12: true,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      };
      
      const dateOptions: Intl.DateTimeFormatOptions = {
        timeZone: 'Africa/Lagos',
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      };
      
      setCurrentTime(now.toLocaleTimeString('en-NG', watOptions));
      setCurrentDate(now.toLocaleDateString('en-NG', dateOptions));

      // Update countdown
      const difference = targetDate.getTime() - now.getTime();
      
      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        // Event has started
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }

    // Initial update
    updateTime();

    // Set up intervals
    const timerId = setInterval(updateTime, 1000);

    // Clean up
    return () => clearInterval(timerId);
  }, []);

  return (
    <section className="min-h-[60vh] lg:min-h-[70vh] relative bg-black text-white pt-20 pb-16">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/devfest2.jpg"
          alt="DevFest Ogbomoso Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-black/10" />
      </div>

      <Header buttonText={data?.actionButtonText} rsvpLink={data?.rsvpLink} />

      {/* Main Content */}
      <div className="pt-10 relative z-10 flex items-center justify-center min-h-[60vh] lg:min-h-[70vh]">
        <div className="w-full max-w-6xl mx-auto px-4 lg:px-6">
          {/* Centered Content */}
          <div className="text-center space-y-6 lg:space-y-8">
            {/* Badge - Google Blue */}
            <div className="inline-flex items-center justify-center px-4 py-2 bg-[#4285f4]/10 backdrop-blur-sm rounded-full border border-[#4285f4]/30">
              <span className="text-[#4285f4] text-sm lg:text-base font-semibold tracking-wide">
                Biggest Tech Event
              </span>
            </div>

            {/* Main Heading - Google Colors */}
            <h1 className="text-6xl lg:text-9xl font-black leading-tight lg:leading-none px-4">
              <span className="text-[#4285f4]">D</span>
              <span className="text-[#ea4335]">e</span>
              <span className="text-[#f9ab00]">v</span>
              <span className="text-[#4285f4]">F</span>
              <span className="text-[#34a853]">e</span>
              <span className="text-[#ea4335]">s</span>
              <span className="text-[#4285f4]">t</span>
              <span className="text-[#fff7e0]"> Ogbomoso</span>
              <span className="text-[#ea4335]"> - 25</span>
            </h1>

            {/* Description */}
            <p className="text-lg lg:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed px-4">
              Step into the future of technology at DevFest! Discover the latest trends, sharpen
              your skills with expert-led sessions, and explore innovative ideas shaping the tech
              world. Together, let&apos;s code the future.
            </p>

            {/* Countdown Timer - Google Colors */}
            <div className="bg-black/40 backdrop-blur-xl rounded-2xl p-6 lg:p-8 border border-white/10 shadow-2xl max-w-2xl mx-auto">
              <h3 className="text-sm lg:text-base text-gray-300 mb-6 uppercase tracking-widest font-semibold">
                Event Starts In
              </h3>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-6">
                {[
                  { value: timeLeft.days, label: 'Days'},
                  { value: timeLeft.hours, label: 'Hours'},
                  { value: timeLeft.minutes, label: 'Minutes'},
                  { value: timeLeft.seconds, label: 'Seconds'}
                ].map((item, index) => (
                  <div key={index} className="text-center">
                    <div className={`${item.color} rounded-xl p-3 lg:p-4 shadow-lg`}>
                      <span className="text-xl lg:text-3xl font-bold text-white block">
                        {item.value.toString().padStart(2, '0')}
                      </span>
                    </div>
                    <span className="text-xs lg:text-sm text-gray-400 mt-2 block uppercase tracking-wide font-medium">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
              
              {/* Live Current Time & Date */}
              <div className="mt-6 pt-4 border-t border-white/10">
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-xs lg:text-sm text-gray-400">
                  <div className="flex items-center gap-2">
                    <Clock className="w-3 h-3 lg:w-4 lg:h-4 text-[#34a853]" />
                    <span className="font-mono">{currentTime}</span>
                    <span className="text-[#4285f4] font-medium">WAT</span>
                  </div>
                  <div className="hidden sm:block text-white/20">•</div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-3 h-3 lg:w-4 lg:h-4 text-[#4285f4]" />
                    <span>{currentDate}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Event Details - Google Green */}
            <div className="bg-[#34a853]/10 backdrop-blur-md rounded-xl p-6 border border-[#34a853]/20 max-w-2xl mx-auto">
              <div className="grid gap-4 text-left">
                <div className="flex items-center gap-3 text-gray-200">
                  <Calendar className="w-5 h-5 text-[#34a853] flex-shrink-0" />
                  <span className="font-semibold text-sm lg:text-base">Fri & Sat, December 5-6, 2025</span>
                </div>
                <div className="flex items-center gap-3 text-gray-200">
                  <Clock className="w-5 h-5 text-[#34a853] flex-shrink-0" />
                  <span className="font-semibold text-sm lg:text-base">10:00 AM WAT</span>
                </div>
                <div className="flex items-center gap-3 text-gray-200">
                  <MapPin className="w-5 h-5 text-[#34a853] flex-shrink-0" />
                  <span className="font-semibold text-sm lg:text-base">T.B.A (To be announced)</span>
                </div>
              </div>
            </div>

            {/* CTA Buttons - Google Colors */}
            <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 justify-center items-center pt-4 px-4 pb-8">
              {/* RSVP Button - Google Blue */}
              <a href={data?.rsvpLink} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <button className="w-full bg-[#4285f4] hover:bg-[#3367d6] text-white px-6 py-3 lg:px-8 lg:py-4 rounded-full font-semibold text-base lg:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                  RSVP NOW
                </button>
              </a>
              
              {/* Get DP Button - Transparent with Green Outline */}
              <Link href="/dp" className="w-full sm:w-auto">
                <button className="w-full border-2 border-[#34a853] text-[#34a853] hover:bg-[#34a853] hover:text-white px-6 py-3 lg:px-8 lg:py-4 rounded-full font-semibold text-base lg:text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl">
                  <ImageIcon className="w-4 h-4 lg:w-5 lg:h-5" />
                  Get DP
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      
    </section>
  )
}

export default Hero