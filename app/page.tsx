"use client";
import { motion } from 'framer-motion';
import { RainbowButton } from "@/components/ui/rainbow-button";
import {TypeAnimation} from "react-type-animation"
export default function Hero() {
  return (
    <section className="h-[97vh] px-4 md:px-8 flex relative justify-center items-center dark:bg-gray-800 dark:text-white py-20">
      <motion.div
        className="mb-8 mt-12 md:mt-0 md:mb-0"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className="text-4xl sm:text-5xl md:text-7xl p-0 font-bold text-center "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <motion.span
          className="text-2xl sm:text-5xl md:text-4xl font-bold text-center mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          >
            Hello, I&apos;m
          </motion.span>
          <br /> Owolabi Destiny Oluwanifemi.
        </motion.h1>
        <TypeAnimation
            sequence={[
              "I design responsive websites",
              1000,
              "I build modern web apps",
              1000,
              "I develop cross-platform mobile apps",
              1000,
              "I create secure authentication systems",
              1000,
              "I integrate APIs and third-party services",
              1000,
              "I optimize performance and basic  SEO",
              1000,
              "I bring UI/UX to life with animations",
              1000,
              "I deploy and maintain scalable solutions",
              1000,
              "I innovate with IoT and embedded systems",
              1000,
              "I automate workflows and backend logic",
              1000,
              "I transform ideas into working products",
              1000,
            ]}
            wrapper="span"
            speed={50}
            style={{
              fontSize: "15px",
              fontWeight: "bold",
              textAlign: "center",
              width: "100%",
              minHeight: "80px",
              padding: "10px",
              display: "inline-block",
            }}
            repeat={Infinity}
        />

        <motion.p
          className="text-lg sm:text-xl md:text-2xl font-semibold w-full text-center dark:text-gray-300 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
         A passionate software developer building web and mobile applications, integrating secure backends, and IoT innovations to deliver seamless and impactful user experiences.
        </motion.p>
        <motion.div
          className="w-full flex flex-col sm:flex-row gap-4 sm:gap-9 justify-center items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <RainbowButton url="/About">About Me</RainbowButton>
          <RainbowButton url="/Project">My Project</RainbowButton>
          <RainbowButton url="https://drive.google.com/file/d/1jb1d7Ey_SmfDOU1W2Q9c9O3Qssw9WEdy/view?usp=drive_link">Download my CV</RainbowButton>
        </motion.div>
      </motion.div>
    </section>
  );
}
