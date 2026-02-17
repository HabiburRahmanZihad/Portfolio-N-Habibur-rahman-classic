import { WorkExperience } from "@/components/ui/projects-design";
import Title from "../shared/Title";
export interface ProjectStatus {
  id: number;
  name: string;
  duration: string;
}

export interface Project {
  id: number;
  img: string;
  name: string;
  teamProject: boolean;
  description: string;
  projectType: string;
  features: string[];
  shortDescription: string;
  techStack: string[];
  status: ProjectStatus[];
  keyChallenges: string[];
  keyLearnings: string[];
  liveLink: string;
  clientLink: string;
  serverLink?: string;
}
export const allProjects: Project[] = [
  {
    id: 1,
    img: "/Projects/NagarNirman_IMG.png",
    name: "NagarNirman",
    teamProject: true,
    shortDescription: "A civic technology platform for urban infrastructure reporting and resolution.",
    description: "NagarNirman is a civic technology platform that connects citizens, municipal authorities, and problem solvers to report, track, and resolve urban infrastructure issues transparently and efficiently. It features location-based reporting, image/video proof submission, real-time status tracking, community voting, authority dashboards, and a verified reward system.",
    features: [
      "Location-based infrastructure reporting",
      "Image/video proof submission system",
      "Real-time status tracking for issues",
      "Community voting and engagement",
      "Comprehensive authority dashboards",
      "Verified reward and recognition system",
    ],
    projectType: "Full Stack",
    techStack: ["Next.js 15", "TypeScript", "React 19", "Node.js", "Express.js", "MongoDB", "JWT", "RBAC", "Tailwind CSS"],
    status: [
      { id: 1, name: "Status", duration: "Completed" },
      { id: 2, name: "Duration", duration: "4 Months" },
    ],
    keyChallenges: [
      "Implementing precise location-based tracking",
      "Managing high-volume media proof submissions",
      "Designing complex multi-role dashboards"
    ],
    keyLearnings: [
      "Advanced GIS integration",
      "Role-Based Access Control (RBAC) architecture",
      "Scalable media storage management"
    ],
    liveLink: "https://nagarnirman.web.app",
    clientLink: "https://github.com/HabiburRahmanZihad/NagarNirman",
  },
  {
    id: 2,
    img: "/tazarate.png",
    name: "TazaRate",
    teamProject: false,
    shortDescription: "A local market price tracking platform for vendors and consumers.",
    description: "TazaRate is a local market price tracking platform for vendors, admins, and everyday users. It provides live product prices, trend charts, vendor submissions, admin moderation, and ad management — all in one fast and user-friendly web app.",
    features: [
      "Live product price tracking",
      "Visual trend charts and analytics",
      "Vendor price submission system",
      "Admin moderation and quality control",
      "Integrated ad management system",
      "User-friendly responsive interface",
    ],
    projectType: "Full Stack",
    techStack: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS", "Firebase", "DaisyUI", "Vite"],
    status: [
      { id: 1, name: "Status", duration: "Completed" },
      { id: 2, name: "Duration", duration: "20 Days" },
    ],
    keyChallenges: [
      "Ensuring real-time data accuracy",
      "Handling concurrent vendor submissions",
      "Building intuitive data visualization"
    ],
    keyLearnings: [
      "Real-time database synchronization",
      "Efficient data filtering and aggregation",
      "Modern UI/UX with DaisyUI"
    ],
    liveLink: "https://tazarate-web.web.app",
    clientLink: "https://github.com/HabiburRahmanZihad/TazaRate",
  },
  {
    id: 3,
    img: "/healio.png",
    name: "Healio",
    teamProject: false,
    shortDescription: "A comprehensive healthcare ecosystem for customers and pharmacies.",
    description: "Healio is a full-stack healthcare web application that connects customers, pharmacies (sellers), and administrators in a single secure platform. It enables medicine browsing, ordering, inventory management, role-based access control, reviews, analytics, and robust error handling — built with real-world production standards.",
    features: [
      "Secure medicine browsing and ordering",
      "Pharmacy inventory management system",
      "Advanced role-based access control (RBAC)",
      "Comprehensive reviews and rating system",
      "In-depth analytics for sales and stock",
      "Robust global error handling and validation",
    ],
    projectType: "Full Stack",
    techStack: ["Next.js", "React", "Node.js", "Express", "PostgreSQL", "Prisma", "Better Auth", "Tailwind CSS", "Framer Motion"],
    status: [
      { id: 1, name: "Status", duration: "Completed" },
      { id: 2, name: "Duration", duration: "8 Days" },
    ],
    keyChallenges: [
      "Complex database relationships with Prisma",
      "Secure authentication with Better Auth",
      "Handling pharmaceutical inventory logic"
    ],
    keyLearnings: [
      "Relational database design (PostgreSQL)",
      "Type-safe API development with Prisma",
      "Advanced animation integration with Framer Motion"
    ],
    liveLink: "https://healio-health.web.app",
    clientLink: "https://github.com/HabiburRahmanZihad/Healio",
  },
  {
    id: 4,
    img: "/readrack.png",
    name: "ReadRack",
    teamProject: false,
    shortDescription: "A digital library management system with advanced search and reviews.",
    description: "ReadRack is a digital library management system with advanced book search, user profiles, authentication, and a review/rating system.",
    features: [
      "Advanced book search and discovery",
      "Comprehensive user profile management",
      "Secure authentication system",
      "Interactive book review and rating",
      "Personal reading list organization",
    ],
    projectType: "Full Stack",
    techStack: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS", "Firebase", "DaisyUI", "Vite"],
    status: [
      { id: 1, name: "Status", duration: "Completed" },
      { id: 2, name: "Duration", duration: "12 Days" },
    ],
    keyChallenges: [
      "Optimizing search across large databases",
      "Implementing complex rating logic",
      "Building seamless book browsing UX"
    ],
    keyLearnings: [
      "Database search optimization",
      "Full-stack state management",
      "User-centric design principles"
    ],
    liveLink: "https://readrack-client.web.app",
    clientLink: "https://github.com/HabiburRahmanZihad/ReadRack",
  },
  {
    id: 5,
    img: "/gradify.png",
    name: "Gradify",
    teamProject: false,
    shortDescription: "An all-in-one student management and productivity system.",
    description: "Gradify is an all-in-one student management system designed to help students organize their academic life, track expenses, manage schedules, and prepare for exams efficiently.",
    features: [
      "Academic life organization and tracking",
      "Expense tracking for student budgets",
      "Automated schedule and task management",
      "Exam preparation and study planning",
      "Integrated productivity tools",
    ],
    projectType: "Full Stack",
    techStack: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS", "Firebase", "DaisyUI", "Vite"],
    status: [
      { id: 1, name: "Status", duration: "Completed" },
      { id: 2, name: "Duration", duration: "15 Days" },
    ],
    keyChallenges: [
      "Designing a multi-functional student dashboard",
      "Implementing financial tracking logic",
      "Developing a dynamic scheduling engine"
    ],
    keyLearnings: [
      "Developing productivity-focused UI",
      "Data-driven student analytics",
      "Custom scheduling algorithm development"
    ],
    liveLink: "https://gradify-student.web.app",
    clientLink: "https://github.com/HabiburRahmanZihad/Gradify",
  },
];
const Projects = () => {
  return (
    <div id="projects" className="mt-12">
      <Title upperText="Featured" lowerText="Projects" />
      <WorkExperience experiences={allProjects} />
    </div>
  );
};

export default Projects;
