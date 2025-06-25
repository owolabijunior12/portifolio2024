"use client";
import { motion } from 'framer-motion';

export default function WorkspaceDemo() {
  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      {/* Desk Surface */}
      <motion.div 
        className="relative w-32 h-20 bg-gradient-to-br from-gray-600/20 to-gray-800/20 rounded-lg border border-gray-500/30 backdrop-blur-sm"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        {/* ESP32 Board */}
        <motion.div 
          className="absolute top-2 left-4 w-6 h-4 bg-green-600/80 rounded-sm border border-green-400/50"
          animate={{ 
            boxShadow: [
              '0 0 5px rgba(34, 197, 94, 0.3)', 
              '0 0 15px rgba(34, 197, 94, 0.6)', 
              '0 0 5px rgba(34, 197, 94, 0.3)'
            ] 
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          {/* LED indicators */}
          <div className="absolute top-0.5 left-1 w-1 h-1 bg-red-400 rounded-full animate-pulse"></div>
          <div className="absolute top-0.5 right-1 w-1 h-1 bg-blue-400 rounded-full animate-pulse delay-500"></div>
        </motion.div>

        {/* Animated Wiring */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 128 80">
          <motion.path
            d="M 25 10 Q 35 15 45 10 T 65 10"
            stroke="#10b981"
            strokeWidth="1"
            fill="none"
            strokeDasharray="2,2"
            animate={{
              strokeDashoffset: [0, -10],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          <motion.path
            d="M 25 15 Q 40 25 55 20 T 80 15"
            stroke="#3b82f6"
            strokeWidth="1"
            fill="none"
            strokeDasharray="2,2"
            animate={{
              strokeDashoffset: [0, -10],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "linear",
              delay: 0.5
            }}
          />
        </svg>

        {/* Breadboard */}
        <div className="absolute top-3 right-4 w-8 h-6 bg-yellow-100/20 border border-yellow-400/40 rounded-sm">
          <div className="grid grid-cols-4 gap-0.5 p-1">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="w-1 h-1 bg-gray-400/50 rounded-full"
                animate={{ opacity: [0.3, 0.8, 0.3] }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity, 
                  delay: i * 0.2 
                }}
              />
            ))}
          </div>
        </div>

        {/* Character Hands (simplified) */}
        <motion.div 
          className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-br from-orange-200/30 to-orange-300/30 rounded-full border border-orange-300/40"
          animate={{ 
            y: [0, -2, 0],
            rotate: [0, 5, -5, 0]
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {/* Tool in hand */}
          <div className="absolute top-1 left-3 w-2 h-4 bg-gray-500/50 rounded-sm transform rotate-12"></div>
        </motion.div>
      </motion.div>
    </div>
  );
}