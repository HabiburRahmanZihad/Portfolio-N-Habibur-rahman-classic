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
    img: "/event.png", // Reusing an existing image or a generic placeholder
    name: "TazaRate",
    teamProject: false,
    shortDescription: "A modern platform for discovering and rating products.",
    description: "TazaRate is a dynamic web application built using the MERN stack that allows users to explore various products, leave reviews, and rate their favorites. It features a clean UI and efficient data management.",
    features: [
      "User authentication and profile management",
      "Dynamic product listing and categorization",
      "Interactive rating and review system",
      "Search and filtering capabilities",
      "Responsive design for mobile and desktop",
    ],
    projectType: "Full Stack",
    techStack: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    status: [
      { id: 1, name: "Status", duration: "Completed" },
      { id: 2, name: "Role", duration: "Full Stack" },
    ],
    keyChallenges: ["Developing a robust rating algorithm", "Ensuring real-time updates for reviews"],
    keyLearnings: ["Advanced MongoDB aggregation", "Building complex UI components with React"],
    liveLink: "https://tazarate-web.web.app",
    clientLink: "https://github.com/HabiburRahmanZihad/TazaRate",
  },
  {
    id: 2,
    img: "/recipe.png",
    name: "ReadRack",
    teamProject: false,
    shortDescription: "A digital library and book management system.",
    description: "ReadRack is a comprehensive platform for book lovers to manage their reading lists, discover new titles, and track their reading progress. It offers a seamless experience with personalized recommendations.",
    features: [
      "Extensive book database with search",
      "Personalized reading lists and tracking",
      "User reviews and ratings for books",
      "Social sharing features",
      "Light and dark mode support",
    ],
    projectType: "Full Stack",
    techStack: ["React", "Express", "Node.js", "MongoDB", "Firebase"],
    status: [
      { id: 1, name: "Status", duration: "Completed" },
      { id: 2, name: "Role", duration: "Full Stack" },
    ],
    keyChallenges: ["Integrating with external book APIs", "Managing complex user states"],
    keyLearnings: ["Working with RESTful APIs", "State management with Redux/Context API"],
    liveLink: "https://readrack-client.web.app",
    clientLink: "https://github.com/HabiburRahmanZihad/ReadRack",
  },
  {
    id: 3,
    img: "/devdit.png",
    name: "GradiFy",
    teamProject: false,
    shortDescription: "A tool for creating and sharing beautiful CSS gradients.",
    description: "GradiFy is a developer-friendly tool that simplifies the process of creating stunning CSS gradients. Users can customize colors, angles, and types of gradients and easily copy the generated CSS code.",
    features: [
      "Interactive gradient builder with live preview",
      "Support for linear and radial gradients",
      "Gradient collection for inspiration",
      "One-click CSS code export",
      "Shareable gradient links",
    ],
    projectType: "Frontend",
    techStack: ["React", "Tailwind CSS", "Framer Motion"],
    status: [
      { id: 1, name: "Status", duration: "Completed" },
      { id: 2, name: "Role", duration: "Frontend Developer" },
    ],
    keyChallenges: ["Developing a precise color picker", "Optimizing performance for real-time previews"],
    keyLearnings: ["Browser color manipulation", "Building interactive UI tools"],
    liveLink: "https://gradify-tool.web.app",
    clientLink: "https://github.com/HabiburRahmanZihad/GradiFy",
  },
  {
    id: 4,
    img: "/jobent.png",
    name: "SnapTasker",
    teamProject: false,
    shortDescription: "A fast and efficient task management application.",
    description: "SnapTasker is designed for productivity, allowing users to quickly create, organize, and prioritize tasks. It features an intuitive drag-and-drop interface and real-time synchronization across devices.",
    features: [
      "Drag-and-drop task organization",
      "Real-time data synchronization",
      "Task categorization and tagging",
      "Reminders and notifications",
      "Team collaboration features",
    ],
    projectType: "Full Stack",
    techStack: ["React", "Node.js", "Express", "MongoDB", "Socket.io"],
    status: [
      { id: 1, name: "Status", duration: "Completed" },
      { id: 2, name: "Role", duration: "Full Stack" },
    ],
    keyChallenges: ["Implementing real-time sync with Socket.io", "Designing an intuitive drag-and-drop UX"],
    keyLearnings: ["Real-time communication", "Managing complex UI interactions"],
    liveLink: "https://snaptasker-web.web.app",
    clientLink: "https://github.com/HabiburRahmanZihad/SnapTasker",
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
