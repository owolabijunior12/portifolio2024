"use client";
import { motion } from 'framer-motion';
import { TypeAnimation } from "react-type-animation";
import { Button } from "@/components/ui/button";
import { Download, User, FolderOpen } from "lucide-react";
import BackgroundAnimations from '@/components/hero/BackgroundAnimations';
import WorkspaceDemo from '@/components/hero/WorkspaceDemo';
import FloatingPanels from '@/components/hero/FloatingPanels';

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
    <header
      id="hero"
      className="min-h-screen px-4 md:px-8 flex flex-col relative justify-center items-center bg-gradient-to-br from-background via-background to-muted/20 overflow-hidden"
    >
      {/* Enhanced Animated Background Elements */}
      <BackgroundAnimations />
      
      {/* Central Human Character Workspace */}
      <WorkspaceDemo />
      
      {/* Floating UI Panels */}
      <FloatingPanels />

      <motion.div
        className="max-w-4xl mx-auto text-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Welcome Badge */}
        <motion.div variants={itemVariants} className="mb-4">
          <span className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
            👋 Welcome to my portfolio
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent leading-tight"
        >
          <span className="block text-xl sm:text-2xl md:text-4xl font-semibold mb-2 text-muted-foreground">
            Hello, I&apos;m
          </span>
          Owolabi Destiny Oluwanifemi
          <br />
          <span className="bg-gradient-to-r text-2xl from-primary via-blue-600 to-purple-600 bg-clip-text text-transparent">
            Full Stack Software Developer & IoT || Embedded System Engineer
          </span>
        </motion.h1>

        {/* Animated Role/Skills Typing */}
        <motion.div variants={itemVariants} className="mb-8 h-20 flex items-center justify-center">
          <TypeAnimation
            sequence={[
              "I design responsive websites", 2000,
              "I build modern web applications", 2000,
              "I develop cross-platform mobile apps", 2000,
              "I create secure authentication systems", 2000,
              "I integrate APIs and third-party services", 2000,
              "I optimize performance and SEO", 2000,
              "I bring UI/UX to life with animations", 2000,
              "I innovate with IoT and embedded systems", 2000,
              "I transform ideas into digital reality", 2000,
            ]}
            wrapper="div"
            speed={50}
            className="text-lg sm:text-xl md:text-2xl font-semibold text-primary"
            repeat={Infinity}
            cursor
          />
        </motion.div>

        {/* Description with SEO keywords */}
        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          I&apos;m a <strong className="text-primary">Full Stack Developer</strong> based in Nigeria, specializing in building high-performance{" "}
          <strong className="text-primary">web</strong> and{" "}
          <strong className="text-primary">mobile apps</strong>, crafting intuitive user experiences, and integrating powerful{" "}
          <strong className="text-primary">IoT solutions</strong> using ESP32, NFC, and more.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Button
            size="lg"
            className="group relative overflow-hidden bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg"
            onClick={() => window.location.href = '/About'}
          >
            <User className="mr-2 h-5 w-5" />
            About Me
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="group px-8 py-6 text-lg font-semibold rounded-full border-2 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:border-primary hover:text-primary"
            onClick={() => window.location.href = '/Project'}
          >
            <FolderOpen className="mr-2 h-5 w-5" />
            View Projects
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="group px-8 py-6 text-lg font-semibold rounded-full border-2 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:border-primary hover:text-primary"
            onClick={() => window.location.href = '/Hire'}
          >
            <FolderOpen className="mr-2 h-5 w-5" />
            Hire Me
          </Button>

          <Button
            variant="secondary"
            size="lg"
            className="group px-8 py-6 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg"
            onClick={() =>
              window.open('https://drive.google.com/file/d/1jb1d7Ey_SmfDOU1W2Q9c9O3Qssw9WEdy/view?usp=drive_link', '_blank')
            }
          >
            <Download className="mr-2 h-5 w-5" />
            Download CV
          </Button>
        </motion.div>
      </motion.div>
    </header>
  );
}