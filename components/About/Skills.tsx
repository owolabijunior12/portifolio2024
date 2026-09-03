 import { motion } from 'framer-motion';
import { 
  Atom, Server, Database, Cloud, GitBranch, 
  Cpu, Settings, Lock, RadioTower, KeyRound,
  Shield, Braces, Package, Rocket 
} from "lucide-react";

const skills = [
  { name: 'JavaScript', icon: <Atom size={14} /> },
  { name: 'TypeScript', icon: <Atom size={14} /> },
  { name: 'React', icon: <Atom size={14} /> },
  { name: 'Next.js', icon: <Atom size={14} /> },
  { name: 'Node.js', icon: <Server size={14} /> },
  { name: 'Express', icon: <Braces size={14} /> },
  { name: 'MongoDB', icon: <Database size={14} /> },
  { name: 'PostgreSQL', icon: <Database size={14} /> },
  { name: 'Git', icon: <GitBranch size={14} /> },
  { name: 'GitHub', icon: <GitBranch size={14} /> },
  { name: 'C++', icon: <Settings size={14} /> },
  { name: 'Arduino', icon: <Cpu size={14} /> },
  { name: 'ESP32', icon: <Cpu size={14} /> },
  { name: 'IoT Protocols', icon: <RadioTower size={14} /> },
  { name: 'AES Encryption', icon: <Lock size={14} /> },
  { name: 'JWT', icon: <KeyRound size={14} /> },
  { name: 'OAuth', icon: <Shield size={14} /> },
  { name: 'REST APIs', icon: <Cloud size={14} /> },
  { name: 'Vercel', icon: <Rocket size={14} /> },
  { name: 'Docker', icon: <Package size={14} /> },
  { name: 'Tailwind CSS', icon: <Cloud size={14} /> },
  { name: 'Framer Motion', icon: <Atom size={14} /> },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-white/20 mx-auto rounded-full" />
        </motion.div>

        <div className="flex flex-wrap justify-center gap-2">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.02 }}
              whileHover={{ scale: 1.1, y: -3 }}
            >
              <div className="flex items-center gap-1.5 px-3.5 py-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all duration-300 backdrop-blur-sm">
                <span className=" ">{skill.icon}</span>
                <span className="text-xs font-medium   whitespace-nowrap">
                  {skill.name}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          className="mt-12 relative grid grid-cols-2 md:grid-cols-4 gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="bg-white/5 rounded-xl p-4 text-center border  ">
            <div className="text-2xl font-bold  ">{skills.length}</div>
            <div className="text-xs   mt-1">Skills</div>
          </div>
          <div className="bg-white/5 rounded-xl p-4 text-center border border-white/5">
            <div className="text-2xl font-bold  ">6</div>
            <div className="text-xs   mt-1">Categories</div>
          </div>
          <div className="bg-white/5 rounded-xl p-4 text-center border border-white/5">
            <div className="text-2xl font-bold  ">Full Stack</div>
            <div className="text-xs   mt-1">Expertise</div>
          </div>
          <div className="bg-white/5 rounded-xl p-4 text-center border border-white/5">
            <div className="text-2xl font-bold  ">IoT</div>
            <div className="text-xs   mt-1">Specialization</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;