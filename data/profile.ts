export interface QuickSpec {
  id: string;
  label: string;
  value: string;
  icon: string;
}

export const profileData = {
  name: "Anandha Kaarthick S",
  monogram: "AK",
  title: "Full-stack developer, AI-integrated apps",
  badge: "Engineering Portfolio",
  ttyStatus: "open to work",
  pitch: "Building real-time systems and practical tools that solve actual operational bottlenecks.",
  resumeUrl: "/AnandhaKaarthick_Resume.pdf",
  aboutHeading: "Started from a problem, not a template.",
  aboutStory: [
    "I'm a second-year Computer Science and Business Systems student at Rajalakshmi Institute of Technology, Chennai.",
    "I build software with an emphasis on low latency, zero unnecessary overhead, and real-world impact.", 
    "My projects range from real-time telemetry platforms (FastAPI, WebSockets, Leaflet/OSRM) to localized security utilities and custom Linux environments running on repurposed mobile hardware. Rather than reaching for bloated managed services, I like understanding how things run under the hood—optimizing network tunnels, self-hosting micro-services, and turning raw constraints into functional prototypes.",
    "When I’m not shipping hackathon MVPs or refining UI interactions, you’ll find me tweaking terminal workflows and experimenting with decentralized systems."
  ],
  specs: [
    {
      id: "academic",
      label: "Academic Track",
      value: "Second-year CSBS, RIT Chennai",
      icon: "school",
    },
    {
      id: "performance",
      label: "Performance",
      value: "CGPA 7.82 · Anna University",
      icon: "grade",
      metric: "7.82 / 10.0",
      percentage: 78.2,
    },
    {
      id: "location",
      label: "Current Location",
      value: "Tamil Nadu, India",
      icon: "location_on",
    },
    {
      id: "focus",
      label: "Focus",
      value: "Full-stack web dev + home labing",
      icon: "dns",
    },
  ],
  contacts: {
    email: "ansreesha1847@gmail.com",
    github: "https://github.com/AnandhaKaarthick",
    linkedin: "https://linkedin.com/in/anandha-kaarthick",
    leetcode: "https://leetcode.com/u/codecrafter1847/",
    hackerrank: "https://www.hackerrank.com/profile/anandhakaarthic1",
    quote: "Best way to reach me is email or GitHub — I check both more than LinkedIn.",
  },
};
