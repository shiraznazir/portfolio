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
  byteready,
  project_mix,
  tripguide,
  threejs,
  suntech,
  terai,
  tekclan,
  ottomern,
  rngplay,
  rms,
  rms_adminpanel,
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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Full Stack Developer",
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
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
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
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  {
    name: "git",
    icon: git,
  },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Ottomern Technologies",
    client_name: "Suntec India Web Services Pvt. Ltd",
    project_title: "ByteReady",
    technologies: "React JS, Redux, MUI",
    description:
      "Using this Web Application User Can Create their own post for social media sharing like Instagram, Facebook.",
    icon: suntech,
    iconBg: "#E6DEDD",
    // date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Integrating APIs for seamless data retrieval and updates.",
    ],
  },
  {
    title: "React.js Developer",
    company_name: "Ottomern Technologies",
    client_name: "Suntec India Web Services Pvt. Ltd",
    project_title: "Project Mix",
    technologies: "React JS, Bootstrap",
    description:
      "This custom product management web application is a powerful tool that helps businesses of all sizes to streamline their product development process. With this application, you can easily track your products through the entire lifecycle, from ideation to launch and beyond.",
    icon: suntech,
    iconBg: "#E6DEDD",
    // date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Integrating APIs for seamless data retrieval and updates.",
    ],
  },
  {
    title: "React.js Developer",
    company_name: "Ottomern Technologies",
    client_name: "Terai datalabs private limited",
    project_title: "CRM",
    technologies: "Reactjs, Redux, MUI, HighCharts, Moment, useform",
    description:
      "Developed a web application for managing the company's relationships and interactions with customers, including marketing, sales, projects, activities, files, and finance.",
    icon: terai,
    iconBg: "#E6DEDD",
    // date: "March 2020 - April 2021",
    points: [
      "Implementing forms using the useForm library.",
      "Utilizing the data grid of MUI for efficient data visualization.",
      "Integrating APIs for seamless data retrieval and updates.",
      "Creating page routing for improved user navigation",
    ],
  },
  {
    title: "React.js Developer",
    company_name: "Ottomern Technologies",
    client_name: "Terai datalabs private limited",
    project_title: "IT Asset Management",
    technologies: "React JS, MUI",
    description:
      "IT Asset Management (ITAM) is the strategic management of all IT assets throughout their lifecycle, from acquisition to disposal. It involves tracking and managing hardware, software, cloud services, and other digital assets to maximize their value and minimize risks.",
    icon: terai,
    iconBg: "#E6DEDD",
    // date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Integrating APIs for seamless data retrieval and updates.",
    ],
  },
  {
    title: "React.js Developer",
    company_name: "Ottomern Technologies",
    client_name: "Tekclan Software Solutions",
    project_title: "Perfect Doc Studio",
    technologies: "React, Redux, Ant Design",
    description:
      "Contributed to the development of a document generation application, allowing users to create documents using various templates and languages. The application also features communication capabilities like short message services (WhatsApp, SMS, and calls).",
    icon: tekclan,
    iconBg: "#E6DEDD",
    // date: "March 2020 - April 2021",
    points: [
      "Integrating APIs for document generation and communication services.",
      "Developing dynamic and interactive pages.",
      "Handling errors from API responses.",
      "Implementing the color picker feature.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Ottomern Technologies",
    project_title: "Restaurant Management Application",
    technologies: "Reactjs, Redux, MUI, Nodejs, Express, MongoDB",
    description:
      "Worked as a full-stack developer on a food ordering application. Customers can order food from specific tables of a restaurant and administrators can manage food items, categories, and sales.",
    icon: ottomern,
    iconBg: "#E6DEDD",
    // date: "March 2020 - April 2021",
    points: [
      "Designing and implementing the admin panel and customer panel interfaces.",
      "Ensuring smooth data flow between React and Express.",
      "Collaborating on the overall application architecture and design.",
      "I worked individually on the frontend and backend of the project.",
    ],
  },
  {
    title: "Game Developer Trainee",
    company_name: "Algomics Technologies Private Ltd",
    icon: rngplay,
    iconBg: "#E6DEDD",
    project_title: "Sword Warriors",
    technologies: "Javascript",
    // date: "Jan 2023 - Present",
    points: [
      "Developed the front-end of a casino game using the company's framework.",
      "Managed game assets.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Implemented game simulations",
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
    name: "ByteReady",
    description:
      "Using this Web Application User Can Create their own post for social media sharing like Instagram, Facebook.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Redux",
        color: "green-text-gradient",
      },
      {
        name: "MUI",
        color: "pink-text-gradient",
      },
    ],
    image: byteready,
    source_code_link: "https://byteready.co/",
  },
  {
    name: "Project Mix",
    description:
      "This custom product management web application is a powerful tool that helps businesses of all sizes to streamline their product development process.",
    tags: [
      {
        name: "React JS",
        color: "blue-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "Javascript",
        color: "pink-text-gradient",
      },
    ],
    image: project_mix,
    source_code_link: "https://product-mix.uat.tsprojects.net/",
  },
  {
    name: "TableTrekker",
    description:
      "Customers can order food from specific tables of a restaurant and administrators can manage food items, categories, and sales.",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "MUI",
        color: "green-text-gradient",
      },
      {
        name: "Node.js",
        color: "pink-text-gradient",
      },
    ],
    image: rms_adminpanel,
    source_code_link: "https://github.com/shiraznazir/RMS-Customer_Panel",
  },
];

export { services, technologies, experiences, testimonials, projects };
