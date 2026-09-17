export interface PythonExecutionResult {
  output: string[];
  error: PythonExecutionError | null;
}

export interface PythonExecutionError {
  message: string;
}

export interface PyodideInstance {
  loadPackagesFromImports: (code: string) => Promise<void>;
  runPythonAsync: (code: string) => Promise<unknown>;
}

export interface PyodideConfig {
  indexURL: string;
  stdout?: (text: string) => void;
  stderr?: (text: string) => void;
}

declare global {
  interface Window {
    loadPyodide: (config: PyodideConfig) => Promise<PyodideInstance>;
  }
}
