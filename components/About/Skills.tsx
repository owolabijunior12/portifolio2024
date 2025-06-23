
import { motion } from 'framer-motion';
import {
  FileType2,
  Atom,
  Triangle,  
  Wind,
  Film,
  Server,
  Braces,
  Database,
  KeyRound,
  Shield,
  Settings,
  Cpu,
  RadioTower,
  Lock,
  GitBranch,
  Github,
  Package,
  Zap,
  Mail,
  Rocket,
  Cloud,
  Globe} from "lucide-react";
import { PiFileHtml } from 'react-icons/pi';

// Using simple emoji icons instead of react-icons to avoid dependency issues
const skillCategories = [
  {
    category: 'Frontend Skills',
    skills: [
      { name: 'JavaScript', icon: <FileType2 size={18} /> },     // Generic file icon
      { name: 'TypeScript', icon: <FileType2 size={18} /> },
      { name: 'React', icon: <Atom size={18} /> },
      { name: 'Next.js', icon: <Triangle size={18} /> },
      { name: 'HTML5', icon: <PiFileHtml size={18} /> },
      { name: 'CSS3', icon: <Cloud size={18} /> },
      { name: 'Tailwind CSS', icon: <Wind size={18} /> },
      { name: 'Framer Motion', icon: <Film size={18} /> },
    ],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    category: 'Backend Skills',
    skills: [
      { name: 'Node.js', icon: <Server size={18} /> },
      { name: 'Express', icon: <Braces size={18} /> },   // represents middleware functions
      { name: 'MongoDB', icon: <Database size={18} /> },
      { name: 'Mongoose', icon: <Database size={18} /> },
      { name: 'REST APIs', icon: <Globe size={18} /> },
      { name: 'JWT', icon: <KeyRound size={18} /> },
      { name: 'OAuth', icon: <Shield size={18} /> },
    ],
    color: 'from-green-500 to-emerald-500',
  },
  {
    category: 'IoT & Embedded Systems',
    skills: [
      { name: 'C++', icon: <Settings size={18} /> },
      { name: 'Arduino', icon: <Cpu size={18} /> },
      { name: 'IoT Protocols', icon: <RadioTower size={18} /> },
      { name: 'AES Encryption', icon: <Lock size={18} /> },
    ],
    color: 'from-purple-500 to-pink-500',
  },
  {
    category: 'Tools & Version Control',
    skills: [
      { name: 'Git', icon: <GitBranch size={18} /> },
      { name: 'GitHub', icon: <Github size={18} /> },
      { name: 'Webpack', icon: <Package size={18} /> },
      { name: 'Vite', icon: <Zap size={18} /> },
      { name: 'Postman', icon: <Mail size={18} /> },
    ],
    color: 'from-orange-500 to-red-500',
  },
  {
    category: 'Deployment & Hosting',
    skills: [
      { name: 'Vercel', icon: <Triangle size={18} /> },   // closest match to ▲
      { name: 'Render', icon: <Rocket size={18} /> },
      { name: 'Netlify', icon: <Cloud size={18} /> },
    ],
    color: 'from-indigo-500 to-purple-500',
  },
];


const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 ">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold  mb-4">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
        </motion.div>

        <div className="space-y-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              className="relative"
            >
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-bold  mb-4">
                  {category.category}
                </h3>
                <div className={`w-16 h-1 bg-gradient-to-r ${category.color} mx-auto rounded-full`} />
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: skillIndex * 0.1,
                      type: 'spring',
                      stiffness: 120
                    }}
                    whileHover={{ 
                      scale: 1.1, 
                      rotate: 5,
                      transition: { duration: 0.2 }
                    }}
                    className="group"
                  >
                    <div className=" backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-white/20 hover:border-gray-200/30">
                      <div className="text-center">
                        <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                          {skill.icon}
                        </div>
                        <h4 className="font-semibold  text-sm md:text-base">
                          {skill.name}
                        </h4>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;