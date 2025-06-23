import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Building2, Calendar, ChevronRight } from 'lucide-react';

const experiences = [
  {
    title: 'Software Engineer',
    company: 'Softway Finance',
    duration: 'Nov 2023 – Present',
    description: [
      "Spearheading the development of scalable and secure contactless payment solutions across Africa.",
      "Collaborating with cross-functional teams to design and implement innovative payment systems.",
      "Utilizing JavaScript, TypeScript, and C++ to build robust backend services and embedded systems.",
      "Ensuring compliance with industry standards and regulations in financial technology."
    ],
    color: 'from-green-500 to-emerald-600'
  },
  {
    title: 'Frontend Developer (Contract)',
    company: 'Rabah360',
    duration: 'Aug 2024 – Present',
    description: [
      "Developed responsive and visually appealing user interfaces using HTML5, CSS3, JavaScript, and frameworks like React.js.",
      "Ensured cross-browser compatibility and mobile responsiveness across various devices and platforms.",
      "Optimized web applications for performance, improving load times and overall user experience (UX).",
      "Worked with version control systems like Git and GitHub to maintain code integrity and collaborate with other developers."
    ],
    color: 'from-blue-500 to-cyan-600'
  },
  {
    title: 'Software Developer (Freelancer)',
    company: 'Fiverr',
    duration: 'Mar 2023 – Present',
    description: [
      "Designed, developed, and deployed fully responsive websites and web applications using the MERN stack.",
      "Implemented front-end interfaces with modern JavaScript frameworks such as React, ensuring optimal user experience and performance.",
      "Utilized version control systems like Git and GitHub to maintain clean code and manage multiple projects.",
      "Communicated with clients to gather requirements, provide regular updates, and deliver on-time milestones."
    ],
    color: 'from-purple-500 to-pink-600'
  },
  {
    title: 'Web Developer (Intern)',
    company: 'Instaskool Ltd.',
    duration: 'Jan 2023 – Mar 2023',
    description: [
      "Created responsive websites for clients, worked with MERN stack solutions.",
      "Assisted in the maintenance and updating of existing websites.",
      "Collaborated with the development team to implement new features and functionalities.",
      "Gained hands-on experience in web development and client communication."
    ],
    color: 'from-orange-500 to-red-600'
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4 ">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold ">
            Work Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <Card className="group hover:shadow-2xl transition-all duration-300 border-0  backdrop-blur-sm overflow-hidden">
                <div className={`h-1 bg-gradient-to-r ${exp.color}`} />
                <CardHeader className="pb-4">
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${exp.color} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <Building2 size={24} />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl md:text-2xl  mb-2">
                        {exp.title}
                      </CardTitle>
                      <CardDescription className="flex items-center gap-2 text-lg">
                        <span className="font-semibold">{exp.company}</span>
                        <Calendar size={16} className="text-gray-500" />
                        <span>{exp.duration}</span>
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {exp.description.map((item, i) => (
                      <motion.li
                        key={i}
                        className="flex items-start gap-3 "
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 + i * 0.1 }}
                      >
                        <ChevronRight size={16} className="text-blue-600 dark:text-blue-400 mt-1 flex-shrink-0" />
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;