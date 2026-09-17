import React from 'react';
import MonacoEditor from './MonacoEditor';
import EditorToolbar from './EditorToolbar';
import OutputConsole from './OutputConsole';
import StatusBar from './StatusBar';
import ErrorBoundary from './ErrorBoundary';

interface EditorWorkspaceProps {
  code: string;
  onChange?: (value: string | undefined) => void;
  onRun?: () => void;
  onReset?: () => void;
  onCopy?: () => void;
  onThemeToggle?: () => void;
  onFontSizeChange?: () => void;
  output?: string[];
  isExecuting?: boolean;
  language?: string;
  theme?: string;
  hideToolbar?: boolean;
}

const EditorWorkspace = React.memo(({ 
  code, 
  onChange, 
  onRun, 
  onReset, 
  onCopy, 
  onThemeToggle, 
  onFontSizeChange,
  output,
  isExecuting,
  language = 'python',
  theme = 'vs-dark',
  hideToolbar = false
}: EditorWorkspaceProps) => {
  return (
    <div 
      className="w-full h-full flex flex-col gap-6 z-20"
      role="region"
      aria-label="Code Editor Workspace"
    >
      <div className="flex-grow min-h-[400px] flex flex-col z-30 rounded-3xl overflow-hidden glass-panel">
        {!hideToolbar && (
          <EditorToolbar
            onRun={onRun}
            onReset={onReset}
            onCopy={onCopy}
            onThemeToggle={onThemeToggle}
            onFontSizeChange={onFontSizeChange}
          />
        )}
        <div className="flex-grow w-full relative">
          <div className="absolute inset-0">
            <ErrorBoundary>
              <MonacoEditor
                code={code}
                onChange={onChange}
                language={language}
                theme={theme}
                readOnly={isExecuting}
              />
            </ErrorBoundary>
          </div>
        </div>
        <StatusBar language={language} isExecuting={isExecuting} />
      </div>

      <OutputConsole output={output} isExecuting={isExecuting} />
    </div>
  );
});

EditorWorkspace.displayName = 'EditorWorkspace';

export default EditorWorkspace;
