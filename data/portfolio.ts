import {
  Building2,
  CloudCog,
  Code2,
  Network,
  PanelsTopLeft,
  Server,
  ServerCog,
  Workflow,
} from "lucide-react";
import type {
  Experience,
  IconLabel,
  NavigationItem,
  Project,
  Recognition,
  SkillGroup,
  Specialization,
  Stat,
} from "@/types/portfolio";

export const siteConfig = {
  name: "Jafar Madadi",
  shortName: "JM",
  url: "https://madadi-dev.github.io/portfolio/",
  title: "Jafar Madadi | Senior Software Engineer & Software Architect",
  description:
    "Senior Software Engineer and Software Architect designing scalable enterprise platforms, APIs, and workflow automation for telecom, banking, and business operations.",
  locale: "en_US",
} as const;

export const navigation = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/contact", label: "Contact" },
] as const satisfies readonly NavigationItem[];

export const profile = {
  name: siteConfig.name,
  initials: ["J", "M"] as const,
  title: "Senior Software Engineer & Software Architect",
  tagline: "software engineer & architect",
  email: "jafar.madadi2026@gmail.com",
  phone: "+93 744 646 063",
  location: "Kabul, Afghanistan",
  availability: "Open to relocation and remote collaboration",
  linkedin: "https://www.linkedin.com/in/jafar-madadi",
  github: "https://github.com/madadi-dev",
  youtube: "https://www.youtube.com/@JafarExplains",
} as const;

export const stats = [
  { value: "5+", unit: "Years", label: "Software Engineering", accent: "blue" },
  { value: "4", unit: "Industries", label: "Enterprise Delivery", accent: "purple" },
] as const satisfies readonly Stat[];

export const keyAreas = [
  { label: "System Architecture", icon: Network },
  { label: "REST APIs", icon: Server },
  { label: "Full-Stack Delivery", icon: Code2 },
  { label: "Workflow Automation", icon: Workflow },
] as const satisfies readonly IconLabel[];

export const companies = [
  "Afghan Telecom",
  "Ghazanfar Bank",
  "Donya International Group",
  "SaveZone",
] as const;

export const projects = [
  {
    title: "DSL Management System",
    context: "Enterprise telecom platform",
    period: "2026",
    problem:
      "Service operations, surveys, sales, stock, and reporting depend on connected workflows across technical and business teams.",
    contribution:
      "Developed application modules, designed APIs and backend services, integrated enterprise workflows, and collaborated with QA and operational stakeholders.",
    outcome:
      "Automated core telecom workflows while improving system performance, maintainability, and technical documentation.",
    technologies: ["Laravel", "Livewire", "React", "REST APIs", "MySQL"],
    icon: Network,
    accent: "blue",
  },
  {
    title: "GB Suite",
    context: "Banking operations platform",
    period: "2025",
    problem:
      "HR, finance, administration, and transportation teams needed consistent digital workflows for daily internal operations.",
    contribution:
      "Led end-to-end development, translated stakeholder requirements, and built secure modules, approvals, reports, and deployment guidance.",
    outcome:
      "Digitized cross-department workflows in a maintainable internal platform used by banking operations teams.",
    technologies: ["Laravel", "Livewire", "FilamentPHP", "Tailwind CSS", "REST APIs"],
    icon: Building2,
    accent: "purple",
  },
  {
    title: "ShopX Multi-Vendor Platform",
    context: "Role-based e-commerce system",
    period: "2026",
    problem:
      "A multi-vendor marketplace must coordinate distinct customer, vendor, and administrator responsibilities.",
    contribution:
      "Designed a role-based platform covering product management, marketplace operations, and payment workflows.",
    outcome:
      "Created a unified foundation for managing the core workflows of a multi-vendor commerce product.",
    technologies: ["Laravel", "React", "MySQL", "REST APIs"],
    icon: PanelsTopLeft,
    accent: "blue",
  },
  {
    title: "Driver Drowsiness Detection",
    context: "AI road-safety system",
    period: "2021",
    problem:
      "Driver fatigue creates a safety risk that requires timely, real-world monitoring rather than manual intervention.",
    contribution:
      "Built a Raspberry Pi system using computer vision to monitor driver alertness and detect signs of drowsiness in real time.",
    outcome:
      "Delivered an embedded proof of concept focused on early fatigue detection and road-safety support.",
    technologies: ["Artificial Intelligence", "Raspberry Pi", "Computer Vision", "Embedded Systems"],
    icon: ServerCog,
    accent: "purple",
  },
] as const satisfies readonly Project[];

