export interface SkillCategory {
  title: string;
  icon: string;
  skills: string[];
}

export const skillsData: SkillCategory[] = [
  {
    title: "Languages",
    icon: "code",
    skills: ["Python", "C", "SQL", "JavaScript", "Java"],
  },
  {
    title: "Frontend",
    icon: "web",
    skills: ["React", "Tailwind CSS", "Next.js", "HTML5/CSS3"],
  },
  {
    title: "Backend",
    icon: "dataset",
    skills: ["FastAPI", "Flask", "Node.js", "WebSockets", "REST APIs"],
  },
  {
    title: "Infra & Tools",
    icon: "settings_ethernet",
    skills: ["Linux", "Git", "Termux", "Tailscale", "Nginx", "Docker", "Cloudflare Tunnels", "Render", "Vercel"],
  },
];
