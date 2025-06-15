"use client"; 
import { motion } from 'framer-motion';
import Education from "@/components/About/Educaion";
import Experience from "@/components/About/Experience";
import Skills from "@/components/About/Skills";

export default function Page() {
  return (
    <div className="p-4 md:p-[70px]"> {/* Padding adjusted for smaller screens */}
      <motion.div
        className="flex flex-col my-6 justify-center items-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.p
          className="w-full  text-lg sm:text-xl dark:bg-gray-200 p-4 md:p-[30px] rounded-lg shadow-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          I am a results-driven Software Developer with 4 years of experience in building, integrating, and scaling web and mobile applications. Passionate about innovation, I am continuously exploring emerging technologies, with a strong focus on the Internet of Things (IoT) to create seamless software-hardware integrations. With a commitment to excellence and a problem-solving mindset, I thrive in dynamic environments, transforming complex challenges into efficient, impactful solutions. My goal is to leverage technology to drive innovation and deliver scalable, high-performance applications that make a difference.
        </motion.p>
      </motion.div>
      <Education />
      <Skills />
      <Experience />
    </div>
  );
}
