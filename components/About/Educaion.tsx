import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { GraduationCap, Calendar } from 'lucide-react';

const educations = [
  {
    degree: 'National Diploma in Computer Science',
    institution: 'Yaba College of Technology',
    duration: '2021 - 2023',
    description: 'Focused on core areas of Computer Science with a specialization in Machine Learning and Distributed Systems. Gained hands-on experience in building intelligent systems, data-driven applications, and scalable architectures.',
    color: 'from-blue-500 to-indigo-600'
  },
  {
    degree: 'Frontend Web Development Certification',
    institution: 'Aptlearn',
    duration: '2022',
    description: 'Intensive program covering modern frontend technologies including React, JavaScript ES6+, responsive design principles, and best practices in web development.',
    color: 'from-green-500 to-teal-600'
  }
];

const Education = () => {
  return (
    <section id="education" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold  mb-4">
            Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {educations.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <Card className="group h-full hover:shadow-2xl transition-all duration-300 border-0  backdrop-blur-sm overflow-hidden">
                <div className={`h-1 bg-gradient-to-r ${edu.color}`} />
                <CardHeader className="pb-4">
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${edu.color} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <GraduationCap size={24} />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg md:text-xl mb-2">
                        {edu.degree}
                      </CardTitle>
                      <CardDescription className="text-lg font-medium   mb-2">
                        {edu.institution}
                      </CardDescription>
                      <div className="flex items-center gap-2 text-sm">
                        <Calendar size={14} />
                        <span>{edu.duration}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-relaxed">
                    {edu.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;