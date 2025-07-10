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
    description: "Simplify Church Operations With Our User-Friendly Software, Designed for Churches of All Sizes. Rabah360 is a comprehensive church management software that streamlines operations, enhances communication, and fosters community engagement.Features include member management, event scheduling, donation tracking, and communication tools, all designed to help churches operate more efficiently and effectively. Rabah360 is built with a focus on user experience, making it easy for church leaders and members to navigate and utilize its features. ",
    technologies: ["HTML5", "CSS", "JavaScript",'React.js','Django','Python','PostgreSQL'],
    links: [
      {
        type: "Website",
        href: "https://rabah360.com",
        icon: "website",
      },
    ],
    image: "https://firebasestorage.googleapis.com/v0/b/full-stack-music-player-b29d8.appspot.com/o/Images%2FRabah360%20.png?alt=media&token=1031cb38-07ab-4d36-8376-2b5a55d99ff8",
  },
  {
    title: "Rock Paper Scissor Game",
    href: "https://iboytech-game-rps.vercel.app/",
    dates: "June 2023",
    active: true,
    description: "Multiplayer 2-Player Rock-Paper-Scissors Game.  Backend hosted on free service; may take a few minutes to wake up. This project is a real-time multiplayer game built with React.js and Socket.io, allowing two players to compete against each other in a classic rock-paper-scissors game. The game features a simple and intuitive interface, enabling players to select their moves and see the results in real-time. The backend is built with Node.js and Express.js, utilizing Socket.io for real-time communication between players. The game is designed to be responsive, ensuring optimal performance on both desktop and mobile devices. ",
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
    image: "https://firebasestorage.googleapis.com/v0/b/full-stack-music-player-b29d8.appspot.com/o/Images%2Frps-game-project.png?alt=media&token=40688517-4d89-405c-838c-106597da37e0",
  },
  {
    title: "Drone Delivery Admin Dashboard",
    href: "",
    dates: "Jan 2025",
    active: true,
    description: "Responsive admin dashboard for drone delivery management, built with Next.js and TailwindCSS. This project features a clean and modern interface for managing drone delivery operations, including tracking deliveries, managing drones, and viewing analytics. The dashboard is designed to be responsive, ensuring optimal performance on both desktop and mobile devices. It includes various components such as charts, tables, and forms to facilitate data visualization and management. The use of TailwindCSS allows for rapid styling and customization, making it easy to adapt the design to specific needs. The dashboard also incorporates Next.js for server-side rendering and improved performance, making it suitable for real-time data updates and interactions.",
    technologies: ["Next.js","Axios", "TailwindCSS"],
    links: [
      
    ],
    image: "https://firebasestorage.googleapis.com/v0/b/full-stack-music-player-b29d8.appspot.com/o/Images%2FIboytech%20Delivery%20Drone%20Dashboard%20-%20Google%20Chrome%202_9_2025%201_49_23%20AM.png?alt=media&token=83a2ea22-15e4-4e3f-a8cb-dbe99b856cca",
  },
  {
    title: "Crypto currency Mobile App",
    href: "",
    dates: "Mar 2025",
    active: true,
    description: " Mobile app for tracking cryptocurrency prices, built with React Native and TailwindCSS. This project features a user-friendly interface for viewing real-time cryptocurrency prices, market trends, and historical data. The app allows users to search for specific cryptocurrencies, view detailed information about each coin, and track their favorite currencies. It is designed to be responsive and optimized for mobile devices, ensuring a smooth user experience. The use of React Native enables cross-platform compatibility, allowing the app to run on both iOS and Android devices. The backend is powered by Firebase for real-time data updates and authentication.",
    technologies: ["React Native", "TailwindCSS", "Expo", "Firebase","OAuth", "Zustand", "Axios", "React Navigation","Supabase"],
    links: [      
    ],
    image: "https://firebasestorage.googleapis.com/v0/b/full-stack-music-player-b29d8.appspot.com/o/Images%2F1.png?alt=media&token=e27b2935-85c4-43f0-8b03-54304c5e6c29",
  },
  {
    title: "Music Web App",
    href: "https://iboytech-music-app.vercel.app/",
    dates: "Jan 2023",
    active: true,
    description: "Music streaming app with authentication, playlist management, and real-time features. Backend hosted on free service; may take a few minutes to wake up. This project is a full-stack music streaming application that allows users to listen to music, create and manage playlists, and authenticate their accounts. It features a modern user interface built with React.js and TailwindCSS, ensuring a responsive design that works well on both desktop and mobile devices. The backend is built with Node.js and Express.js, utilizing MongoDB for data storage. The app includes user authentication, playlist management, and real-time features using Firebase for notifications and updates.",
    technologies: ["React.js", "TypeScript", "MongoDB", "TailwindCSS", "Node.js", "Firebase", "Express.js", "JWT","Axios", "OAuth"],
    links: [
      {
        type: "Source",
        href: "https://github.com/owolabijunior12/mern-stack-ecommerce",
        icon: "github",
      },
    ],
    image: "https://firebasestorage.googleapis.com/v0/b/full-stack-music-player-b29d8.appspot.com/o/Images%2FIboytech%20Music%20App.png?alt=media&token=80698f87-7e1a-4aa3-a22a-a59fee107d0d",
  },
  {
    title: "E-Commerce Platform",
    href: "https://iboytech-e-commerce.vercel.app/",
    dates: "April 2023",
    active: true,
    description: "Full-stack e-commerce platform with user authentication, payment integration, and responsive design. Backend on free hosting may have initial latency. This project is a comprehensive e-commerce platform that allows users to browse products, manage their accounts, and make purchases. It features user authentication for secure access, payment integration with Paystack for seamless transactions, and a responsive design built with React.js and TailwindCSS. The platform also includes features like product search, cart management, and order history. The backend is built with Node.js and Express.js, utilizing MongoDB for data storage. The app is designed to provide a smooth user experience across both desktop and mobile devices.",
    technologies: ["React.js", "TailwindCSS", "Axios","JWT", "OAuth", "MongoDB", "Framer Motion", "React Toastify", "Express.js", "Paystack", "Firebase", "Node.js"],
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
    image:  "https://firebasestorage.googleapis.com/v0/b/full-stack-music-player-b29d8.appspot.com/o/Images%2FIboytech%20Music%20App%20-%20Google%20Chrome%2010_25_2024%2010_01_05%20AM.png?alt=media&token=72c7ad84-b039-47c1-86c1-b4fe155a082b",
  },
  {
    title: "Movie Discovery App",
    href: "https://iboytech-movie-app.vercel.app/",
    dates: "Nov 2024",
    active: true,
    description: "User-friendly platform to discover, track, and manage movies with local storage support and rich metadata. This app allows users to search for movies, view detailed information, and manage their watchlist. It features a clean and modern interface built with Next.js and TailwindCSS, ensuring a responsive design that works well on both desktop and mobile devices. The app utilizes the TMDB API to fetch movie data, providing users with up-to-date information on their favorite films. Local storage is used to save user preferences and watchlists, enhancing the overall user experience." ,
    technologies: ["Next.js","Axios", "TailwindCSS", "TypeScript"],
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
    image: "https://firebasestorage.googleapis.com/v0/b/full-stack-music-player-b29d8.appspot.com/o/Images%2Fmovieapp%20ss.png?alt=media&token=993f7fbe-e48c-4883-af2e-09330927e13c",
  },
  {
    title: "Admin Dashboard",
    href: "https://admin-dashboard-wheat-iota.vercel.app/",
    dates: "May 2023",
    active: true,
    description: "Responsive admin dashboard built with React and TailwindCSS. This project features a clean and modern interface for managing application data, user accounts, and system settings. It includes various components such as charts, tables, and forms to facilitate data visualization and management. The dashboard is designed to be responsive, ensuring optimal performance on both desktop and mobile devices. The use of TailwindCSS allows for rapid styling and customization, making it easy to adapt the design to specific needs.",
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
    image: "https://firebasestorage.googleapis.com/v0/b/full-stack-music-player-b29d8.appspot.com/o/Images%2FAdmin%20Dashboard.png?alt=media&token=df0e0d57-4cb5-4976-93ff-29261dbe7dfb",
  },
  {
    title: "Stop Watch",
    href: "https://stopwatch-bay-eight.vercel.app/",
    dates: "Aug 2023",
    active: true,
    description: "Simple stopwatch app built with Vue.js and TailwindCSS. This project demonstrates a clean stopwatch interface, allowing users to start, stop, and reset the timer. It showcases the use of Vue.js for reactive data binding and TailwindCSS for styling, ensuring a modern and user-friendly experience. The app is designed to be lightweight and efficient, making it suitable for quick time tracking tasks.",
    technologies: ["Vue.js", "TailwindCSS"],
    links: [
      {
        type: "Source",
        href: "https://github.com/owolabijunior12/stopwatch",
        icon: "github",
      },
    ],
    image: "/stopwatch.png",
  },
  {
    title: "Feature Dashboard",
    href: "https://dashboard-azure-tau-40.vercel.app",
    dates: "Dec 2023",
    active: true,
    description: "Feature-rich dashboard with Chakra UI, Framer Motion, and TypeScript. This project showcases a modern, responsive dashboard interface designed for data visualization and management. It utilizes Chakra UI for component styling, Framer Motion for animations, and TypeScript for type safety. The dashboard includes various widgets and charts to display data dynamically, providing an intuitive user experience. The design is mobile-friendly and optimized for performance, making it suitable for both desktop and mobile devices.",
    technologies: ["Next.js", "TailwindCSS", "Chakra UI", "Framer Motion", "TypeScript"],
    links: [
      {
        type: "Source",
        href: "https://github.com/owolabijunior12/Dashboard-",
        icon: "github",
      },
    ],
    image: "https://firebasestorage.googleapis.com/v0/b/full-stack-music-player-b29d8.appspot.com/o/Images%2Fdashboard.png?alt=media&token=5edde640-c826-44d7-b53f-8b5e08068c56",
  },
  {
    title: "LAMATA IoT Air Quality Monitoring Sensor",
    dates: "2024",
    active: false,
    description: "IoT traffic management system for Lagos Metropolitan Area Transport Authority using ESP32 and sensors. This project involves the development of an IoT-based traffic management system designed to monitor and manage traffic flow in Lagos, Nigeria. It utilizes the ESP32 microcontroller for real-time data processing and communication. The system integrates various sensors to collect data on traffic density, vehicle speed, and environmental conditions. The collected data is transmitted to a central server for analysis and visualization, enabling traffic authorities to make informed decisions. The project aims to enhance traffic management efficiency, reduce congestion, and improve overall transportation infrastructure in the region.",
    technologies: ["ESP32", "IoT", "https", "C++", "Sensors"],
    links: [],
    image: "",
  },
  {
    title: "NFC ATM Payment System",
    dates: "2025",
    active: false,
    description: "Secure NFC ATM payment system using ESP32, AES encryption, and contactless payments. This project integrates NFC technology with an ATM system to enable secure, contactless transactions. It utilizes AES encryption for data security and is built on the ESP32 platform, allowing for IoT connectivity and real-time transaction processing. The system supports various NFC-enabled cards, providing a convenient and secure payment method for users. The project includes a card reader interface, transaction logging, and user authentication features to ensure secure access and transaction integrity. The NFC ATM Payment System is designed to enhance the user experience by providing a fast, secure, and efficient way to perform transactions without the need for physical contact with the ATM.",
    technologies: ["ESP32", "NFC", "AES Encryption","Axios","https", "C++","Card Reader", "IoT","Node.js","Express"],
    links: [],
    image: "",
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