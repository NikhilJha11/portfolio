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
  citykart,
  sways,
  healsync,
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
    title: "MERN Stack Developer",
    icon: web,
  },
  {
    title: "Data/business Analyst",
    icon: mobile,
  },
  {
    title: "Software Developer",
    icon: backend,
  },
  {
    title: "UI/UX designer",
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
    title: "React.js Developer intern",
    company_name: "Imeet Technology",
    icon: starbucks,
    iconBg: "#383E56",
    date: "june 2023 - Aug 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Built a multi-vendor delivery panel with reactjs/figma",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Made multiple reviews/changes and fixed multiple responsive issues in the design",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Alexa Developers Community-CU",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Sep 2023 - Current",
    points: [
      "Contributed towards the developemt of the ADC-CU website",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Founder",
    company_name: "CityKart",
    icon: shopify,
    iconBg: "#383E56",
    date: "March 2023 - Sept 2023",
    points: [
      "An idea made into reality with reactjs, nodejs, wordpress, mongodb & figma designs",
      "Deep study of the existing market to analyse the best market fit",
      "Optimised the portal & continued the developement operation for consecutive 6 months",
      "Project at hault because of excessive market saturation and insufficient funds",
    ],
  },
  {
    title: "Founder/building",
    company_name: "LincMed",
  
    iconBg: "#E6DEDD",
    date: "Nov 2023 - Present",
    points: [
      "Filling the void of existing of medical issues with Lincmed",
      "Fusion of technology and business aiming to build a product and service that will fit the futuristic parameters",
      "Currently in development stage,tech-stack- AIML,MERN,FLUTTER,CLOUD",
      "idea pitched and nurtured under the E-CELL of Chandigarh university",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Claimed 1st in Ideathon, pitched innovative cluster-based e-commerce, redefining online shopping",
    name: "1 st Position in ideathon",
    designation: "by",
    company: "CU scriptogen society",
    
  },
  {
    testimonial:
      "Secured 1st in Hack-o-Octo health domain, pitched futuristic AIML & blockchain healthcare management.",
    name: "1st Position in Health domain",
    designation: "Hack-o-octo ",
    company: "By GDSC",
    
  },
  {
    testimonial:
      "CityKart is on hiatus as of now; presently, primary focus is LincMed within E-Cell CU management",
    name: "2 Startups",
    designation: "currently building",
    company: "LincHeal under E-CELL CU",
    
  },
];

const projects = [
  {
    name: "Swasthyamochan",
    description:
      "Digital solution for all major health and medication existing in rural parts of india.Includes AIML model,kiosk,App,webapp",
    tags: [
      {
        name: "MERN",
        color: "blue-text-gradient",
      },
      {
        name: "Deep Learning",
        color: "green-text-gradient",
      },
      {
        name: "react-native",
        color: "pink-text-gradient",
      },
    ],
    image: sways,
    source_code_link: "https://github.com/NikhilJha11/SwasthyaMochan",
  },
  {
    name: "Healsync",
    description:
      "Multi-platform health based project utilising various tech eg-aiml,blockchain,IOT,MERN,flutter.",
    tags: [
      {
        name: "MERN",
        color: "blue-text-gradient",
      },
      {
        name: "IOT",
        color: "green-text-gradient",
      },
      {
        name: "Flutter",
        color: "pink-text-gradient",
      },
    ],
    image: healsync,
    source_code_link: "https://github.com/NikhilJha11/HealSync",
  },
  {
    name: "CityKart",
    description:
      "A comprehensive webdesign showcasing the clustered base e-commerce website,next-gen e-comm solution",
    tags: [
      {
        name: "Reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "wordpress",
        color: "pink-text-gradient",
      },
    ],
    image: citykart,
    source_code_link: "https://github.com/NikhilJha11/CITY-KART",
  },
];

export { services, technologies, experiences, testimonials, projects };
