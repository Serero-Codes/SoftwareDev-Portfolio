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
  { name: "SQL Server Management Studio", color: "#B3CFE5", category: "Database" },
  { name: "Azure", color: "#B3CFE5", category: "Cloud" },
  { name: "AWS", color: "#4A7FA7", category: "Cloud" },
];

export const experiences = [
  {
    title: "Cloud Engineer & Full-Stack Developer",
    company_name: "UVU Africa (CapaCiTi)",
    icon: "CE",
    iconBg: "#4A7FA7",
    date: "April 2026 - Present",
    points: [
      "Building full-stack solutions and deploying them on AWS cloud platforms.",
      "Building Cloud Infrastructure as Code (IaC) using AWS CloudFormation and Terraform.",
      "Building Serverless applications using AWS Lambda, API Gateway, and DynamoDB.",
      "Building and deploying containerized applications using Docker and Kubernetes.",
      "Building intelligent features into existing software applications.",
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
  "SFIA AWS Cloud Solutions Architect Professional Certificate (Coursera)",
  "Architecting Solutions on AWS (Coursera)",
  "Cloud Architecture Design Patterns (Coursera)",
  "Generative AI with Large Language Models (AWS DeepLearning.AI)",
  "Supervised Machine Learning: Regression and Classification (Stanford University DeepLearning.AI)",
  "Unsupervised Learning, Recommenders, Reinforcement Learning (Stanford University DeepLearning.AI)",
  "Python for Data Science, AI Development (IBM)",
  "Generative AI: Prompt Engineering Basics (IBM)",
  "Introduction to Artificial Intelligence (AI) (IBM)",
  "Azure Fundamentals (AZ-900) (Microsoft)",
];

export const projects = [
  
  {
    name: "3-tier AWS infrastructure",
    description:
      "Infrastructure as Code (IaC) using Terraform to deploy a secure, auto-scaling 3-tier AWS architecture hosting a containerized contact book application with full CRUD functionality. The design enforces strict network isolation using a custom VPC with public and private subnets, an Application Load Balancer, and an RDS PostgreSQL database. Security is prioritized through security group chaining and zero-trust AWS SSM access for keyless CI/CD deployments",
    tags: [
      { name: "Flask", color: "green-text-gradient" },
      { name: "JavaScript", color: "pink-text-gradient" },
      {name: "Python", color: "green-text-gradient" },
      { name: "SQL", color: "blue-text-gradient" },
      { name: "Docker", color: "blue-text-gradient" },
      { name: "Pg4Admin", color: "blue-text-gradient" },
      { name: "Terraform", color: "blue-text-gradient" },
      { name: "AWS", color: "green-text-gradient" },

    ],
    previewColor: "#0A1931",
    source_code_link: "https://github.com/Serero-Codes/contact-Book-infrastructure",
    live_demo_link: "https://github.com/Serero-Codes/contact-Book-infrastructure",
  },
  {
    name: "ticketless-parking",
    description:
    "An end-to-end serverless ticketless parking system built on AWS and deployed within a secure VPC. The architecture leverages API Gateway and S3 for direct image uploads, which trigger AWS Lambda and Amazon Rekognition to perform instant license plate OCR. The system seamlessly manages the entire parking lifecycle—from entry logging to automated exit fee calculation—using a managed Amazon RDS PostgreSQL database, completely eliminating the need for physical tickets or on-premise servers",
      tags: [
      { name: "Flask", color: "green-text-gradient" },
      { name: "S3", color: "pink-text-gradient" },
      { name: "AWS API", color: "blue-text-gradient" },
      { name: "Lambda", color: "green-text-gradient" },
      { name: "Python", color: "blue-text-gradient" },
      { name: "Rekognition", color: "pink-text-gradient" },
      { name: "PostgreSQL", color: "blue-text-gradient" },
      { name: "Serverless", color: "green-text-gradient" },
      { name: "OCR", color: "pink-text-gradient" },
    ],
    previewColor: "#0A1931",
    source_code_link: "https://github.com/Serero-Codes/ticketless-parking",
    live_demo_link: "https://github.com/Serero-Codes/ticketless-parking",
  },
  {
    name: "Smart Ticket Management",
    description:
      "A freelancing business website for managing support tickets, service bookings, and client communications through a professional booking portal.",
    tags: [
      { name: "HTML", color: "blue-text-gradient" },
      { name: "CSS", color: "green-text-gradient" },
      { name: "JavaScript", color: "pink-text-gradient" },
      { name: "Tailwind", color: "blue-text-gradient" },
      { name: "SQL", color: "green-text-gradient" },
    ],
    previewColor: "#0A1931",
    source_code_link: "https://github.com/Serero-Codes/Smart-Ticket-Management",
    live_demo_link: "https://smart-ticket-management-q5zg.onrender.com",
  },
  {
    name: "Employ AI",
    description:
      "An AI-powered employment platform that automates candidate matching, skill ranking, and recruitment workflows for smarter hiring.",
    tags: [
      { name: "Python", color: "blue-text-gradient" },
      { name: "Flask", color: "green-text-gradient" },
      { name: "AI", color: "pink-text-gradient" },
      { name: "PostgreSQL", color: "blue-text-gradient" },
    ],
    previewColor: "#1A3D63",
    source_code_link: "https://github.com/Serero-Codes/Employ_AI",
    live_demo_link: "https://employ-ai.onrender.com",
  },
  {
    name: "StudyMate",
    description:
      "A hackathon collaboration platform built to accelerate team development, rapid prototyping, and workflow automation during the Kion challenge.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "JavaScript", color: "green-text-gradient" },
      { name: "Node.js", color: "pink-text-gradient" },
      { name: "PostgreSQL", color: "blue-text-gradient" },
    ],
    previewColor: "#4A7FA7",
    source_code_link: "https://github.com/ChocTrippleB/dev_dynamo",
    live_demo_link: null,
  },
  {
    name: "Employee Management System",
    description:
      "A compact employee management system for administering staff and departments with ASP.NET Core, Entity Framework migrations, and SQL Server storage.",
    tags: [
      { name: "C#", color: "blue-text-gradient" },
      { name: "ASP.NET Core", color: "green-text-gradient" },
      { name: "Entity Framework", color: "pink-text-gradient" },
      { name: "SQL Server", color: "blue-text-gradient" },
    ],
    previewColor: "#B3CFE5",
    source_code_link: "https://github.com/Serero-Codes/EmployeeManagementSystem",
    live_demo_link: null,
  },
];
