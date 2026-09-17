import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { PlayCircle, Lock, ChevronRight, Terminal, Check, Clock, Code2, Target } from 'lucide-react';
import { curriculum } from '../data/curriculum';

const Topics = () => {
  const { stageId } = useParams();
  const currentStage = curriculum[stageId] || curriculum['stage-03'];
  const topics = currentStage.lessons;
  const totalTopics = topics.length;
  const completedTopics = topics.filter(t => t.status === 'completed').length;
  const progressPercentage = Math.round((completedTopics / totalTopics) * 100);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full flex-grow relative z-10">
      <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3, ease: "easeOut" }}>
        <Link to={`/learn/python/stage/${currentStage.id}`} className="text-xs font-semibold text-slate-400 hover:text-indigo-500 mb-12 inline-flex items-center gap-2 transition-colors uppercase tracking-widest group focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-md px-2 py-1 -ml-2">
          <ChevronRight className="w-4 h-4 rotate-180 group-hover:-translate-x-1 transition-transform" />
          Return to Hub
        </Link>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5, type: "spring", bounce: 0.4 }}
        className="mb-16 flex flex-col md:flex-row md:items-end justify-between border-b border-slate-700/50 pb-10 gap-6 relative"
      >
        <div className="absolute -bottom-[2px] left-0 w-1/3 h-[3px] brand-gradient-bg rounded-full" />
        
        <div className="flex items-center gap-6">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-2 text-white tracking-tight">{currentStage.title}</h1>
            <p className="text-sm text-indigo-400 uppercase tracking-widest font-semibold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-indigo-500 shadow-[0_0_8px_rgba(99,102,241,0.6)]" />
              {currentStage.id.replace('-', ' ').toUpperCase()}
            </p>
          </div>
        </div>
        
        <div className="text-left md:text-right bg-surface border border-slate-700/50 shadow-sm px-6 py-4 rounded-2xl md:min-w-[200px]">
          <div className="flex items-end justify-start md:justify-end gap-2 mb-2">
            <div className="text-4xl font-bold text-white tracking-tight leading-none">{completedTopics}</div>
            <div className="text-xl text-slate-500 font-medium leading-none mb-0.5">/ {totalTopics}</div>
          </div>
          <div className="text-xs text-slate-400 uppercase tracking-widest font-semibold mb-3">Lessons Completed</div>
          <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
             <motion.div 
               initial={{ width: 0 }}
               animate={{ width: `${Math.max(progressPercentage, 2)}%` }}
               transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
               className="h-full brand-gradient-bg rounded-full"
             />
          </div>
        </div>
      </motion.div>

      <div className="flex flex-col gap-6 relative">
        {/* Timeline Journey Line */}
        <div className="absolute left-[3.25rem] top-10 bottom-10 w-[3px] bg-slate-800 z-0 hidden md:block rounded-full overflow-hidden">
          {/* Active portion of timeline */}
          <motion.div 
            initial={{ height: 0 }}
            animate={{ height: `${(completedTopics / (totalTopics - 1)) * 100}%` }} 
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="w-full bg-indigo-500/50 origin-top"
          />
        </div>
        
        {topics.map((topic, idx) => {
          const isLocked = topic.status === 'locked';
          const isCompleted = topic.status === 'completed';
          const isCurrent = topic.status === 'current';
          
          return (
            <motion.div 
              key={topic.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={{
                hidden: { opacity: 0, x: -30 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay: idx * 0.05, type: "spring", bounce: 0.3 } }
              }}
              className="relative z-10"
            >
              <Link 
                to={isLocked ? '#' : `/learn/python/stage/${currentStage.id}/lesson/${topic.id}`} 
                className={`block group ${isLocked ? 'cursor-not-allowed' : 'cursor-pointer'} focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-3xl`}
                aria-disabled={isLocked}
                tabIndex={isLocked ? -1 : 0}
              >
                <div 
                  className={`
                    modern-card p-6 md:p-8 rounded-3xl transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-6
                    ${isLocked ? 'bg-slate-900/40 border-slate-800/50 shadow-none' : ''}
                    ${isCompleted ? 'bg-surface border-slate-700/50 hover:border-slate-600' : ''}
                    ${isCurrent ? 'bg-surface border-indigo-500/50 hover:border-indigo-400 hover:shadow-card hover:-translate-y-1' : ''}
                  `}
                >
                  <div className="flex items-start md:items-center gap-6 md:gap-8 flex-1 relative">
                    
                    {/* Node Icon */}
                    <div 
                      className={`
                        w-14 h-14 rounded-2xl flex shrink-0 items-center justify-center transition-all duration-300 relative z-10
                        ${isLocked ? 'bg-slate-800/50 text-slate-500' : ''}
                        ${isCompleted ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : ''}
                        ${isCurrent ? 'bg-indigo-500/20 text-indigo-400 border border-indigo-500/40 group-hover:bg-indigo-500 group-hover:text-white group-hover:shadow-[0_0_20px_rgba(99,102,241,0.4)]' : ''}
                      `}
                    >
                      {isLocked && <Lock className="w-5 h-5 opacity-60" aria-label="Locked" />}
                      {isCompleted && <Check className="w-6 h-6" aria-label="Completed" />}
                      {isCurrent && <PlayCircle className="w-7 h-7" aria-label="Current Lesson" />}
                    </div>
                    
                    {/* Topic Info */}
                    <div className="flex-1 min-w-0">
                      <h3 
                        className={`text-xl font-semibold mb-1.5 transition-colors truncate
                          ${isLocked ? 'text-slate-400/80' : ''}
                          ${isCompleted ? 'text-slate-200' : ''}
                          ${isCurrent ? 'text-white group-hover:text-indigo-400' : ''}
                        `}
                      >
                        {topic.title}
                      </h3>
                      <div 
                        className={`text-xs font-mono font-semibold tracking-wider
                          ${isLocked ? 'text-slate-600' : 'text-slate-500'}
                        `}
                      >
                        LESSON {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                      </div>
                    </div>
                    
                    {/* Metadata (Hidden on very small screens) */}
                    <div className="hidden md:flex flex-wrap items-center gap-6 lg:gap-10 text-xs font-semibold uppercase tracking-widest mt-4 md:mt-0">
                      <span className={`flex items-center gap-2 ${isLocked ? 'text-slate-600' : 'text-slate-400'}`}>
                        <Clock className={`w-3.5 h-3.5 ${isLocked ? 'opacity-50' : ''}`} />
                        {topic.time}
                      </span>
                      <span className={`flex items-center gap-2 ${isLocked ? 'text-slate-600' : 'text-slate-400'}`}>
                        <Code2 className={`w-3.5 h-3.5 ${isLocked ? 'opacity-50' : ''}`} />
                        {topic.exercises}
                      </span>
                      <span className={`flex items-center gap-2 ${isLocked ? 'text-slate-600' : 'text-indigo-400'}`}>
                        <Target className={`w-3.5 h-3.5 ${isLocked ? 'opacity-50' : ''}`} />
                        {topic.difficulty}
                      </span>
                    </div>
                  </div>
                  
                  {/* Action Icon */}
                  {!isLocked && (
                    <div 
                      className={`
                        w-12 h-12 rounded-full flex items-center justify-center transition-all shrink-0 hidden sm:flex
                        ${isCurrent ? 'bg-indigo-500/10 text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white' : 'bg-surfaceHover text-slate-400 group-hover:bg-slate-700 group-hover:text-slate-200'}
                      `}
                    >
                      <ChevronRight className={`w-6 h-6 transition-transform ${isCurrent ? 'group-hover:translate-x-1' : ''}`} />
                    </div>
                  )}
                  {isLocked && (
                    <div className="w-12 h-12 rounded-full bg-transparent flex items-center justify-center shrink-0 hidden sm:flex">
                       {/* Empty placeholder for alignment */}
                    </div>
                  )}
                  
                  {/* Mobile Metadata */}
                  <div className="flex md:hidden items-center gap-4 text-[10px] font-semibold uppercase tracking-widest mt-2 border-t border-slate-800/50 pt-4">
                     <span className={`flex items-center gap-1.5 ${isLocked ? 'text-slate-600' : 'text-slate-400'}`}>
                        <Clock className="w-3 h-3" /> {topic.time}
                      </span>
                      <span className={`flex items-center gap-1.5 ${isLocked ? 'text-slate-600' : 'text-slate-400'}`}>
                        <Code2 className="w-3 h-3" /> {topic.exercises}
                      </span>
                  </div>

                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Topics;
