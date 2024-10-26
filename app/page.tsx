"use client";
import { motion } from 'framer-motion';
import { RainbowButton } from "@/components/ui/rainbow-button";
import {TypeAnimation} from "react-type-animation"
export default function Hero() {
  return (
    <section className="h-[85vh] px-4 md:px-8 flex relative justify-center items-center dark:bg-gray-800 dark:text-white py-20">
      <motion.div
        className="mb-8 md:mb-0"
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
        "I'm a Software Developer",
        1000,
        "Innovating Software Solutions",
        1000,
        "Crafting Web Applications",
        1000,
        "Developing Mobile Apps",
        1000,
        "Building User-Centric Experiences",
        1000,
        "Your Partner in Digital Transformation",
        1000,       
    ]}
    wrapper="span"
    speed={50}
    style={{
        fontSize: "15px",
        fontWeight: "bold",
        textAlign: "center",
        width:"100%",
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
          A passionate software developer specializing in web technologies <br /> and creating amazing user experiences.
        </motion.p>
        <motion.div
          className="w-full flex flex-col sm:flex-row gap-4 sm:gap-9 justify-center items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <RainbowButton url="/About">About Me</RainbowButton>
          <RainbowButton url="/Project">Take me to the project</RainbowButton>
          <RainbowButton url="https://drive.google.com/uc?export=download&id=1ESnT8phbQs7zPRzL3FhQpI38hwAQlGGT">Download my CV</RainbowButton>
        </motion.div>
      </motion.div>
    </section>
  );
}
