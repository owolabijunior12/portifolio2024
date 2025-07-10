/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  FileText,
  Linkedin,
  Sparkles,
  ShieldCheck,
  Cpu,
  Globe,
  Lock,
  BadgeCheck,
  Rocket,
  Activity,
  Code2,
  Users,
  Zap,
  X
} from "lucide-react";


const testimonials = [
  {
    name: "Audu Joshua Adinoyi",
    title: "Front-End Developer & AI Model Trainer | React, Next.js, RLHF",
    quote:
      "Destiny’s ability to stay calm and focused on projects truly stands out. He’s a dependable and collaborative team member, and one of the first people who comes to mind whenever I need support at work.",
  },
  {
    name: "Erinle Samuel",
    title: "Frontend Engineer | React.js & React Native",
    quote:
      "Destiny is a smart, reliable, and versatile engineer with strong skills in both frontend and backend development. He excels at building secure systems and quickly grasps complex tasks like authentication and payment integration. Beyond his technical abilities, he’s a great communicator and team player who's always ready to support others.",
  },
  {
    name: "Favour Afenikhena",
    title: "Backend Developer & Web3 Security Researcher | Co-building SoftwayFinance",
    quote:
      "I have worked with Destiny and he is quite good. He is easy to relate with and he always keeps to time. He is also very hardworking.",
  },
  {
    name: "Shella Queen.",
    title: "Skiled slate venture",
    quote:
      "Destiny is a highly skilled developer who consistently delivers high-quality work. His expertise in both frontend and backend technologies is impressive, and he has a knack for solving complex problems efficiently. I’ve had the pleasure of collaborating with him on several projects, and his professionalism and dedication always shine through. I highly recommend him for any software development needs.",
  },
  {
    name: "Kebiyise Tayo.",
    title: "KingAtom Global Consultants",
    quote:
      "We worked with Destiny on a complex project and he delivered exceptional results. His attention to detail and problem-solving skills were invaluable. He’s a true professional who goes above and beyond. I highly recommend him for any software development needs. ",
  },
  // {
  //   name: "Lola O.",
  //   title: "Product Manager at ShopLink",
  //   quote:
  //     "Destiny understands both user needs and technical constraints. He played a key role in helping us launch our product on time and with quality.",
  // },
  // {
  //   name: "Yusuf B.",
  //   title: "Founder of StartupHaven",
  //   quote:
  //     "He’s not just a developer—he’s a thinker. Destiny proactively solved issues we hadn’t even considered. I’m already planning the next project with him.",
  // },
];


const reasonsToHire = [
  {
    icon: <BadgeCheck className="text-green-400" />,
    text: "End-to-End Product Builder – I build seamless, scalable frontends with React/Next.js and robust backends with Node.js, MongoDB, and REST/GraphQL APIs.",
  },
  {
    icon: <ShieldCheck className="text-green-400" />,
    text: "Security-Centric Engineering – I implement secure architectures with OTP, JWT, biometric auth, and encryption that meet real-world security standards.",
  },
  {
    icon: <Cpu className="text-green-400" />,
    text: "Embedded & IoT Innovator – From AES-encrypted NFC cards to fingerprint-authenticated access systems, I build reliable low-level solutions using ESP32.",
  },
  {
    icon: <Globe className="text-green-400" />,
    text: "Versatile Across Domains – Whether it's fintech dashboards, drone control systems, or PWA mobile apps, I adapt fast and deliver real results.",
  },
  {
    icon: <Lock className="text-green-400" />,
    text: "Consistent, On-Time Delivery – I've shipped production-ready features for startups and enterprises under tight deadlines without compromising quality.",
  },
  {
    icon: <Rocket className="text-green-400" />,
    text: "Startup-Ready Speed – I execute quickly and efficiently, making me ideal for fast-moving teams that need MVPs and scalable infrastructure on time.",
  },
  {
    icon: <Activity className="text-green-400" />,
    text: "Real-Time System Expert – I build live apps with WebSockets and MQTT, powering instant user interactions, drone telemetry, and chat systems.",
  },
  {
    icon: <Code2 className="text-green-400" />,
    text: "Clean & Scalable Codebase – I follow modern coding standards and patterns, writing maintainable, well-tested code your team will love working with.",
  },
  {
    icon: <Users className="text-green-400" />,
    text: "Team-First Mindset – I collaborate smoothly with designers, backend devs, and product managers, and I always communicate clearly and reliably.",
  },
  {
    icon: <Zap className="text-green-400" />,
    text: "Engineer & Problem Solver – I don’t just code—I solve business problems with scalable, practical engineering tailored to your product goals.",
  },
];


