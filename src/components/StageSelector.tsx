// Legacy presentation component retained during the behavior-preserving migration.
// @ts-nocheck
// Legacy presentation component retained during the behavior-preserving migration.
// @ts-nocheck
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Lock, ChevronDown, Circle, PlayCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const StageSelector = ({ curriculum, currentStageId }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  // Convert curriculum object to array and sort by stage id (which works since they are zero-padded like stage-01)
  const stages = Object.values(curriculum).sort((a, b) => a.id.localeCompare(b.id));

  // Helper to determine stage status
  const getStageStatus = (stage) => {
    // Check prerequisites
    const prereqsMet = (stage.prerequisites || []).every(reqId => {
      const reqStage = curriculum[reqId];
      if (!reqStage) return true; // safety
      const allLessonsCompleted = (reqStage.lessons || []).every(l => l.status === 'completed');
      return allLessonsCompleted || reqStage.status === 'completed'; 
    });

    if (!prereqsMet) return 'locked';
    
    const allLessonsCompleted = (stage.lessons || []).length > 0 && (stage.lessons || []).every(l => l.status === 'completed');
    if (allLessonsCompleted || stage.status === 'completed') return 'completed';
    
    if (stage.id === currentStageId) return 'current';
    return 'available';
  };

  const handleSelectStage = (stage, status) => {
    if (status === 'locked') return;
    setIsOpen(false);
    navigate(`/learn/python/stage/${stage.id}`);
  };

  const currentStage = curriculum[currentStageId];

  return (
    <div className="relative z-50" ref={dropdownRef}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-3 bg-surface border border-slate-700/50 hover:border-indigo-500/50 px-4 py-2.5 rounded-xl transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
      >
        <div className="text-left">
          <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none mb-1.5">Change Stage</div>
          <div className="text-sm font-semibold text-white leading-none flex items-center gap-2">
            Stage {currentStage?.number || ''}
            <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
          </div>
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setIsOpen(false)}
            />
            <motion.div 
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full right-0 md:left-0 mt-3 w-[300px] sm:w-[360px] bg-slate-900 border border-slate-700 rounded-2xl shadow-xl overflow-hidden z-50 max-h-[70vh] overflow-y-auto"
            >
              <div className="p-4 border-b border-slate-800">
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Select Stage</h3>
              </div>
              <div className="p-2 flex flex-col gap-1">
                {stages.map((stage) => {
                  const status = getStageStatus(stage);
                  const isCompleted = status === 'completed';
                  const isLocked = status === 'locked';
                  const isCurrent = status === 'current' || (stage.id === currentStageId && !isLocked);

                  // Calculate progress for display
                  const total = (stage.lessons || []).length;
                  const completed = (stage.lessons || []).filter(l => l.status === 'completed').length;
                  const pct = total > 0 ? Math.round((completed / total) * 100) : 0;

                  return (
                    <button
                      key={stage.id}
                      onClick={() => handleSelectStage(stage, status)}
                      className={`
                        w-full text-left p-3 rounded-xl flex gap-4 transition-all items-center
                        ${isLocked ? 'opacity-50 cursor-not-allowed' : 'hover:bg-white/5 cursor-pointer'}
                        ${isCurrent ? 'bg-indigo-500/10 border-indigo-500/30 ring-1 ring-indigo-500/30' : 'border border-transparent'}
                      `}
                    >
                      <div className="shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-slate-800/50">
                        {isCompleted && <Check className="w-4 h-4 text-emerald-500" />}
                        {isCurrent && !isCompleted && <PlayCircle className="w-4 h-4 text-indigo-400" />}
                        {isLocked && <Lock className="w-4 h-4 text-slate-500" />}
                        {status === 'available' && !isCurrent && <Circle className="w-4 h-4 text-slate-400" />}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-0.5">
                          <span className={`text-sm font-bold truncate ${isCurrent ? 'text-indigo-300' : 'text-white'}`}>
                            Stage {stage.number}: {stage.title}
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          {isLocked ? (
                            <span className="text-[10px] text-rose-400 font-medium truncate">
                              Complete Stage {stage.prerequisites[0]?.split('-')[1]} to unlock
                            </span>
                          ) : (
                            <span className="text-xs text-slate-400 truncate">{stage.subtitle}</span>
                          )}
                          {!isLocked && <span className="text-[10px] font-semibold text-slate-500 ml-2">{pct}%</span>}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default StageSelector;
