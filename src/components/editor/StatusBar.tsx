import React from 'react';

interface StatusBarProps {
  language?: string;
  isExecuting?: boolean;
}

const StatusBar = React.memo(({ language = 'python', isExecuting = false }: StatusBarProps) => {
  return (
    <div 
      className="border-t border-slate-200 px-5 py-2 flex items-center justify-between bg-slate-50/80 backdrop-blur-md text-xs font-mono text-slate-500 uppercase tracking-widest"
      role="status"
      aria-live="polite"
      aria-busy={isExecuting}
    >
      <div className="flex items-center gap-4">
        <span>Language: <span className="text-indigo-600 font-bold">{language}</span></span>
      </div>
      <div className="flex items-center gap-2">
        {isExecuting ? (
          <span className="flex items-center gap-2 text-indigo-600 font-bold">
            <div className="w-2 h-2 rounded-full bg-indigo-500 animate-ping" />
            Executing
          </span>
        ) : (
          <span className="flex items-center gap-2 text-slate-500 font-bold">
            <div className="w-2 h-2 rounded-full bg-slate-400" />
            Ready
          </span>
        )}
      </div>
    </div>
  );
});

StatusBar.displayName = 'StatusBar';

export default StatusBar;