const whatICanBuild = [
  " Scalable Authentication Systems – OTP, JWT, multi-factor auth (MFA), role-based access control, and email/SMS verification to protect sensitive user data.",
  
  " Contactless Payment Platforms – AES-encrypted NFC tap-to-pay and tokenized payment flows for secure, frictionless financial transactions.",
  
  " Biometric & IoT Security Solutions – Fingerprint, facial recognition, and RFID-based access control built on ESP32 for enterprise and embedded use cases.",
  
  " Real-Time Admin Dashboards – Custom dashboards with live analytics, user/session tracking, device status monitoring, and admin controls.",
  
  " Event-Driven Systems – WebSocket or MQTT-based platforms for real-time messaging, payments, live logistics, or drone coordination.",
  
  " Mobile-First Native Apps & PWAs – High-performance mobile applications with React Native, optimized for offline/online sync and intuitive UX.",
  
  " RESTful & GraphQL APIs – Clean, versioned APIs built with Express.js or NestJS for seamless frontend-backend communication and third-party integrations.",
  
  
  " Security-Focused Infrastructure – SSL/TLS, AES encryption, secure cookies, rate limiting, and authentication flows hardened against common vulnerabilities.",
  
  " Drone & Device Control Panels – Real-time web interfaces for drone fleets, delivery bots, or embedded devices with live telemetry and manual override."
];


const fadeIn = (delay = 0) => ({
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay } },
});

