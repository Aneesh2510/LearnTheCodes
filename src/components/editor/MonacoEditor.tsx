import React from 'react';
import Editor, { type Monaco, type OnMount } from '@monaco-editor/react';

interface MonacoEditorProps {
  code?: string;
  language?: string;
  theme?: string;
  readOnly?: boolean;
  onChange?: (value: string | undefined) => void;
  height?: string | number;
}

const MonacoEditor = React.memo(({
  code = '',
  language = 'python',
  theme = 'vs-dark',
  readOnly = false,
  onChange,
  height = '100%',
}: MonacoEditorProps) => {
  const handleEditorWillMount = (monacoInstance: Monaco) => {
    monacoInstance.editor.defineTheme('learnthecodes-dark', {
      base: 'vs-dark',
      inherit: true,
      rules: [
        { background: '00000000', token: '' }
      ],
      colors: {
        'editor.background': '#00000000',
        'editor.lineHighlightBackground': '#ffffff0a',
        'editorLineNumber.foreground': '#ffffff40',
        'editorIndentGuide.background': '#ffffff10',
        'editorIndentGuide.activeBackground': '#ffffff30',
      },
    });
  };

  const handleEditorDidMount: OnMount = (_editor, monacoInstance) => {
    monacoInstance.editor.setTheme('learnthecodes-dark');
  };

  const handleEditorChange = (value: string | undefined) => {
    if (onChange) {
      onChange(value);
    }
  };

  return (
    <div className="w-full h-full relative" style={{ height }}>
      <Editor
        height="100%"
        defaultLanguage={language}
        value={code}
        theme={theme}
        beforeMount={handleEditorWillMount}
        onMount={handleEditorDidMount}
        onChange={handleEditorChange}
        options={{
          readOnly,
          fontFamily: '"JetBrains Mono", "Fira Code", monospace',
          fontSize: 16,
          lineHeight: 24,
          tabSize: 4,
          wordWrap: 'on',
          minimap: { enabled: false },
          scrollBeyondLastLine: false,
          overviewRulerLanes: 0,
          hideCursorInOverviewRuler: true,
          scrollbar: {
            vertical: 'visible',
            horizontal: 'visible',
            verticalScrollbarSize: 8,
            horizontalScrollbarSize: 8,
          },
          automaticLayout: true,
          padding: { top: 16, bottom: 16 },
          matchBrackets: 'always',
          autoClosingBrackets: 'always',
          autoClosingQuotes: 'always',
          formatOnPaste: true,
          formatOnType: true,
          renderLineHighlight: 'all',
          cursorBlinking: 'smooth',
          cursorSmoothCaretAnimation: 'on',
        }}
        loading={
          <div className="flex items-center justify-center h-full w-full text-white/50 font-mono text-sm animate-pulse">
            Loading editor...
          </div>
        }
      />
    </div>
  );
});

MonacoEditor.displayName = 'MonacoEditor';

export default MonacoEditor;
