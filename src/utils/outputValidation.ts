export function hasExecutionError(output: string[]): boolean {
  const outputStr = output.join('\n');
  return outputStr.includes('ERROR:') || outputStr.includes('Traceback');
}

export function formatOutputString(output: string[]): string {
  return output.join('\n').trim();
}

export function compareOutput(actual: string[], expected: string): boolean {
  const normalizedActual = formatOutputString(actual);
  const normalizedExpected = expected.trim();
  return normalizedActual === normalizedExpected;
}
