import { useCallback, useEffect, useRef, useState } from 'react';
import { pythonService } from '../services/pythonService';
import type { PythonExecutionError } from '../types/python';

export interface UsePythonResult {
  isInitializing: boolean;
  isReady: boolean;
  isExecuting: boolean;
  output: string[];
  error: PythonExecutionError | null;
  runPython: (code: string) => Promise<void>;
  clearOutput: () => void;
}

/** React state adapter for the browser-only Python execution service. */
export function usePython(): UsePythonResult {
  const [isInitializing, setIsInitializing] = useState(true);
  const [isReady, setIsReady] = useState(false);
  const [isExecuting, setIsExecuting] = useState(false);
  const [output, setOutput] = useState<string[]>([]);
  const [error, setError] = useState<PythonExecutionError | null>(null);
  const outputRef = useRef<string[]>([]);

  const appendOutput = useCallback((text: string) => {
    outputRef.current = [...outputRef.current, text];
    setOutput(outputRef.current);
  }, []);

  useEffect(() => {
    let isMounted = true;
    pythonService.initializePyodide(appendOutput, appendOutput)
      .then(() => { if (isMounted) setIsReady(true); })
      .catch((reason: unknown) => {
        if (isMounted) setError({ message: reason instanceof Error ? reason.message : String(reason) });
      })
      .finally(() => { if (isMounted) setIsInitializing(false); });
    return () => {
      isMounted = false;
      pythonService.removeListeners(appendOutput, appendOutput);
    };
  }, [appendOutput]);

  const clearOutput = useCallback(() => {
    outputRef.current = [];
    setOutput([]);
    setError(null);
  }, []);

  const runPython = useCallback(async (code: string) => {
    if (!isReady || isExecuting) return;
    clearOutput();
    setIsExecuting(true);
    const result = await pythonService.runCode(code);
    if (result.error) {
      setError(result.error);
      appendOutput(`ERROR: ${result.error.message}`);
    }
    setIsExecuting(false);
  }, [appendOutput, clearOutput, isExecuting, isReady]);

  return { isInitializing, isReady, isExecuting, output, error, runPython, clearOutput };
}
