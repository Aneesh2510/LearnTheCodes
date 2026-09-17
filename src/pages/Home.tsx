// @ts-nocheck
import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import SpatialButton from '../components/spatial/SpatialButton';
import { Link } from 'react-router-dom';
import { TerminalSquare } from 'lucide-react';
import ScrambleText from '../components/ui/ScrambleText';
import InteractivePythonCard from '../components/ui/InteractivePythonCard';
import HeroBackground from '../components/ui/HeroBackground';
import IterationLoopVisual from '../components/ui/IterationLoopVisual';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, filter: 'blur(10px)' },
  show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { type: "spring", stiffness: 100, damping: 20 } }
};

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const isDark = true;

  const stepDurations = [5000, 3000, 4000, 4000, 2500, 4000];

  useEffect(() => {
    let timeout;
    const runTimer = (index) => {
      timeout = setTimeout(() => {
        setActiveIndex((prev) => (prev + 1) % stepDurations.length);
      }, stepDurations[index]);
    };
    runTimer(activeIndex);
    return () => clearTimeout(timeout);
  }, [activeIndex]);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150, mass: 0.5 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);
  
  const textX = useTransform(smoothMouseX, [-0.5, 0.5], [-4, 4]);
  const textY = useTransform(smoothMouseY, [-0.5, 0.5], [-4, 4]);
  const cardRotateX = useTransform(smoothMouseY, [-0.5, 0.5], [2, -2]);
  const cardRotateY = useTransform(smoothMouseX, [-0.5, 0.5], [-2, 2]);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    mouseX.set((clientX / innerWidth) - 0.5);
    mouseY.set((clientY / innerHeight) - 0.5);
  };
  
  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div 
      className="flex-grow flex flex-col relative w-full min-h-screen overflow-hidden z-10"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <HeroBackground isDark={isDark} />
      
      <motion.div 
        className="max-w-[1400px] mx-auto w-full px-6 lg:px-12 pt-32 lg:pt-0 pb-16 lg:pb-0 z-20 flex-grow flex items-center justify-center min-h-screen"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center w-full mt-10 lg:mt-0">
          
          {/* Typography & CTAs (Left Side) */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="flex flex-col items-start text-left max-w-2xl"
          >
            <motion.div variants={itemVariants} style={{ x: textX, y: textY }} className="mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 backdrop-blur-sm text-xs md:text-sm font-bold tracking-widest text-indigo-300 uppercase">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-50"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                </span>
                <ScrambleText text="LEARN THROUGH ITERATION" />
              </div>
            </motion.div>
            
            <motion.h1 variants={itemVariants} style={{ x: textX, y: textY }} className={`text-[clamp(3.5rem,6vw,6rem)] font-extrabold tracking-tighter mb-6 drop-shadow-sm leading-[1.02] transition-colors duration-1000 ${isDark ? 'text-white' : 'text-slate-900'}`}>
              <ScrambleText text="Don't Just Learn Code." /><br/>
              <ScrambleText text="Understand It." className="brand-gradient-text drop-shadow-sm" />
            </motion.h1>
            
            <motion.p variants={itemVariants} className={`text-lg font-medium mb-10 max-w-[55ch] leading-[1.7] transition-colors duration-1000 ${isDark ? 'text-slate-300' : 'text-slate-500'}`}>
              <ScrambleText text="LearnTheCodes is an interactive workspace for beginners and self-taught developers. Learn Python through step-by-step lessons, real code, mistakes, and iteration until it clicks." />
            </motion.p>
            
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto items-center">
              <Link to="/register" className="w-full sm:w-auto focus:outline-none rounded-2xl focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-black">
                <SpatialButton className="w-full sm:w-auto px-8 py-4 text-base font-semibold bg-indigo-500 hover:bg-indigo-600 text-white shadow-[0_4px_20px_rgba(99,102,241,0.3)] hover:shadow-[0_8px_30px_rgba(99,102,241,0.5)] hover:-translate-y-[2px] active:translate-y-[1px] active:shadow-sm transition-all duration-300 rounded-2xl flex items-center justify-center group tracking-tight">
                  Begin Learning
                  <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
                </SpatialButton>
              </Link>
              <Link to="/learn/python/stage/stage-01" className="w-full sm:w-auto focus:outline-none rounded-2xl focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 focus:ring-offset-black">
                <SpatialButton className="w-full sm:w-auto px-8 py-4 text-base font-semibold group bg-white/5 hover:bg-white/10 text-white/80 hover:text-white backdrop-blur-lg border border-white/10 hover:border-white/30 shadow-[0_4px_20px_rgba(0,0,0,0.1)] hover:-translate-y-[1px] active:translate-y-[1px] transition-all duration-300 rounded-2xl flex items-center justify-center tracking-tight">
                  <TerminalSquare className="w-5 h-5 mr-3 text-white/50 group-hover:text-white/80 transition-colors" />
                  View Topics
                </SpatialButton>
              </Link>
            </motion.div>
          </motion.div>

          {/* Interactive Visualization (Right Side) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, filter: 'blur(20px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            transition={{ delay: 0.8, duration: 1, type: "spring", bounce: 0.3 }}
            className="flex flex-col items-center justify-center w-full relative"
          >
            <InteractivePythonCard mouseX={cardRotateY} mouseY={cardRotateX} activeIndex={activeIndex} isDark={isDark} />
            <IterationLoopVisual activeIndex={activeIndex} isDark={isDark} />
          </motion.div>

        </div>
      </motion.div>
    </div>
  );
};

export default Home;
