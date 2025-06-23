"use client"; 
import { motion } from 'framer-motion';
import Education from "@/components/About/Educaion";
import Experience from "@/components/About/Experience";
import Skills from "@/components/About/Skills";

export default function Page() {
  return (
    <div className="p-4 "> {/* Padding adjusted for smaller screens */}
 <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold  mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
        </motion.div>

        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className=" backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-xl border border-white/20">
            <p className="text-lg md:text-xl leading-relaxed ">
              I am a <span className="font-semibold text-blue-600 dark:text-blue-400">results-driven Software Developer</span> with 4 years of experience in building, integrating, and scaling web and mobile applications. Passionate about innovation, I am continuously exploring emerging technologies, with a strong focus on the <span className="font-semibold text-purple-600 dark:text-purple-400">Internet of Things (IoT)</span> to create seamless software-hardware integrations.
            </p>
            <br />
            <p className="text-lg md:text-xl leading-relaxed ">
              With a commitment to excellence and a problem-solving mindset, I thrive in dynamic environments, transforming complex challenges into efficient, impactful solutions. My goal is to leverage technology to drive innovation and deliver scalable, high-performance applications that make a difference.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
      <Education />
      <Experience />
      <Skills />
    </div>
  );
}
