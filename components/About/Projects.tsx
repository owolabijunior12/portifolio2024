/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from 'next/image'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
// import { Button } from '@/components/ui/button'

import { FiGlobe } from 'react-icons/fi'
import { FaGithub } from 'react-icons/fa'

const projects = [
  {
    title: "Rabah360",
    href: "https://rabah360.com",
    dates: "Sept 2024",
    active: true,
    description:
      "Simplify Church Operations With Our User-Friendly Software",
    technologies: ["HTML5", "CSS", "JavaScript"],
    links: [
      {
        type: "Website",
        href: "https://rabah360.com",
        icon: <FiGlobe className="w-6 h-6" />,
      },
    ],
    image: "/Rabah360.png",
    video: "",
  },
  {
    title: "Rock Paper Scissor Game",
    href: "https://iboytech-game-rps.vercel.app/",
    dates: "June 2023",
    active: true,
    description:
      "Multiplayer 2-Player Rock-Paper-Scissors Game. Note: Backend hosted on free service; may take a few minutes to wake up.",
    technologies: ["React.js", "CSS", "Socket.io", "Node.js", "Express.js"],
    links: [
      {
        type: "Website",
        href: "https://iboytech-game-rps.vercel.app/",
        icon: <FiGlobe className="w-6 h-6" />,
      },
      {
        type: "Source",
        href: "https://github.com/owolabijunior12/Rock-papper-scissors-game",
        icon: <FaGithub className="w-6 h-6" />,
      },
    ],
    image: "/rps-game-project.png",
    video: "",
  },
  {
    title: "Music Web App",
    href: "https://iboytech-music-app.vercel.app/",
    dates: "Jan 2023",
    active: true,
    description:
      "Music streaming app with authentication, playlist management, and real-time features. Backend may take some time to spin up.",
    technologies: [
      "React.js",
      "TypeScript",
      "MongoDB",
      "TailwindCSS",
      "Node.js",
      "Firebase",
      "Express.js",
      "JWT",
      "OAuth",
    ],
    links: [
      {
        type: "Source",
        href: "https://github.com/owolabijunior12/mern-stack-ecommerce",
        icon: <FaGithub className="w-6 h-6" />,
      },
    ],
    image: "/Iboytech Music App.png",
    video: "",
  },
  {
    title: "E-Commerce",
    href: "https://iboytech-e-commerce.vercel.app/",
    dates: "April 2023",
    active: true,
    description:
      "Full-stack e-commerce platform with user authentication, payment integration, and responsive design. Backend on free hosting may have initial latency.",
    technologies: [
      "React.js",
      "TailwindCSS",
      "JWT",
      "OAuth",
      "MongoDB",
      "Framer Motion",
      "React Toastify",
      "Express.js",
      "Paystack",
      "Firebase",
      "Node.js",
    ],
    links: [
      {
        type: "Website",
        href: "https://iboytech-e-commerce.vercel.app/",
        icon: <FiGlobe className="w-6 h-6" />,
      },
      {
        type: "Source",
        href: "https://github.com/owolabijunior12/mern-stack-ecommerce",
        icon: <FaGithub className="w-6 h-6" />,
      },
    ],
    image: "/Iboytech Music App - Google Chrome 10_25_2024 10_01_05 AM.png",
    video: "",
  },
  {
    title: "Movie App",
    href: "https://iboytech-movie-app.vercel.app/",
    dates: "Nov 2024",
    active: true,
    description:
      "User-friendly platform to discover, track, and manage movies with local storage support and rich metadata.",
    technologies: ["Next.js", "TailwindCSS", "TypeScript"],
    links: [
      {
        type: "Website",
        href: "https://iboytech-movie-app.vercel.app/",
        icon: <FiGlobe className="w-6 h-6" />,
      },
      {
        type: "Source",
        href: "https://github.com/owolabijunior12/movie-app",
        icon: <FaGithub className="w-6 h-6" />,
      },
    ],
    image: "/movieapp ss.png",
    video: "",
  },
  {
    title: "Admin Dashboard",
    href: "https://admin-dashboard-wheat-iota.vercel.app/",
    dates: "May 2023",
    active: true,
    description: "Responsive admin dashboard built with React and TailwindCSS.",
    technologies: ["React.js", "TailwindCSS"],
    links: [
      {
        type: "Website",
        href: "https://admin-dashboard-wheat-iota.vercel.app/",
        icon: <FiGlobe className="w-6 h-6" />,
      },
      {
        type: "Source",
        href: "https://github.com/owolabijunior12/Admin-Dashboard",
        icon: <FaGithub className="w-6 h-6" />,
      },
    ],
    image: "/Admin Dashboard.png",
    video: "",
  },
  {
    title: "Stop Watch",
    href: "https://stopwatch-bay-eight.vercel.app/",
    dates: "Aug 2023",
    active: true,
    description: "Simple stopwatch app built with Vue.js and TailwindCSS.",
    technologies: ["Vue.js", "TailwindCSS"],
    links: [
      {
        type: "Source",
        href: "https://github.com/owolabijunior12/stopwatch",
        icon: <FaGithub className="w-6 h-6" />,
      },
    ],
    image: "/stopwatch.png",
    video: "",
  },
  {
    title: "Dashboard",
    href: "https://dashboard-azure-tau-40.vercel.app",
    dates: "Dec 2023",
    active: true,
    description: "Feature-rich dashboard with Chakra UI, Framer Motion, and TypeScript.",
    technologies: ["Next.js", "TailwindCSS", "Chakra UI", "Framer Motion", "TypeScript"],
    links: [
      {
        type: "Source",
        href: "https://github.com/owolabijunior12/Dashboard-",
        icon: <FaGithub className="w-6 h-6" />,
      },
    ],
    image: "/dashboard.png",
    video: "",
  },

  // Your non-link projects
  {
    title: "LAMATA IoT Traffic System",
    href: null,
    dates: "2024",
    active: false,
    description:
      "IoT traffic management system for Lagos Metropolitan Area Transport Authority using ESP32 and sensors.",
    technologies: ["ESP32", "IoT", "C++", "Sensors"],
    links: [],
    image: "/lamata-iot.png",
    video: "",
  },
  {
    title: "NFC ATM Payment System",
    href: null,
    dates: "2025",
    active: false,
    description:
      "Secure NFC ATM payment system using ESP32, AES encryption, and contactless payments.",
    technologies: ["ESP32", "NFC", "AES Encryption", "C++"],
    links: [],
    image: "/nfc-payment.png",
    video: "",
  },
]

 


