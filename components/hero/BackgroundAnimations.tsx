"use client";
import { motion } from 'framer-motion';

export default function BackgroundAnimations() {
  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      {/* Base gradient circles */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/3 rounded-full blur-3xl animate-pulse delay-500"></div>

      {/* Circuit Pattern Background */}
      <svg className="absolute inset-0 w-full h-full opacity-5" viewBox="0 0 1000 1000">
        <defs>
          <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            <path d="M 10,50 L 90,50 M 50,10 L 50,90 M 30,30 L 70,30 M 30,70 L 70,70" 
                  stroke="currentColor" strokeWidth="1" fill="none"/>
            <circle cx="50" cy="50" r="3" fill="currentColor"/>
            <circle cx="30" cy="30" r="2" fill="currentColor"/>
            <circle cx="70" cy="70" r="2" fill="currentColor"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#circuit)"/>
      </svg>

      {/* Floating Particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-primary/20 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [-20, 20],
            opacity: [0.2, 0.8, 0.2],
            scale: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 3 + Math.random() * 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 2,
          }}
        />
      ))}

      {/* Data Flow Animation */}
      <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 1000 1000">
        <motion.path
          d="M 100,500 Q 300,200 500,500 T 900,500"
          stroke="url(#gradient)"
          strokeWidth="2"
          fill="none"
          strokeDasharray="10,5"
          animate={{
            strokeDashoffset: [0, -100],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
            <stop offset="50%" stopColor="#3b82f6" stopOpacity="1" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}