import { Calendar, Clock, MapPin } from "lucide-react"
import Image from "next/image"
import React, { useEffect, useState } from "react"

const DpCard: React.FC<{
  background: string
  textColor: string
  name: string
  image: string
  id: React.RefObject<HTMLDivElement>
}> = ({ background, textColor, name, image, id }) => {
  const [isMobile, setIsMobile] = useState<boolean>(false)
  useEffect(() => {
    const checkDevice = () => setIsMobile(window.innerWidth < 768)

    checkDevice()

    window.addEventListener("resize", checkDevice)

    return () => window.removeEventListener("resize", checkDevice)
  }, [])
  return (
    <div
      ref={id}
      className="w-full h-full flex items-center rounded-lg"
      style={{ backgroundColor: background }}
    >
      <div className="max-w-[90%] mx-auto w-full h-[85%] flex items-center justify-between">
        <aside className="flex flex-col gap-[10px] h-full w-[50%]">
          <div className="relative">
            <Image
              src={"/Vector2.png"}
              alt="vector"
              width={isMobile ? 150 : 211.5}
              height={isMobile ? 170 : 100}
              className=""
            />
            <h1
              style={{ color: textColor }}
              className="text-lg lg:text-2xl font-bold absolute top-2 left-3"
            >
              {name}
            </h1>
          </div>

          <div
            className="w-full h-[70px] lg:h-[200px] rounded-xl border-l-4 border-black border-b-4 flex items-center text-white"
            style={{ backgroundColor: textColor }}
          >
            <div className="max-w-[90%] mx-auto w-full h-[85%] flex flex-col gap-2 lg:gap-3">
              <div className=" flex items-center gap-2">
                <Calendar className="w-2 lg:w-4 h-2 lg:h-4" />
                <span className="lg:text-[12px] text-[8px] font-medium lg:font-bold">
                  Saturday, November 30 2024
                </span>
              </div>
              <div className=" flex items-center gap-2">
                <Clock className="w-2 lg:w-4 h-2 lg:h-4" />
                <span className="lg:text-[12px] text-[8px] font-medium lg:font-bold">
                  10 : 00 AM
                </span>
              </div>
              <div className=" flex items-center gap-2">
                <MapPin className="w-2 lg:w-5 h-2 lg:h-5" />
                <span className="lg:text-[12px] text-[8px] font-medium lg:font-bold">
                  Great Hall, Lautech
                </span>
              </div>
            </div>
          </div>
        </aside>
        <aside className="w-[45%] h-full relative">
          <Image
            src={image}
            layout="fill"
            alt="attendee"
            className="rounded-xl border-r-4 border-black border-b-4 object-cover"
          />
        </aside>
      </div>
    </div>
  )
}

export default DpCard
