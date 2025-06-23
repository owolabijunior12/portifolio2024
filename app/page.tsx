"use client";
import { motion } from 'framer-motion';
import { TypeAnimation } from "react-type-animation";
import { Button } from "@/components/ui/button";
import { ArrowDown, Download, User, FolderOpen } from "lucide-react";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section className="min-h-screen px-4 md:px-8 flex flex-col relative justify-center items-center bg-gradient-to-br from-background via-background to-muted/20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/3 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>
      
      <motion.div
        className="max-w-4xl mx-auto text-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Greeting */}
        <motion.div
          variants={itemVariants}
          className="mb-4"
        >
          <span className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
            👋 Welcome to my portfolio
          </span>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent leading-tight"
        >
          <span className="block text-2xl sm:text-3xl md:text-4xl font-semibold mb-2 text-muted-foreground">
            Hello, I&apos;m
          </span>
          Owolabi Destiny
          <br />
          <span className="bg-gradient-to-r from-primary via-blue-600 to-purple-600 bg-clip-text text-transparent">
            Oluwanifemi
          </span>
        </motion.h1>

        {/* Type animation */}
        <motion.div
          variants={itemVariants}
          className="mb-8 h-20 flex items-center justify-center"
        >
          <TypeAnimation
            sequence={[
              "I design responsive websites",
              2000,
              "I build modern web applications ",
              2000,
              "I develop cross-platform mobile apps 📱",
              2000,
              "I create secure authentication systems 🔐",
              2000,
              "I integrate APIs and third-party services 🔗",
              2000,
              "I optimize performance and SEO 📈",
              2000,
              "I bring UI/UX to life with animations 🎨",
              2000,              
              "I innovate with IoT and embedded systems 💡",
              2000,
              "I transform ideas into digital reality ✨",
              2000,
            ]}
            wrapper="div"
            speed={50}
            className="text-lg sm:text-xl md:text-2xl font-semibold text-primary min-h-[60px] flex items-center justify-center"
            repeat={Infinity}
            cursor={true}
            style={{
              display: 'inline-block',
            }}
          />
        </motion.div>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          A passionate{" "}
          <span className="text-primary font-semibold">full-stack developer</span>{" "}
          crafting exceptional web and mobile experiences, with expertise in{" "}
          <span className="text-primary font-semibold">modern frameworks</span>,{" "}
          secure backends, and innovative IoT solutions.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          <Button 
            size="lg" 
            className="group relative overflow-hidden bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg"
            onClick={() => window.location.href = '/About'}
          >
            <User className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
            About Me
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="group px-8 py-6 text-lg font-semibold rounded-full border-2 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:border-primary hover:text-primary"
            onClick={() => window.location.href = '/Project'}
          >
            <FolderOpen className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
            View Projects
          </Button>
          
          <Button 
            variant="secondary" 
            size="lg"
            className="group px-8 py-6 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg"
            onClick={() => window.open('https://drive.google.com/file/d/1jb1d7Ey_SmfDOU1W2Q9c9O3Qssw9WEdy/view?usp=drive_link', '_blank')}
          >
            <Download className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
            Download CV
          </Button>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="text-muted-foreground cursor-pointer hover:text-primary transition-colors"
        >
          <ArrowDown className="h-6 w-6" />
        </motion.div>
      </motion.div>
    </section>
  );
}
