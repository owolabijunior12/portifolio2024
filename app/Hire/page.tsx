 /* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  FileText,
  Linkedin,
  Cpu,
  Globe,
  Users,
  X,
  CheckCircle,
  Clock,
  Briefcase,
  Server,
  Smartphone,
  Diamond,
  Send,
  User,
  AtSign,
  Tag,
  FileText as FileTextIcon,
  Calendar,
  DollarSign as DollarSignIcon,
  MessageSquare,
  ChevronDown
} from "lucide-react";
import { testimonials } from "../page";

 

// Exchange rate: 1 USD = 1,500 NGN
// const EXCHANGE_RATE = 1500;

// Services with tiered pricing
const services = [
  {
    category: "Web Development",
    icon: <Globe className="w-5 h-5" />,
    services: [
      { 
        name: "Responsive Websites", 
        description: "Modern, mobile-first websites with Tailwind CSS and animations",
        tiers: {
          basic: { priceUSD: "200", features: ["5 pages", "Contact form", "Mobile responsive"] },
          standard: { priceUSD: "500", features: ["10 pages", "Blog/News", "SEO optimized", "Animations"] },
          premium: { priceUSD: "1,500", features: ["Custom design", "CMS integration", "E-commerce ready", "Advanced animations"] }
        },
      },
      { 
        name: "Full Stack Web Applications", 
        description: "Custom web apps with React/Next.js, Node.js, and MongoDB/PostgreSQL",
        tiers: {
          basic: { priceUSD: "1,500", features: ["Single page app", "Basic CRUD", "Responsive design"] },
          standard: { priceUSD: "4,000", features: ["Multi-page app", "User auth", "Payment integration", "Admin panel"] },
          premium: { priceUSD: "8,000", features: ["Enterprise app", "Real-time features", "Advanced security", "Microservices"] }
        },
      },
      { 
        name: "E-Commerce Platforms", 
        description: "Online stores with payment integration and inventory management",
        tiers: {
          basic: { priceUSD: "2,500", features: ["Product catalog", "Cart & checkout", "Payment gateway"] },
          standard: { priceUSD: "5,000", features: ["Advanced catalog", "Inventory system", "Order tracking", "Discount engine"] },
          premium: { priceUSD: "10,000", features: ["Multi-vendor", "Analytics dashboard", "Mobile app", "API integration"] }
        },
      },
    ]
  },
  {
    category: "Mobile Development",
    icon: <Smartphone className="w-5 h-5" />,
    services: [
      { 
        name: "React Native Apps", 
        description: "Cross-platform mobile apps for iOS and Android",
        tiers: {
          basic: { priceUSD: "2,500", features: ["Simple app", "Basic navigation", "API integration"] },
          standard: { priceUSD: "5,000", features: ["Complex features", "Push notifications", "Offline support"] },
          premium: { priceUSD: "10,000", features: ["Full-featured app", "Real-time sync", "Advanced animations", "App store deployment"] }
        },
        timeline: "6-14 weeks"
      },
      { 
        name: "Progressive Web Apps (PWAs)", 
        description: "Mobile-first web apps with offline support",
        tiers: {
          basic: { priceUSD: "1,500", features: ["Mobile-first", "Offline support", "Service worker"] },
          standard: { priceUSD: "3,500", features: ["Advanced features", "Push notifications", "Background sync"] },
          premium: { priceUSD: "6,500", features: ["Full PWA", "Native-like experience", "Analytics", "Performance optimized"] }
        },
      },
    ]
  },
  {
    category: "Backend & API Development",
    icon: <Server className="w-5 h-5" />,
    services: [
      { 
        name: "RESTful APIs", 
        description: "Scalable APIs with Node.js, Express, and MongoDB/PostgreSQL",
        tiers: {
          basic: { priceUSD: "1,500", features: ["Basic CRUD", "Authentication", "Documentation"] },
          standard: { priceUSD: "3,500", features: ["Advanced queries", "Rate limiting", "Caching", "Logging"] },
          premium: { priceUSD: "6,000", features: ["High availability", "Load balancing", "Monitoring", "Analytics"] }
        },
      },
      { 
        name: "Microservices Architecture", 
        description: "Scalable microservices with Docker and Kubernetes",
        tiers: {
          basic: { priceUSD: "3,500", features: ["2-3 services", "Docker", "API gateway"] },
          standard: { priceUSD: "7,000", features: ["4-6 services", "Kubernetes", "Service discovery", "Message queues"] },
          premium: { priceUSD: "12,000", features: ["Complete system", "CI/CD", "Monitoring", "Auto-scaling"] }
        },
      },
    ]
  },
  {
    category: "IoT & Embedded Systems",
    icon: <Cpu className="w-5 h-5" />,
    services: [
      { 
        name: "ESP32/Arduino Development", 
        description: "Custom firmware development for ESP32 and Arduino boards",
        tiers: {
          basic: { priceUSD: "1,200", features: ["Simple firmware", "Sensor integration", "Basic communication"] },
          standard: { priceUSD: "3,000", features: ["Advanced firmware", "Multiple sensors", "WiFi/BLE", "Data logging"] },
          premium: { priceUSD: "5,000", features: ["Complete system", "Cloud integration", "OTA updates", "Security"] }
        },
      },
      { 
        name: "IoT Security Solutions", 
        description: "AES encryption, tokenization, and secure communication",
        tiers: {
          basic: { priceUSD: "1,500", features: ["Basic encryption", "Secure communication", "Key management"] },
          standard: { priceUSD: "4,000", features: ["Advanced encryption", "Tokenization", "Access control"] },
          premium: { priceUSD: "7,000", features: ["Enterprise security", "Hardware security", "Compliance ready"] }
        },
      },
    ]
  },
  {
    category: "Consulting & Support",
    icon: <Users className="w-5 h-5" />,
    services: [
      { 
        name: "Technical Consulting", 
        description: "Tech stack recommendations, architecture planning, and code review",
        tiers: {
          basic: { priceUSD: "100/hour", features: ["Architecture review", "Tech recommendations"] },
          standard: { priceUSD: "250/hour", features: ["Full assessment", "Migration planning", "Team training"] },
          premium: { priceUSD: "350/hour", features: ["Enterprise architecture", "Strategic planning", "Ongoing advisory"] }
        },
      },
    ]
  },
];

// Helper function to format currency
// const formatCurrency = (amount: string, currency: 'USD' | 'NGN') => {
//   if (currency === 'USD') {
//     return `${amount}`;
//   }
  
  // Convert USD to NGN
//   if (amount.includes('/hour')) {
//     const numMatch = amount.match(/([\d,]+)/);
//     if (numMatch) {
//       const num = parseFloat(numMatch[0].replace(/,/g, ''));
//       const converted = Math.round(num * EXCHANGE_RATE);
//       return `${converted.toLocaleString()}/hour`;
//     }
//   }
  
//   const num = parseFloat(amount.replace(/,/g, ''));
//   const converted = Math.round(num * EXCHANGE_RATE);
//   return `${converted.toLocaleString()}`;
// };

const getTierColor = (tier: string) => {
  switch(tier) {
    case 'basic': return 'border-gray-500/30 hover:border-gray-400';
    case 'standard': return 'border-blue-500/30 hover:border-blue-400';
    case 'premium': return 'border-purple-500/30 hover:border-purple-400';
    default: return '';
  }
};

const getTierBadge = (tier: string) => {
  switch(tier) {
    case 'basic': return 'bg-gray-500/20 ';
    case 'standard': return 'bg-blue-500/20 text-blue-300';
    case 'premium': return 'bg-purple-500/20 text-purple-300';
    default: return '';
  }
};

const reasonsToHire = [
  " End-to-End Product Builder – Full stack development with React/Next.js and Node.js.",
  " Security-Centric Engineering – OTP, JWT, biometric auth, and encryption.",
  " Embedded & IoT Innovator – ESP32, NFC, and fingerprint authentication systems.",
  " Versatile Across Domains – Fintech, drone control, PWA, and IoT solutions.",
  " Consistent, On-Time Delivery – Production-ready features under tight deadlines.",
  " Startup-Ready Speed – MVPs and scalable infrastructure delivered quickly.",
  " Real-Time System Expert – WebSockets and MQTT for live applications.",
  " Clean & Scalable Codebase – Maintainable, well-tested code.",
  " Team-First Mindset – Clear communication and collaboration.",
  " Engineer & Problem Solver – Practical engineering for business goals.",
];

const whatICanBuild = [
  " Scalable Authentication Systems – OTP, JWT, MFA, and role-based access control.",
  " Contactless Payment Platforms – AES-encrypted NFC tap-to-pay systems.",
  " Biometric & IoT Security Solutions – Fingerprint and RFID access control.",
  " Real-Time Admin Dashboards – Live analytics and device monitoring.",
  " Event-Driven Systems – WebSocket and MQTT-based platforms.",
  " Mobile-First Native Apps & PWAs – React Native and offline-first apps.",
  " RESTful & GraphQL APIs – Clean, versioned APIs for seamless integration.",
  " Security-Focused Infrastructure – SSL/TLS, AES encryption, and rate limiting.",
  " Drone & Device Control Panels – Real-time telemetry and control interfaces."
];

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

export default function HireMePage() {
  const [showForm, setShowForm] = useState(false);
  const [currency, setCurrency] = useState<'USD' | 'NGN'>('USD');
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

  // Get categories for dropdown
  const categories = services.map((s) => s.category);
  
  const getServicesForCategory = (category: string): string[] => {
    const cat = services.find((s) => s.category === category);
    return cat ? cat.services.map((s) => s.name) : [];
  };

  const availableServices = formData.category ? getServicesForCategory(formData.category) : [];
  const tiers = ["Basic", "Standard", "Premium"];

  // const toggleCurrency = () => {
  //   setCurrency(prev => prev === 'USD' ? 'NGN' : 'USD');
  // };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    if (name === 'category') {
      setFormData(prev => ({
        ...prev,
        [name]: value,
        service: '',
        tier: ''
      }));
    } else if (name === 'service') {
      setFormData(prev => ({
        ...prev,
        [name]: value,
        tier: ''
      }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
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

  return (
    <section className="px-4 md:px-12 lg:px-32 py-20 min-h-screen">
      <motion.div
        className="text-center mb-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn()}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Hire Me</h1>
        <div className="w-24 h-1 bg-white/20 mx-auto rounded-full mb-4" />
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
          Looking for a developer who brings skill, vision, and proven delivery? You&apos;re in the right place.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 mb-20">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn(0.3)}>
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
            Why Hire Me
          </h2>
          <ul className="space-y-2">
            {reasonsToHire.slice(0, 5).map((text, index) => (
              <li key={index} className="flex items-start gap-2 text-sm text-gray-300">
                <span>{text}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn(0.4)}>
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
            What I Build
          </h2>
          <ul className="space-y-2">
            {whatICanBuild.slice(0, 5).map((text, index) => (
              <li key={index} className="flex items-start gap-2 text-sm text-gray-300">
                <span>{text}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* Currency Toggle */}
      {/* <motion.div
        className="flex justify-center mb-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn(0.05)}
      >
        <div className="bg-white/5 backdrop-blur-sm rounded-full p-1 border border-white/10 inline-flex items-center gap-2">
          <button
            onClick={toggleCurrency}
            className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
              currency === 'USD' 
                ? 'bg-blue-500 text-white shadow-lg' 
                : 'text-gray-400 hover:text-white'
            }`}
          >
            <span className="text-sm font-medium">USD</span>
          </button>
          <button
            onClick={toggleCurrency}
            className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
              currency === 'NGN' 
                ? 'bg-green-500 text-white shadow-lg' 
                : 'text-gray-400 hover:text-white'
            }`}
          >
            <span className="text-sm font-medium">NGN</span>
          </button>
        </div>
      </motion.div> */}

      {/* Services Section */}
      <motion.div
        className="mb-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn(0.1)}
      >
        <h2 className="text-3xl font-bold mb-4 text-center">Services &amp; Pricing</h2>
        <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto text-sm">
          Choose from three tiers based on your project needs. Each tier includes consultation and delivery.
        </p>

        <div className="space-y-16">
          {services.map((category, catIndex) => (
            <motion.div
              key={category.category}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn(0.1 + catIndex * 0.05)}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg border border-white/10 bg-white/5">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-semibold">{category.category}</h3>
              </div>

              <div className="space-y-6">
                {category.services.map((service, index) => (
                  <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                    <div className="mb-4">
                      <h4 className="font-semibold text-lg">{service.name}</h4>
                      <p className="text-sm text-gray-400">{service.description}</p>
                      {service.timeline && (
                        <p className="text-xs text-gray-500 mt-1 flex items-center gap-1">
                          <Clock size={12} />
                          {service.timeline}
                        </p>
                      )}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      {['basic', 'standard', 'premium'].map((tier) => {
                        const tierData = service.tiers[tier as keyof typeof service.tiers];
                        return (
                          <div
                            key={tier}
                            className={`border rounded-lg p-4 transition-all duration-300 hover:shadow-lg ${getTierColor(tier)}`}
                          >
                            <div className="flex items-center justify-between mb-2">
                              <div className="flex items-center gap-2">
                                <span className="text-sm font-semibold capitalize">{tier}</span>
                              </div>
                              <span className={`text-[10px] px-2 py-0.5 rounded-full ${getTierBadge(tier)}`}>
                                {tier === 'basic' ? 'Starter' : tier === 'standard' ? 'Popular' : 'Enterprise'}
                              </span>
                            </div>
                            <div className="text-lg font-bold" style={{ color: currency === 'USD' ? '#60a5fa' : '#34d399' }}>
                              {/* {currency === 'USD' ? '$' : '₦'} */}
                              {/* {formatCurrency(tierData.priceUSD, currency)} */}
                            </div>
                            <ul className="mt-3 space-y-1.5">
                              {tierData.features.map((feature: string, i: number) => (
                                <li key={i} className="flex items-start gap-1.5 text-xs text-gray-400">
                                  <CheckCircle size={12} className="text-green-400 mt-0.5 flex-shrink-0" />
                                  <span>{feature}</span>
                                </li>
                              ))}
                            </ul>
                            <button
                              onClick={() => {
                                setFormData({
                                  ...formData,
                                  category: category.category,
                                  service: service.name,
                                  tier: tier
                                });
                                setShowForm(true);
                              }}
                              className="w-full mt-3 py-1.5 text-xs rounded-lg transition-all duration-300 border border-white/10 hover:bg-white/10"
                            >
                              Select {tier.charAt(0).toUpperCase() + tier.slice(1)}
                            </button>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Quick Service Summary */}
      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn(0.2)}
      >
        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 text-center border border-white/5">
          <div className="text-2xl font-bold text-white/80">7</div>
          <div className="text-xs text-gray-400 mt-1">Service Categories</div>
        </div>
        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 text-center border border-white/5">
          <div className="text-2xl font-bold text-white/80">20+</div>
          <div className="text-xs text-gray-400 mt-1">Services</div>
        </div>
        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 text-center border border-white/5">
          <div className="text-2xl font-bold text-white/80">3</div>
          <div className="text-xs text-gray-400 mt-1">Tiers per Service</div>
        </div>
        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 text-center border border-white/5">
          <div className="text-2xl font-bold text-white/80">5+</div>
          <div className="text-xs text-gray-400 mt-1">Years Experience</div>
        </div>
      </motion.div>

      <motion.div
        className="mb-20 overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn(0.5)}
      >
        <h2 className="text-2xl font-semibold mb-6">Testimonials</h2>
        <div className="w-full overflow-hidden">
          <motion.div
            className="flex gap-6 w-max"
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          >
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <blockquote
                key={index}
                className="w-[280px] rounded-xl p-5 shadow-md border border-white/10 bg-white/5 backdrop-blur-sm text-white"
              >
                <p className="italic text-sm leading-relaxed text-gray-300">&ldquo;{testimonial.quote}&rdquo;</p>
                <div className="mt-3">
                  <p className="text-sm font-semibold text-blue-400">&mdash; {testimonial.name}</p>
                  {testimonial.title && (
                    <p className="text-xs text-gray-400 mt-1">{testimonial.title}</p>
                  )}
                </div>
              </blockquote>
            ))}
          </motion.div>
        </div>
      </motion.div>

      <motion.div 
        className="text-center border border-white/10 rounded-xl p-8 bg-white/5 backdrop-blur-sm" 
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
    </section>
  );
}