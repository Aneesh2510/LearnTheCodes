import React from 'react';
import { motion } from 'framer-motion';
import { RefreshCw, ArrowRight } from 'lucide-react';

const loopSteps = ['Understand', 'Write', 'Error', 'Learn', 'Fix'];

const IterationLoopVisual = ({ activeIndex = 0, isDark = true }) => {
  const isPillActive = (step) => {
    if (activeIndex === 0 && step === 'Write') return true;
    if (activeIndex === 1 && step === 'Error') return true;
    if (activeIndex === 2 && (step === 'Understand' || step === 'Learn')) return true;
    if (activeIndex === 3 && step === 'Fix') return true;
    if (activeIndex === 4 && step === 'Fix') return true;
    return false;
  };

  return (
    <div className="relative w-full max-w-[450px] mt-10 mx-auto flex flex-col items-center justify-center">
      <div className="flex items-center justify-center gap-1.5 md:gap-2 flex-wrap">
        {loopSteps.map((step, index) => (
          <React.Fragment key={step}>
            <motion.div
              animate={{ 
                opacity: isPillActive(step) ? 1 : 0.45,
                scale: isPillActive(step) ? 1.02 : 1,
                backgroundColor: isPillActive(step) 
                  ? (isDark ? 'rgba(99, 102, 241, 0.15)' : 'rgba(238, 242, 255, 0.9)') 
                  : 'transparent',
                borderColor: isPillActive(step) 
                  ? (isDark ? 'rgba(129, 140, 248, 0.5)' : 'rgba(199, 210, 254, 1)') 
                  : (isDark ? 'rgba(51, 65, 85, 0.4)' : 'rgba(226, 232, 240, 0.6)'),
                color: isPillActive(step) 
                  ? (isDark ? '#ffffff' : '#4f46e5') 
                  : (isDark ? '#cbd5e1' : '#64748b'),
                boxShadow: isPillActive(step) && isDark ? '0 0 10px rgba(99,102,241,0.3)' : 'none'
              }}
              transition={{ duration: 0.5 }}
              className={`px-3 py-1.5 rounded-full backdrop-blur-md border text-[10px] md:text-xs font-semibold uppercase tracking-widest ${isPillActive(step) ? 'shadow-sm' : ''}`}
            >
              {step}
            </motion.div>
            {index < loopSteps.length - 1 && (
              <motion.div
                animate={{ opacity: isPillActive(step) || isPillActive(loopSteps[index+1]) ? 0.8 : 0.3 }}
                transition={{ duration: 0.5 }}
                className={`transition-colors duration-1000 ${isDark ? 'text-slate-500' : 'text-slate-300'}`}
              >
                <ArrowRight className="w-3 h-3" />
              </motion.div>
            )}
          </React.Fragment>
        ))}
      </div>
      
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className={`mt-6 text-sm font-medium tracking-wide transition-colors duration-1000 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}
      >
        Write it. Break it. Understand it. Try again.
      </motion.p>
      
      <motion.div 
        animate={{ 
          opacity: activeIndex === 5 ? 1 : 0.45,
          scale: activeIndex === 5 ? 1.02 : 1,
        }}
        transition={{ duration: 0.6 }}
        className="mt-6 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          className={activeIndex === 5 ? "text-indigo-400 drop-shadow-[0_0_8px_rgba(129,140,248,0.4)]" : "text-indigo-400/50"}
        >
          <RefreshCw className="w-5 h-5" />
        </motion.div>
        <span className={`text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase transition-colors duration-500 ${activeIndex === 5 ? 'brand-gradient-text drop-shadow-sm' : 'text-slate-400'}`}>
          Iterate
        </span>
      </motion.div>
    </div>
  );
};

export default IterationLoopVisual;
