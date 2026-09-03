 import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, ChevronRight, Briefcase } from 'lucide-react';

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
    badge: 'Current'
  },
   {
    title: 'Frontend Developer (Contract)',
    company: 'Assurdly || Quality as a Service',
    duration: 'Jun 2025 – Jul 2025',
    description: [
      "Designed and implemented responsive user interfaces for a loan platform, ensuring seamless user experience.",
      "Ensured efficient API integration across multiple devices and screen sizes.",
      "Collaborated with backend developers to integrate RESTful APIs and optimize data flow.",
      "Implemented modern UI components using React.js and Tailwind CSS.",
      "Ensured cross-browser compatibility and full mobile responsiveness."
    ],
    badge: 'Contract'
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
    badge: 'Contract'
  },
  {
    title: 'Software Engineer',
    company: 'NXDI Technology Solutions LTD',
    duration: 'Aug 2024 – Jan 2025',
    description: [
      "Collaborating with cross-functional teams to design and implement innovative financial systems.",
      "Developing backend services with Node.js, TypeScript, and Express to handle secure transactions and API communications.",
      "Integrated Firebase services for authentication, real-time databases, and push notifications in mobile apps.",
      "Created and connected RESTful APIs using Node.js and Express, with MongoDB as the database layer.",
      "Used Git and GitHub for version control, efficiently managing multiple client projects and codebases.",
      "Collaborated with international clients to gather requirements, provide regular updates, and deliver high-quality solutions on time."
    ],
    badge: 'Remote'
  },
  {
    title: 'MERN Stack & Mobile App Developer',
    company: 'Fiverr (Freelance)',
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
    badge: 'Freelance'
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
    badge: 'Internship'
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl relative md:text-5xl font-bold mb-4">
            Work Experience
          </h2>
          <div className="w-24 h-1 bg-white/20 mx-auto rounded-full" />
          <p className="  mt-4 max-w-2xl mx-auto text-sm">
            Professional journey across software development, embedded systems, and fintech
          </p>
        </motion.div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
            >
              <Card className="hover:shadow-2xl transition-all duration-300 border border-white/10 backdrop-blur-sm bg-white/5 hover:bg-white/10 overflow-hidden">
                {/* Top border */}
                <div className="h-0.5 bg-white/20" />
                
                <CardHeader className="pb-4">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3">
                    <div className="flex items-start gap-4">
                      {/* Icon */}
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl border border-white/20 bg-white/5 p-2.5 mt-1">
                        <Briefcase className="w-full h-full text-white/40" />
                      </div>
                      
                      <div>
                        <CardTitle className="text-lg md:text-xl font-semibold">
                          {exp.title}
                        </CardTitle>
                        <CardDescription className="flex flex-wrap items-center gap-3 text-sm mt-1.5">
                          <span className="font-medium ">{exp.company}</span>
                          <span className="flex items-center gap-1 text-gray-500">
                            <Calendar size={14} className="text-gray-500" />
                            {exp.duration}
                          </span>
                        </CardDescription>
                      </div>
                    </div>
                    
                    {/* Badge */}
                    <span className="flex-shrink-0 text-xs px-3 py-1 border border-white/10 rounded-full text-white/40 bg-white/5">
                      {exp.badge}
                    </span>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {exp.description.map((item, i) => (
                      <motion.li
                        key={i}
                        className="flex items-start gap-2 text-xs md:text-sm   leading-relaxed col-span-1"
                        initial={{ opacity: 0, x: 10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.05 + i * 0.05 }}
                      >
                        <ChevronRight size={14} className="text-white/20 mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Experience Stats */}
        <motion.div
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 text-center border border-white/5 hover:border-white/20 transition-all duration-300">
            <div className="text-2xl font-bold  ">4+</div>
            <div className="text-xs   mt-1">Years Experience</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 text-center border border-white/5 hover:border-white/20 transition-all duration-300">
            <div className="text-2xl font-bold  ">5</div>
            <div className="text-xs   mt-1">Companies</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 text-center border border-white/5 hover:border-white/20 transition-all duration-300">
            <div className="text-2xl font-bold  ">12+</div>
            <div className="text-xs   mt-1">Projects Delivered</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 text-center border border-white/5 hover:border-white/20 transition-all duration-300">
            <div className="text-2xl font-bold  ">Fintech</div>
            <div className="text-xs   mt-1">Industry Focus</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;