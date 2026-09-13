export interface Certification {
  id: string;
  code: string;
  title: string;
  issuer: string;
  issueDate?: string;
  credentialId?: string;
  verifyUrl?: string;
  status: "VERIFIED" | "ACTIVE" | "COMPLETED";
  skills: string[];
}

export const certificationsData: Certification[] = [
  {
    id: "nptel-python",
    code: "NPTEL-CS84",
    title: "The Joy of Computing using Python",
    issuer: "NPTEL",
    credentialId: "NPTEL26CS84S38580035804366951",
    verifyUrl: "https://nptel.ac.in/noc/E_Certificate/NPTEL26CS84S38580035804366951",
    status: "VERIFIED",
    skills: ["Python", "Algorithms", "Computational Thinking"],
  },
  {
    id: "mongodb-basics",
    code: "MDB-STU",
    title: "MongoDB Basics for Students",
    issuer: "MongoDB (Credly)",
    issueDate: "Jul 2026",
    verifyUrl: "https://www.credly.com/badges/993ff312-2bad-47c1-82aa-b25c91e22f2d/linked_in_profile",
    status: "VERIFIED",
    skills: ["MongoDB", "Database Management (DBMS)", "NoSQL"],
  },
  {
    id: "freecodecamp-rwd",
    code: "FCC-RWD",
    title: "Responsive Web Design",
    issuer: "freeCodeCamp",
    issueDate: "Jul 2025",
    verifyUrl: "https://www.freecodecamp.org/certification/fcc36677212-cd3f-4005-9e9c-05864c8bae06/responsive-web-design",
    status: "VERIFIED",
    skills: ["Responsive Web Design", "HTML5", "CSS3", "Flexbox", "CSS Grid"],
  },
  {
    id: "kaggle-ml",
    code: "KGL-BADGE",
    title: "Machine Learning Competency",
    issuer: "Kaggle",
    verifyUrl: "https://www.kaggle.com/certification/badges/anandhakaarthick/105",
    status: "VERIFIED",
    skills: ["Machine Learning", "Python", "Data Exploration", "Model Training"],
  },
  {
    id: "simplilearn-c",
    code: "SMPL-C",
    title: "C Programming Basics",
    issuer: "Simplilearn SkillUp",
    issueDate: "Dec 2025",
    credentialId: "9550952",
    status: "VERIFIED",
    skills: ["C Programming", "Pointers", "Memory Management"],
  },
  {
    id: "google-ai-agents",
    code: "GOOG-AGENT",
    title: "5-Day AI Agents Intensive Course with Google",
    issuer: "Google / United Latino Students Association",
    issueDate: "Dec 2025",
    status: "VERIFIED",
    skills: ["AI Agents", "Generative AI", "LLM Workflows"],
  },
];