export default function HireMePage() {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    projectTitle: "",
    description: "",
    timeline: "",
    budget: ""
  });

    const handleFormChange = (e:any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

    const handleSend = () => {
    const subject = encodeURIComponent("Project Proposal Inquiry");
    const body = encodeURIComponent(
      `Hello Destiny,\n\nMy name is ${formData.fullName} and I'm interested in building a project with you.\n\nProject Title: ${formData.projectTitle}\nDescription: ${formData.description}\nEmail: ${formData.email}\n\nLooking forward to your response.\n\nBest regards,\n${formData.fullName}`
    );
    window.location.href = `mailto:owolabijunior12@gmail.com?subject=${subject}&body=${body}`;
  };


  return (
    <section className="px-4 md:px-12 lg:px-32 py-20  min-h-screen">
      <motion.div
        className="text-center mb-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn()}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4 ">🚀 Hire Me</h1>
        <p className="text-lg  max-w-2xl mx-auto">
          Looking for a developer who brings not only skill but vision, passion, and proven delivery? You&apos;re in the right place.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 mb-20">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn(0.1)}>
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
            <Sparkles className="text-blue-400" /> Why You Should Hire Me
          </h2>
          <ul className="space-y-4">
            {reasonsToHire.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                {item.icon} {item.text}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn(0.2)}>
          <h2 className="text-2xl font-semibold mb-4">🛠️ What I Can Build for You</h2>
          <ul className="list-disc list-inside space-y-2">
            {whatICanBuild.map((text, index) => (
              <li key={index}>{text}</li>
            ))}
          </ul>
        </motion.div>
      </div>

       <motion.div
        className="mb-20 overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn(0.3)}
      >
        <h2 className="text-2xl font-semibold mb-6">🌟 Testimonials</h2>
        <div className="w-full overflow-hidden">
          <motion.div
            className="flex gap-6 w-max"
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          >
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <blockquote
                key={index}
                className="w-[300px] rounded-xl p-6 shadow-md border border-zinc-700 hover:border-blue-500 transition whitespace-normal bg-zinc-900 text-white"
              >
                <p className="italic text-sm leading-relaxed">“{testimonial.quote}”</p>
                <div className="mt-4">
                  <p className="text-sm font-semibold text-blue-400">— {testimonial.name}</p>
                  {testimonial.title && (
                    <p className="text-xs text-zinc-400 italic mt-1">{testimonial.title}</p>
                  )}
                </div>
              </blockquote>
            ))}
          </motion.div>
        </div>
      </motion.div>



      <motion.div className="text-center border border-lg border-black rounded-xl p-10" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn(0.4)}>
        <h2 className="text-2xl font-bold mb-4 ">📞 Let&apos;s Work Together</h2>
        <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
          Whether you&apos;re launching a product, scaling a team, or prototyping something revolutionary — I&apos;m the engineer who can help make it real. My track record spans mission-critical systems and startup MVPs. Let&apos;s build something that lasts.
        </p>

        <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-6">
          <a
            href="mailto:owolabijunior12@gmail.com"
            className="flex items-center gap-2 text-blue-400 hover:underline"
          >
            <Mail /> owolabijunior12@gmail.com
          </a>
          <a
            href="https://wa.me/2348136652504?text=Hello%20Destiny%2C%20I%20came%20across%20your%20developer%20portfolio%20and%20I'm%20interested%20in%20discussing%20a%20potential%20project.%20Here%20are%20a%20few%20details%3A%20%5BBrief%20Project%20Idea%5D"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-blue-400 hover:underline"
          >
            <Phone /> +2348136652504
          </a>
        </div>

        <div className="flex justify-center gap-4">
          <a href="https://www.linkedin.com/in/owolabi-destiny-oluwanifemi-231222265" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline flex items-center gap-2">
            <Linkedin /> LinkedIn
          </a>
          <div onClick={() => window.open('https://drive.google.com/file/d/1jb1d7Ey_SmfDOU1W2Q9c9O3Qssw9WEdy/view?usp=drive_link', '_blank')} className="text-blue-400 hover:underline flex items-center gap-2">
            <FileText /> Download Resume
          </div>
        </div>

        <div className="mt-10">
          <button
            onClick={() => setShowForm(true)}
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition"
          >
            Let’s Talk About Your Project
          </button>
        </div>
      </motion.div>

     {showForm && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-60 backdrop-blur-sm flex justify-center items-center">
          <div className="bg-white dark:bg-zinc-900 text-black dark:text-white rounded-xl p-8 max-w-lg w-full relative shadow-xl border border-zinc-700">
            <button onClick={() => setShowForm(false)} className="absolute top-3 right-3 text-gray-400 hover:text-red-500">
              <X />
            </button>
            <h3 className="text-xl font-semibold mb-4 text-center">📋 Project Inquiry Form</h3>
            <div className="space-y-4">
              <input
                name="fullName"
                placeholder="Your Full Name"
                value={formData.fullName}
                onChange={handleFormChange}
                className="w-full border border-gray-300 dark:border-zinc-600 bg-transparent rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <input
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleFormChange}
                className="w-full border border-gray-300 dark:border-zinc-600 bg-transparent rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <input
                name="projectTitle"
                placeholder="Project Title"
                value={formData.projectTitle}
                onChange={handleFormChange}
                className="w-full border border-gray-300 dark:border-zinc-600 bg-transparent rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <textarea
                name="description"
                placeholder="Brief project description"
                value={formData.description}
                onChange={handleFormChange}
                className="w-full border border-gray-300 dark:border-zinc-600 bg-transparent rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                rows={4}
              />
              <button
                onClick={handleSend}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold transition"
              >
                Send Proposal
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
