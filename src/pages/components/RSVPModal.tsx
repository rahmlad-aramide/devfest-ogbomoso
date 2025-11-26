import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { X, Calendar, ArrowRight, LucideIcon } from "lucide-react";

// Type definitions
interface Activity {
  text: string;
  color: string;
}

interface EventDay {
  id: string;
  label: string;
  date: string;
  color: string;
  secondaryColor: string;
  registrationUrl: string;
  activities: Activity[];
}

interface ModalContent {
  title: string;
  description: string;
  icon: LucideIcon;
  iconGradient: string;
  proTip?: string;
  proTipSubtext?: string;
}

interface RSVPModalProps {
  isOpen: boolean;
  onClose: () => void;
  eventType?: string;
  customContent?: ModalContent | null;
  customDays?: EventDay[] | null;
}

// Data configuration functions
const getEventDays = (eventType: string = "devfest"): EventDay[] => {
  const events: Record<string, EventDay[]> = {
    devfest: [
      {
        id: "day1",
        label: "DAY 1",
        date: "Friday, December 5",
        color: "#4285f4",
        secondaryColor: "#34a853",
        registrationUrl: "https://bit.ly/devfest-ogbo-wksp",
        activities: [
          { text: "Design & Product Workshops", color: "#4285f4" },
          { text: "Engineering & Security Sessions", color: "#34a853" },
          { text: "AI & Cloud Hands-On Tracks", color: "#ea4335" },
          { text: "Parallel Workshop Sessions", color: "#fbbc04" },
        ],
      },
      {
        id: "day2",
        label: "DAY 2",
        date: "Saturday, December 6",
        color: "#ea4335",
        secondaryColor: "#fbbc04",
        registrationUrl: "https://bit.ly/devfest-ogbo-conf",
        activities: [
          { text: "Web & Mobile Development", color: "#4285f4" },
          { text: "Design & UX Workshops", color: "#34a853" },
          { text: "Career & Leadership Talks", color: "#ea4335" },
          { text: "Closing Ceremony & Prizes", color: "#fbbc04" },
        ],
      },
    ],
  };

  return events[eventType] || events.devfest;
};

const getModalContent = (eventType: string = "devfest"): ModalContent => {
  const content: Record<string, ModalContent> = {
    devfest: {
      title: "Register for DevFest 2025",
      description:
        "Choose the day(s) you'd like to attend. Each day is packed with amazing sessions, networking, and learning opportunities!",
      icon: Calendar,
      iconGradient: "from-[#4285f4] to-[#34a853]",
      proTip: "Register for both days to get the full DevFest experience!",
      proTipSubtext:
        "You'll need to complete registration for each day separately.",
    },
  };

  return content[eventType] || content.devfest;
};

// Modal Content Component
const ModalContent: React.FC<RSVPModalProps> = ({
  isOpen,
  onClose,
  eventType = "devfest",
  customContent = null,
  customDays = null,
}) => {
  useEffect(() => {
    if (isOpen) {
      // Save the current scroll position
      const scrollY = window.scrollY;

      // Prevent body scroll
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";

      return () => {
        // Restore body scroll
        document.body.style.overflow = "";
        document.body.style.position = "";
        document.body.style.top = "";
        document.body.style.width = "";

        // Restore scroll position
        window.scrollTo(0, scrollY);
      };
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const content = customContent || getModalContent(eventType);
  const days = customDays || getEventDays(eventType);
  const IconComponent = content.icon;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center p-4 animate-in fade-in duration-200 overflow-y-auto"
      style={{
        zIndex: 999999,
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }}
    >
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
        style={{ zIndex: 999998 }}
      />

      <div
        className="relative w-full max-w-2xl bg-white rounded-2xl my-6 h-[90vh] lg:h-[95vh] overflow-y-auto shadow-2xl animate-in zoom-in-95 duration-300"
        style={{ zIndex: 999999 }}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-4 p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-all duration-200 z-10"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-8 border-b border-gray-100">
          <div className="flex items-center gap-3 mb-2">
            <div
              className={`p-3 bg-gradient-to-br ${content.iconGradient} rounded-full flex items-center justify-center`}
            >
              <IconComponent className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              {content.title}
            </h2>
          </div>
          <p className="text-gray-600 text-sm sm:text-base">
            {content.description}
          </p>
        </div>

        <div className="p-6 sm:p-8">
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            {days.map((day) => (
              <Link
                key={day.id}
                href={day.registrationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <div
                  className="relative h-full p-6 bg-gradient-to-br rounded-xl hover:shadow-xl transition-all duration-300 overflow-hidden border-2"
                  style={{
                    backgroundImage: `linear-gradient(to bottom right, ${day.color}0D, ${day.secondaryColor}0D)`,
                    borderColor: `${day.color}33`,
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.borderColor = day.color)
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.borderColor = `${day.color}33`)
                  }
                >
                  <div
                    className="absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500"
                    style={{ backgroundColor: `${day.color}1A` }}
                  />

                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-3">
                      <span
                        className="inline-flex items-center gap-2 px-3 py-1 text-white text-xs font-bold rounded-full"
                        style={{ backgroundColor: day.color }}
                      >
                        <Calendar className="w-3 h-3" />
                        {day.label}
                      </span>
                      <ArrowRight
                        className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                        style={{ color: day.color }}
                      />
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {day.date}
                    </h3>

                    <ul className="space-y-2 text-sm text-gray-600 mb-4">
                      {day.activities.map((activity, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span
                            className="mt-0.5"
                            style={{ color: activity.color }}
                          >
                            •
                          </span>
                          <span>{activity.text}</span>
                        </li>
                      ))}
                    </ul>

                    <div
                      className="inline-flex items-center gap-2 font-semibold text-sm group-hover:gap-3 transition-all duration-300"
                      style={{ color: day.color }}
                    >
                      Register for {day.label}
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {content.proTip && (
            <div className="mt-6 p-4 bg-gradient-to-r from-[#4285f4]/10 via-[#ea4335]/10 to-[#fbbc04]/10 border-2 border-dashed border-gray-300 rounded-xl text-center">
              <p className="text-sm text-gray-700 mb-2">
                <span className="font-bold">Pro Tip:</span> {content.proTip}
              </p>
              {content.proTipSubtext && (
                <p className="text-xs text-gray-500">{content.proTipSubtext}</p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const RSVPModal: React.FC<RSVPModalProps> = (props) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  if (!mounted || !props.isOpen) return null;

  return createPortal(<ModalContent {...props} />, document.body);
};

export default RSVPModal;
export { getEventDays, getModalContent };
