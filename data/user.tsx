import React from "react";
import {
  Activity,
  BookOpen,
  Bot,
  Brain,
  Briefcase,
  Building,
  Building2,
  Calendar,
  Clock,
  Cloud,
  CloudLightning,
  Code,
  Code2,
  Coffee,
  Cpu,
  Database,
  FileText,
  GitBranch,
  Github,
  Globe,
  Heart,
  HeartHandshake,
  Lightbulb,
  Linkedin,
  Mail,
  MapPin,
  MessageSquare,
  Music,
  Phone,
  Rocket,
  Settings,
  Shield,
  Smartphone,
  Target,
  TrendingUp,
  Trophy,
  User,
  Users,
  Zap,
} from "lucide-react";

interface Metric {
  [key: string]: string;
}

interface Project {
  title: string;
  description: string;
  tech: string[];
  gradient: string;
  href: string;
  liveUrl?: string;
  metrics: Metric;
}

interface Stat {
  icon: React.ReactNode;
  label: string;
  value: string;
  color: string;
  iconColor: string;
}

interface Experience {
  title: string;
  company: string;
  type: string;
  duration: string;
  description: string;
  achievements: string[];
  icon: React.ReactNode;
  color: string;
  metrics: Metric;
}

interface SkillTechnology {
  icon: string;
  name: string;
  level: number;
  experience: string;
  projects: number;
}

interface SkillCategory {
  icon: React.ReactNode;
  color: string;
  bgColor: string;
  textColor: string;
  technologies: SkillTechnology[];
}

interface Skills {
  [key: string]: SkillCategory;
}

interface PersonalInfo {
  icon: React.ReactNode;
  label: string;
  value: string;
  link?: string;
}

interface CoreValue {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}

interface ProblemSolvingStep {
  icon: React.ReactNode;
  step: string;
  title: string;
  description: string;
}

interface PersonalInterest {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}

interface WorkingStyle {
  icon: React.ReactNode;
  title: string;
  description: string;
  time: string;
}

interface WorkApproach {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}

interface Achievement {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  year: string;
}

interface QuickFact {
  text: string;
}

interface SocialLink {
  icon: React.ReactNode;
  name: string;
  href: string;
  color: string;
  description: string;
  followers: string;
}

interface ContactInfo {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
  description: string;
  color: string;
  availability: string;
}

interface ProjectType {
  icon: React.ReactNode;
  value: string;
  label: string;
}

interface BudgetRange {
  value: string;
  label: string;
  description: string;
}

interface Timeline {
  value: string;
  label: string;
  description: string;
}

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
  deliverables: string[];
}

interface FAQ {
  question: string;
  answer: string;
  category: string;
}

interface WorkingProcessStep {
  step: string;
  title: string;
  description: string;
  duration: string;
  deliverables: string[];
}

interface User {
  name: string;
  title: string;
  tagline: string;
  description: string;
  avatarUrl: string;
  socialLinks: SocialLink[];
  contactInfo: ContactInfo[];
  email: string;
  phone: string;
  location: string;
  availability: string;
  currentTimeIST: string;
  resumeLink: string;
  about: {
    title: string;
    description: string;
    story: string;
    quote: string;
    stats: Stat[];
    skills: Skills;
    experience: Experience[];
    personalInfo: PersonalInfo[];
    coreValues: CoreValue[];
    problemSolvingApproach: ProblemSolvingStep[];
    personalInterests: PersonalInterest[];
    achievements: Achievement[];
    quickFacts: QuickFact[];
    workingStyle: WorkingStyle[];
    workApproach: WorkApproach[];
    education: {
      degree: string;
      institution: string;
      details: string;
    }[];
    currentFocus: {
      icon: React.ReactNode;
      title: string;
      description: string;
    }[];
    personalPhilosophy: string[];
    technicalDecisionFramework: {
      icon: React.ReactNode;
      title: string;
      description: string;
      color: string;
    }[];
  };
  featuredProjects: Project[];
  quickStats: {
    icon: React.ReactNode;
    value: string;
    label: string;
    color: string;
  }[];
  contact: {
    title: string;
    description: string;
    projectTypes: ProjectType[];
    budgetRanges: BudgetRange[];
    timelines: Timeline[];
    services: Service[];
    faqs: FAQ[];
    workingProcess: WorkingProcessStep[];
  };
}

