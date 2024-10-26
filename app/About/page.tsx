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
          className="w-full md:w-[50%] text-lg sm:text-xl dark:bg-gray-200 p-4 md:p-[30px] rounded-lg shadow-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          I&apos;m a self-taught Software Developer based in Lagos, Nigeria. I have a passion for creating engaging and intuitive user experiences on the web. With over 2 year of experience in building, integrating, scaling, and supporting web applications, I have developed a strong skill set and a keen eye for detail. As a forward-thinking individual, I constantly strive for excellence in my work. I believe in pushing the boundaries of what is possible in web development, always seeking innovative solutions to deliver outstanding results. One of my key strengths is my ability to organize and manage projects effectively. I am adept at coordinating with team members and stakeholders to ensure smooth collaboration and successful project delivery. Additionally, my interpersonal skills enable me to communicate ideas clearly and work well in a team environment. Throughout my journey as a frontend developer, I have had the opportunity to work on various projects, honing my skills and keeping up with the latest industry trends. I am proficient in leveraging modern frameworks and technologies to create responsive, scalable, and visually appealing web applications. I invite you to explore my portfolio, where you will find examples of my work showcasing my attention to detail, creativity, and dedication to delivering exceptional user experiences. I am confident that my skills and experience will be valuable in any project I undertake.
        </motion.p>
      </motion.div>
      <Education />
      <Skills />
      <Experience />
    </div>
  );
}
