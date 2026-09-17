import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Circle, Clock, Code2, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';

const PythonLogo = ({ className }) => (
  <svg className={className} viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Python Logo">
    <path d="M63.784 4.542C30.344 4.542 25.105 19.825 25.105 19.825L24.877 43.149H64.811V48.74H15.021S-1.503 47.16 -1.503 76.541c0 29.38 14.52 28.324 14.52 28.324h10.021V86.745s-.351-17.72 17.51-17.72h32.22s16.711-.271 16.711-17.262V22.257s1.392-17.715-25.695-17.715z" fill="url(#python-blue)" />
    <path d="M64.216 123.458c33.44 0 38.679-15.283 38.679-15.283l.228-23.324H63.189v-5.59h49.79s16.524 1.58 16.524-27.801c0-29.38-14.52-28.324-14.52-28.324H104.96v18.12s.351 17.72-17.51 17.72H55.23s-16.711.271-16.711 17.262v29.506s-1.392 17.715 25.695 17.715z" fill="url(#python-yellow)" />
    <circle cx="43.513" cy="18.155" r="5.626" fill="#fff" />
    <circle cx="84.487" cy="109.845" r="5.626" fill="#fff" />
    <defs>
      <linearGradient id="python-blue" x1="16.505" y1="14.398" x2="68.455" y2="60.672" gradientUnits="userSpaceOnUse">
        <stop stopColor="#387EB8" />
        <stop offset="1" stopColor="#366994" />
      </linearGradient>
      <linearGradient id="python-yellow" x1="110.822" y1="113.626" x2="57.777" y2="66.604" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FFE052" />
        <stop offset="1" stopColor="#FFC331" />
      </linearGradient>
    </defs>
  </svg>
);