export const user: User = {
  name: "Kaushal Krishna",
  title: "Full-Stack • DevOps • AI",
  tagline: "I engineer scalable web systems, AI solutions, and cloud-native applications that power the future of technology.",
  description: "Ready to transform your idea into a powerful digital solution? I'm here to help you build scalable, user-friendly applications that drive real business results.",
  avatarUrl: "https://avatars.githubusercontent.com/u/132030841?s=400&v=4",
  email: "kaushalkrishna011@gmail.com",
  phone: "+91 9279103310",
  location: "Ormanjhi, Ranchi, India",
  availability: "Available for new projects",
  currentTimeIST: new Date().toLocaleTimeString('en-IN', { timeZone: 'Asia/Kolkata', hour: '2-digit', minute: '2-digit' }),
  resumeLink: "https://drive.google.com/file/d/1KBhzovkluPs5uXwz8iqvLwx71ooFyNq2/view?usp=drive_link",
  socialLinks: [
    {
      icon: <Github className="h-5 w-5" />,
      name: "GitHub",
      href: "https://github.com/kaushalkrishnax",
      color: "hover:text-foreground",
      description: "View my code & contributions",
      followers: "25+ repositories",
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      name: "LinkedIn",
      href: "https://linkedin.com/in/kaushalkrishnax",
      color: "hover:text-blue-600",
      description: "Professional network & updates",
      followers: "20+ connections",
    },
  ],
  contactInfo: [
    {
      icon: <Mail className="h-6 w-6" />,
      label: "Email",
      value: "kaushalkrishna011@gmail.com",
      href: "mailto:kaushalkrishna011@gmail.com",
      description: "Best way to reach me - Usually respond within 2-4 hours",
      color: "from-blue-500 to-cyan-500",
      availability: "Always available",
    },
    {
      icon: <Phone className="h-6 w-6" />,
      label: "Phone",
      value: "+91 9279103310",
      href: "tel:+919279103310",
      description: "Direct line for urgent matters",
      color: "from-green-500 to-emerald-500",
      availability: "9 AM - 8 PM IST",
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      label: "Location",
      value: "Ormanjhi, Ranchi, India",
      href: "https://www.google.com/maps/place/Ormanjhi,+Ranchi,+India/",
      description: "Remote-first, global collaboration",
      color: "from-purple-500 to-pink-500",
      availability: "UTC+5:30 timezone",
    },
  ],
  about: {
    title: "Know more about me",
    description: "Deep dive into my technical expertise, professional journey, and approach to building great software",
    story: "It all started with a simple question: \"How does this work?\" That initial spark of curiosity ignited my path from being a self-taught developer to a technology leader. For over three years, I've been immersed in building scalable applications, driven by the belief that the right technology can not only solve complex problems but also create meaningful opportunities.",
    quote: "\"I build more than just software; I build systems and teams designed for growth, resilience, and impact.\"",
    stats: [
      {
        icon: <Briefcase className="h-6 w-6" />,
        label: "Years of Experience",
        value: "3+",
        color: "from-sky-500 to-blue-600",
        iconColor: "text-sky-500",
      },
      {
        icon: <Rocket className="h-6 w-6" />,
        label: "Projects Delivered",
        value: "15+",
        color: "from-emerald-500 to-green-600",
        iconColor: "text-emerald-500",
      },
      {
        icon: <Building2 className="h-6 w-6" />,
        label: "Startups Scaled",
        value: "5+",
        color: "from-purple-500 to-indigo-600",
        iconColor: "text-purple-500",
      },
      {
        icon: <Cpu className="h-6 w-6" />,
        label: "Core Technologies",
        value: "25+",
        color: "from-amber-500 to-orange-600",
        iconColor: "text-amber-500",
      },
      {
        icon: <HeartHandshake className="h-6 w-6" />,
        label: "Happy Clients",
        value: "10+",
        color: "from-rose-500 to-red-600",
        iconColor: "text-rose-500",
      },
    ],
    skills: {
      "Frontend": {
        icon: <Globe className="h-5 w-5" />,
        color: "from-blue-500 to-cyan-500",
        bgColor: "bg-blue-50",
        textColor: "text-blue-700",
        technologies: [
          { name: "React", level: 95, experience: "3+ years", projects: 15, icon: "react" },
          { name: "Next.js", level: 90, experience: "2+ years", projects: 12, icon: "nextjs" },
          { name: "TypeScript", level: 88, experience: "2+ years", projects: 10, icon: "typescript" },
          { name: "Tailwind CSS", level: 92, experience: "2+ years", projects: 18, icon: "tailwindcss" },
          { name: "React Native", level: 85, experience: "2+ years", projects: 8, icon: "react" },
          { name: "Flutter", level: 75, experience: "1+ year", projects: 4, icon: "flutter" },
        ],
      },
      "Backend": {
        icon: <Cpu className="h-5 w-5" />,
        color: "from-green-500 to-emerald-500",
        bgColor: "bg-green-50",
        textColor: "text-green-700",
        technologies: [
          { name: "Node.js", level: 95, experience: "3+ years", projects: 20, icon: "nodejs" },
          { name: "NestJS", level: 88, experience: "2+ years", projects: 8, icon: "nestjs" },
          { name: "Express.js", level: 92, experience: "3+ years", projects: 15, icon: "express" },
          { name: "GraphQL", level: 85, experience: "2+ years", projects: 6, icon: "graphql" },
          { name: "REST APIs", level: 95, experience: "3+ years", projects: 25, icon: "fastapi" },
          { name: "Microservices", level: 80, experience: "1+ year", projects: 5, icon: "docker" },
        ],
      },
      "Database": {
        icon: <Database className="h-5 w-5" />,
        color: "from-purple-500 to-pink-500",
        bgColor: "bg-purple-50",
        textColor: "text-purple-700",
        technologies: [
          { name: "PostgreSQL", level: 90, experience: "3+ years", projects: 12, icon: "postgresql" },
          { name: "MongoDB", level: 85, experience: "2+ years", projects: 10, icon: "mongodb" },
          { name: "Redis", level: 88, experience: "2+ years", projects: 8, icon: "redis" },
          { name: "MySQL", level: 82, experience: "2+ years", projects: 6, icon: "mysql" },
          { name: "Cassandra", level: 75, experience: "1+ year", projects: 2, icon: "cassandra" },
        ],
      },
      "Cloud & DevOps": {
        icon: <Cloud className="h-5 w-5" />,
        color: "from-orange-500 to-red-500",
        bgColor: "bg-orange-50",
        textColor: "text-orange-700",
        technologies: [
          { name: "AWS", level: 85, experience: "2+ years", projects: 8, icon: "aws" },
          { name: "Google Cloud", level: 80, experience: "1+ year", projects: 4, icon: "gcp" },
          { name: "Docker", level: 88, experience: "2+ years", projects: 12, icon: "docker" },
          { name: "Kubernetes", level: 75, experience: "1+ year", projects: 3, icon: "kubernetes" },
          { name: "CI/CD", level: 85, experience: "2+ years", projects: 10, icon: "githubactions" },
          { name: "Firebase", level: 85, experience: "2+ years", projects: 7, icon: "firebase" },
        ],
      },
      "AI & ML": {
        icon: <Bot className="h-5 w-5" />,
        color: "from-teal-500 to-blue-500",
        bgColor: "bg-teal-50",
        textColor: "text-teal-700",
        technologies: [
          { name: "Python", level: 85, experience: "2+ years", projects: 8, icon: "python" },
          { name: "TensorFlow", level: 70, experience: "6+ months", projects: 2, icon: "tensorflow" },
          { name: "Hugging Face", level: 80, experience: "1+ year", projects: 4, icon: "python" },
          { name: "Jupyter", level: 82, experience: "1+ year", projects: 6, icon: "jupyter" },
          { name: "OpenAI API", level: 85, experience: "1+ year", projects: 5, icon: "openai" },
          { name: "Langchain", level: 78, experience: "1+ year", projects: 3, icon: "python" },
        ],
      },
      "Mobile": {
        icon: <Smartphone className="h-5 w-5" />,
        color: "from-indigo-500 to-purple-500",
        bgColor: "bg-indigo-50",
        textColor: "text-indigo-700",
        technologies: [
          { name: "React Native", level: 85, experience: "2+ years", projects: 8, icon: "react" },
          { name: "Flutter", level: 75, experience: "1+ year", projects: 4, icon: "flutter" },
          { name: "Android", level: 80, experience: "2+ years", projects: 6, icon: "android" },
          { name: "iOS", level: 75, experience: "1+ year", projects: 4, icon: "swift" },
          { name: "Expo", level: 88, experience: "2+ years", projects: 10, icon: "expo" },
          { name: "App Store", level: 85, experience: "2+ years", projects: 12, icon: "apple" },
        ],
      },
    },
    experience: [
      {
        icon: <Briefcase className="h-5 w-5" />,
        title: "Chief Technology Officer",
        company: "Nymiso",
        type: "Full-time",
        duration: "2024 - Present",
        description: "Leading the development of a comprehensive e-commerce platform with custom Print On Demand studio, real-time order tracking, and advanced user management systems.",
        achievements: [
          "Built scalable e-commerce architecture from ground up",
          "Implemented custom design studio for user personalization",
          "Developed real-time order tracking system",
          "Leading product strategy and technical roadmap",
        ],
        color: "from-blue-500 to-purple-500",
        metrics: { users: "10K+", revenue: "₹50L+", uptime: "99.9%" },
      },
      {
        icon: <Bot className="h-5 w-5" />,
        title: "AI Solutions & Chat Automation Intern",
        company: "Vomychat",
        type: "Internship",
        duration: "2023 - 2024",
        description: "Developed advanced AI-powered chatbot systems and automation tools for social media engagement.",
        achievements: [
          "Built secure CLI tool for secret management with device fingerprinting",
          "Created chatbot backend with NLP for automated social media responses",
          "Integrated Facebook Graph API for real-time customer interactions",
          "Obtained official Facebook permissions for messaging and engagement",
        ],
        color: "from-green-500 to-teal-500",
        metrics: { automation: "80%", response: "2s", accuracy: "95%" },
      },
      {
        title: "Senior Backend Developer",
        company: "KryptonLab",
        type: "Full-time",
        duration: "2022 - 2023",
        description: "Built and launched KryptonPay, a unified payment gateway serving multiple startups through a single Razorpay integration.",
        achievements: [
          "Designed multi-tenant payment architecture",
          "Reduced startup onboarding time by 70%",
          "Streamlined payment processing for 5+ startups",
          "Served as CTO overseeing technical strategy",
        ],
        icon: <Database className="h-5 w-5" />,
        color: "from-orange-500 to-red-500",
        metrics: { startups: "5+", reduction: "70%", transactions: "₹1Cr+" },
      },
    ],
    personalInfo: [
      { label: "Location", value: "Ormanjhi, India", icon: <MapPin className="h-4 w-4" />, link: "https://maps.google.com" },
      { label: "Email", value: "kaushalkrishna011@gmail.com", icon: <Mail className="h-4 w-4" />, link: "mailto:kaushalkrishna011@gmail.com" },
      { label: "Phone", value: "+91 9279103310", icon: <Phone className="h-4 w-4" />, link: "tel:+919279103310" },
      { label: "Experience", value: "3+ Years", icon: <Calendar className="h-4 w-4" /> },
    ],
    coreValues: [
      {
        icon: <Lightbulb className="h-6 w-6" />,
        title: "Innovation First",
        description: "I believe in pushing boundaries and exploring new technologies to create solutions that make a real difference.",
        color: "from-yellow-500 to-orange-500",
      },
      {
        icon: <Shield className="h-6 w-6" />,
        title: "Quality Over Quantity",
        description: "Every line of code matters. I prioritize writing clean, maintainable, and efficient code that stands the test of time.",
        color: "from-green-500 to-teal-500",
      },
      {
        icon: <BookOpen className="h-6 w-6" />,
        title: "Continuous Learning",
        description: "Technology evolves rapidly, and so do I. I'm committed to staying updated with the latest trends and best practices.",
        color: "from-blue-500 to-purple-500",
      },
      {
        icon: <Heart className="h-6 w-6" />,
        title: "User-Centric Design",
        description: "Great technology should be invisible to the user. I focus on creating intuitive, accessible experiences.",
        color: "from-pink-500 to-red-500",
      },
    ],
    problemSolvingApproach: [
      {
        step: "01",
        title: "Deep Dive Analysis",
        description: "I start by thoroughly understanding the problem domain, user needs, and business constraints before proposing any solution.",
        icon: <Brain className="h-5 w-5" />,
      },
      {
        icon: <FileText className="h-5 w-5" />,
        step: "02",
        title: "Research & Planning",
        description: "I research existing solutions, analyze trade-offs, and create a detailed technical plan with clear milestones.",
      },
      {
        icon: <GitBranch className="h-5 w-5" />,
        step: "03",
        title: "Iterative Development",
        description: "I build in small increments, test frequently, and gather feedback early to ensure we're on the right track.",
      },
      {
        icon: <Activity className="h-5 w-5" />,
        step: "04",
        title: "Optimization & Scale",
        description: "I continuously monitor, measure, and optimize for performance, scalability, and maintainability.",
      },
    ],
    personalInterests: [
      {
        icon: <Rocket className="h-5 w-5" />,
        title: "Technology Exploration",
        description: "I love experimenting with emerging technologies and building side projects to explore new concepts.",
        color: "text-blue-600",
      },
      {
        icon: <GitBranch className="h-5 w-5" />,
        title: "Open Source",
        description: "Contributing to open source projects and sharing knowledge with the developer community.",
        color: "text-green-600",
      },
      {
        icon: <Users className="h-5 w-5" />,
        title: "Mentoring",
        description: "Helping junior developers grow their skills and navigate their career paths.",
        color: "text-purple-600",
      },
      {
        icon: <FileText className="h-5 w-5" />,
        title: "Tech Writing",
        description: "Writing technical blogs and documentation to share knowledge and experiences.",
        color: "text-orange-600",
      },
    ],
    achievements: [
      {
        icon: <TrendingUp className="h-5 w-5" />,
        title: "Scaled Nymiso to 10K+ Users",
        description: "Led the technical development that helped Nymiso reach 10,000+ active users and ₹50L+ in revenue",
        color: "text-green-600",
        year: "2024",
      },
      {
        icon: <Trophy className="h-5 w-5" />,
        title: "Built KryptonPay Gateway",
        description: "Developed a unified payment system that reduced startup onboarding time by 70% and processed ₹1Cr+ transactions",
        color: "text-blue-600",
        year: "2023",
      },
      {
        icon: <Rocket className="h-5 w-5" />,
        title: "15+ Production Applications",
        description: "Successfully delivered 15+ web and mobile applications, from MVP to production scale",
        color: "text-purple-600",
        year: "2021-2024",
      },
      {
        icon: <Bot className="h-5 w-5" />,
        title: "Facebook API Integration Expert",
        description: "Obtained official Facebook permissions and built automated engagement systems with 95% accuracy",
        color: "text-teal-600",
        year: "2023",
      },
    ],
    quickFacts: [
      { text: "Prefer TypeScript over JavaScript for large projects" },
      { text: "Always excited about emerging AI/ML technologies" },
      { text: "Believe in the power of good documentation" },
      { text: "Enjoy mentoring junior developers" },
      { text: "Love exploring new frameworks and tools" },
      { text: "Advocate for clean, maintainable code" },
      { text: "Always learning something new" },
      { text: "Passionate about user experience design" },
    ],
    workingStyle: [
      {
        icon: <Clock className="h-5 w-5" />,
        title: "Early Bird",
        description: "Most productive during morning hours when the mind is fresh",
        time: "6:00 AM - 12:00 PM",
      },
      {
        icon: <Brain className="h-5 w-5" />,
        title: "Deep Work Sessions",
        description: "Dedicated blocks for complex problem-solving and architecture design",
        time: "2-4 hour blocks",
      },
      {
        icon: <MessageSquare className="h-5 w-5" />,
        title: "Collaboration Time",
        description: "Active in meetings, code reviews, and team discussions",
        time: "Afternoons",
      },
      {
        icon: <BookOpen className="h-5 w-5" />,
        title: "Learning & Research",
        description: "Staying updated with latest technologies and industry trends",
        time: "Evenings",
      },
    ],
    workApproach: [
      {
        icon: <Lightbulb className="h-6 w-6" />,
        title: "Problem-First Thinking",
        description: "I start by deeply understanding the problem before jumping to solutions. This ensures we build what's actually needed.",
        color: "from-yellow-500 to-orange-500"
      },
      {
        icon: <Zap className="h-6 w-6" />,
        title: "Iterative Development",
        description: "I believe in shipping early, getting feedback, and iterating quickly. This reduces risk and ensures we're on the right track.",
        color: "from-blue-500 to-purple-500"
      },
      {
        icon: <Settings className="h-6 w-6" />,
        title: "Quality & Performance",
        description: "Clean, maintainable code and optimal performance aren't optional. They're fundamental to any successful project.",
        color: "from-green-500 to-teal-500"
      },
      {
        icon: <Users className="h-6 w-6" />,
        title: "Collaborative Leadership",
        description: "I lead by example, mentor team members, and foster an environment where everyone can contribute their best work.",
        color: "from-purple-500 to-pink-500"
      }
    ],
    education: [
      {
        degree: "Senior Secondary (XII)",
        institution: "DAV Public School, Bariatu",
        details: "CBSE • 89.70% • 2026",
      },
      {
        degree: "Secondary (X)",
        institution: "St. Paul Public School, Teghra",
        details: "CBSE • 84.40% • 2025",
      },
    ],
    currentFocus: [
      {
        icon: <Building className="h-4 w-4 text-primary" />,
        title: "Scaling Nymiso Platform",
        description: "Optimizing performance for 10K+ users",
      },
      {
        icon: <Bot className="h-4 w-4 text-primary" />,
        title: "AI Integration",
        description: "Exploring GPT-4 and LangChain applications",
      },
      {
        icon: <Cloud className="h-4 w-4 text-primary" />,
        title: "Cloud Architecture",
        description: "AWS Solutions Architect certification",
      },
    ],
    personalPhilosophy: [
      "I believe that great software isn't just about writing code—it's about solving real problems and creating meaningful impact. Every project is an opportunity to learn something new, challenge assumptions, and push the boundaries of what's possible.",
      "My approach is rooted in empathy for users, respect for teammates, and a deep curiosity about how things work. I strive to build not just functional software, but experiences that delight users and systems that other developers can understand and extend.",
      "Technology is constantly evolving, and I see that as exciting rather than overwhelming. Each new framework, language, or paradigm is a new tool in the toolkit, and I'm always eager to learn when and how to use them effectively.",
    ],
    technicalDecisionFramework: [
      {
        icon: <Zap className="h-8 w-8 text-blue-600" />,
        title: "Performance Impact",
        description: "How will this affect system performance and user experience?",
        color: "from-blue-100 dark:bg-blue-900/30 to-blue-900/30 border border-blue-200 dark:border-blue-800",
      },
      {
        icon: <Shield className="h-8 w-8 text-green-600" />,
        title: "Maintainability",
        description: "Can the team easily understand, modify, and extend this solution?",
        color: "from-green-100 dark:bg-green-900/30 to-green-900/30 border border-green-200 dark:border-green-800",
      },
      {
        icon: <TrendingUp className="h-8 w-8 text-purple-600" />,
        title: "Scalability",
        description: "How will this solution handle growth in users, data, or complexity?",
        color: "from-purple-100 dark:bg-purple-900/30 to-purple-900/30 border border-purple-200 dark:border-purple-800",
      },
    ],
  },
  featuredProjects: [
    {
      title: "Flexiyo",
      description: "Social media platform with microservices architecture, real-time messaging, and advanced user engagement features",
      tech: ["React", "NestJS", "React Native", "gRPC"],
      gradient: "from-blue-500 to-purple-600",
      href: "/projects/flexiyo",
      liveUrl: "https://flexiyo.pages.dev",
      metrics: { users: "10K+", features: "50+", uptime: "99.9%" },
    },
    {
      title: "UpVachi",
      description: "AI-powered chatbot automation platform with advanced NLP and customer engagement analytics",
      tech: ["React", "NestJS", "AI/ML", "NLP"],
      gradient: "from-green-500 to-teal-600",
      href: "/projects/upvachi",
      liveUrl: "https://upvachi-live.web.app",
      metrics: { automation: "85%", response: "<2s", accuracy: "96%" },
    },
    {
      title: "Nymiso",
      description: "Print-on-demand e-commerce with custom design studio, real-time order tracking, and inventory management",
      tech: ["React", "NestJS", "Custom Studio", "Payment"],
      gradient: "from-purple-500 to-pink-600",
      href: "/projects/nymiso",
      liveUrl: "https://dev.nymiso.com",
      metrics: { products: "1K+", orders: "500+", revenue: "₹50L+" },
    },
  ],
  quickStats: [
    {
      icon: <Coffee className="w-6 h-6 text-amber-500 mx-auto" />,
      value: "500+",
      label: "Cups of Coffee",
      color: "text-amber-500",
    },
    {
      icon: <Code2 className="w-6 h-6 text-blue-500 mx-auto" />,
      value: "100K+",
      label: "Lines of Code",
      color: "text-blue-500",
    },
    {
      icon: <Music className="w-6 h-6 text-purple-500 mx-auto" />,
      value: "1000+",
      label: "Hours of Lo-fi",
      color: "text-purple-500",
    },
    {
      icon: <BookOpen className="w-6 h-6 text-green-500 mx-auto" />,
      value: "50+",
      label: "Tech Articles Read",
      color: "text-green-500",
    },
  ],
  contact: {
    title: "Let's Build Together",
    description: "Ready to transform your idea into a powerful digital solution? I'm here to help you build scalable, user-friendly applications that drive real business results.",
    projectTypes: [
      { value: "web-app", label: "Web Application", icon: <Globe className="h-4 w-4" /> },
      { value: "mobile-app", label: "Mobile App", icon: <Smartphone className="h-4 w-4" /> },
      { value: "ai-ml", label: "AI/ML Solution", icon: <Bot className="h-4 w-4" /> },
      { value: "api", label: "API Development", icon: <Database className="h-4 w-4" /> },
      { value: "cloud", label: "Cloud & DevOps", icon: <CloudLightning className="h-4 w-4" /> },
      { value: "ecommerce", label: "E-commerce Platform", icon: <Building className="h-4 w-4" /> },
      { value: "consulting", label: "Technical Consulting", icon: <Users className="h-4 w-4" /> },
      { value: "other", label: "Other", icon: <Code className="h-4 w-4" /> },
    ],
    budgetRanges: [
      { value: "small", label: "₹10K - ₹25K", description: "Small projects, MVPs" },
      { value: "medium", label: "₹25K - ₹50K", description: "Medium complexity" },
      { value: "large", label: "₹50K - ₹1L", description: "Full-scale applications" },
      { value: "enterprise", label: "₹1L+", description: "Enterprise solutions" },
      { value: "discuss", label: "Let's discuss", description: "Custom pricing" },
    ],
    timelines: [
      { value: "urgent", label: "ASAP (Rush)", description: "Emergency fixes" },
      { value: "week", label: "1-2 weeks", description: "Quick turnaround" },
      { value: "month", label: "1 month", description: "Standard projects" },
      { value: "quarter", label: "2-3 months", description: "Complex builds" },
      { value: "long", label: "3+ months", description: "Enterprise scale" },
      { value: "flexible", label: "Flexible", description: "No rush" },
    ],
    services: [
      {
        icon: <Code className="h-6 w-6" />,
        title: "Full-Stack Development",
        description: "End-to-end web applications with React, Node.js, and modern databases",
        color: "from-blue-500 to-cyan-500",
        deliverables: ["Frontend & Backend", "Database Design", "API Development", "Testing & Deployment"],
      },
      {
        icon: <Smartphone className="h-6 w-6" />,
        title: "Mobile App Development",
        description: "Cross-platform mobile apps using React Native and Flutter",
        color: "from-green-500 to-emerald-500",
        deliverables: ["iOS & Android", "App Store Deployment", "Backend Integration", "Push Notifications"],
      },
      {
        icon: <Bot className="h-6 w-6" />,
        title: "AI & Automation",
        description: "Intelligent solutions with GPT integration and process automation",
        color: "from-purple-500 to-pink-500",
        deliverables: ["ChatBot Development", "Process Automation", "API Integrations", "NLP Solutions"],
      },
      {
        icon: <CloudLightning className="h-6 w-6" />,
        title: "Cloud & DevOps",
        description: "Scalable infrastructure on AWS, Docker containerization, and CI/CD",
        color: "from-orange-500 to-red-500",
        deliverables: ["AWS Setup", "Docker Containers", "CI/CD Pipelines", "Monitoring & Scaling"],
      },
    ],
    faqs: [
      {
        question: "What's your typical response time?",
        answer: "I respond to emails within 2-4 hours during working hours (9 AM - 8 PM IST) and guarantee a response within 24 hours. For urgent matters, feel free to call directly.",
        category: "Communication",
      },
      {
        question: "Do you work with international clients?",
        answer: "Absolutely! I work with clients globally and am experienced in remote collaboration across different time zones. I'm available for calls during US/EU hours when needed.",
        category: "Global",
      },
      {
        question: "What's your development process?",
        answer: "I follow an agile methodology with regular sprints, daily updates, and weekly demos. You'll have access to a project dashboard, and I provide detailed progress reports to ensure complete transparency.",
        category: "Process",
      },
      {
        question: "Do you provide ongoing support?",
        answer: "Yes! I offer 30 days of free support post-launch, followed by flexible maintenance packages. This includes bug fixes, minor updates, and technical support to keep your application running smoothly.",
        category: "Support",
      },
      {
        question: "How do you handle project scope changes?",
        answer: "I use a flexible change management process. Small changes are often absorbed within the project buffer, while larger scope changes are documented, estimated, and approved before implementation.",
        category: "Process",
      },
      {
        question: "What technologies do you specialize in?",
        answer: "My primary stack includes React/Next.js, Node.js, TypeScript, PostgreSQL, and AWS. I also work with React Native, Python, AI/ML frameworks, and various cloud platforms depending on project needs.",
        category: "Technical",
      },
      {
        question: "Can you help with existing projects?",
        answer: "Definitely! I can audit existing codebases, fix bugs, add new features, improve performance, or help migrate to modern technologies. I'm experienced in taking over and enhancing legacy systems.",
        category: "Support",
      },
      {
        question: "Do you work on equity-based projects?",
        answer: "I'm open to discussing equity arrangements for innovative startups with strong potential. This typically involves a combination of reduced rates plus equity, evaluated case by case.",
        category: "Business",
      },
    ],
    workingProcess: [
      {
        step: "01",
        title: "Discovery & Planning",
        description: "We'll discuss your vision, requirements, and goals. I'll provide a detailed proposal with timeline and milestones.",
        duration: "1-2 days",
        deliverables: ["Project Proposal", "Technical Architecture", "Timeline & Budget"],
      },
      {
        step: "02",
        title: "Design & Prototyping",
        description: "Create wireframes, UI designs, and interactive prototypes to visualize the solution before development.",
        duration: "3-7 days",
        deliverables: ["Wireframes", "UI Designs", "Interactive Prototype"],
      },
      {
        step: "03",
        title: "Development & Testing",
        description: "Agile development with regular updates, code reviews, and comprehensive testing throughout.",
        duration: "2-8 weeks",
        deliverables: ["Working Software", "Test Coverage", "Documentation"],
      },
      {
        step: "04",
        title: "Launch & Support",
        description: "Deployment to production, user training if needed, and ongoing support to ensure smooth operation.",
        duration: "1-3 days",
        deliverables: ["Live Deployment", "User Training", "Support Documentation"],
      },
    ],
  },
}
