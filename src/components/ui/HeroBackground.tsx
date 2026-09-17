import React from 'react';
import { motion } from 'framer-motion';

const HeroBackground = ({ isDark = true }) => {
  return (
    <div className={`absolute inset-0 pointer-events-none -z-10 transition-colors duration-1000 overflow-hidden ${isDark ? 'bg-[#05050a]' : 'bg-white'}`}>
      {isDark && (
        <>
          <motion.div 
            animate={{ 
              x: ["33%", "40%", "33%"],
              y: ["-33%", "-40%", "-33%"]
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 right-0 w-[800px] h-[800px] bg-indigo-900/10 rounded-full mix-blend-screen filter blur-[120px] opacity-30 transform translate-x-1/3 -translate-y-1/3" 
          />
          <motion.div 
            animate={{ 
              x: ["-33%", "-20%", "-33%"],
              y: ["33%", "20%", "33%"]
            }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-900/10 rounded-full mix-blend-screen filter blur-[120px] opacity-20 transform -translate-x-1/3 translate-y-1/3" 
          />
          <motion.div 
            animate={{ 
              x: ["0%", "10%", "0%"],
              y: ["0%", "10%", "0%"]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-pink-900/5 rounded-full mix-blend-screen filter blur-[100px] opacity-20 transform -translate-x-1/2 -translate-y-1/2" 
          />
          <div className="absolute inset-0 bg-black/40" />
        </>
      )}
    </div>
  );
};

export default HeroBackground;
