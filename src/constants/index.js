import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Developer",
    icon: web,
  },
  {
    title: "Software Developer",
    icon: mobile,
  },
  {
    title: "Data Analytics",
    icon: backend,
  },
  {
    title: "UI/UX Expert",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Data Science Intern",
    company_name: "Celebal Technologies",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "May 2023 - Present",
    points: [
      "Celebal COE Program",
      "Learned fundamentals of Python and Database and management system, Data Science.",
    
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "MUJ ACM Student Chapter",
    icon: starbucks,
    iconBg: "#383E56",
    date: "May 2021 - Aug 2022",
    points: [
      "Lead a team of 10 web-developers to create the official website for the MUJ ACM Student Chapter and contributed significantly to the project.",
      "Skills: React.js · Node.js · Express.js · MongoDB  JavaScript · Cascading Style Sheets (CSS) · HTML5",
    ],
  },
  {
    title: "Senior Web Developer",
    company_name: "House of Reveuse",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jul 2021 - Oct 2021",
    points: [
      "Designed the front end of the website and managed the product listing of almost 500 products.",
      "Optimized website loading speed by 40% through efficient backend coding and database management.",
      "Skills: WordPress · JavaScript · Cascading Style Sheets (CSS) · HTML5",
      
    ],
  },
  {
    title: "Technical Head",
    company_name: "Enactus",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jun 2021 - Dec 2021",
    points: [
      "Lead a team of 8 members and oversaw providing the club with technical support.",
      "Skills: React.js · Node.js · Express.js · MongoDB  JavaScript · Cascading Style Sheets (CSS) · HTML5",

    ],
  },
  {
    title: "Events Head",
    company_name: "MUJ ACM Student Chapter",
    icon: starbucks,
    iconBg: "#383E56",
    date: "May 2021 - Aug 2022",
    points: [
      "Established the order of an event and provided event management and lead a team of 5 working members.",
      "Organized and executed 10+ technical events and workshops, with an average participation of 200 students per event.",
      "Skills: Event Planning · Event Management",
    ],
  },
  {
    title: "Diploma in Web Devlopment",
    company_name: "Samyak Computer Classes",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "I completed a Diploma in Web Development at Samyak Computer Classes, specializing in the MERN stack. This intensive program provided me with a solid foundation in MongoDB, Express.js, React.js, and Node.js",
      "I gained expertise in building dynamic and scalable web applications using these cutting-edge technologies.",
    
    ],
  },

];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Netflix Clone",
    description:
      "Developed a Web App that is a 100% replica of the well-known video hosting service Netflix.Additionally, it offers an admin dashboard where the administrator may view the analytics of over 100 users.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "expressjs",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "blue-text-gradient",
      },

    ],
    image: carrent,
    source_code_link: "https://github.com/dhananjay1401/Netflix_Clone",
  },
  {
    name: "Mediveda",
    description:
      "The MERN website is a user-friendly platform designed for storing and retrieving medical reports.Users can securely upload their medical documents to the website, providing a centralized and organized repository for their reports.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "expressjs",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "blue-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://www.linkedin.com/in/dhananjay1401/details/projects/1635532751030/single-media-viewer?type=DOCUMENT&profileId=ACoAADJePzkB7gyqKuOII4b2jvoJT_xF5aXLOhE&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_projects_details%3BOOFcr15qQCK4xu0N3G0dXg%3D%3D",
  },
  {
    name: "MUJ Placement HUB",
    description:
      "Your Ultimate Solution for Placement Success! Connect, Learn, and Succeed.Empower your Career Journey with Personalized Guidance, Direct Teacher Connectivity, and an Extensive Resource Library.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "expressjs",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "blue-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/dhananjay1401/onlydevs",
  },


];

export { services, technologies, experiences, testimonials, projects };
