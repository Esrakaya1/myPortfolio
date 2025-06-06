import project1 from "../assets/projects/project1.png";
import project2 from "../assets/projects/project2.png";
import project3 from "../assets/projects/project3.png";
import project4 from "../assets/projects/project4.png";
import project5 from "../assets/projects/project5.png";

export const HERO_CONTENT = `I’m a full stack developer with 2 years of hands-on experience in building real-world projects using React, Next.js, .NET, and Node.js. I’m all about solving problems with clean, scalable code — whether it’s designing smooth UIs or building solid backend systems. I help businesses grow with smart, custom web solutions that actually work.`;

export const ABOUT_TEXT =
  "I’m a freelance full stack developer with 2+ years of experience building web apps that just work — clean, scalable, and user-friendly. I mostly work with .NET, React, and Node.js, and I’ve got a thing for solving tough problems with smart, custom solutions. From fixing messy bugs to building full systems from the ground up, I enjoy turning ideas into reliable, real-world products. Lately, I’ve been teaming up with clients from all kinds of industries, helping them bring their projects to life with code that makes sense and actually delivers.";

export const EXPERIENCES = [
  {
    year: "02/2025 - Present",
    role: "Full Stack Developer",
    company: "Upwork",
    description: [
      "Developed and maintained web applications using .NET, JavaScript, React.js, and Node.js.",
      "Implemented RESTful APIs and integrated with MongoDB and MsSQL databases.",
      "Collaborated with stakeholders to define project requirements and timelines.",
    ],
    technologies: [".Net", "Docker", "React.js", "Node.js", "MsSQL"],
  },
  {
    year: "06/2024 - 09/2024",
    role: "Full Stack Developer",
    company: "BAU Wissen Academie",
    description: `Developed and maintained full-stack web applications using .NET and React.js. Designed and implemented backend logic with .NET, created and consumed RestFul APIs, and managed data using MsSQL. Built frontend interfaces with React.js, ensuring responsive and user-friendly experiences. Utilized Docker to streamline development and deployment processes across environments.`,
    technologies: [".Net", "Docker", "MsSQL", "RestFul API", "React.js"],
  },
  {
    year: "07/2022 - 09/2022",
    role: "DataWareHouse Intern",
    company: "DIP Bilgisayar Yazılım Ticaret Ltd. Şti.",
    description: `Completed MSSQL training, covering both basic and advanced SQL queries. Studied and implemented database diagrams and physical connections between tables.`,
    technologies: ["Microsoft SQL Server"],
  },
];

export const PROJECTS = [
  {
    title: "ShopApp",
    link: "https://github.com/Esrakaya1/Shopapp",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["Asp.Net core", "Entity Framework", "Git", "MsSQL"],
  },
  {
    title: "Music Player App",
    link: "https://esrakaya1.github.io/Music-Player/",
    image: project2,
    description:
      "A dynamic music player built with HTML, CSS, and JavaScript, featuring a custom audio interface, playlist navigation, volume control, and responsive design.",
    technologies: ["JavaScript", "CSS3", "HTML5", "Firebase"],
  },
  {
    title: "Employee Management System",
    link: "https://github.com/Esrakaya1/EmpManageSystem?tab=readme-ov-file",
    image: project3,
    description:
      "An employee management system lists employee's names, age, and department information.",
    technologies: [".Net Core", "React", "Postman"],
  },
  {
    title: "Image Search App",
    link: "https://esrakaya1.github.io/Image-Search-App/index.html",
    image: project4,
    description:
      "An image search app built with HTML, CSS, and JavaScript, using a public API to fetch and display images dynamically with a responsive and user-friendly interface.",
    technologies: ["JavaScript", "JavaScript API", "HTML5", "CSS3"],
  },
  {
    title: "Hotel Site",
    link: "https://esrakaya1.github.io/hotel-site/",
    image: project5,
    description:
      "A responsive and visually appealing hotel website with HTML, CSS, and JavaScript, focusing on modern design and seamless user experience across all devices",
    technologies: ["JavaScript", "CSS Grid", "HTML5"],
  },
];
