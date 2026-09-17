import React from 'react';
import { Play, RotateCcw, Copy, Type, Sun } from 'lucide-react';
import SpatialButton from '../spatial/SpatialButton';

interface EditorToolbarProps {
  onRun?: () => void;
  onReset?: () => void;
  onCopy?: () => void;
  onThemeToggle?: () => void;
  onFontSizeChange?: () => void;
}

const EditorToolbar = React.memo(({
  onRun,
  onReset,
  onCopy,
  onThemeToggle,
  onFontSizeChange,
}: EditorToolbarProps) => {
  return (
    <div className="border-b border-slate-200 px-5 py-3 flex items-center justify-between bg-slate-50/80 backdrop-blur-md">
      <div className="flex items-center gap-4">
        {/* Run Button */}
        <SpatialButton
          className="py-2 px-5 text-sm font-bold bg-indigo-500 hover:bg-indigo-600 border-none text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/50 shadow-sm rounded-xl"
          onClick={onRun}
          title="Run Code"
          aria-label="Run Code"
        >
          <Play className="w-4 h-4 mr-2" />
          Run Code
        </SpatialButton>

        <div className="h-6 w-px bg-slate-200 mx-2"></div>

        {/* Action Buttons */}
        <button
          onClick={onReset}
          className="text-slate-500 hover:text-indigo-600 transition-all p-2 rounded-xl hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
          title="Reset Code"
          aria-label="Reset Code"
        >
          <RotateCcw className="w-4 h-4" />
        </button>

        <button
          onClick={onCopy}
          className="text-slate-500 hover:text-indigo-600 transition-all p-2 rounded-xl hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
          title="Copy Code"
          aria-label="Copy Code"
        >
          <Copy className="w-4 h-4" />
        </button>
      </div>

      <div className="flex items-center gap-2">
        <button
          onClick={onFontSizeChange}
          className="text-slate-500 hover:text-indigo-600 transition-all p-2 rounded-xl hover:bg-indigo-50 flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
          title="Change Font Size"
          aria-label="Change Font Size"
        >
          <Type className="w-4 h-4" />
          <span className="text-xs font-mono font-bold">16px</span>
        </button>

        <button
          onClick={onThemeToggle}
          className="text-slate-500 hover:text-indigo-600 transition-all p-2 rounded-xl hover:bg-indigo-50 flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
          title="Toggle Theme"
          aria-label="Toggle Theme"
        >
          <Sun className="w-4 h-4" />
          <span className="text-xs font-mono font-bold">Light</span>
        </button>
      </div>
    </div>
  );
});

EditorToolbar.displayName = 'EditorToolbar';

export default EditorToolbar;
