import React from 'react';

interface OutputConsoleProps {
  output?: string[];
  isExecuting?: boolean;
}

const OutputConsole = React.memo(({ output = [], isExecuting = false }: OutputConsoleProps) => {
  return (
    <div className="h-64 flex flex-col overflow-hidden border border-slate-700/50 modern-card rounded-3xl shadow-card">
      <div className="border-b border-slate-700/50 px-6 py-3 bg-surfaceHover">
        <span className="text-xs font-mono text-slate-500 uppercase tracking-widest font-bold flex items-center gap-2">
          <div className={`w-2 h-2 rounded-full ${isExecuting ? 'bg-indigo-500 animate-pulse' : 'bg-slate-600'}`} />
          Terminal Output
        </span>
      </div>
      <div
        className="p-6 font-mono text-sm flex-grow overflow-y-auto custom-scrollbar text-slate-700 bg-slate-900 focus:outline-none focus:ring-inset focus:ring-2 focus:ring-indigo-500/30"
        role="log"
        aria-live="polite"
        aria-atomic="false"
        aria-busy={isExecuting}
        tabIndex={0}
      >
        {output.length === 0 && !isExecuting && (
          <div className="flex items-center gap-3 text-indigo-400/60 mb-2 font-semibold">
            <span>{`>`}</span>
            <span className="animate-pulse">Awaiting execution...</span>
          </div>
        )}

        {output.map((line, idx) => (
          <div key={idx} className="flex items-start gap-3 mb-1">
            <span className="text-indigo-400/40 select-none font-bold">{`>`}</span>
            <span className="whitespace-pre-wrap text-slate-300 font-medium">{line}</span>
          </div>
        ))}

        {isExecuting && (
          <div className="flex items-center gap-3 text-indigo-400/80 mt-2 font-semibold">
            <span>{`>`}</span>
            <span className="animate-pulse">Running...</span>
          </div>
        )}
      </div>
    </div>
  );
});

OutputConsole.displayName = 'OutputConsole';

export default OutputConsole;
