export const navLinks = [
  {
    id: 1,
    name: "Home",
    href: "#home",
  },
  {
    id: 2,
    name: "About",
    href: "#about",
  },
  {
    id: 3,
    name: "Work",
    href: "#work",
  },
  {
    id: 4,
    name: "Contact",
    href: "#contact",
  },
];

export const myProjects = [
  {
    title: "Efficio - Task management app",
    desc: "Efficio is a simple and powerful task management platform that helps you organize your work, prioritize tasks, and stay productive every day.",
    subdesc:
      "Currently in development phase and will be launched soon. But you can check the source code on GitHub.",
    href: "https://github.com/Andrew2000-jS/Efficio",
    texture: "/textures/project/project2.mp4",
    logo: "/assets/project-logo2.png",
    logoStyle: {
      backgroundColor: "#13202F",
      border: "0.2px solid #17293E",
      boxShadow: "0px 0px 60px 0px #2F6DB54D",
    },
    spotlight: "/assets/spotlight2.png",
    tags: [
      {
        id: 1,
        name: "Nestjs",
        path: "/assets/nestjs-logo.svg",
      },
      {
        id: 2,
        name: "Postgres",
        path: "assets/Postgresql_elephant.png",
      },
      {
        id: 3,
        name: "Typeorm",
        path: "/assets/typeorm-logo.png",
      },
      {
        id: 4,
        name: "Jest",
        path: "/assets/jest-logo-png-transparent.png",
      },
    ],
  },
];

export const calculateSizes = (
  isSmall: boolean,
  isMobile: boolean,
  isTablet: boolean
) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall
      ? [4, -5, 0]
      : isMobile
      ? [5, -5, 0]
      : isTablet
      ? [5, -5, 0]
      : [9, -5.5, 0],
    reactLogoPosition: isSmall
      ? [3, 4, 0]
      : isMobile
      ? [5, 4, 0]
      : isTablet
      ? [5, 4, 0]
      : [12, 3, 0],
    ringPosition: isSmall
      ? [-5, 7, 0]
      : isMobile
      ? [-10, 10, 0]
      : isTablet
      ? [-12, 10, 0]
      : [-24, 10, 0],
    targetPosition: isSmall
      ? [-5, -10, -10]
      : isMobile
      ? [-9, -10, -10]
      : isTablet
      ? [-11, -7, -10]
      : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: "Federation management system",
    pos: "Junior Web Developer",
    duration: "2024 - 2025",
    title:
      "I am currently working with a team in a plaform for venezuelan volleyall federation.",
    icon: "/assets/odoo_logo.svg",
    animation: "salute",
  },
  {
    id: 2,
    name: "Busisness management platform",
    pos: "Junior Web Developer",
    duration: "2023 - 2024",
    title:
      "I collaborated with a team to develop these projects, utilizing various tools such as Odoo and PostgreSQL for the backend and React.js for the frontend. Additionally, I established seamless communication with Hikvision devices. ",
    icon: "/assets/hikvision-logo.svg",
    animation: "victory",
  },
  {
    id: 3,
    name: "Redincoop",
    pos: "Junior Web Developer",
    duration: "2022 - 2025",
    title:
      "I worked on the development of a cooperative system, which involved creating a web platform for the organization. Created using odoo as erp and xml with javascript for the fronted",
    icon: "/assets/logo-redincoop.svg",
    animation: "clapping",
  },
];
