import Title from "../shared/Title";
import { CertificatesList } from "@/components/ui/Certificate-design";

interface Certificate {
  id: number;
  title: string;
  description: string;
  data: string;
  skills: string[];
  certificate: string;
}

const certificates: Certificate[] = [
  {
    id: 1,
    title: "Complete Web Development Course",
    description:
      "Successfully completed the Complete Web Development Course with Excellence, mastering HTML, CSS, JavaScript, React, and real-world projects.",
    data: "Awarded by Programming Hero in 2025",
    skills: ["HTML", "CSS", "JavaScript", "React", "Node.js", "Express.js", "MongoDB"],
    certificate: "https://res.cloudinary.com/dvq3pcykn/image/upload/v1758113803/pg-hero-certificate_vbiln3.png",
  },
  {
    id: 2,
    title: "Black Belt in Web Development",
    description:
      "Earned the prestigious Black Belt from Programming Hero for outstanding performance and dedication throughout the Complete Web Development course, showcasing excellence in coding, projects, and problem-solving.",
    data: "Awarded by Programming Hero in 2025",
    skills: ["Web Development", "Problem Solving", "Advanced Coding"],
    certificate: "https://res.cloudinary.com/dvq3pcykn/image/upload/v1761200347/1761192742415_us33xu.jpg",
  },
  {
    id: 3,
    title: "Smart Money Skills for Life",
    description:
      "Successfully completed the Smart Money Skills for Life course by Passport to Earning Bangladesh in collaboration with UNICEF, gaining essential financial literacy skills including budgeting, saving, smart spending, and responsible money management.",
    data: "Awarded by Passport to Earning Bangladesh (UNICEF) in 2026",
    skills: ["Financial Literacy", "Budgeting", "Responsible Management"],
    certificate: "https://res.cloudinary.com/dvq3pcykn/image/upload/Screenshot_2026-01-18_190755_ypah1h.png",
  },
  {
    id: 4,
    title: "CCE Inter Semester Programming Contest-3",
    description:
      "Participated in the CCE Inter Semester Programming Contest-3, enhancing problem-solving skills and coding expertise through competitive programming.",
    data: "Awarded by CCE Club, IIUC in 2025",
    skills: ["Competitive Programming", "C++", "Algorithms", "Data Structures"],
    certificate: "https://res.cloudinary.com/dvq3pcykn/image/upload/v1758113802/CCe-Contest_ilts7n.jpg",
  },
  {
    id: 5,
    title: "Communication Hacks",
    description:
      "Completed a course on communication strategies and techniques.",
    data: "Awarded by 10 Minute School in 2025",
    skills: ["Communication", "Soft Skills"],
    certificate: "https://res.cloudinary.com/dvq3pcykn/image/upload/v1758113803/COMMUNICATIONHACKS_atpsfd.png",
  },
  {
    id: 6,
    title: "Fundamentals rules of PhotoGraphy",
    description:
      "Participated in a photography contest and won recognition for outstanding skills.",
    data: "Awarded by IIUCPS in 2024",
    skills: ["Photography", "Visual Composition"],
    certificate: "https://res.cloudinary.com/dvq3pcykn/image/upload/v1758113804/PhotoContest_lteajz.jpg",
  },
  {
    id: 7,
    title: "Presentation & Public Speaking",
    description:
      "Completed a comprehensive course on Presentation & Public Speaking, gaining skills in effective communication and audience engagement.",
    data: "Awarded by 10 Minute School in 2023",
    skills: ["Public Speaking", "Presentation Skills"],
    certificate: "https://res.cloudinary.com/dvq3pcykn/image/upload/v1758113810/Presentation_PublicSpeaking_s5zyxp.png",
  },
  {
    id: 8,
    title: "Cyber Security & Ethical Hacking",
    description:
      "Completed a comprehensive course on Cyber Security and Ethical Hacking, gaining skills in protecting systems and networks.",
    data: "Awarded by Ghoori Learning in 2021",
    skills: ["Cyber Security", "Ethical Hacking", "Network Security"],
    certificate: "https://res.cloudinary.com/dvq3pcykn/image/upload/v1758113802/cyber_xxgrcu.jpg",
  },
  {
    id: 9,
    title: "Facebook Marketing",
    description:
      "Completed a course on Facebook Marketing, learning strategies for effective social media advertising.",
    data: "Awarded by 10 Minute School in 2021",
    skills: ["Digital Marketing", "Social Media Advertising"],
    certificate: "https://res.cloudinary.com/dvq3pcykn/image/upload/v1758113802/10_qcmdsy.jpg",
  },
  {
    id: 10,
    title: "Email Writing",
    description:
      "Completed a course on Email Writing, mastering the art of professional communication through email.",
    data: "Awarded by 10 Minute School in 2025",
    skills: ["Professional Writing", "Email Etiquette"],
    certificate: "https://res.cloudinary.com/dvq3pcykn/image/upload/v1758113803/EMAIL_WRITING_tasy7q.png",
  },
];

const Certificate = () => {
  return (
    <div id="certificates" className="mt-12">
      <Title lowerText="Certificates" upperText="Featured" />
      <CertificatesList certificates={certificates} />
    </div>
  );
};

export default Certificate;
