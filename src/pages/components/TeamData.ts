interface TeamMember {
  name: string;
  role: string;
  image: string;
  team: string;
  subTeam?: Array<string>;
  isTeamLead?: Array<boolean> | boolean;
}

export const teamData: TeamMember[] = [
  {
    name: "Miracle Olabode",
    role: "Lead Organizer",
    image: "/team/miracle.jpg",
    team: "Organizers",
  },
  {
    name: "Boluwatife Adebisi",
    role: "Lead Organizer",
    image: "/team/boluwatife.jpg",
    team: "Organizers",
  },
  {
    name: "Esuola Daniel",
    role: "Co-Organizer",
    image: "/team/daniel.png",
    team: "Organizers",
    subTeam: ["Design Team"],
    isTeamLead: true,
  },
  {
    name: "Glory Olaifa",
    role: "Co-Organizer",
    image: "/team/glory.jpg",
    team: "Organizers",
  },
  {
    name: "Blessed-Agboola Jesujoba",
    role: "Co-Organizer",
    image: "/team/blessed.jpeg",
    team: "Organizers",
    subTeam: ["Media and Publicity Team", "Dev Team"],
    isTeamLead: [true, false],
  },
  {
    name: "Abdrahman Oladimeji",
    role: "Co-Organizer",
    image: "/team/abdrahman.jpg",
    team: "Organizers",
    subTeam: ["Dev Team"],
    isTeamLead: true,
  },
  {
    name: "Adewole Ridwan",
    role: "Member",
    image: "/speakers/ridwan.jpg",
    team: "Dev Team",
  },
  {
    name: "Isaac Oke",
    role: "Member",
    image: "/team/isaac.jpg",
    team: "Design Team",
  },
  {
    name: "Olatunji Ezekiel",
    role: "Member",
    image: "/team/olatunji.jpg",
    team: "Design Team",
  },
  {
    name: "Olurinto Boluwatife",
    role: "Member",
    image: "/team/olurinto.jpeg",
    team: "Design Team",
  },
  {
    name: "Eniola Adesina",
    role: "Member",
    image: "/team/eniola.jpg",
    team: "Media and Publicity Team",
  },
  {
    name: "Peter Awoniyi",
    role: "Member",
    image: "/team/peter.jpg",
    team: "Media and Publicity Team",
  },
  {
    name: "Gbadero Hiqmah Fadeke",
    role: "Member",
    image: "/team/hiqmah.jpg",
    team: "Media and Publicity Team",
  },
  {
    name: "Afolabi William",
    role: "Member",
    image: "/Cover.png",
    team: "Dev Team",
  },
  {
    name: "Babatunde Abdullah",
    role: "Member",
    image: "/Cover.png",
    team: "Media and Publicity Team",
  },
];
