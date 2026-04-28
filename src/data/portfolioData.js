import { appBaseUrl } from '../config/appConfig';

export const profile = {
  name: 'Jafar Madadi',
  initials: 'JM',
  role: 'Senior Software Engineer',
  brandSubtitle: 'backend architect & enterprise systems engineer',
  shortRole: 'Backend Architecture, Microservices, Enterprise Systems',
  heroTitle: 'Building modern backend systems for telecom, banking, and enterprise operations.',
  heroSummary:
    'I design and deliver scalable APIs, enterprise platforms, and workflow automation systems with a strong focus on reliability, maintainability, and business impact.',
  location: 'Open to opportunities in Dubai, UAE',
  email: 'jafar.madadi2026@gmail.com',
  linkedin: 'https://www.linkedin.com/in/jafar-madadi',
  github: 'https://github.com/madadi-dev',
  resumeLabel: 'Resume',
  resumeHref: `${appBaseUrl}resume.pdf`,
};

export const metrics = [
  { value: '4+', label: 'Years building production systems' },
  { value: '3', label: 'Core domains: telecom, banking, enterprise' },
  { value: '10+', label: 'Business workflows digitized and automated' },
  { value: '24/7', label: 'Mindset for reliability and maintainability' },
];

export const aboutHeroStats = [
  { value: '4+', label: 'Years software engineering' },
  { value: '3', label: 'Enterprise sectors delivered in' },
  { value: '10+', label: 'Operational workflows improved' },
  { value: '100%', label: 'Focus on production-grade systems' },
];

export const companies = [
  { name: 'Afghan Telecom', note: 'Enterprise APIs and telecom dashboards' },
  { name: 'Ghazanfar Bank', note: 'Banking operations and internal systems' },
  { name: 'Donya International Group', note: 'Sales platforms and backend services' },
];

export const featuredProjects = [
  {
    title: 'GB Suite',
    subtitle: 'Enterprise banking operations platform',
    summary:
      'A centralized internal platform supporting HR, finance, administration, and transport workflows for banking operations.',
    impact: [
      'Digitized manual operational processes across multiple departments',
      'Improved workflow visibility and reduced administrative friction',
      'Delivered a maintainable foundation for future internal modules',
    ],
    stack: ['Laravel', 'Livewire', 'MySQL', 'TailwindCSS'],
    image:
      'https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Telecom API & Dashboard Platform',
    subtitle: 'REST APIs and operational dashboards',
    summary:
      'Backend services and internal dashboards built for telecom operations where performance, clarity, and dependable workflows mattered every day.',
    impact: [
      'Designed enterprise-grade REST APIs for internal service integration',
      'Built scalable dashboards for operational visibility',
      'Automated recurring workflows to improve team efficiency',
    ],
    stack: ['Laravel', 'REST API', 'MySQL', 'Docker'],
    image:
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Enterprise Sales Platform',
    subtitle: 'Business platform for commercial operations',
    summary:
      'A modern business application combining backend services and frontend delivery for internal sales and operational teams.',
    impact: [
      'Built maintainable backend services for evolving business requirements',
      'Delivered responsive UI workflows for day-to-day operations',
      'Supported long-term product improvements in a live business setting',
    ],
    stack: ['React', 'Node.js', 'PostgreSQL', 'GitLab'],
    image:
      'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80',
  },
];

export const specializations = [
  {
    title: 'Backend Architecture',
    description:
      'I design REST APIs, service boundaries, and application structures that stay understandable as systems grow.',
    items: ['System Design', 'RESTful APIs', 'Microservices', 'Performance'],
  },
  {
    title: 'Enterprise Applications',
    description:
      'I build business-critical software for teams that need operational clarity, strong workflows, and reliable delivery.',
    items: ['Laravel', 'NestJS', 'Livewire', 'Workflow Automation'],
  },
  {
    title: 'Delivery & Operations',
    description:
      'I care about how software runs in the real world: deployment, maintainability, collaboration, and clean code.',
    items: ['Docker', 'CI/CD', 'Linux', 'Agile Scrum'],
  },
];

export const aboutHighlights = [
  'Senior software engineer focused on backend-heavy systems and enterprise application delivery',
  'Hands-on experience in telecom and banking environments where reliability and process clarity matter',
  'Comfortable leading architecture decisions, building APIs, and turning manual workflows into maintainable software',
];

export const techGroups = [
  {
    title: 'Backend & Frameworks',
    skills: ['Laravel', 'Livewire', 'Node.js', 'NestJS', 'REST APIs', 'Microservices'],
  },
  {
    title: 'Frontend',
    skills: ['React.js', 'TailwindCSS', 'Responsive UI', 'Component Architecture'],
  },
  {
    title: 'Databases',
    skills: ['MySQL', 'PostgreSQL', 'SQL Server', 'MongoDB'],
  },
  {
    title: 'DevOps & Delivery',
    skills: ['Docker', 'Git', 'GitLab', 'Linux', 'CI/CD', 'Agile Scrum'],
  },
];

export const experienceTimeline = [
  {
    company: 'Afghan Telecom Corporation',
    role: 'Senior Software Engineer',
    period: '2025 - Present',
    summary:
      'Designing and delivering enterprise-grade backend services and dashboards for telecom operations.',
    bullets: [
      'Designed and developed REST APIs for enterprise use cases',
      'Built scalable dashboards for operational monitoring and workflow visibility',
      'Automated recurring internal processes to improve efficiency',
    ],
  },
  {
    company: 'Ghazanfar Bank',
    role: 'Software Engineer',
    period: '2024 - 2025',
    summary:
      'Built internal banking systems focused on digitizing operations and reducing manual process overhead.',
    bullets: [
      'Developed GB Suite for banking management workflows',
      'Digitized HR, finance, admin, and transport processes',
      'Improved operational efficiency through automation and system design',
    ],
  },
  {
    company: 'Donya International Group',
    role: 'Software Engineer',
    period: '2022 - 2024',
    summary:
      'Worked on enterprise sales platforms, backend services, and modern frontend experiences for business teams.',
    bullets: [
      'Built and maintained enterprise business applications',
      'Developed backend services aligned with evolving business needs',
      'Delivered modern frontend interfaces for operational workflows',
    ],
  },
];

export const languages = [
  'Persian/Dari (Native)',
  'English (Fluent - C2)',
  'Pashto (Fluent)',
  'Urdu (Fluent)',
  'French (Basic)',
  'German (Basic)',
];

export const contactCards = [
  {
    title: 'Email',
    value: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    title: 'LinkedIn',
    value: 'linkedin.com/in/jafar-madadi',
    href: profile.linkedin,
  },
  {
    title: 'GitHub',
    value: 'github.com/madadi-dev',
    href: profile.github,
  },
];
