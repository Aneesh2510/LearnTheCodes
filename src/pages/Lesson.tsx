import React, { useState, useCallback, Suspense, lazy, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { ChevronRight, Brain } from 'lucide-react';
import { motion } from 'framer-motion';
import { usePython } from '../hooks/usePython';
import { useLesson } from '../hooks/useLesson';
import { getStageRoute, getLessonRoute } from '../services/routeService';
import ReasoningActivity from '../components/lesson/ReasoningActivity';

import GuidedCodeActivity from '../components/lesson/GuidedCodeActivity';

const EditorWorkspace = lazy(() => import('../components/editor/EditorWorkspace'));

// Simple markdown renderer to avoid external dependencies
const renderMarkdown = (text) => {
  if (!text) return null;
  const paragraphs = text.split('\n\n');
  return paragraphs.map((para, idx) => {
    // Basic bold parsing
    const parts = para.split(/(\*\*.*?\*\*)/g);
    return (
      <p key={idx} className="mb-4">
        {parts.map((part, i) => {
          if (part.startsWith('**') && part.endsWith('**')) {
            return <strong key={i} className="text-white font-bold">{part.slice(2, -2)}</strong>;
          }
          return part;
        })}
      </p>
    );
  });
};

const Lesson = () => {
  const { stageId, lessonId } = useParams();
  const navigate = useNavigate();
  
  
  const lessonContext = useLesson(stageId, lessonId);
  const stageData = lessonContext?.stage;
  const lessonData = lessonContext?.lesson;
  
  const [code, setCode] = useState('');
  const { isReady, isExecuting, output, runPython, clearOutput } = usePython();

  useEffect(() => {
    if (!lessonData) {
      navigate(getStageRoute(stageId || 'stage-01'));
    }
  }, [lessonData, navigate, stageId]);

  const handleLessonComplete = useCallback(() => {
    if (!stageData || !lessonId) return;
    const currentIndex = stageData.lessons.findIndex(l => l.id === lessonId);
    if (currentIndex !== -1 && currentIndex < stageData.lessons.length - 1) {
      navigate(getLessonRoute(stageData.id, stageData.lessons[currentIndex + 1].id));
    } else {
      navigate(getStageRoute(stageData.id));
    }
  }, [stageData, lessonId, stageId, navigate]);

  const handleRun = useCallback(async () => {
    if (!isReady) return;
    await runPython(code);
  }, [isReady, code, runPython]);

  const handleReset = useCallback(() => {
    setCode(''); // Or default code from lessonData
    clearOutput();
  }, [clearOutput]);

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(code);
  }, [code]);

  const handleCodeChange = useCallback((value) => {
    setCode(value || '');
  }, []);

  if (!lessonData) return null;

  return (
    <div className="flex flex-col lg:flex-row h-[calc(100vh-80px)] w-full max-w-[1800px] mx-auto px-6 lg:px-12 pt-8 gap-8 z-10 relative">
      
      {/* Left Panel: Content */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, type: "spring", bounce: 0.3 }}
        className="w-full lg:w-5/12 h-full flex flex-col z-20"
      >
        <div className="modern-card rounded-3xl flex-1 overflow-y-auto custom-scrollbar p-10 flex flex-col relative">
          
          <div className="mb-12 flex items-center justify-between relative z-10">
             <Link to={getStageRoute(stageId || 'stage-01')} className="text-xs font-semibold text-slate-400 hover:text-indigo-500 uppercase tracking-widest transition-colors flex items-center gap-2 group focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-md px-2 py-1 -ml-2">
               <ChevronRight className="w-4 h-4 rotate-180 group-hover:-translate-x-1 transition-transform" />
               Return to Path
             </Link>
             <span className="px-4 py-1.5 bg-indigo-500/10 border border-indigo-500/30 rounded-full text-[10px] text-indigo-400 uppercase tracking-widest font-mono font-semibold shadow-sm">
               {lessonData.title}
             </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-12 text-white tracking-tight drop-shadow-sm relative z-10">{lessonData.title}</h1>
          
          {lessonData.sections.map((section, idx) => (
             <section key={section.id} className="mb-14 relative z-10">
               <div className="flex items-center gap-5 mb-8">
                 <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center shadow-sm">
                   <span className="text-indigo-400 font-semibold font-mono text-base">0{idx + 1}</span>
                 </div>
                 <h2 className="text-2xl font-bold text-white">{section.heading}</h2>
               </div>
               <div className="text-slate-400 font-medium leading-relaxed text-lg">
                 {renderMarkdown(section.content)}
               </div>
             </section>
          ))}
          
        </div>
      </motion.div>

      {/* Right Panel: Interactive (Editor or Reasoning) */}
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.1, type: "spring", bounce: 0.3 }}
        className="w-full lg:w-7/12 h-full flex flex-col gap-6 z-20"
      >
        {lessonData.interactive?.type === 'reasoning' ? (
          <ReasoningActivity data={lessonData.interactive} onComplete={handleLessonComplete} />
        ) : lessonData.interactive?.type === 'code_journey' ? (
          <GuidedCodeActivity 
            data={lessonData.interactive}
            code={code}
            setCode={handleCodeChange}
            isExecuting={isExecuting}
            isReady={isReady}
            output={output}
            runPython={runPython}
            clearOutput={clearOutput}
            onComplete={handleLessonComplete}
          />
        ) : (
          <Suspense fallback={
            <div className="modern-card flex-grow min-h-[400px] flex items-center justify-center rounded-3xl overflow-hidden">
              <span className="text-slate-400 font-mono text-sm animate-pulse flex items-center gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-indigo-500 animate-ping" />
                Initializing Editor Environment...
              </span>
            </div>
          }>
            <EditorWorkspace
              code={code}
              onChange={handleCodeChange}
              onRun={handleRun}
              onReset={handleReset}
              onCopy={handleCopy}
              output={output}
              isExecuting={isExecuting}
              language={'python'}
              theme={'vs-dark'}
            />
          </Suspense>
        )}
      </motion.div>
    </div>
  );
};

export default Lesson;
