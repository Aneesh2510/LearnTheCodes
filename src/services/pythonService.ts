import type { PyodideConfig, PyodideInstance, PythonExecutionResult } from '../types/python';

const PYODIDE_CDN_URL = 'https://cdn.jsdelivr.net/pyodide/v0.25.0/full/';

export class PythonService {
  private pyodideInstance: PyodideInstance | null = null;
  private initialization: Promise<PyodideInstance> | null = null;
  private stdoutListeners = new Set<(text: string) => void>();
  private stderrListeners = new Set<(text: string) => void>();

  public initializePyodide(
    onStdout: (text: string) => void,
    onStderr: (text: string) => void
  ): Promise<PyodideInstance> {
    this.stdoutListeners.add(onStdout);
    this.stderrListeners.add(onStderr);
    if (this.pyodideInstance) {
      return Promise.resolve(this.pyodideInstance);
    }
    if (!this.initialization) {
      this.initialization = this.createInstance();
    }
    return this.initialization;
  }

  public removeListeners(onStdout: (text: string) => void, onStderr: (text: string) => void): void {
    this.stdoutListeners.delete(onStdout);
    this.stderrListeners.delete(onStderr);
  }

  private async createInstance(): Promise<PyodideInstance> {
    if (!window.loadPyodide) await this.loadPyodideScript();
    const config: PyodideConfig = {
      indexURL: PYODIDE_CDN_URL,
      stdout: (text) => this.stdoutListeners.forEach((listener) => listener(text)),
      stderr: (text) => this.stderrListeners.forEach((listener) => listener(`ERROR: ${text}`)),
    };
    this.pyodideInstance = await window.loadPyodide(config);
    return this.pyodideInstance;
  }

  private loadPyodideScript(): Promise<void> {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = `${PYODIDE_CDN_URL}pyodide.js`;
      script.async = true;
      script.onload = () => resolve();
      script.onerror = () => reject(new Error('Failed to load Pyodide script from CDN'));
      document.body.appendChild(script);
    });
  }

  public async runCode(code: string): Promise<PythonExecutionResult> {
    if (!this.pyodideInstance) {
      throw new Error('Pyodide is not initialized');
    }

    const wrappedCode = `
import sys
import time

_start_time = time.time()

def _trace_calls(frame, event, arg):
    if time.time() - _start_time > 2.0:
        raise TimeoutError("This program is taking too long to finish. Check whether your loop has a stopping condition.")
    return _trace_calls

sys.settrace(_trace_calls)
try:
${code.split('\n').map((line) => '    ' + line).join('\n')}
finally:
    sys.settrace(None)
`;

    try {
      await this.pyodideInstance.loadPackagesFromImports(code);
      await this.pyodideInstance.runPythonAsync(wrappedCode);
      return { output: [], error: null };
    } catch (error: unknown) {
      return { output: [], error: { message: error instanceof Error ? error.message : String(error) } };
    }
  }
}

export const pythonService = new PythonService();
