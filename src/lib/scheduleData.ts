export interface DaySchedule {
  day: string;
  date: string;
  sessions: Session[];
}

export interface Session {
  time: string;
  duration?: string;
  title: string;
  speaker?: string;
  description?: string;
  track?: string;
  room?: string;
}

const scheduleData: DaySchedule[] = [
  {
    day: "Pre-DevFest Series",
    date: "Online Events",
    sessions: [
      {
        time: "Online",
        duration: "60mins",
        title:
          "Scaling Databases for the Future: Strategies That Power Millions",
        speaker: "Paul Edward",
      },
      {
        time: "Online",
        duration: "60mins",
        title:
          "Testing the Limits of Frontier AI Models - Understanding their Strengths and Differences",
        speaker: "Asoluka Tochukwu Austin",
        description: "CTO/Co-Founder, Preview AI",
      },
      {
        time: "Online",
        duration: "60mins",
        title:
          "AI on Android: Enriching User Experience on Africa's Mobile Platform of Choice",
        speaker: "Tashinga Pemhiwa",
        description: "Android Technology Lead, Absa",
      },
      {
        time: "Online",
        duration: "60mins",
        title:
          "Welcome to Web3: The Internet of Ownership, Trust, and Transparency",
        speaker: "Ridwan Adewole",
        description: "Software Engineer, AlgramX",
      },
    ],
  },
  {
    day: "Day 1",
    date: "December 5th - Workshop and Codelabs",
    sessions: [
      {
        time: "9:00AM - 9:30AM",
        duration: "60mins",
        title: "Registration",
        speaker: "",
      },
      {
        time: "9:30AM - 9:45AM",
        duration: "15mins",
        title: "Welcome to Devfest Ogbomoso 2025, Ground Rules",
        speaker: "Glory Olaifa",
      },
      {
        time: "9:45AM - 10:15AM",
        duration: "30mins",
        title:
          "Breaking Barriers: How to Build a High-Impact Tech Career from Anywhere",
        speaker: "Ola Okegbemi",
      },
      {
        time: "10:15AM - 10:35AM",
        duration: "20mins",
        title: "Career Session: The Power of Doing: Learning by Building",
        speaker: "Favour Afolabi",
      },
      {
        time: "10:35AM - 10:40AM",
        duration: "10mins",
        title: "BreakOut Room Transition",
        speaker: "",
      },
      {
        time: "10:40AM - 11:50PM",
        duration: "70mins",
        title: "Track 1 - Parallel Sessions",
        track: "TRACK 1",
        description:
          "\n• Designing the Invisible: Prototyping Trust and Feedback in Intelligent Interfaces. (Design and Product) - Timothy Ogundipe\n\n • Flutter + WebAssembly: Building High-Performance Cross-Platform Apps (Engineering and Security) - David Oluwabusayo\n\n • Gemma: Inferences and building a MaaS (AI and Cloud DevOps) - MUDASIRU Rasheed Taiwo",
      },
      {
        time: "11:50PM - 1:00PM",
        duration: "70mins",
        title: "Track 2 - Parallel Sessions",
        track: "TRACK 2",
        description:
          "\n• Designing Trust: Building Human-Centered Brands and Interfaces in the Age of AI. (Design and Product) - TITCOMBE MICHAEL\n\n • Migration to Microfrontends (Engineering and Security) - Adeniji Oluwaferanmi\n\n • Hands-On with Gemini and Google ADK: Building Full-Stack AI Agents MaaS (AI and Cloud) - Ahm'd Olanrewaju",
      },
      {
        time: "1:00PM - 2:50PM",
        duration: "110mins",
        title: "JUMAT/LUNCH BREAK",
      },
      {
        time: "2:50PM - 4PM",
        duration: "70mins",
        title: "Track 3 - Parallel Sessions",
        track: "TRACK 3",
        description:
          "\n• Hands-On: Building an AI-Powered Website Builder Like Bolt & Lovable — From Scratch - Daniel Olowoniyi\n\n • Building Clean and Scalable AI Powered Flutter Apps (Engineering and Security) - Taiwo Farinu \n\n • Building a Real-Time Fraud Detection System with AI and Cloud: Secure, Scalable, and Hands-On (AI and Cloud) - Ojo Ilesanmi",
      },
    ],
  },
  {
    day: "Day 2",
    date: "December 6th - Main Conference",
    sessions: [
      {
        time: "8:00 AM - 9:00 AM",
        duration: "60mins",
        title: "Registration and Networking",
      },
      {
        time: "9:00 AM - 9:30 AM",
        duration: "30mins",
        title: "Welcome to DevFest Ogbomoso 2025",
      },
      {
        time: "10:00AM - 10:40AM",
        duration: "40mins",
        title:
          "PANEL 1: The Secrets Behind Successful Engineering Careers: Tools, Mindsets, and Habits",
        speaker: "Immanuel, Rasheed, David, Timothy",
      },
      {
        time: "10:45AM - 11:10AM",
        duration: "25mins",
        title:
          "KEYNOTE 1: ENGINEERING TRUST: The Future of Safe, Secure and Scalable AI Systems for Africa’s Digital Economy.",
        speaker: "Dr Aderinto",
      },
      {
        time: "11:15AM - 11:40AM",
        duration: "25mins",
        title:
          "KEYNOTE 2: Building Beyond Boundaries: Raising Africa's Next Generation of Scalable Solution Builders",
        speaker: "Dr Niyi Abiri",
      },
      {
        time: "11:45AM - 12:05AM",
        duration: "20mins",
        title: "Becoming a 10x engineer with AI",
        speaker: "Boluwatife Olaifa",
      },
      {
        time: "12:10PM - 12:50PM",
        duration: "45mins",
        title:
          "PANEL 2: Building Nigeria's Tech Talent Pipeline: Realities, Challenges, and the Road Ahead",
        speaker: "Dr Aderinto and Dr Niyi",
      },
      {
        time: "12:55PM - 1: 10PM",
        duration: "20mins",
        title: "Community & People: Leveraging Community for Growth",
        speaker: "Tope James",
      },
      {
        time: "1:15:PM - 1:25PM",
        duration: "10mins",
        title: "Sponsors Slot",
        speaker: "ORC (Oluseun Onigbinde Resource Center)",
      },
      {
        time: "1:25PM - 2:00PM",
        duration: "40mins",
        title: "Photograph, Lunch Break",
        speaker: "",
      },
      {
        time: "2:00PM - 2:10PM",
        duration: "10mins",
        title:
          "The Fine Art of Prompting: Getting Unbeatable Results with Gemini",
        speaker: "Daniel Esuola",
      },
      {
        time: "2:15PM-2:30PM",
        duration: "15mins",
        title:
          "Challenging the Social Perception Around Self Promotion in Tech",
        speaker: "Steven Edache Paul",
      },
      {
        time: "2:30PM - 4:00PM",
        duration: "90mins",
        title: "Product Showcase, Games and Networking",
      },
    ],
  },
];

export default scheduleData;
