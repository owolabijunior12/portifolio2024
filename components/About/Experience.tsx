import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Building2, Calendar, ChevronRight } from 'lucide-react';

const experiences = [
  {
    title: 'Software Engineer',
    company: 'Softway Finance',
    duration: 'Nov 2023 – Present',
    description: [
      "Collaborating with cross-functional teams to design and implement innovative financial systems.",
      "Developing backend services with Node.js, TypeScript, and Express to handle secure transactions and API communications.",
      "Writing efficient C++ code for ESP32-based embedded systems powering the hardware layer.",
      "Implementing tokenization to securely store and transmit payment credentials on NFC cards.",
      "Integrating AES-256 encryption to ensure confidentiality and integrity of financial data.",
      "Utilizing I2C and SPI protocols for reliable communication between microcontroller and peripheral devices.",
      "Ensuring full compliance with PCI-DSS and other financial technology regulations.",
      "Delivering high-quality software and hardware aligned with global security and performance standards.",
      "Enhancing user experience through seamless, fast, and intuitive system interactions.",
      "Designing RESTful APIs for smooth integration with third-party financial and identity services.",
      "Prototyping, testing, and validating hardware components to guarantee field reliability.",
      "Ensuring synchronized functionality between hardware and software across the entire system."
    ],
    color: 'from-green-500 to-emerald-600'
  },
  {
    title: 'Frontend Developer (Contract)',
    company: 'Rabah360',
    duration: 'Aug 2024 – Feb 2025',
    description: [
      "Developed responsive and visually appealing user interfaces using React.js and Tailwind CSS.",
      "Ensured cross-browser compatibility and full mobile responsiveness across various devices and platforms.",
      "Optimized web application performance, resulting in faster load times and enhanced user experience (UX).",
      "Collaborated closely with a backend developer to integrate Django-based RESTful APIs.",     
      "Used Git and GitHub for version control and seamless collaboration within a cross-functional team."
    ],
    color: 'from-blue-500 to-cyan-600'
  },
  {
    title: 'MERN Stack & Mobile App Developer (Freelancer)',
    company: 'Fiverr',
    duration: 'Mar 2023 – Present',
    description: [
      "Designed, developed, and deployed fully responsive websites and web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js).",
      "Built dynamic and high-performance front-end interfaces with React.js and integrated them with scalable backend APIs.",
      "Developed cross-platform mobile applications using React Native and Expo, ensuring seamless performance on both Android and iOS.",
      "Integrated Firebase services for authentication, real-time databases, and push notifications in mobile apps.",
      "Created and connected RESTful APIs using Node.js and Express, with MongoDB as the database layer.",
      "Used Git and GitHub for version control, efficiently managing multiple client projects and codebases.",
      "Collaborated with international clients to gather requirements, provide regular updates, and deliver high-quality solutions on time."
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
    <section id="experience" className="py-20   ">
      <div className="max-w-7xl mx-au">
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
                      <CardDescription className="flex flex-col  gap-2 text-sm">
                        <span className="font-semibold">{exp.company}</span>
                        
                        <span className='flex'><Calendar size={16} className="text-gray-500 pr-1" />{exp.duration}</span>
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {exp.description.map((item, i) => (
                      <motion.li
                        key={i}
                        className="flex text-xs items-start gap-3 "
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