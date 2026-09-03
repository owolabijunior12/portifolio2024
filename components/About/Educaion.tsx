 import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { GraduationCap, Calendar, Award, School } from 'lucide-react';

const educations = [
  {
    degree: 'National Diploma in Computer Science',
    institution: 'Yaba College of Technology',
    duration: '2020 - 2022',
    description: 'Focused on core areas of Computer Science with a specialization in Machine Learning and Distributed Systems. Gained hands-on experience in building intelligent systems, data-driven applications, and scalable architectures.',
    // icon: GraduationCap
  },
  {
    degree: 'Frontend Web Development Certification',
    institution: 'aptLearn',
    duration: '2022',
    description: 'Intensive program covering modern frontend technologies including React, JavaScript ES6+, responsive design principles, and best practices in web development.',
    // icon: Award
  },
  {
    degree: 'Introduction to IoT Certification',
    institution: 'Cisco Networking Academy',
    duration: '2024',
    description: 'Comprehensive training in Internet of Things fundamentals, covering IoT architecture, connectivity protocols, security considerations, and real-world applications in smart systems and industrial automation.',
    // icon: School
  }
];

const Education = () => {
  return (
    <section id="education" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Education & Certifications
          </h2>
          <div className="w-24 h-1 bg-white/20 mx-auto rounded-full" />
        </motion.div>

        <div className="space-y-6">
          {educations.map((edu, index) => {
            // const Icon = edu.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                <Card className="hover:shadow-2xl transition-all duration-300 border border-white/10 backdrop-blur-sm bg-white/5 hover:bg-white/10">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      {/*<div className="flex-shrink-0 w-12 h-12 rounded-xl border border-white/20 bg-white/5 p-2.5">
                         <Icon className="w-full h-full text-white/60" /> 
                      </div>*/}
                      <div className="flex-1">
                        <div className="flex flex-wrap items-start justify-between gap-2">
                          <CardTitle className="text-lg md:text-xl">
                            {edu.degree}
                          </CardTitle>
                          <span className="text-xs px-3 py-1 border border-white/10 rounded-full text-white/40">
                            {edu.duration}
                          </span>
                        </div>
                        <p className="text-sm  font-medium mt-1">
                          {edu.institution}
                        </p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm  leading-relaxed">
                      {edu.description}
                    </p>
                    
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Simple Stats */}
        <motion.div
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {[
            { label: 'Graduation', value: '2022' },
            { label: 'Certifications', value: '3' },
            { label: 'Institution', value: 'YabaTech' },
            { label: 'Specialization', value: 'Software Developer' }
          ].map((stat, i) => (
            <div key={i} className="bg-white/5 rounded-xl p-4 text-center border border-white/5">
              <div className="text-lg font-bold ">{stat.value}</div>
              <div className="text-xs  mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Education;