'use client';
import { useState, useMemo } from "react";
import ProjectCard from "./ProjectCard";
import ProjectFilter from "./ProjectFilter";

interface ProjectLink {
  type: string;
  href: string;
  icon: "website" | "github";
}

interface Project {
  title: string;
  href?: string;
  dates: string;
  active: boolean;
  description: string;
  technologies: string[];
  links: ProjectLink[];
  image: string;
  video?: string;
}

const projects: Project[] = [
  {
    title: "Rabah360",
    href: "https://rabah360.com",
    dates: "Sept 2024",
    active: true,
    description: "Simplify Church Operations With Our User-Friendly Software",
    technologies: ["HTML5", "CSS", "JavaScript"],
    links: [
      {
        type: "Website",
        href: "https://rabah360.com",
        icon: "website",
      },
    ],
    image: "photo-1461749280684-dccba630e2f6",
  },
  {
    title: "Rock Paper Scissor Game",
    href: "https://iboytech-game-rps.vercel.app/",
    dates: "June 2023",
    active: true,
    description: "Multiplayer 2-Player Rock-Paper-Scissors Game. Backend hosted on free service; may take a few minutes to wake up.",
    technologies: ["React.js", "CSS", "Socket.io", "Node.js", "Express.js"],
    links: [
      {
        type: "Website",
        href: "https://iboytech-game-rps.vercel.app/",
        icon: "website",
      },
      {
        type: "Source",
        href: "https://github.com/owolabijunior12/Rock-papper-scissors-game",
        icon: "github",
      },
    ],
    image: "photo-1488590528505-98d2b5aba04b",
  },
  {
    title: "Music Web App",
    href: "https://iboytech-music-app.vercel.app/",
    dates: "Jan 2023",
    active: true,
    description: "Music streaming app with authentication, playlist management, and real-time features. Backend may take some time to spin up.",
    technologies: ["React.js", "TypeScript", "MongoDB", "TailwindCSS", "Node.js", "Firebase", "Express.js", "JWT", "OAuth"],
    links: [
      {
        type: "Source",
        href: "https://github.com/owolabijunior12/mern-stack-ecommerce",
        icon: "github",
      },
    ],
    image: "photo-1649972904349-6e44c42644a7",
  },
  {
    title: "E-Commerce Platform",
    href: "https://iboytech-e-commerce.vercel.app/",
    dates: "April 2023",
    active: true,
    description: "Full-stack e-commerce platform with user authentication, payment integration, and responsive design. Backend on free hosting may have initial latency.",
    technologies: ["React.js", "TailwindCSS", "JWT", "OAuth", "MongoDB", "Framer Motion", "React Toastify", "Express.js", "Paystack", "Firebase", "Node.js"],
    links: [
      {
        type: "Website",
        href: "https://iboytech-e-commerce.vercel.app/",
        icon: "website",
      },
      {
        type: "Source",
        href: "https://github.com/owolabijunior12/mern-stack-ecommerce",
        icon: "github",
      },
    ],
    image: "photo-1518770660439-4636190af475",
  },
  {
    title: "Movie Discovery App",
    href: "https://iboytech-movie-app.vercel.app/",
    dates: "Nov 2024",
    active: true,
    description: "User-friendly platform to discover, track, and manage movies with local storage support and rich metadata.",
    technologies: ["Next.js", "TailwindCSS", "TypeScript"],
    links: [
      {
        type: "Website",
        href: "https://iboytech-movie-app.vercel.app/",
        icon: "website",
      },
      {
        type: "Source",
        href: "https://github.com/owolabijunior12/movie-app",
        icon: "github",
      },
    ],
    image: "photo-1486312338219-ce68d2c6f44d",
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
        icon: "website",
      },
      {
        type: "Source",
        href: "https://github.com/owolabijunior12/Admin-Dashboard",
        icon: "github",
      },
    ],
    image: "photo-1581091226825-a6a2a5aee158",
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
        icon: "github",
      },
    ],
    image: "photo-1488590528505-98d2b5aba04b",
  },
  {
    title: "Feature Dashboard",
    href: "https://dashboard-azure-tau-40.vercel.app",
    dates: "Dec 2023",
    active: true,
    description: "Feature-rich dashboard with Chakra UI, Framer Motion, and TypeScript.",
    technologies: ["Next.js", "TailwindCSS", "Chakra UI", "Framer Motion", "TypeScript"],
    links: [
      {
        type: "Source",
        href: "https://github.com/owolabijunior12/Dashboard-",
        icon: "github",
      },
    ],
    image: "photo-1461749280684-dccba630e2f6",
  },
  {
    title: "LAMATA IoT Traffic System",
    dates: "2024",
    active: false,
    description: "IoT traffic management system for Lagos Metropolitan Area Transport Authority using ESP32 and sensors.",
    technologies: ["ESP32", "IoT", "C++", "Sensors"],
    links: [],
    image: "photo-1518770660439-4636190af475",
  },
  {
    title: "NFC ATM Payment System",
    dates: "2025",
    active: false,
    description: "Secure NFC ATM payment system using ESP32, AES encryption, and contactless payments.",
    technologies: ["ESP32", "NFC", "AES Encryption", "C++"],
    links: [],
    image: "photo-1486312338219-ce68d2c6f44d",
  },
];

const ProjectsShowcase = () => {
  const [selectedTech, setSelectedTech] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");

  const allTechnologies = useMemo(() => {
    const techSet = new Set<string>();
    projects.forEach(project => {
      project.technologies.forEach(tech => techSet.add(tech));
    });
    return Array.from(techSet).sort();
  }, []);

  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      const matchesTech = selectedTech === "" || project.technologies.includes(selectedTech);
      const matchesSearch = searchTerm === "" || 
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
      
      return matchesTech && matchesSearch;
    });
  }, [selectedTech, searchTerm]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent mb-4">
            Project Showcase
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore my collection of projects spanning web development, IoT systems, and innovative solutions
          </p>
        </div>

        <ProjectFilter
          technologies={allTechnologies}
          selectedTech={selectedTech}
          onTechChange={setSelectedTech}
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.title}
              className="animate-fade-in"
              style={{
                animationDelay: `${Math.random() * 0.3}s`
              }}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <p className="text-lg text-muted-foreground">
              No projects found matching your criteria. Try adjusting your search or filter.
            </p>
          </div>
        )}

        <div className="text-center mt-16">
          <p className="text-muted-foreground">
            Found {filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''} 
            {selectedTech && ` using ${selectedTech}`}
            {searchTerm && ` matching "${searchTerm}"`}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectsShowcase;