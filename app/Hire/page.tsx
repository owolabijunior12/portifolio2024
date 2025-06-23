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
  X
} from "lucide-react";

const testimonials = [
  {
    name: "Lead Engineer, NXDI Technology",
    quote:
      "Destiny is one of the most reliable developers I’ve worked with. He understands both the technical side and the user perspective.",
  },
  {
    name: "Mentor, Softway Finance",
    quote:
      "I’ve seen his journey firsthand — from day one to delivering live projects. He has the heart, brain, and hustle of a top-tier dev.",
  },
  {
    name: "IoT Project Partner, Rabah360",
    quote:
      "He built our secure biometric access system in record time, and the encryption system blew our minds.",
  },
  {
    name: "CTO, SmartSec",
    quote:
      "His security implementation on embedded systems saved us from a costly vulnerability. Highly dependable!",
  },
  {
    name: "Founder, DevStart Africa",
    quote:
      "Destiny is not just a coder, he’s a problem solver. Our MVP hit market 2 months early because of him.",
  },
];

const reasonsToHire = [
  {
    icon: <BadgeCheck className="text-green-400" />,
    text: "Proven Full Stack Expertise – I build intuitive React/Next.js frontends and robust Node.js backends that scale."
  },
  {
    icon: <ShieldCheck className="text-green-400" />,
    text: "Advanced Security Implementation – From OTP to JWT and biometric authentication, I prioritize encryption and secure protocols."
  },
  {
    icon: <Cpu className="text-green-400" />,
    text: "Embedded Systems & IoT – Successfully built AES-encrypted NFC and biometric access systems using ESP32."
  },
  {
    icon: <Globe className="text-green-400" />,
    text: "Versatile Developer – From startup MVPs to enterprise solutions and real-time systems."
  },
  {
    icon: <Lock className="text-green-400" />,
    text: "Reliable Delivery – I’ve shipped production-ready features on time across multiple industries."
  },
];

const whatICanBuild = [
  "Secure Authentication Systems (OTP, JWT, MFA, role-based access, email/SMS verification)",
  "Tap-to-Pay & Tokenization Solutions (NFC-based, AES-encrypted payment systems)",
  "Biometric & IoT Security Platforms (Authentication using ESP32)",
  "Real-Time Admin Dashboards (live analytics, status monitoring, permission control)",
  "Event-Driven Systems (WebSocket-based chat, payments, drone control systems)",
  "Mobile-First Native Apps & PWAs (React Native with intuitive UX)"
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

      <motion.div className="mb-20 overflow-hidden" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn(0.3)}>
        <h2 className="text-2xl font-semibold mb-6">🌟 Testimonials</h2>
        <div className="w-full overflow-hidden">
          <div className="flex gap-6 animate-scrollTestimonial w-max">
            {testimonials.map((testimonial, index) => (
              <blockquote
                key={index}
                className="w-[300px]  rounded-xl p-6 shadow-md border border-zinc-700 hover:border-blue-500 transition whitespace-normal"
              >
                <p className="italic text-sm ">“{testimonial.quote}”</p>
                <p className="text-sm mt-4 text-blue-400 font-semibold">— {testimonial.name}</p>
              </blockquote>
            ))}
          </div>
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
