 "use client";
import Image from 'next/image';
import { motion } from 'framer-motion';
import { TypeAnimation } from "react-type-animation";
import { Button } from "@/components/ui/button";
import { 
  Download, 
  User, 
  FolderOpen, 
  FileText, 
  Linkedin, 
  Mail, 
  Phone, 
  X, 
  AtSign, 
  Briefcase, 
  Calendar, 
  Diamond, 
  DollarSignIcon, 
  FileTextIcon, 
  MessageSquare, 
  Send, 
  Tag,
  ChevronDown
} from "lucide-react";
import BackgroundAnimations from '@/components/hero/BackgroundAnimations';
import WorkspaceDemo from '@/components/hero/WorkspaceDemo';
import FloatingPanels from '@/components/hero/FloatingPanels';
import Education from "@/components/About/Educaion";
import Experience from "@/components/About/Experience";
import { useState } from 'react';

const fadeIn = (delay = 0) => ({
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay } },
});

// Types
interface CustomSelectProps {
  value: string;
  onChange: (value: string) => void;
  options: string[];
  placeholder: string;
  icon?: React.ElementType;
  className?: string;
}

interface FormData {
  fullName: string;
  email: string;
  category: string;
  service: string;
  tier: string;
  projectTitle: string;
  description: string;
  timeline: string;
  budget: string;
  preferredContact: string;
  additionalNotes: string;
}

interface Service {
  category: string;
  services: string[];
}

