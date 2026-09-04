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
  myWork: string[];
  technologies: string[];
  links: ProjectLink[];
  image: string;
  video?: string;
}

 const projects: Project[] = [
  {
    title: "FlyAje Drone Delivery System",
    href: "",
    dates: "2026",
    active: true,

    description:
      "End-to-end drone delivery platform combining embedded hardware, real-time telemetry, backend services, and an administrative control system for monitoring and managing autonomous delivery operations.",

    myWork: [
      "Designed and developed the backend architecture using Node.js, TypeScript, and Express.js",
      "Built real-time drone telemetry communication using WebSockets",
      "Integrated GPS and sensor data for live drone monitoring",
      "Designed MongoDB data models for drones, deliveries, telemetry, and system operations",
      "Integrated ESP32 hardware with the backend communication layer",
      "Worked with GPS, IMU, LiDAR, camera, RFID/NFC and communication modules",
      "Built the drone delivery admin dashboard using Next.js and Tailwind CSS",
      "Implemented APIs for drone status, delivery tracking, and operational monitoring",
    ],

    technologies: [
      "Node.js",
      "TypeScript",
      "Express.js",
      "MongoDB",
      "WebSockets",
      "Next.js",
      "Tailwind CSS",
      "ESP32",
      "GPS",
      "IMU",
      "LiDAR",
      "IoT",
    ],

    links: [],

    image: "https://res.cloudinary.com/dpgfsvmyo/image/upload/v1788514989/myportfolio/qjttsg7poqcovor5heo9.png",
  },

  {
    title: "Softway Finance — NFC Tap-to-Pay System",
    href: "",
    dates: "2025",
    active: true,

    description:
      "A contactless payment system designed around NFC and IoT hardware, enabling users to perform payments by tapping compatible cards, phones, or custom NFC tags.",

    myWork: [
      "Designed the NFC payment hardware concept using ESP32 and PN532",
      "Implemented NFC card and tag communication",
      "Worked on secure transaction communication between the payment device and backend",
      "Integrated the hardware payment flow with backend APIs",
      "Designed the architecture for contactless student and driver payments",
      "Worked on card authentication and transaction verification",
      "Implemented encrypted communication concepts for protecting payment data",
      "Worked across both embedded hardware and software components of the system",
    ],

    technologies: [
      "ESP32",
      "PN532",
      "NFC",
      "C++",
      "Node.js",
      "Express.js",
      "REST API",
      "IoT",
      "AES Encryption",
    ],

    links: [],

    image: "https://res.cloudinary.com/dpgfsvmyo/image/upload/v1788516517/myportfolio/jsf3ibdai9gkupfdhqxe.jpg",
  },
   {
    title: "TSI Films",
    href: "",
    dates: "2026",
    active: true,

    description:
      "A professional website created for a film and creative media brand, providing a modern platform for presenting the brand, creative work, and services.",

    myWork: [
      "Designed and developed the website frontend",
      "Created a modern visual experience suitable for a creative media brand",
      "Built reusable and responsive React components",
      "Implemented responsive layouts across desktop, tablet, and mobile",
      "Structured the website to showcase creative work and services",
      "Focused on performance, usability, and visual presentation",
    ],

    technologies: [
      "React.js",
      "TypeScript",
      "Tailwind CSS",
    ],

    links: [],

    image: "https://res.cloudinary.com/dpgfsvmyo/image/upload/v1788516580/myportfolio/h7roc6plsfqnufdx6fcx.png",
  },
    {
    title: "Rabah360",
    href: "https://rabah360.com",
    dates: "Sept 2024",
    active: true,

    description:
      "A comprehensive church management platform designed to simplify church operations through centralized management tools and a modern web interface.",

    myWork: [
      "Developed the frontend interface for the platform",
      "Built responsive pages and reusable UI components",
      "Implemented church management workflows",
      "Integrated the frontend with backend APIs",
      "Worked with authentication and application data flows",
      "Built responsive layouts for different screen sizes",
      "Worked with PostgreSQL-backed application data",
      "Helped structure the platform for scalable church operations",
    ],

    technologies: [
      "React.js",
      "JavaScript",
      "HTML5",
      "CSS",
      "Django",
      "Python",
      "PostgreSQL",
    ],

    links: [
      {
        type: "Website",
        href: "https://rabah360.com",
        icon: "website",
      },
    ],

    image:
      "https://res.cloudinary.com/dpgfsvmyo/image/upload/v1788514415/myportfolio/ohcn6xkxqsayedcpcade.png",
  },
  
  
  {
    title: "Web3 Developer Website",
    href: "https://afenikhenamoses.com/",
    dates: "2025",
    active: true,
    description:
      "A professional personal website built to establish a strong online presence and showcase Eric's profile, work, and services.",
    myWork: [
      "Designed and developed the website frontend",
      "Built responsive layouts for desktop, tablet, and mobile",
      "Created reusable UI components",
      "Implemented website navigation and content sections",
      "Focused on clean user experience and modern visual presentation",
      "Optimized the website for responsive performance",
    ],
    technologies: ["React.js", "TypeScript", "Tailwind CSS"],
    links: [
      {
        type: "Website",
        href: "https://afenikhenamoses.com/",
        icon: "website",
      },
    ],
    image: "https://res.cloudinary.com/dpgfsvmyo/image/upload/v1788516493/myportfolio/gtcjzhrvelwpngpx5xtg.png",
},

 
  
  {
    title: "Tobzyshotit",
    href: "https://tobzyshotit.com/",
    dates: "Sept 2025",
    active: true,
    description:
      "A professional photography and creative portfolio website designed to showcase visual work, services, and brand identity through a modern responsive experience.",
    myWork: [
      "Designed and developed the responsive website interface",
      "Built reusable React components",
      "Created the visual layout and user experience for showcasing photography work",
      "Implemented responsive designs for desktop, tablet, and mobile",
      "Structured the portfolio content for a clean visual presentation",
      "Focused on performance, usability, and responsive experience",
    ],
    technologies: ["React.js", "TypeScript", "Tailwind CSS"],
    links: [
      {
        type: "Website",
        href: "https://tobzyshotit.com/",
        icon: "website",
      },
    ],
    image:
      "https://res.cloudinary.com/dpgfsvmyo/image/upload/v1788516526/myportfolio/duuonur2v10jfaivf3ub.png",
  },
  {
    title: "E-Commerce Platform",
    href: "https://iboytech-e-commerce.vercel.app/",
    dates: "April 2023",
    active: true,

    description:
      "A full-stack e-commerce platform with authentication, product management, payment processing, API integration, and responsive user experiences.",

    myWork: [
      "Developed the frontend using React and Tailwind CSS",
      "Built backend APIs using Node.js and Express.js",
      "Implemented user authentication and authorization",
      "Integrated JWT-based authentication",
      "Integrated Paystack for online payments",
      "Designed MongoDB database interactions",
      "Integrated OAuth authentication",
      "Implemented API communication using Axios",
      "Built responsive shopping and checkout experiences",
      "Added UI animations and user feedback systems",
    ],

    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "JWT",
      "OAuth",
      "Paystack",
      "Axios",
      "Firebase",
      "Framer Motion",
    ],

    links: [
      {
        type: "Website",
        href: "https://iboytech-e-commerce.vercel.app/",
        icon: "website",
      },
    ],

    image:
      "https://res.cloudinary.com/dpgfsvmyo/image/upload/v1788514990/myportfolio/bupty21vbi3leeysaaqs.png",
  },
    {
    title: "IDChain Africa",
    href: "",
    dates: "2025",
    active: false,

    description:
      "Digital identity and verification platform focused on creating a secure way to manage identity information and verification workflows.",

    myWork: [
      "Worked on the MVP architecture for the digital identity platform",
      "Designed backend services and API structures for identity workflows",
      "Implemented authentication and authorization concepts",
      "Worked on secure handling of identity-related information",
      "Designed verification workflows for identity validation",
      "Structured the application for future integration with external verification services",
    ],

    technologies: [
      "React",
      "Next.js",
      "Node.js",
      "Express.js",
      "TypeScript",
      "MongoDB",
      "REST API",
      "JWT",
    ],

    links: [],

    image: "https://res.cloudinary.com/dpgfsvmyo/image/upload/v1788523731/myportfolio/fabj4vnyhopr6bma5qyx.jpg",
  },

  {
    title: "Campus Assistant",
    href: "",
    dates: "2026",
    active: false,

    description:
      "A student-focused campus platform combining navigation, academic resources, course management, quizzes, performance tracking, and AI-powered study assistance.",

    myWork: [
      "Designed the frontend experience for students and administrators",
      "Built interfaces for campus building discovery and navigation",
      "Implemented course, department, and faculty-based academic organization",
      "Designed course material interfaces for PDFs, notes, and past questions",
      "Built quiz and CBT interfaces with result tracking",
      "Designed student performance dashboards",
      "Implemented interfaces for AI-generated study recommendations",
      "Built admin interfaces for managing courses, departments, faculties, users, and learning materials",
    ],

    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "PostgreSQL",
      "Node.js",
      "REST API",
      "React Query",
      "Leaflet",
    ],

    links: [],

    image: "",
  },

  {
    title: "LAMATA IoT Air Quality Monitoring System",
    href: "",
    dates: "2024",
    active: true,

    description:
      "An IoT-based environmental monitoring system built around ESP32 and sensors for collecting and transmitting air-quality data.",

    myWork: [
      "Designed the ESP32-based IoT architecture",
      "Integrated environmental sensors with the microcontroller",
      "Worked on sensor data collection and processing",
      "Implemented communication between the IoT device and software systems",
      "Worked with embedded C++ development",
      "Designed the system around real-time environmental monitoring",
      "Worked on transmitting collected sensor data to a backend system",
    ],

    technologies: [
      "ESP32",
      "C++",
      "IoT",
      "Sensors",
      "REST API",
      "Embedded Systems",
    ],

    links: [],

    image: "",
  },

  {
    title: "Cryptocurrency Mobile App",
    href: "",
    dates: "Mar 2025",
    active: false,

    description:
      "A mobile cryptocurrency application for monitoring cryptocurrency prices, market information, and related financial data.",

    myWork: [
      "Developed the mobile application using React Native and Expo",
      "Built responsive mobile interfaces using Tailwind CSS",
      "Integrated cryptocurrency data APIs",
      "Implemented API communication using Axios",
      "Implemented application state management using Zustand",
      "Worked with Firebase and Supabase services",
      "Integrated OAuth authentication",
      "Built navigation flows using React Navigation",
    ],

    technologies: [
      "React Native",
      "Expo",
      "Tailwind CSS",
      "Firebase",
      "Supabase",
      "OAuth",
      "Zustand",
      "Axios",
      "React Navigation",
    ],

    links: [],

    image:
      "https://res.cloudinary.com/dpgfsvmyo/image/upload/v1788514979/myportfolio/ezjtu4xydw3wyzcte1gx.png",
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
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
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