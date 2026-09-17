import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, X, ArrowRight } from 'lucide-react';
import { areReasoningAnswersCorrect } from '../../utils/activityValidation';

const ReasoningActivity = ({ data, onComplete }) => {
  const [answers, setAnswers] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSelect = (questionIdx, option) => {
    if (isSubmitted) return;
    setAnswers(prev => ({ ...prev, [questionIdx]: option }));
  };

  const allAnswered = data.questions.length === Object.keys(answers).length;
  
  const checkAnswers = () => {
    setIsSubmitted(true);
    const isAllCorrect = areReasoningAnswersCorrect(answers, data.questions.map((question) => question.correctAnswer));
    if (isAllCorrect && onComplete) {
      onComplete();
    }
  };

  const isAllCorrect = isSubmitted && areReasoningAnswersCorrect(answers, data.questions.map((question) => question.correctAnswer));

  return (
    <div className="w-full h-full flex flex-col z-20">
      <div className="flex-grow flex flex-col z-30 rounded-3xl overflow-hidden glass-panel border border-slate-700/50 bg-[#0F172A]/80 p-8 md:p-12">
        <h2 className="text-2xl font-bold text-white mb-4">{data.heading}</h2>
        <p className="text-slate-400 font-medium mb-10">{data.prompt}</p>

        <div className="space-y-8 flex-grow">
          {data.questions.map((q, idx) => {
            const isAnswered = answers[idx] !== undefined;
            const isCorrect = answers[idx] === q.correctAnswer;
            
            return (
              <div key={idx} className="flex flex-col gap-4">
                <h3 className="text-lg font-semibold text-slate-200">{q.question}</h3>
                <div className="flex flex-wrap gap-4">
                  {q.options.map(option => {
                    const isSelected = answers[idx] === option;
                    let btnClass = "px-6 py-3 rounded-xl border font-semibold transition-all ";
                    
                    if (!isSubmitted) {
                      btnClass += isSelected 
                        ? "bg-indigo-500/20 border-indigo-500 text-indigo-300" 
                        : "bg-surface border-slate-700/50 text-slate-400 hover:border-slate-500 hover:text-slate-300";
                    } else {
                      if (option === q.correctAnswer) {
                        btnClass += "bg-emerald-500/20 border-emerald-500 text-emerald-400";
                      } else if (isSelected && !isCorrect) {
                        btnClass += "bg-rose-500/20 border-rose-500 text-rose-400";
                      } else {
                        btnClass += "bg-surface border-slate-700/50 text-slate-600 opacity-50";
                      }
                    }

                    return (
                      <button
                        key={option}
                        onClick={() => handleSelect(idx, option)}
                        className={btnClass}
                        disabled={isSubmitted}
                      >
                        {option}
                      </button>
                    );
                  })}
                </div>
                {isSubmitted && isAnswered && !isCorrect && (
                  <p className="text-rose-400 text-sm font-semibold">
                    <X className="w-4 h-4 inline mr-1 -mt-0.5" /> Incorrect. Try again.
                  </p>
                )}
                {isSubmitted && isAnswered && isCorrect && (
                  <p className="text-emerald-400 text-sm font-semibold">
                    <Check className="w-4 h-4 inline mr-1 -mt-0.5" /> Correct!
                  </p>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-10 pt-8 border-t border-slate-800 flex justify-between items-center">
          {isAllCorrect ? (
            <div className="text-emerald-400 font-bold flex items-center gap-2">
              <Check className="w-5 h-5" />
              {data.successMessage}
            </div>
          ) : (
            <div /> // Spacer
          )}
          
          {!isSubmitted ? (
            <button 
              onClick={checkAnswers}
              disabled={!allAnswered}
              className={`px-8 py-3.5 rounded-2xl font-bold transition-all shadow-lg flex items-center gap-2 ${allAnswered ? 'bg-indigo-500 hover:bg-indigo-400 text-white shadow-indigo-500/25' : 'bg-slate-800 text-slate-500 cursor-not-allowed'}`}
            >
              Verify Answers
            </button>
          ) : !isAllCorrect ? (
            <button 
              onClick={() => setIsSubmitted(false)}
              className="px-8 py-3.5 rounded-2xl font-bold bg-slate-800 hover:bg-slate-700 text-white transition-all shadow-lg flex items-center gap-2"
            >
              Retry Mission
            </button>
          ) : (
             <button 
              onClick={onComplete}
              className="px-8 py-3.5 rounded-2xl font-bold bg-white text-black hover:bg-slate-200 transition-all shadow-lg shadow-white/20 flex items-center gap-2"
            >
              Complete Lesson <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ReasoningActivity;
