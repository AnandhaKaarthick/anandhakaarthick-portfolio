export const labStatusData = {
  nodeId: "node://cluster-armv7",
  command: "$ uptime",
  uptime: "up 42 days, 14:28, 2 nodes active",
  header: "--- CLUSTER TELEMETRY ---",
  fields: [
    { label: "nodes:", value: "galaxy-j7-01, galaxy-j7-02" },
    { label: "services:", value: "nginx · tailscale · honeypot (dev)" },
    { label: "status:", value: "ONLINE", isHighlight: true },
    { label: "kernel:", value: "Kali NetHunter Rootless (ARMv7l)" },
    { label: "tunnels:", value: "Cloudflare + Tailscale Mesh" },
    { label: "active:", value: "Termux daemon running (2289)" },
  ],
  footerNote: "Repurposed dual Samsung J7 devices operating 24/7 as home micro-infrastructure.",
  bandit: {
    title: "OverTheWire Bandit Progress",
    currentLevel: 14,
    totalLevels: 34,
    percentage: 41,
    description: "Working through OverTheWire Bandit — currently on level 14. Honing shell scripting, privilege escalation, SSH chaining, and network discovery directly on physical hardware.",
  },
};