export default function Projects() {
  return (
    <div className="flex m-3 flex-row justify-center flex-wrap gap-6">
      {projects.map((project:any) => (
        <Card key={project.title} className="flex w-full md:w-[46%] flex-col">
          <CardHeader>
            <CardTitle>{project.title}</CardTitle>
            {project.dates && <CardDescription>{project.dates}</CardDescription>}
          </CardHeader>

          {project.image && (
            <div className="relative h-52 m-1 rounded-sm border-green-400 border-2 w-[98%]">
              <Image
                src={project.image}
                alt={project.title}
                layout="fill"
                objectFit="cover"
                className="rounded-md"
              />
            </div>
          )}

          <CardContent>
            <p>{project.description}</p>
            {project.technologies && (
              <div className="mt-2 flex flex-wrap gap-2">
                {project.technologies.map((tech:any) => (
                  <span
                    key={tech}
                    className="flex items-center gap-1  border rounded px-3 py-1 text-sm font-medium bg-background hover:bg-accent transition-colors border-input"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </CardContent>

          <CardFooter className="flex gap-2">
            {project.links?.map((link:any) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1  border rounded px-3 py-1 text-sm font-medium bg-background hover:bg-accent transition-colors border-input"
              >
                {link.icon}
                {link.type}
              </a>
            ))}
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}