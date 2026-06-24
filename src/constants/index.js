export const navLinks = [
  { id: "about", title: "About" },
  { id: "work", title: "Experience" },
  { id: "skills", title: "Skills" },
  { id: "certifications", title: "Certifications" },
  { id: "projects", title: "Projects" },
  { id: "contact", title: "Contact" },
];

export const services = [
  { title: "Software Engineer", icon: "SE" },
  { title: "AI Engineer", icon: "AI" },
  { title: "Full Stack Developer", icon: "FS" },
  { title: ".NET Specialist", icon: ".NET" },
];

export const technologies = [
  { name: "C#", color: "#4A7FA7", category: "Language" },
  { name: ".NET", color: "#B3CFE5", category: "Framework" },
  { name: "Python", color: "#4A7FA7", category: "Language" },
  { name: "React", color: "#B3CFE5", category: "Framework" },
  { name: "Vue.js", color: "#4A7FA7", category: "Framework" },
  { name: "Flask", color: "#B3CFE5", category: "Framework" },
  { name: "JavaScript", color: "#F6FAFD", category: "Language" },
  { name: "SQL", color: "#4A7FA7", category: "Database" },
  { name: "MySQL", color: "#B3CFE5", category: "Database" },
  { name: "pgAdmin", color: "#F6FAFD", category: "Database" },
  { name: "HTML/CSS", color: "#B3CFE5", category: "Web" },
  { name: "Git", color: "#4A7FA7", category: "Tool" },
  { name: "Machine Learning", color: "#B3CFE5", category: "AI/ML" },
  { name: "REST APIs", color: "#F6FAFD", category: "Architecture" },
  { name: "Node.js", color: "#4A7FA7", category: "Runtime" },
  { name: "Azure", color: "#B3CFE5", category: "Cloud" },
];

export const experiences = [
  {
    title: "Software Developer",
    company_name: "CapaCiTi",
    icon: "SD",
    iconBg: "#4A7FA7",
    date: "April 2026 - Present",
    points: [
      "Building full-stack solutions and deploying them on AWS and Azure cloud platforms.",
      "Practicing Agile/Scrum development methodologies to deliver software efficiently.",
      "Studying machine learning fundamentals with Python, scikit-learn, and TensorFlow.",
      "Building intelligent features into existing software applications.",
      "Exploring natural language processing and computer vision domains.",
      "Applying AI to solve practical software engineering problems.",
    ],
  },
  {
    title: "Murex Analyst (Integration Team)",
    company_name: "Kion Consulting",
    icon: "MX",
    iconBg: "#1A3D63",
    date: "Nov - Dec 2025(vac work)",
    points: [
      "AI & Automation: Developed an AI-powered automation tool using Python, Flask, and OpenAI APIs to generate and debug Mx3 trade-booking formulas, significantly reducing manual effort and debugging time.",
      "Full-Stack Development: Contributed as a front-end developer for an internal full-stack application designed to automate the generation of training guidelines for cross-functional teams.",
      "Cloud & System Upgrades: Supported a major AWS-based Murex (Mx3) application upgrade from v51 to v65, assisting with system configuration, troubleshooting, and issue resolution.",
      "Data Mapping & Integration: Developed and rigorously validated complex XSLT transformations to ensure accurate trade data mapping between enterprise systems.",
      "Backend Operations: Leveraged SQL, Unix shell scripting, and XML/MXML to support system-level operations, backend data workflows, and enterprise integration tasks.",
    ],
  },
  {
    title: "Murex Analyst (Integration Team)",
    company_name: "Kion Consulting",
    icon: "MX",
    iconBg: "#0A1931",
    date: "June - July 2025(vac work)",
    points: [
      "AI & Automation: Developed an AI-powered automation tool using Python, Flask, and OpenAI APIs to generate and debug Mx3 trade-booking formulas, significantly reducing manual effort and debugging time.",
      "Full-Stack Development: Contributed as a front-end developer for an internal full-stack application designed to automate the generation of training guidelines for cross-functional teams.",
      "Developing a deep passion for AI engineering and intelligent system design.",
    ],
  },
  {
    title: "AI/ML Explorer",
    company_name: "Self-Directed Learning",
    icon: "ML",
    iconBg: "#4A7FA7",
    date: "2024 - Present",
    points: [
      "Studying machine learning fundamentals with Python, scikit-learn, and TensorFlow.",
      "Building intelligent features into existing software applications.",
      "Exploring natural language processing and computer vision domains.",
      "Applying AI to solve practical software engineering problems.",
    ],
  },
];

export const certifications = [
  "Generative AI with Large Language Models (AWS DeepLearning.AI)",
  "Supervised Machine Learning: Regression and Classification (Stanford University DeepLearning.AI)",
  "Unsupervised Learning, Recommenders, Reinforcement Learning (Stanford University DeepLearning.AI)",
  "AI for Everyone (DeepLearning.AI)",
  "Python for Data Science, AI Development (IBM)",
  "Generative AI: Prompt Engineering Basics (IBM)",
  "Introduction to Artificial Intelligence (AI) (IBM)",
  "Introduction to Generative AI (Google Cloud)",
  "Azure Fundamentals (AZ-900) (Microsoft)",
  "Currently studying: Azure Administrator (AZ-104)",
];

export const projects = [
  {
    name: "C# MVC Web Application",
    description:
      "A full-stack web application built with ASP.NET Core MVC demonstrating CRUD operations, authentication, and RESTful API design. Features responsive UI, SQL Server backend, and Entity Framework ORM.",
    tags: [
      { name: "ASP.NET Core", color: "blue-text-gradient" },
      { name: "C#", color: "green-text-gradient" },
      { name: "SQL Server", color: "pink-text-gradient" },
    ],
    previewColor: "#0A1931",
    source_code_link: "https://github.com/Serero-Codes",
    live_demo_link: null,
  },
  {
    name: "Python ML Pipeline",
    description:
      "A machine learning data pipeline for preprocessing, feature engineering, model training, and evaluation. Built with Python, pandas, scikit-learn, and Jupyter for exploratory analysis.",
    tags: [
      { name: "Python", color: "blue-text-gradient" },
      { name: "scikit-learn", color: "green-text-gradient" },
      { name: "pandas", color: "pink-text-gradient" },
    ],
    previewColor: "#1A3D63",
    source_code_link: "https://github.com/Serero-Codes",
    live_demo_link: null,
  },
  {
    name: "3D Portfolio",
    description:
      "This immersive portfolio built with React, Three.js, React Three Fiber, Framer Motion, and Tailwind CSS. Features cinematic animations, interactive 3D scenes, and performance optimizations.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "Three.js", color: "green-text-gradient" },
      { name: "Framer Motion", color: "pink-text-gradient" },
    ],
    previewColor: "#4A7FA7",
    source_code_link: "https://github.com/Serero-Codes/DevPortfolio",
    live_demo_link: null,
  },
  {
    name: "Desktop .NET Application",
    description:
      "A cross-platform desktop application built with .NET WPF featuring data visualization, local database integration, and a modern MVVM architecture pattern for maintainable, scalable software.",
    tags: [
      { name: ".NET WPF", color: "blue-text-gradient" },
      { name: "MVVM", color: "green-text-gradient" },
      { name: "SQLite", color: "pink-text-gradient" },
    ],
    previewColor: "#B3CFE5",
    source_code_link: "https://github.com/Serero-Codes",
    live_demo_link: null,
  },
];
