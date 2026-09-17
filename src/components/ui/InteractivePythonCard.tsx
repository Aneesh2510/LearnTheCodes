import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { XCircle, CheckCircle, Lightbulb, RefreshCw } from 'lucide-react';

const TypewriterLine = ({ children, delay = 0, duration = 1 }) => (
  <motion.div
    initial={{ width: 0, opacity: 0 }}
    animate={{ width: "100%", opacity: 1 }}
    transition={{ 
      width: { duration, delay, ease: "linear" },
      opacity: { duration: 0.1, delay }
    }}
    className="whitespace-pre overflow-hidden font-mono"
  >
    {children}
  </motion.div>
);

const InteractivePythonCard = ({ mouseX, mouseY, activeIndex = 0, isDark = true }) => {
  const steps = [
    {
      id: 'code',
      title: 'Code',
      duration: 5000,
      content: (
        <div className={`font-mono text-sm leading-relaxed transition-colors duration-1000 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
          <TypewriterLine delay={0.2} duration={1}>
            <span className="text-purple-400">def</span> <span className="text-blue-400">greet</span>(name):
          </TypewriterLine>
          <TypewriterLine delay={1.2} duration={1.5}>
            {'    '}<span className="text-blue-400">print</span>(<span className="text-emerald-400">"Hello "</span> + nam)
          </TypewriterLine>
          <div className="h-5" />
          <TypewriterLine delay={2.7} duration={1}>
            <span className="text-blue-400">greet</span>(<span className="text-emerald-400">"World"</span>)
          </TypewriterLine>
        </div>
      ),
      action: '▶ Run',
    },
    {
      id: 'error',
      title: 'Output',
      duration: 3000,
      content: (
        <motion.div 
          animate={{ x: [0, -4, 4, -3, 3, -1, 1, 0] }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="flex flex-col gap-2"
        >
          <div className="font-mono text-sm text-rose-400 flex items-center gap-2">
            <XCircle className="w-4 h-4" /> NameError
          </div>
          <div className="text-xs text-rose-300/80 font-mono">name 'nam' is not defined</div>
        </motion.div>
      ),
      action: 'Analyze Error',
    },
    {
      id: 'understand',
      title: 'Why did this happen?',
      duration: 4000,
      content: (
        <div className="flex items-start gap-3">
          <div className={`p-2 rounded-lg shrink-0 transition-colors duration-1000 ${isDark ? 'bg-indigo-900/30 text-indigo-400' : 'bg-indigo-50 text-indigo-500'}`}>
            <Lightbulb className="w-5 h-5" />
          </div>
          <p className={`text-sm leading-relaxed font-medium transition-colors duration-1000 ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
            <code className={`px-1.5 py-0.5 rounded transition-colors duration-1000 ${isDark ? 'bg-slate-800 text-slate-200' : 'bg-slate-100 text-slate-800'}`}>"nam"</code> does not match the variable <code className={`px-1.5 py-0.5 rounded transition-colors duration-1000 ${isDark ? 'bg-slate-800 text-slate-200' : 'bg-slate-100 text-slate-800'}`}>"name"</code>.
          </p>
        </div>
      ),
      action: 'Fix Code',
    },
    {
      id: 'fix',
      title: 'Fix',
      duration: 4000,
      content: (
        <div className={`font-mono text-sm leading-relaxed transition-colors duration-1000 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
          <div>
            <span className="text-purple-400">def</span> <span className="text-blue-400">greet</span>(name):
          </div>
          <TypewriterLine delay={0.2} duration={1.5}>
            <span className={`transition-colors duration-1000 rounded-sm ${isDark ? 'bg-indigo-900/40 text-indigo-100' : 'bg-indigo-50 text-indigo-900'}`}>
              {'    '}<span className="text-blue-400">print</span>(<span className="text-emerald-400">"Hello "</span> + name)
            </span>
          </TypewriterLine>
          <div className="h-5" />
          <div>
            <span className="text-blue-400">greet</span>(<span className="text-emerald-400">"World"</span>)
          </div>
        </div>
      ),
      action: '▶ Run Again',
    },
    {
      id: 'success',
      title: 'Output',
      duration: 2500,
      content: (
        <motion.div 
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="flex items-center gap-2 font-mono text-sm text-emerald-400"
        >
          <CheckCircle className="w-4 h-4" /> Hello World
        </motion.div>
      ),
      action: 'Done',
    },
    {
      id: 'iterate',
      title: '',
      duration: 4000,
      content: (
        <div className="flex items-center justify-center w-full h-full absolute inset-0">
          <motion.div
            initial={{ scale: 0.9, rotate: -90, opacity: 0 }}
            animate={{ scale: 1, rotate: 0, opacity: 1 }}
            exit={{ scale: 0.9, rotate: 90, opacity: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className={`flex flex-col items-center gap-4 transition-colors duration-1000 ${isDark ? 'text-indigo-400' : 'text-indigo-500'}`}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            >
              <RefreshCw className="w-10 h-10 opacity-80" />
            </motion.div>
            <div className="text-xl font-black tracking-[0.25em] brand-gradient-text uppercase">
              ITERATE
            </div>
          </motion.div>
        </div>
      ),
      action: 'Restart ↻',
    }
  ];

  const currentStep = steps[activeIndex];
  const isIterating = currentStep.id === 'iterate';

  return (
    <motion.div
      style={{
        rotateX: mouseY ? mouseY : 0,
        rotateY: mouseX ? mouseX : 0,
        transformStyle: "preserve-3d",
      }}
      className={`w-full max-w-[400px] mx-auto rounded-2xl overflow-hidden shadow-[0_16px_40px_-12px_rgba(0,0,0,0.5)] border relative backdrop-blur-md transition-colors duration-1000 flex flex-col min-h-[260px] ${isDark ? 'bg-[#0f111a]/80 border-white/5' : 'bg-white/90 border-slate-200'}`}
    >
      {/* Decorative top bar */}
      <div className={`border-b px-5 py-3.5 flex items-center justify-between z-10 transition-colors duration-1000 ${isDark ? 'bg-black/20 border-white/5' : 'bg-slate-50 border-slate-100'}`}>
        <div className="flex gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
        </div>
      </div>

      <div className="p-7 relative min-h-[170px] flex-grow flex flex-col justify-center overflow-hidden">
        <AnimatePresence mode="wait">
          {!isIterating && (
            <motion.div
              key={currentStep.id}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.3 }}
              className="w-full h-full flex flex-col"
            >
              <h2 className={`text-[10px] font-bold uppercase tracking-widest mb-4 transition-colors duration-1000 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                {currentStep.title}
              </h2>
              <div className="w-full text-sm">
                {currentStep.content}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Swirl Effect strictly for Iterating state */}
        <AnimatePresence>
          {isIterating && currentStep.content}
        </AnimatePresence>
      </div>

      <div className={`border-t px-7 py-4 flex justify-end z-10 min-h-[50px] transition-colors duration-1000 ${isDark ? 'bg-black/20 border-white/5' : 'bg-slate-50 border-slate-100'}`}>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className={`text-[11px] font-bold uppercase tracking-wider transition-colors duration-1000 ${isDark ? 'text-indigo-400/80' : 'text-indigo-500'}`}
          >
            {currentStep.action}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Glossy reflection effect overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/0 pointer-events-none rounded-2xl z-20 mix-blend-overlay" />
    </motion.div>
  );
};

export default InteractivePythonCard;
