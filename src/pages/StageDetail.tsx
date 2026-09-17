import React from 'react';
import { motion } from 'framer-motion';
import { Link, useParams, Navigate } from 'react-router-dom';
import { PlayCircle, Lock, ChevronRight, Check, Clock, Code2, ArrowRight } from 'lucide-react';
import { curriculum } from '../data/curriculum';
import { curriculumService } from '../services/curriculumService';
import { getLessonRoute, getStageRoute } from '../services/routeService';
import StageSelector from '../components/StageSelector';

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

const StageDetail = () => {
  const { stageId } = useParams();
  
  // If no stageId or invalid, redirect to stage-01
  const stage = curriculumService.getStageById(stageId);
  if (!stage) {
    return <Navigate to={getStageRoute('stage-01')} replace />;
  }
  const topics = stage.lessons || [];
  const totalTopics = topics.length;
  const completedTopics = topics.filter(t => t.status === 'completed').length;
  const progressPercentage = totalTopics > 0 ? Math.round((completedTopics / totalTopics) * 100) : 0;

  // Determine "Current Lesson" (first incomplete)
  const currentLessonIndex = topics.findIndex(t => t.status !== 'completed');
  const currentLesson = currentLessonIndex >= 0 ? topics[currentLessonIndex] : null;
  const isStageComplete = currentLessonIndex === -1;
  const nextLessonUrl = currentLesson 
    ? getLessonRoute(stage.id, currentLesson.id)
    : getStageRoute(stage.id);

  return (
    <div className="flex-grow flex flex-col relative w-full h-full max-w-[1200px] mx-auto px-4 md:px-6 lg:px-12 pt-24 z-10 pb-20">
      
      {/* HEADER ROW */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, type: "spring", bounce: 0.4 }}
        className="mb-8 md:mb-12 pb-6 md:pb-8 border-b border-slate-800 relative flex flex-col md:flex-row md:items-end justify-between gap-6"
      >
        <div className="absolute -bottom-[2px] left-0 w-1/4 h-[3px] brand-gradient-bg rounded-full opacity-70" />
        
        <div>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-2 drop-shadow-sm font-satoshi">
            {stage.title}
          </h1>
          <p className="text-sm md:text-base text-slate-400 font-medium max-w-xl">
            {stage.description}
          </p>
        </div>
        
        <div className="flex items-center gap-4 shrink-0">
          <StageSelector curriculum={curriculum} currentStageId={stage.id} />
        </div>
      </motion.div>

      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
        {/* LEFT COLUMN: Stage Overview & Current Progress */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="lg:w-1/3 flex flex-col gap-6"
        >
          {/* Progress Card */}
          <div className="modern-card p-6 md:p-8 rounded-3xl bg-surface border border-slate-700/50 shadow-sm relative overflow-hidden">
             <div className="absolute top-0 right-0 w-48 h-48 bg-indigo-500/10 rounded-full blur-[60px] -mr-24 -mt-24 pointer-events-none" />
             
             <div className="flex items-center gap-4 mb-8 relative z-10">
               <div className="w-14 h-14 rounded-2xl bg-[#2A3441]/80 border border-slate-700 flex items-center justify-center shadow-lg shrink-0">
                  <PythonLogo className="w-8 h-8 drop-shadow-md" />
               </div>
               <div>
                 <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Stage {stage.number}</div>
                 <div className="text-lg font-bold text-white leading-tight">{stage.subtitle || stage.title}</div>
               </div>
             </div>

             <div className="mb-8 relative z-10">
               <div className="flex justify-between items-end mb-3">
                 <div className="text-3xl font-bold text-white tracking-tight leading-none">
                   {progressPercentage}%
                 </div>
                 <div className="text-[10px] sm:text-xs font-bold text-slate-500 uppercase tracking-widest mb-0.5">
                   {completedTopics} / {totalTopics} Lessons
                 </div>
               </div>
               <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden shadow-inner relative">
                 <motion.div 
                   initial={{ width: 0 }}
                   animate={{ width: `${Math.max(progressPercentage, 2)}%` }}
                   transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                   className="h-full brand-gradient-bg rounded-full relative overflow-hidden"
                 >
                    {progressPercentage > 0 && progressPercentage < 100 && (
                      <div className="absolute inset-0 bg-white/20 -skew-x-12 -translate-x-full animate-[shimmer_2s_infinite]" />
                    )}
                 </motion.div>
               </div>
             </div>

             {/* Action Button */}
             <Link 
               to={nextLessonUrl} 
               className="relative z-10 w-full inline-flex justify-center items-center gap-3 py-3.5 bg-white/5 hover:bg-white/10 text-white text-sm font-semibold rounded-2xl border border-white/10 hover:border-indigo-500/40 transition-all shadow-md group"
             >
               {isStageComplete ? 'Review Stage' : 'Continue Learning'}
               {!isStageComplete && <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
             </Link>
          </div>

          {/* Current Lesson Banner (if not complete) */}
          {!isStageComplete && currentLesson && (
            <div className="bg-slate-900/40 border border-slate-800/80 rounded-3xl p-6 relative overflow-hidden group hover:border-indigo-500/30 transition-colors shadow-sm">
              <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                 <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse shadow-[0_0_8px_rgba(99,102,241,0.8)]" />
                 Up Next
              </span>
              <h3 className="text-xl font-bold text-white mb-3 leading-snug group-hover:text-indigo-300 transition-colors">{currentLesson.title}</h3>
              <div className="flex items-center gap-4 text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                <span className="flex items-center gap-1.5"><Code2 className="w-3.5 h-3.5" /> Lesson {currentLessonIndex + 1}</span>
                <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> {currentLesson.time}</span>
              </div>
            </div>
          )}

          {/* Stage Overview Metadata */}
          <div className="p-6 rounded-3xl bg-surface/30 border border-slate-800/50 shadow-sm">
             <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">Stage Info</h4>
             <ul className="flex flex-col gap-3 text-sm text-slate-400">
               <li className="flex justify-between"><span>Difficulty:</span> <span className="text-white font-medium">{stage.difficulty}</span></li>
               <li className="flex justify-between"><span>Est. Time:</span> <span className="text-white font-medium">{stage.estimatedTime}</span></li>
               <li className="flex justify-between"><span>Prerequisites:</span> <span className="text-white font-medium">{stage.prerequisites.length > 0 ? `Stage ${curriculum[stage.prerequisites[0]]?.number}` : 'None'}</span></li>
             </ul>
          </div>
        </motion.div>

        {/* RIGHT COLUMN: Path Preview (Lesson List) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="lg:w-2/3 flex flex-col relative pb-10"
        >
          <div className="mb-6 flex items-center justify-between">
            <h3 className="text-lg font-bold text-white uppercase tracking-widest">Learning Path</h3>
          </div>

          <div className="flex flex-col gap-4 relative">
             {/* Vertical line connecting nodes */}
             <div className="absolute left-[1.65rem] sm:left-[1.9rem] top-8 bottom-8 w-[2px] bg-slate-800/80 z-0 hidden sm:block" />
             
             {topics.map((topic, idx) => {
               // Resolve Status
               let topicStatus = topic.status;
               if (topicStatus !== 'locked') {
                 if (idx < currentLessonIndex || isStageComplete) topicStatus = 'completed';
                 else if (idx === currentLessonIndex) topicStatus = 'current';
                 else topicStatus = 'available'; 
               }

               const isCompleted = topicStatus === 'completed';
               const isCurrent = topicStatus === 'current';
               const isLocked = topicStatus === 'locked';

               return (
                 <Link 
                   key={topic.id}
                   to={isLocked ? '#' : getLessonRoute(stage.id, topic.id)}
                   className={`relative z-10 block group rounded-2xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500
                     ${isLocked ? 'cursor-not-allowed opacity-75' : 'cursor-pointer'}
                     ${isCurrent ? 'sm:-ml-2' : ''}
                   `}
                 >
                   <div className={`
                     flex items-center gap-4 sm:gap-6 p-4 sm:p-5 rounded-2xl border transition-colors shadow-sm
                     ${isLocked ? 'bg-slate-900/30 border-slate-800/50' : ''}
                     ${isCompleted ? 'bg-surface/50 border-slate-800 hover:border-slate-600 hover:bg-surface' : ''}
                     ${isCurrent ? 'bg-surface border-indigo-500/40 hover:border-indigo-400 shadow-md transform sm:scale-[1.02]' : ''}
                     ${topicStatus === 'available' ? 'bg-surface/30 border-slate-800/80 hover:border-slate-700 hover:bg-surface/50' : ''}
                   `}>
                      {/* Icon Node */}
                      <div className={`
                        w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center shrink-0 transition-colors
                        ${isLocked ? 'bg-slate-800/50 text-slate-500' : ''}
                        ${isCompleted ? 'bg-emerald-500/10 text-emerald-400' : ''}
                        ${isCurrent ? 'bg-indigo-500/20 text-indigo-400 ring-1 ring-indigo-500/50 shadow-[0_0_15px_rgba(99,102,241,0.2)]' : ''}
                        ${topicStatus === 'available' ? 'bg-slate-800/50 text-slate-400 group-hover:text-white' : ''}
                      `}>
                        {isCompleted && <Check className="w-5 h-5 sm:w-6 sm:h-6" />}
                        {isCurrent && <PlayCircle className="w-5 h-5 sm:w-6 sm:h-6" />}
                        {isLocked && <Lock className="w-4 h-4 sm:w-5 sm:h-5" />}
                        {topicStatus === 'available' && <span className="text-xs sm:text-sm font-bold">{idx + 1}</span>}
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-4">
                          <h4 className={`text-sm sm:text-base font-semibold truncate transition-colors
                            ${isLocked ? 'text-slate-500' : ''}
                            ${isCompleted ? 'text-slate-300' : ''}
                            ${isCurrent ? 'text-white' : ''}
                            ${topicStatus === 'available' ? 'text-slate-400 group-hover:text-slate-200' : ''}
                          `}>
                            {topic.title}
                          </h4>
                          
                          <div className="hidden sm:flex items-center gap-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest shrink-0">
                            <span className="flex items-center gap-1.5"><Clock className="w-3 h-3" /> {topic.time}</span>
                          </div>
                        </div>
                        <div className={`text-[10px] sm:text-xs font-semibold uppercase tracking-widest mt-1
                          ${isCurrent ? 'text-indigo-400' : 'text-slate-600'}
                        `}>
                          Lesson {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                        </div>
                      </div>
                      
                      {/* Arrow */}
                      {!isLocked && (
                        <div className={`shrink-0 ml-2 hidden sm:block ${isCurrent ? 'text-indigo-400' : 'text-slate-600 group-hover:text-slate-400'}`}>
                          <ChevronRight className="w-5 h-5" />
                        </div>
                      )}
                   </div>
                 </Link>
               );
             })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default StageDetail;
