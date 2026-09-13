import type { Metadata } from "next";
import { IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-ibm-plex-sans",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-ibm-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Anandha Kaarthick S — Portfolio",
  description: "Full-stack developer & hardware tinkerer. Building pragmatic web applications and repurposing hardware into Linux micro-infrastructure.",
  keywords: ["Anandha Kaarthick S", "Full-Stack Developer", "Hardware Tinkerer", "Linux", "FastAPI", "React", "Termux", "Tailscale"],
  icons: {
    icon: "/ak-logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
        />
      </head>
      <body
        className={`${ibmPlexSans.variable} ${ibmPlexMono.variable} font-sans bg-bg-base text-text-primary antialiased min-h-screen relative selection:bg-primary-container selection:text-on-primary`}
      >
        {/* Background ambient radial gradient */}
        <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-bg-gradient-start/80 via-bg-base to-bg-base -z-10" />
        
        {children}
      </body>
    </html>
  );
}
