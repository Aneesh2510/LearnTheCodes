import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Lightbulb, AlertTriangle, Check, Terminal, Play } from 'lucide-react';
import EditorWorkspace from '../editor/EditorWorkspace';
import { canAdvanceGuidedStep } from '../../utils/activityValidation';
import { hasExecutionError } from '../../utils/outputValidation';

const GuidedCodeActivity = ({ 
  data, 
  code, 
  setCode, 
  isExecuting, 
  isReady, 
  output, 
  runPython, 
  clearOutput,
  onComplete
}) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [prediction, setPrediction] = useState('');
  const [hasRun, setHasRun] = useState(false);
  const [hintIndex, setHintIndex] = useState(-1);
  const [completed, setCompleted] = useState(false);
  
  const currentStep = data.steps[currentStepIndex];

  // When step changes, set initial code
  useEffect(() => {
    if (currentStep) {
      setCode(currentStep.initialCode);
      setHasRun(false);
      setHintIndex(-1);
      setPrediction('');
      clearOutput();
    }
  }, [currentStepIndex, currentStep, setCode, clearOutput]);

  const handleRunWrapper = async () => {
    if (!isReady || isExecuting) return;
    
    // For predict step, ensure they typed something
    if (currentStep.type === 'predict' && prediction.trim() === '') {
      return; // Force prediction
    }

    await runPython(code);
    setHasRun(true);
    // Note: usePython hook might update output asynchronously. 
    // We'll rely on the parent's `output` prop for checking results if needed, 
    // but practically we'll let the user evaluate their own predict result for now.
  };

  const handleNextStep = () => {
    if (currentStepIndex < data.steps.length - 1) {
      setCurrentStepIndex(prev => prev + 1);
    } else {
      setCompleted(true);
    }
  };

  const showNextHint = () => {
    if (currentStep.hints && hintIndex < currentStep.hints.length - 1) {
      setHintIndex(prev => prev + 1);
    }
  };

  const canProceed = canAdvanceGuidedStep(currentStep, code, output, hasRun);

  if (completed) {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center bg-surface border border-slate-700/50 rounded-3xl p-12 text-center">
        <div className="w-20 h-20 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(16,185,129,0.2)]">
          <Check className="w-10 h-10" />
        </div>
        <h2 className="text-3xl font-bold text-white mb-4">Mission Accomplished!</h2>
        <p className="text-slate-400 text-lg max-w-md mb-8">You've successfully completed the Python interactive mission. You observed, predicted, experimented, and debugged.</p>
        <button 
          onClick={onComplete}
          className="px-8 py-3 bg-white text-black font-bold rounded-2xl hover:bg-slate-200 transition-colors shadow-lg flex items-center gap-2"
        >
          Complete Lesson <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    );
  }

  return (
    <div className="w-full h-full flex flex-col gap-6 relative">
      
      {/* Control Panel (Top) */}
      <div className="bg-surface border border-slate-700/50 rounded-3xl p-6 md:p-8 flex flex-col z-30 shadow-lg">
        <div className="flex items-center gap-3 mb-4">
          <div className="px-3 py-1 bg-indigo-500/20 text-indigo-400 text-[10px] font-bold uppercase tracking-widest rounded-md border border-indigo-500/30">
            Step {currentStepIndex + 1} of {data.steps.length}
          </div>
          <h3 className="text-xl font-bold text-white">{currentStep.title}</h3>
        </div>
        
        <p className="text-slate-300 font-medium mb-6 text-sm md:text-base">{currentStep.prompt}</p>

        {/* Prediction Input */}
        {currentStep.type === 'predict' && !hasRun && (
          <div className="mb-6">
             <input 
               type="text" 
               value={prediction}
               onChange={(e) => setPrediction(e.target.value)}
               placeholder="What will print in the console?"
               className="w-full bg-slate-900 border border-slate-700 text-white px-5 py-3 rounded-xl focus:outline-none focus:border-indigo-500 transition-colors placeholder:text-slate-600"
             />
          </div>
        )}

        {/* Prediction Results */}
        {currentStep.type === 'predict' && hasRun && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mb-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-4">
               <span className="text-[10px] text-slate-500 uppercase tracking-widest font-bold mb-1 block">Your Prediction</span>
               <div className="text-white font-medium">{prediction}</div>
            </div>
            <div className="bg-indigo-500/10 border border-indigo-500/30 rounded-xl p-4">
               <span className="text-[10px] text-indigo-400 uppercase tracking-widest font-bold mb-1 block">Actual Output</span>
               <div className="text-indigo-100 font-mono text-sm">{output[0] || 'No output'}</div>
            </div>
          </motion.div>
        )}

        {/* Debugging Hints */}
        {currentStep.type === 'debug' && hasRun && hasExecutionError(output) && (
           <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="mb-6 bg-rose-500/10 border border-rose-500/30 rounded-xl p-4 md:p-5">
              <div className="flex items-center gap-2 text-rose-400 font-bold text-sm mb-3">
                <AlertTriangle className="w-4 h-4" /> That didn't work. Let's fix it.
              </div>
              
              {hintIndex >= 0 && (
                <div className="space-y-3 mb-4">
                  {currentStep.hints.slice(0, hintIndex + 1).map((hint, i) => (
                    <div key={i} className="flex gap-3 text-sm text-rose-200">
                      <span className="shrink-0 w-5 h-5 rounded-full bg-rose-500/20 flex items-center justify-center text-[10px] font-bold">{i + 1}</span>
                      {hint}
                    </div>
                  ))}
                </div>
              )}
              
              {hintIndex < currentStep.hints.length - 1 && (
                <button 
                  onClick={showNextHint}
                  className="text-xs font-bold uppercase tracking-widest text-white bg-slate-800 hover:bg-slate-700 px-4 py-2 rounded-lg transition-colors flex items-center gap-2"
                >
                  <Lightbulb className="w-3.5 h-3.5" /> Get a Hint
                </button>
              )}
           </motion.div>
        )}

        {/* Action Buttons */}
        <div className="flex items-center justify-between mt-auto">
          <button 
            onClick={handleRunWrapper}
            disabled={isExecuting || !isReady || (currentStep.type === 'predict' && !prediction.trim())}
            className="px-6 py-2.5 bg-indigo-500 hover:bg-indigo-400 text-white font-bold rounded-xl transition-all shadow-lg shadow-indigo-500/25 flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isExecuting ? (
               <div className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
            ) : (
               <Play className="w-4 h-4" />
            )}
            {currentStep.buttonText || "Run Code"}
          </button>
          
          <AnimatePresence>
            {canProceed && (
              <motion.button 
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                onClick={handleNextStep}
                className="px-6 py-2.5 bg-white text-black hover:bg-slate-200 font-bold rounded-xl transition-all shadow-lg flex items-center gap-2"
              >
                Next Step <ArrowRight className="w-4 h-4" />
              </motion.button>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Embedded Editor */}
      <div className="flex-grow min-h-[400px] relative z-20">
         <EditorWorkspace
           code={code}
           onChange={setCode}
           onRun={handleRunWrapper}
           onReset={() => { setCode(currentStep.initialCode); clearOutput(); }}
           output={output}
           isExecuting={isExecuting}
           language={'python'}
           theme={'vs-dark'}
           hideToolbar={true} // Customizing Editor to not show duplicate Run button
         />
      </div>
      
    </div>
  );
};

export default GuidedCodeActivity;