// Custom Select Component
const CustomSelect = ({ 
  value, 
  onChange, 
  options, 
  placeholder, 
  icon: Icon,
  className = ""
}: CustomSelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredOptions = options.filter((option: string) =>
    option.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSelect = (option: string) => {
    onChange(option);
    setIsOpen(false);
    setSearchTerm("");
  };

  return (
    <div className={`relative ${className}`}>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="w-full border border-white/10 bg-white/5 rounded-lg px-4 py-2.5 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all duration-200 cursor-pointer flex items-center justify-between"
      >
        <div className="flex items-center gap-2">
          {Icon && <Icon size={16} className="text-gray-500" />}
          <span className={value ? "text-white" : "text-gray-500"}>
            {value || placeholder}
          </span>
        </div>
        <ChevronDown size={16} className={`text-gray-500 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </div>

      {isOpen && (
        <div className="absolute z-50 w-full mt-1 bg-zinc-800/95 border border-white/10 rounded-lg shadow-xl overflow-hidden backdrop-blur-sm">
          <div className="p-2 sticky top-0 bg-zinc-800/95 border-b border-white/10">
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-1.5 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-500/50"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
          <div className="max-h-48 overflow-y-auto">
            {filteredOptions.length > 0 ? (
              filteredOptions.map((option: string) => (
                <div
                  key={option}
                  onClick={() => handleSelect(option)}
                  className={`px-4 py-2 text-sm cursor-pointer transition-colors duration-150 ${
                    value === option
                      ? 'bg-blue-500/20 text-blue-400'
                      : 'text-gray-300 hover:bg-white/10'
                  }`}
                >
                  {option}
                </div>
              ))
            ) : (
              <div className="px-4 py-3 text-sm text-gray-500 text-center">
                No options found
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default function Hero() {
  const [showForm, setShowForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    category: "",
    service: "",
    tier: "",
    projectTitle: "",
    description: "",
    timeline: "",
    budget: "",
    preferredContact: "email",
    additionalNotes: ""
  });

  // Service data for dropdowns
  const services: Service[] = [
    {
      category: "Web Development",
      services: ["Responsive Websites", "Full Stack Web Applications", "E-Commerce Platforms"]
    },
    {
      category: "Mobile Development",
      services: ["React Native Apps", "Progressive Web Apps (PWAs)"]
    },
    {
      category: "Backend & API Development",
      services: ["RESTful APIs", "Microservices Architecture"]
    },
    {
      category: "IoT & Embedded Systems",
      services: ["ESP32/Arduino Development", "IoT Security Solutions"]
    },
    {
      category: "Consulting & Support",
      services: ["Technical Consulting"]
    }
  ];

  const categories = services.map((s: Service) => s.category);
  
  const getServicesForCategory = (category: string): string[] => {
    const cat = services.find((s: Service) => s.category === category);
    return cat ? cat.services : [];
  };

  const availableServices = formData.category ? getServicesForCategory(formData.category) : [];
  const tiers = ["Basic", "Standard", "Premium"];

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev: FormData) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    if (name === 'category') {
      setFormData((prev: FormData) => ({
        ...prev,
        [name]: value,
        service: '',
        tier: ''
      }));
    } else if (name === 'service') {
      setFormData((prev: FormData) => ({
        ...prev,
        [name]: value,
        tier: ''
      }));
    } else {
      setFormData((prev: FormData) => ({ ...prev, [name]: value }));
    }
  };

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev: FormData) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName: formData.fullName,
          email: formData.email,
          category: formData.category,
          service: formData.service,
          tier: formData.tier,
          projectTitle: formData.projectTitle,
          description: formData.description,
          timeline: formData.timeline,
          budget: formData.budget,
          preferredContact: formData.preferredContact,
          additionalNotes: formData.additionalNotes,
          _subject: `Project Inquiry from ${formData.fullName}`,
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          fullName: "",
          email: "",
          category: "",
          service: "",
          tier: "",
          projectTitle: "",
          description: "",
          timeline: "",
          budget: "",
          preferredContact: "email",
          additionalNotes: ""
        });
        setTimeout(() => {
          setShowForm(false);
          setSubmitStatus('idle');
        }, 2000);
      } else {
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <header
      id="hero"
      className="min-h-screen px-4 md:px-8 flex flex-col relative justify-center items-center bg-gradient-to-br from-background via-background to-muted/20 overflow-hidden"
    >
      <WorkspaceDemo />
      <FloatingPanels />

      <motion.div
        className="max-w-4xl mx-auto pt-22 text-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent leading-tight"
        >
          <span className="block text-xl sm:text-2xl md:text-4xl font-semibold mb-2 text-muted-foreground">
            Hello, I&apos;m
          </span>
          Owolabi Destiny Oluwanifemi
          <br />
          <span className="bg-gradient-to-r text-2xl bg-clip-text text-transparent">
            Full Stack Software Developer &amp; IoT || Embedded System Engineer
          </span>
        </motion.h1>

        <motion.div variants={itemVariants} className="mb-8 h-20 flex items-center justify-center">
          <TypeAnimation
            sequence={[
              "I design responsive websites", 2000,
              "I build modern web applications", 2000,
              "I develop cross-platform mobile apps", 2000,
              "I create secure authentication systems", 2000,
              "I integrate APIs and third-party services", 2000,
              "I optimize performance and SEO", 2000,
              "I bring UI/UX to life with animations", 2000,
              "I innovate with IoT and embedded systems", 2000,
              "I transform ideas into digital reality", 2000,
            ]}
            wrapper="div"
            speed={50}
            className="text-lg sm:text-xl md:text-2xl font-semibold text-primary"
            repeat={Infinity}
            cursor
          />
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          I&apos;m a <strong className="text-primary">Full Stack Developer</strong> based in Nigeria, specializing in building high-performance{" "}
          <strong className="text-primary">web</strong> and{" "}
          <strong className="text-primary">mobile apps</strong>, crafting intuitive user experiences, and integrating powerful{" "}
          <strong className="text-primary">IoT solutions</strong> using ESP32, NFC, and more.
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-wrap gap-4 justify-center items-center mb-16">
          <Button
            size="lg"
            className="group relative overflow-hidden bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg flex-shrink-0"
            onClick={() => window.location.href = '/About'}
          >
            <User className="mr-2 h-5 w-5" />
            About Me
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="group px-8 py-6 text-lg font-semibold rounded-full border-2 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:border-primary hover:text-primary flex-shrink-0"
            onClick={() => window.location.href = '/Project'}
          >
            <FolderOpen className="mr-2 h-5 w-5" />
            View Projects
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="group px-8 py-6 text-lg font-semibold rounded-full border-2 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:border-primary hover:text-primary flex-shrink-0"
            onClick={() => window.location.href = '/Hire'}
          >
            <FolderOpen className="mr-2 h-5 w-5" />
            Hire Me
          </Button>

          <Button
            variant="secondary"
            size="lg"
            className="group px-8 py-6 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg flex-shrink-0"
            onClick={() =>
              window.open('https://drive.google.com/file/d/1jb1d7Ey_SmfDOU1W2Q9c9O3Qssw9WEdy/view?usp=drive_link', '_blank')
            }
          >
            <Download className="mr-2 h-5 w-5" />
            Download CV
          </Button>
        </motion.div>
      </motion.div>

      <BackgroundAnimations />
      <WorkspaceDemo />
      <FloatingPanels />

      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl relative md:text-5xl font-bold mb-4">
              About Me
            </h2>
            <div className="w-24 h-1 bg-green mx-auto rounded-full" />
          </motion.div>

          <motion.div
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="lg:col-span-4 xl:col-span-3 flex justify-center">
              <div className="relative w-56 h-64 sm:w-64 sm:h-72 md:w-72 md:h-80 lg:w-full lg:max-w-[280px] lg:h-[340px]">
                <div className="absolute -inset-1 bg-gradient-to-r from-green/30 via-green/20 to-blue-500/30 rounded-2xl blur-xl opacity-60" />
                <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border-2 border-white/10 bg-gradient-to-b from-green/5 to-transparent">
                  <Image
                    src="/me3.png"
                    alt="Professional Portrait"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                    priority
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 280px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green via-green/50 to-transparent" />
                </div>
                <div className="absolute -bottom-3 -right-3 w-20 h-20 border-2 border-green/20 rounded-xl -z-10" />
                <div className="absolute -top-3 -left-3 w-12 h-12 border-2 border-green/10 rounded-full -z-10" />
              </div>
            </div>

            <div className="lg:col-span-8 xl:col-span-9">
              <div className="backdrop-blur-sm bg-white/5 rounded-2xl p-6 md:p-8 lg:p-10 shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300 h-full">
                <div className="space-y-5">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="px-3 py-1 text-xs font-medium bg-green/20 text-green rounded-full border border-green/20">
                      Software Engineer
                    </span>
                    <span className="px-3 py-1 text-xs font-medium rounded-full border border-green/20">
                      Embedded Systems
                    </span>
                    <span className="px-3 py-1 text-xs font-medium rounded-full border border-green/20">
                      IoT Specialist
                    </span>
                  </div>

                  <p className="text-sm md:text-base leading-relaxed">
                    Graduating from <span className="text-green font-semibold">Yaba College of Technology</span> in 2022 with an OND in Computer Science, my academic foundation has supported my growth in software and embedded systems engineering. I hold certifications in <span className="text-green font-semibold">Frontend Web Development</span> from aptLearn and <span className="text-green font-semibold">Introduction to IoT</span> from Cisco, which have enhanced my technical skills and industry readiness.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    During my tenure as an <span className="text-green font-semibold">Embedded System Engineer</span> and <span className="text-green font-semibold">Software Engineer</span> at Softway Finance, I worked collaboratively to develop solutions using <span className="text-green font-semibold">Django, MongoDB, and React</span>. My experience also includes training AI models, with a focus on bridging software and hardware systems. I am motivated to apply my expertise in creating impactful and innovative technology-driven solutions.
                  </p>
                  
                  <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green">2022</div>
                      <div className="text-xs text-gray-400 mt-1">Graduation Year</div>
                    </div>
                    <div className="text-center border-x border-white/10">
                      <div className="text-2xl font-bold text-green">3+</div>
                      <div className="text-xs text-gray-400 mt-1">Certifications</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green">TypeScript</div>
                      <div className="text-xs text-gray-400 mt-1">Go • JavaScript</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 pt-2">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-green"></span>
                    </span>
                    <span className="text-xs text-gray-400">Open to innovative technology opportunities</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Education />
      <Experience />

      <motion.div 
        className="text-center border border-white/10 rounded-xl p-8 bg-white/5 backdrop-blur-sm max-w-4xl mx-auto w-full" 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true }} 
        variants={fadeIn(0.6)}
      >
        <h2 className="text-2xl font-bold mb-3">Let&apos;s Work Together</h2>
        <p className="text-gray-400 mb-6 max-w-2xl mx-auto text-sm">
          Whether you&apos;re launching a product, scaling a team, or prototyping something revolutionary — I can help make it real.
        </p>

        <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-6">
          <a
            href="mailto:owolabijunior12@gmail.com"
            className="flex items-center gap-2 text-blue-400 hover:underline text-sm"
          >
            <Mail size={16} /> owolabijunior12@gmail.com
          </a>
          <a
            href="https://wa.me/2348136652504?text=Hello%20Destiny%2C%20I%20came%20across%20your%20developer%20portfolio%20and%20I%27m%20interested%20in%20discussing%20a%20potential%20project."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-blue-400 hover:underline text-sm"
          >
            <Phone size={16} /> +2348136652504
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-6">
          <a 
            href="https://www.linkedin.com/in/owolabi-destiny-oluwanifemi-231222265" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-blue-400 hover:underline flex items-center gap-2 text-sm"
          >
            <Linkedin size={16} /> LinkedIn
          </a>
          <div 
            onClick={() => window.open('https://drive.google.com/file/d/1jb1d7Ey_SmfDOU1W2Q9c9O3Qssw9WEdy/view?usp=drive_link', '_blank')} 
            className="text-blue-400 hover:underline flex items-center gap-2 text-sm cursor-pointer"
          >
            <FileText size={16} /> Resume
          </div>
        </div>

        <button
          onClick={() => setShowForm(true)}
          className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition"
        >
          Start Your Project
        </button>
      </motion.div>

      {showForm && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex justify-center items-center p-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3 }}
            className="bg-zinc-900/95 border border-white/10 rounded-2xl p-8 max-w-2xl w-full relative shadow-2xl max-h-[90vh] overflow-y-auto"
          >
            <button 
              onClick={() => setShowForm(false)} 
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors duration-200 p-2 hover:bg-white/10 rounded-lg"
            >
              <X size={20} />
            </button>
            
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">Project Inquiry</h3>
              <div className="w-16 h-0.5 bg-blue-500/50 mx-auto rounded-full" />
              <p className="text-sm text-gray-400 mt-4">Fill in your details and I&apos;ll get back to you within 24 hours</p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative">
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                    <User size={16} />
                  </div>
                  <input
                    name="fullName"
                    placeholder="Your Full Name *"
                    value={formData.fullName}
                    onChange={handleFormChange}
                    className="w-full border border-white/10 bg-white/5 rounded-lg pl-10 pr-4 py-2.5 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all duration-200"
                    required
                  />
                </div>
                <div className="relative">
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                    <AtSign size={16} />
                  </div>
                  <input
                    name="email"
                    type="email"
                    placeholder="Your Email *"
                    value={formData.email}
                    onChange={handleFormChange}
                    className="w-full border border-white/10 bg-white/5 rounded-lg pl-10 pr-4 py-2.5 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all duration-200"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <CustomSelect
                  value={formData.category}
                  onChange={(val: string) => handleSelectChange('category', val)}
                  options={categories}
                  placeholder="Select Category"
                  icon={Tag}
                />
                <CustomSelect
                  value={formData.service}
                  onChange={(val: string) => handleSelectChange('service', val)}
                  options={availableServices}
                  placeholder="Select Service"
                  icon={Briefcase}
                />
                <CustomSelect
                  value={formData.tier}
                  onChange={(val: string) => handleSelectChange('tier', val)}
                  options={tiers}
                  placeholder="Select Tier"
                  icon={Diamond}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative">
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                    <FileTextIcon size={16} />
                  </div>
                  <input
                    name="projectTitle"
                    placeholder="Project Title"
                    value={formData.projectTitle}
                    onChange={handleFormChange}
                    className="w-full border border-white/10 bg-white/5 rounded-lg pl-10 pr-4 py-2.5 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all duration-200"
                  />
                </div>
                <CustomSelect
                  value={formData.timeline}
                  onChange={(val: string) => handleSelectChange('timeline', val)}
                  options={[
                    "1-2 weeks",
                    "2-4 weeks",
                    "1-2 months",
                    "2-3 months",
                    "3-6 months",
                    "6+ months",
                    "Flexible"
                  ]}
                  placeholder="Expected Timeline"
                  icon={Calendar}
                />
              </div>

              <div className="relative">
                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                  <DollarSignIcon size={16} />
                </div>
                <input
                  name="budget"
                  placeholder="Estimated Budget"
                  value={formData.budget}
                  onChange={handleFormChange}
                  className="w-full border border-white/10 bg-white/5 rounded-lg pl-10 pr-4 py-2.5 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all duration-200"
                />
              </div>

              <div className="relative">
                <div className="absolute left-3 top-3 text-gray-500">
                  <MessageSquare size={16} />
                </div>
                <textarea
                  name="description"
                  placeholder="Brief project description *"
                  value={formData.description}
                  onChange={handleFormChange}
                  className="w-full border border-white/10 bg-white/5 rounded-lg pl-10 pr-4 py-2.5 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all duration-200 resize-none"
                  rows={3}
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm text-gray-400">Preferred Contact Method</label>
                <div className="flex flex-wrap gap-3">
                  {[
                    { value: "email", label: "Email" },
                    { value: "phone", label: "Phone" },
                    { value: "whatsapp", label: "WhatsApp" },
                    { value: "linkedin", label: "LinkedIn" }
                  ].map((option) => (
                    <label
                      key={option.value}
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg border cursor-pointer transition-all duration-200 ${
                        formData.preferredContact === option.value
                          ? 'border-blue-500 bg-blue-500/20 text-blue-400'
                          : 'border-white/10 hover:border-white/30 text-gray-400 hover:text-white'
                      }`}
                    >
                      <input
                        type="radio"
                        name="preferredContact"
                        value={option.value}
                        checked={formData.preferredContact === option.value}
                        onChange={handleRadioChange}
                        className="hidden"
                      />
                      <span className="text-sm font-medium">{option.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="absolute left-3 top-3 text-gray-500">
                  <FileTextIcon size={16} />
                </div>
                <textarea
                  name="additionalNotes"
                  placeholder="Additional notes or requirements..."
                  value={formData.additionalNotes}
                  onChange={handleFormChange}
                  className="w-full border border-white/10 bg-white/5 rounded-lg pl-10 pr-4 py-2.5 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all duration-200 resize-none"
                  rows={2}
                />
              </div>
              
              {submitStatus === 'success' && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-green-500/20 border border-green-500/50 text-green-400 text-sm p-3 rounded-lg text-center"
                >
                  ✓ Message sent successfully! I&apos;ll get back to you soon.
                </motion.div>
              )}
              
              {submitStatus === 'error' && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-red-500/20 border border-red-500/50 text-red-400 text-sm p-3 rounded-lg text-center"
                >
                  ✗ Something went wrong. Please try again or email me directly.
                </motion.div>
              )}
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center gap-2 ${
                  isSubmitting 
                    ? 'bg-gray-600 cursor-not-allowed' 
                    : 'bg-blue-600 hover:bg-blue-700 hover:shadow-lg'
                } text-white`}
              >
                {isSubmitting ? (
                  <>
                    <span className="animate-spin h-4 w-4 border-2 border-white/30 border-t-white rounded-full" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Send Proposal
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </header>
  );
}