/* eslint-disable react/jsx-no-comment-textnodes */
"use client";
import { motion } from 'framer-motion';
import { Code, Monitor, Wifi, Terminal } from "lucide-react";

export default function FloatingPanels() {
  return (
    <>
      {/* Floating UI Panels - Code Editor */}
      <motion.div 
        className="absolute top-20 left-10 w-64 h-40 bg-gray-900/80 backdrop-blur-md rounded-lg border border-gray-600/30 p-3"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <div className="flex items-center gap-2 mb-2">
          <Code className="w-4 h-4 text-green-400" />
          <span className="text-xs text-gray-300">editor.js</span>
        </div>
        <div className="space-y-1 text-xs font-mono">
          <motion.div 
            className="text-blue-300"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            const IoTDevice = () =&gt; {'{'}
          </motion.div>
          <motion.div 
            className="text-green-300 pl-4"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
          >
            return &lt;Sensor data={'{data}'} /&gt;
          </motion.div>
          <motion.div 
            className="text-blue-300"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
          >
            {'}'}
          </motion.div>
          <motion.div 
            className="text-orange-300"
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 3, repeat: Infinity, delay: 1 }}
          >
            // Real-time updates...
          </motion.div>
        </div>
      </motion.div>

      {/* Floating UI Panels - Web Dashboard */}
      <motion.div 
        className="absolute top-16 right-12 w-72 h-44 bg-gray-800/80 backdrop-blur-md rounded-lg border border-gray-600/30 p-3"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <div className="flex items-center gap-2 mb-2">
          <Monitor className="w-4 h-4 text-blue-400" />
          <span className="text-xs text-gray-300">IoT Dashboard</span>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div className="bg-blue-500/20 rounded p-2">
            <div className="text-xs text-gray-300">Temperature</div>
            <motion.div 
              className="text-lg font-bold text-blue-400"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              24.5°C
            </motion.div>
          </div>
          <div className="bg-green-500/20 rounded p-2">
            <div className="text-xs text-gray-300">Humidity</div>
            <motion.div 
              className="text-lg font-bold text-green-400"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2.5, repeat: Infinity }}
            >
              65%
            </motion.div>
          </div>
        </div>
        {/* Live Graph */}
        <div className="mt-2 h-12 bg-gray-700/50 rounded relative overflow-hidden">
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 280 48">
            <motion.path
              d="M 10 35 Q 70 20 140 35 T 270 35"
              stroke="#3b82f6"
              strokeWidth="2"
              fill="none"
              animate={{
                d: [
                  "M 10 35 Q 70 20 140 35 T 270 35",
                  "M 10 30 Q 70 25 140 30 T 270 30",
                  "M 10 35 Q 70 20 140 35 T 270 35"
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </svg>
        </div>
      </motion.div>

      {/* Floating UI Panels - Mobile App */}
      <motion.div 
        className="absolute bottom-32 left-16 w-32 h-56 bg-gray-900/90 backdrop-blur-md rounded-2xl border border-gray-600/40 p-2"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.5, duration: 1 }}
      >
        <div className="flex items-center justify-center gap-1 mb-2">
          <div className="w-12 h-1 bg-gray-600 rounded-full"></div>
        </div>
        <div className="space-y-2">
          <div className="flex items-center gap-2 p-1">
            <Wifi className="w-3 h-3 text-green-400" />
            <span className="text-xs text-gray-300">Connected</span>
          </div>
          <motion.div 
            className="bg-primary/20 rounded p-2"
            animate={{ backgroundColor: ['rgba(59, 130, 246, 0.2)', 'rgba(59, 130, 246, 0.4)', 'rgba(59, 130, 246, 0.2)'] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="text-xs text-blue-300">Device Status</div>
            <div className="text-xs font-bold text-blue-400">Online</div>
          </motion.div>
          <div className="grid grid-cols-2 gap-1">
            <motion.button 
              className="bg-green-500/30 text-green-400 text-xs p-1 rounded"
              whileTap={{ scale: 0.95 }}
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              LED ON
            </motion.button>
            <motion.button 
              className="bg-red-500/30 text-red-400 text-xs p-1 rounded"
              whileTap={{ scale: 0.95 }}
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
            >
              LED OFF
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Terminal Window */}
      <motion.div 
        className="absolute bottom-20 right-20 w-60 h-32 bg-black/80 backdrop-blur-md rounded-lg border border-green-500/30 p-3"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 3, duration: 1 }}
      >
        <div className="flex items-center gap-2 mb-2">
          <Terminal className="w-4 h-4 text-green-400" />
          <span className="text-xs text-green-400">esp32-monitor</span>
        </div>
        <div className="space-y-1 text-xs font-mono text-green-400">
          <motion.div
            animate={{ opacity: [0, 1] }}
            transition={{ delay: 3.5, duration: 0.5 }}
          >
            $ pio device monitor
          </motion.div>
          <motion.div
            animate={{ opacity: [0, 1] }}
            transition={{ delay: 4, duration: 0.5 }}
          >
            Sensor data: 24.5°C
          </motion.div>
          <motion.div
            animate={{ opacity: [0, 1] }}
            transition={{ delay: 4.5, duration: 0.5 }}
          >
            WiFi connected...
          </motion.div>
          <motion.div
            className="opacity-50"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1, repeat: Infinity, delay: 5 }}
          >
            █
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}