const Dashboard = () => {
  return (
    <div className="flex-grow flex flex-col relative w-full h-full max-w-[1000px] mx-auto px-6 lg:px-12 pt-24 z-10 pb-20">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, type: "spring", bounce: 0.4 }}
        className="mb-12 pb-8 border-b border-slate-800 relative flex flex-col md:flex-row md:items-end justify-between gap-6"
      >
        <div className="absolute -bottom-[2px] left-0 w-1/4 h-[3px] brand-gradient-bg rounded-full opacity-70" />
        
        <div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-2 drop-shadow-sm font-satoshi">Your Python Journey</h1>
          <p className="text-sm text-slate-400 font-medium">Learn. Practice. Break. Understand. Iterate.</p>
        </div>
        
        <div className="bg-slate-900 border border-slate-800 px-4 py-2 rounded-xl flex items-center justify-center shrink-0 shadow-sm">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Your Python Path</span>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5, delay: 0.1, type: "spring", bounce: 0.4 }}
        className="w-full"
      >
        <div className="modern-card w-full p-6 md:p-10 lg:p-12 flex flex-col transition-all duration-300 relative overflow-hidden rounded-3xl bg-surface border border-slate-700/50 hover:border-indigo-500/50 hover:shadow-card group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-[80px] -mr-32 -mt-32 group-hover:bg-indigo-500/20 transition-colors duration-700 pointer-events-none" />
          
          <div className="flex flex-col lg:flex-row gap-12 relative z-10">
            {/* Left Column: Title & Progress */}
            <div className="flex-1 flex flex-col">
              <div className="flex flex-col sm:flex-row sm:items-center gap-6 mb-10">
                <div className="w-16 h-16 sm:w-20 sm:h-20 shrink-0 rounded-2xl bg-[#2A3441]/50 border border-slate-700 flex items-center justify-center shadow-lg">
                  <PythonLogo className="w-10 h-10 sm:w-12 sm:h-12 drop-shadow-md" />
                </div>
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2 tracking-tight">Stage 04</h2>
                  <p className="text-sm sm:text-base text-slate-400 font-medium max-w-sm">Loops & Iteration</p>
                </div>
              </div>

              <div className="mb-10">
                <div className="flex justify-between items-end mb-4 max-w-[420px]">
                  <div className="flex flex-col gap-1">
                    <span className="text-2xl font-bold text-white tracking-tight">0% <span className="text-sm font-semibold text-slate-500 uppercase tracking-widest ml-2">Complete</span></span>
                  </div>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">0 / 12 Topics</span>
                </div>
                <div className="w-full max-w-[420px] h-2 bg-slate-800 rounded-full overflow-hidden shadow-inner relative">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: "2%" }} // Mock small progress indicator for 0
                    transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
                    className="h-full brand-gradient-bg rounded-full relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-white/20 -skew-x-12 -translate-x-full animate-[shimmer_2s_infinite]" />
                  </motion.div>
                </div>
              </div>

              {/* Current Topic Section */}
              <div className="bg-slate-900/40 border border-slate-800/80 rounded-2xl p-5 md:p-6 mb-10 max-w-[420px]">
                <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                   <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse shadow-[0_0_8px_rgba(99,102,241,0.8)]" />
                   Current Lesson
                </span>
                <h3 className="text-xl font-bold text-white mb-3">Why Loops Exist</h3>
                <div className="flex items-center gap-5 text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                  <span className="flex items-center gap-2"><Code2 className="w-3.5 h-3.5" /> Lesson 1</span>
                  <span className="flex items-center gap-2"><Clock className="w-3.5 h-3.5" /> 15 min</span>
                </div>
              </div>

              <div className="mt-auto">
                <Link to="/topics/stage-04" className="inline-flex group/btn focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-2xl">
                  <div className="px-7 py-3.5 bg-white/5 hover:bg-white/10 text-white text-sm font-semibold rounded-2xl border border-white/10 hover:border-indigo-500/40 transition-all duration-300 flex items-center gap-3 shadow-lg hover:shadow-[0_4px_20px_rgba(99,102,241,0.15)]">
                    Continue Learning
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </div>
            </div>

            {/* Right Column: Path Preview */}
            <div className="hidden lg:flex flex-col w-64 shrink-0 border-l border-slate-800/60 pl-10 pt-4">
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-8">Path Preview</span>
              
              <div className="flex flex-col relative">
                {/* Connecting Line */}
                <div className="absolute left-[11px] top-4 bottom-8 w-[2px] bg-slate-800" />
                <div className="absolute left-[11px] top-4 h-[44px] w-[2px] bg-indigo-500/50" />
                
                <div className="flex items-start gap-4 mb-6 relative z-10">
                  <CheckCircle2 className="w-6 h-6 text-emerald-500 bg-surface shrink-0" />
                  <span className="text-sm font-medium text-slate-400 pt-0.5 line-through decoration-slate-600">Variables</span>
                </div>
                
                <div className="flex items-start gap-4 mb-6 relative z-10">
                  <div className="w-6 h-6 rounded-full border-2 border-indigo-500 bg-surface flex items-center justify-center shrink-0 shadow-[0_0_10px_rgba(99,102,241,0.2)]">
                    <div className="w-2 h-2 rounded-full bg-indigo-500" />
                  </div>
                  <span className="text-sm font-bold text-white pt-0.5">Data Types</span>
                </div>
                
                <div className="flex items-start gap-4 mb-6 relative z-10">
                  <Circle className="w-6 h-6 text-slate-700 bg-surface shrink-0" />
                  <span className="text-sm font-medium text-slate-500 pt-0.5">Input & Output</span>
                </div>
                
                <div className="flex items-start gap-4 mb-6 relative z-10">
                  <Lock className="w-5 h-5 text-slate-700 bg-surface shrink-0 ml-0.5" />
                  <span className="text-sm font-medium text-slate-600 pt-0.5 ml-0.5">Conditions</span>
                </div>
                
                <div className="flex items-start gap-4 mb-6 relative z-10">
                  <Lock className="w-5 h-5 text-slate-700 bg-surface shrink-0 ml-0.5" />
                  <span className="text-sm font-medium text-slate-600 pt-0.5 ml-0.5">Loops</span>
                </div>
                
                <div className="flex items-start gap-4 relative z-10">
                  <Lock className="w-5 h-5 text-slate-700 bg-surface shrink-0 ml-0.5" />
                  <span className="text-sm font-medium text-slate-600 pt-0.5 ml-0.5">Functions</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Dashboard;
