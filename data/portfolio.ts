import { Building2, Code2, Database, Network, Server, Workflow } from "lucide-react";

export const profile = {
  name: "Jafar Madadi",
  initials: ["J", "M"],
  title: "Senior Full-Stack & Systems Development Specialist",
  tagline: "backend architect & enterprise systems engineer",
  email: "jafar.madadi2026@gmail.com",
  phone: "+93 744 646 063",
  location: "Kabul, Afghanistan · Open to relocate",
  linkedin: "https://www.linkedin.com/in/jafar-madadi",
  github: "https://github.com/madadi-dev",
};

export const stats = [
  { value: "5+", unit: "Years", label: "Software Engineering", color: "blue" },
  { value: "4", unit: "Companies", label: "Enterprise Experience", color: "purple" },
];

export const keyAreas = [
  { label: "System Architecture", icon: Network },
  { label: "REST APIs", icon: Server },
  { label: "Full-Stack Development", icon: Code2 },
  { label: "Workflow Automation", icon: Workflow },
];

export const companies = ["Afghan Telecom", "Ghazanfar Bank", "Donya International Group", "SaveZone"];

export const projects = [
  {
    title: "Enterprise Telecom Systems",
    subtitle: "Telecom Operations",
    description: "Scalable services and operational systems supporting telecom workflows, automation, and enterprise teams at Afghan Telecom.",
    technologies: ["Laravel", "NestJS", "React", "Livewire"],
    icon: Network,
    tone: "blue",
  },
  {
    title: "GB Suite",
    subtitle: "Banking Management Platform",
    description: "An internal platform digitizing HR, finance, administration, and transportation workflows for Ghazanfar Bank.",
    technologies: ["Laravel", "Livewire", "FilamentPHP", "Alpine.js"],
    icon: Building2,
    tone: "purple",
  },
  {
    title: "Sales & CRM Systems",
    subtitle: "Enterprise Operations",
    description: "Sales operations, CRM services, marketing platforms, and multi-brand mailing systems built for day-to-day business use.",
    technologies: ["PHP", "JavaScript", "MySQL", "REST APIs"],
    icon: Database,
    tone: "blue",
  },
  {
    title: "Vehicle Tracking MIS",
    subtitle: "Monitoring & Operations",
    description: "A management information system supporting vehicle tracking, monitoring, infrastructure, and government client operations.",
    technologies: ["MIS", "SQL", "Networking", "Server Support"],
    icon: Server,
    tone: "purple",
  },
];

export const specializations = [
  {
    icon: "⚙️",
    title: "Backend & APIs",
    description: "Scalable application services, API design, and maintainable architectures for business-critical systems.",
    technologies: ["Laravel", "Node.js", "NestJS", "Django", "FastAPI", "REST APIs", "Microservices"],
  },
  {
    icon: "⚡",
    title: "Full-Stack Development",
    description: "Responsive applications that connect clear user workflows with reliable backend services.",
    technologies: ["React", "TypeScript", "Livewire", "FilamentPHP", "Tailwind CSS", "Alpine.js"],
  },
  {
    icon: "☁️",
    title: "Systems & Delivery",
    description: "Engineering practices that improve deployment, reliability, team collaboration, and long-term system quality.",
    technologies: ["AWS", "GitLab", "GitHub", "CI/CD", "Code Review", "Agile/Scrum", "Documentation"],
  },
];

export const experience = [
  {
    company: "Afghan Telecom Corporation",
    role: "Software Developer",
    period: "June 2025 - Present",
    summary: "Leading enterprise telecom system development and scalable backend delivery.",
    bullets: [
      "Build enterprise systems with Laravel, Node.js/NestJS, React, and Livewire.",
      "Design RESTful APIs and backend services for telecom operations and workflow automation.",
      "Improve performance, architecture, engineering standards, and technical documentation.",
    ],
  },
  {
    company: "Ghazanfar Bank",
    role: "Full-Stack Developer",
    period: "December 2024 - June 2025",
    summary: "Led end-to-end development of the GB Suite banking management platform.",
    bullets: [
      "Digitized HR, finance, administration, and transportation operations.",
      "Designed front-end and backend architecture with Laravel, Livewire, FilamentPHP, Tailwind CSS, and Alpine.js.",
      "Delivered secure workflow automation and documentation with cross-functional teams.",
    ],
  },
  {
    company: "Donya International Group",
    role: "Full-Stack Developer",
    period: "May 2022 - December 2024",
    summary: "Built and maintained sales, CRM, marketing, and enterprise web systems.",
    bullets: [
      "Managed the main marketing platform and multi-brand CRM mailing systems.",
      "Implemented scalable APIs and optimized backend reliability and response time.",
      "Coordinated with business, design, and QA teams to improve customer workflows.",
    ],
  },
  {
    company: "SaveZone Vehicle Tracking Company",
    role: "Junior Software Developer",
    period: "September 2019 - April 2022",
    summary: "Supported vehicle tracking software, infrastructure, and enterprise operations.",
    bullets: [
      "Developed and maintained the vehicle tracking Management Information System.",
      "Assisted with servers, troubleshooting, deployments, and tracking infrastructure.",
      "Supported technical operations for government clients including MOI and MOD.",
    ],
  },
];

export const skillGroups = [
  { title: "Languages", skills: ["PHP", "TypeScript", "Java", "Python", "SQL"] },
  { title: "Frontend", skills: ["React.js", "HTML", "CSS", "Tailwind CSS", "Bootstrap", "Sass/Less", "Alpine.js"] },
  { title: "Backend", skills: ["Laravel", "Node.js", "NestJS", "Django", "FastAPI", "Livewire", "RESTful APIs"] },
  { title: "Data & Delivery", skills: ["MySQL", "PostgreSQL", "SQL Server", "MongoDB", "Git", "CI/CD", "AWS"] },
];

export const languages = ["Persian/Dari · Native", "English · C2 Fluent", "Pashto · Fluent", "Urdu · Fluent"];
