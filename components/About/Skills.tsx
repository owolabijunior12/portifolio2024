'use client';

import { motion } from 'framer-motion';
import {
  SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiHtml5, SiCss3,
  SiTailwindcss, SiFramer, SiNodedotjs, SiExpress, SiMongodb, 
  SiPostman, SiJsonwebtokens, SiGithub, SiGit, SiNodemon, SiWebpack, SiVite,
  SiHelm, SiNetlify, SiVercel, SiRender, SiArduino, SiCplusplus, SiJest,
  SiEslint,
} from 'react-icons/si';
import { FaDatabase } from 'react-icons/fa';
import { TbApi } from 'react-icons/tb';

const skillCategories = [
  {
    category: 'Frontend Skills',
    skills: [
      { name: 'JavaScript', icon: <SiJavascript /> },
      { name: 'TypeScript', icon: <SiTypescript /> },
      { name: 'React', icon: <SiReact /> },
      { name: 'Next.js', icon: <SiNextdotjs /> },
      { name: 'HTML5', icon: <SiHtml5 /> },
      { name: 'CSS3', icon: <SiCss3 /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
      { name: 'Framer Motion', icon: <SiFramer /> },
    ],
  },
  {
    category: 'Backend Skills',
    skills: [
      { name: 'Node.js', icon: <SiNodedotjs /> },
      { name: 'Express', icon: <SiExpress /> },
      { name: 'MongoDB', icon: <SiMongodb /> },
      { name: 'Mongoose', icon: <FaDatabase /> },
      { name: 'REST APIs', icon: <TbApi /> },
      { name: 'JWT', icon: <SiJsonwebtokens /> },
      { name: 'OAuth', icon: <SiJsonwebtokens /> },
    ],
  },
  {
    category: 'IoT & Embedded Systems Skills',
    skills: [
      { name: 'C++', icon: <SiCplusplus /> },
      { name: 'Arduino', icon: <SiArduino /> },
      { name: 'IoT Protocols', icon: <SiArduino /> },
      { name: 'AES Encryption', icon: <SiJsonwebtokens /> },
    ],
  },
  {
    category: 'Tools & Version Control',
    skills: [
      { name: 'Git', icon: <SiGit /> },
      { name: 'GitHub', icon: <SiGithub /> },
      { name: 'Nodemon', icon: <SiNodemon /> },
      { name: 'Webpack', icon: <SiWebpack /> },
      { name: 'Vite', icon: <SiVite /> },
      { name: 'Postman', icon: <SiPostman /> },
    ],
  },
  {
    category: 'Security & Auth',
    skills: [
      { name: 'JSON', icon: <SiJsonwebtokens /> },
      { name: 'JWT', icon: <SiJsonwebtokens /> },
      { name: 'OAuth2.0', icon: <SiJsonwebtokens /> },
      { name: 'Helmet', icon: <SiHelm /> },
    ],
  },
  {
    category: 'Deployment',
    skills: [
      { name: 'Vercel', icon: <SiVercel /> },
      { name: 'Render', icon: <SiRender /> },
      { name: 'Netlify', icon: <SiNetlify /> },
    ],
  },
  {
    category: 'Testing & Quality',
    skills: [
      { name: 'Jest', icon: <SiJest /> },
      { name: 'ESLint', icon: <SiEslint /> },
    ],
  },
];

const categoryVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.15 } },
};

const skillVariants = {
  hidden: { opacity: 0, rotate: -20, y: 30 },
  visible: { opacity: 1, rotate: 0, y: 0, transition: { type: 'spring', stiffness: 120, damping: 14 } },
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 dark:bg-gray-900">
      <div className="container mx-auto px-6">       

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-16"
        >
          {skillCategories.map(({ category, skills }) => (
            <motion.div
              key={category}
              variants={categoryVariants}
              className="bg-transperent dark:bg-gray-800 rounded-xl p-6 shadow-lg"
            >
              <h3 className="text-2xl font-semibold text-center text-gray-00 dark:text-white mb-8">
                {category}
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-items-center">
                {skills.map(({ name, icon }, index) => (
                  <motion.div
                    key={index}
                    variants={skillVariants}
                    className="flex flex-col items-center gap-2 bg-gray-500 dark:bg-gray-700 rounded-xl px-4 py-5 shadow-md hover:shadow-xl transition-transform transform hover:scale-110 cursor-pointer"
                    title={name}
                  >
                    <div className="text-4xl text-blue-600 dark:text-blue-400">
                      {icon}
                    </div>
                    <p className="text-sm font-semibold text-gray-800 dark:text-white text-center">
                      {name}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