export const specializations = [
  {
    icon: ServerCog,
    title: "Backend Architecture & APIs",
    description:
      "Maintainable service boundaries, integrations, and APIs for business-critical platforms and evolving enterprise workflows.",
    technologies: ["Laravel", "Node.js", "NestJS", "Django", "FastAPI", "REST", "Microservices"],
  },
  {
    icon: PanelsTopLeft,
    title: "Full-Stack Product Delivery",
    description:
      "Accessible, responsive interfaces connected to dependable backend services, clear data flows, and practical domain models.",
    technologies: ["React", "TypeScript", "Livewire", "FilamentPHP", "Tailwind CSS", "Alpine.js"],
  },
  {
    icon: CloudCog,
    title: "Cloud & Engineering Practice",
    description:
      "Delivery practices that improve reliability, team collaboration, deployment confidence, and long-term software quality.",
    technologies: ["AWS", "Docker", "Kubernetes", "CI/CD", "Testing", "Code Review", "Documentation"],
  },
] as const satisfies readonly Specialization[];

export const experience = [
  {
    company: "Afghan Telecom Corporation",
    role: "Software Developer",
    period: "June 2025 - Present",
    summary: "Building enterprise telecom systems and scalable backend services.",
    bullets: [
      "Develop and enhance the DSL Management System with Laravel, Livewire, React, REST APIs, and MySQL.",
      "Automate telecom workflows for services, surveys, sales, stock, and operational reporting.",
      "Design APIs and backend services, integrate enterprise modules, and improve performance and maintainability.",
      "Collaborate with stakeholders, QA, MDF, and technical teams while maintaining workflow and deployment documentation.",
    ],
  },
  {
    company: "Ghazanfar Bank",
    role: "Full-Stack Developer",
    period: "December 2024 - June 2025",
    summary: "Led end-to-end development of the GB Suite banking operations platform.",
    bullets: [
      "Digitized HR, finance, administration, and transportation workflows.",
      "Built secure enterprise modules with Laravel, Livewire, FilamentPHP, Tailwind CSS, Alpine.js, and REST APIs.",
      "Translated stakeholder requirements into automated approvals, reports, and maintainable system components.",
      "Produced technical documentation, workflow diagrams, and deployment guidance for internal teams.",
    ],
  },
  {
    company: "Donya International Group",
    role: "Full-Stack Developer",
    period: "May 2022 - December 2024",
    summary: "Built and maintained CRM, sales, marketing, and enterprise web systems.",
    bullets: [
      "Built CRM, sales operations, and enterprise applications with Laravel, JavaScript, and MySQL.",
      "Managed the marketing platform and multi-brand CRM email workflows.",
      "Developed scalable REST APIs and improved backend reliability, performance, and maintainability.",
    ],
  },
  {
    company: "SaveZone Vehicle Tracking Company",
    role: "Junior Software Developer",
    period: "September 2019 - April 2022",
    summary: "Supported vehicle tracking software, infrastructure, and client operations.",
    bullets: [
      "Developed and maintained a Management Information System for vehicle tracking and monitoring.",
      "Handled server administration, deployment, troubleshooting, maintenance, and technical support.",
      "Supported government clients, including the Ministry of Interior and Ministry of Defense.",
    ],
  },
] as const satisfies readonly Experience[];

export const skillGroups = [
  { title: "Languages", skills: ["PHP", "TypeScript", "JavaScript", "Python", "Java", "C#", "SQL"] },
  { title: "Frameworks", skills: ["Laravel", "Livewire", "React", "Next.js", "Node.js", "NestJS", "Express.js", "Django", "FastAPI"] },
  { title: "Data & Cloud", skills: ["MySQL", "PostgreSQL", "SQL Server", "MongoDB", "Redis", "AWS", "Docker", "Kubernetes", "Linux"] },
  { title: "Architecture", skills: ["Microservices", "REST APIs", "gRPC", "Event-Driven", "DDD", "Clean Architecture", "SOLID", "Design Patterns"] },
] as const satisfies readonly SkillGroup[];

export const education = {
  degree: "Bachelor of Science in Computer Science",
  institution: "Kabul Polytechnic University",
  period: "June 2017 - July 2021",
  description:
    "Focused on software engineering, full-stack and mobile development, databases, networking, security, algorithms, and computer science foundations.",
} as const;

export const recognition = [
  { title: "University Graduation", detail: "Bachelor of Computer Science, Kabul Polytechnic University", year: "2021" },
  { title: "Imagine Career Program", detail: "International career-development and job-readiness program", year: "2024" },
  { title: "Duolingo English Test", detail: "Score: 120 out of 160", year: "2026" },
] as const satisfies readonly Recognition[];

export const languages = ["Persian / Dari - Native", "English - Fluent (C2)", "Pashto - Fluent", "Urdu - Fluent"] as const;
