export const navLinks = [
  { id: "about", title: "About" },
  { id: "work", title: "Experience" },
  { id: "skills", title: "Skills" },
  { id: "projects", title: "Projects" },
  { id: "contact", title: "Contact" },
];

export const services = [
  { title: "Software Engineer", icon: "💻" },
  { title: "AI Engineer", icon: "🤖" },
  { title: "Full Stack Developer", icon: "🌐" },
  { title: ".NET Specialist", icon: "⚡" },
];

export const technologies = [
  { name: "C#", color: "#9b4fe8", category: "Language" },
  { name: ".NET", color: "#512bd4", category: "Framework" },
  { name: "Python", color: "#3776ab", category: "Language" },
  { name: "React", color: "#61dafb", category: "Framework" },
  { name: "JavaScript", color: "#f7df1e", category: "Language" },
  { name: "SQL", color: "#4479a1", category: "Database" },
  { name: "HTML/CSS", color: "#e34f26", category: "Web" },
  { name: "Git", color: "#f05032", category: "Tool" },
  { name: "Machine Learning", color: "#ff6b6b", category: "AI/ML" },
  { name: "REST APIs", color: "#00d4ff", category: "Architecture" },
  { name: "Node.js", color: "#339933", category: "Runtime" },
  { name: "Azure", color: "#0089d6", category: "Cloud" },
];

export const experiences = [
  {
    title: "Final Year IT Student",
    company_name: "Nelson Mandela University",
    icon: "🎓",
    iconBg: "#383e56",
    date: "2022 – Present",
    points: [
      "Studying IT Software Development with a focus on full-stack development using C# and .NET.",
      "Building real-world applications leveraging .NET MVC, SQL, Python, and modern web technologies.",
      "Exploring machine learning and cloud computing as emerging specializations.",
      "Developing a deep passion for AI engineering and intelligent system design.",
    ],
  },
  {
    title: "Full Stack C# Developer",
    company_name: "Personal Projects",
    icon: "💻",
    iconBg: "#1a1f35",
    date: "2023 – Present",
    points: [
      "Architected and built dynamic web applications using ASP.NET Core MVC.",
      "Designed relational databases with SQL Server and Entity Framework Core.",
      "Developed cross-platform desktop software with .NET Framework and .NET Core.",
      "Implemented RESTful APIs and consumed third-party services.",
    ],
  },
  {
    title: "AI/ML Explorer",
    company_name: "Self-Directed Learning",
    icon: "🤖",
    iconBg: "#1d1836",
    date: "2024 – Present",
    points: [
      "Studying machine learning fundamentals with Python, scikit-learn, and TensorFlow.",
      "Building intelligent features into existing software applications.",
      "Exploring natural language processing and computer vision domains.",
      "Applying AI to solve practical software engineering problems.",
    ],
  },
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
    gradient: "from-purple-900 to-blue-900",
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
    gradient: "from-cyan-900 to-teal-900",
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
    gradient: "from-violet-900 to-pink-900",
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
    gradient: "from-orange-900 to-red-900",
    source_code_link: "https://github.com/Serero-Codes",
    live_demo_link: null,
  },
];
