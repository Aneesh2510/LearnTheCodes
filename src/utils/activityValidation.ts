import type { GuidedStep } from '../types/curriculum';
import { hasExecutionError } from './outputValidation';

export function canAdvanceGuidedStep(
  step: GuidedStep,
  code: string,
  output: string[],
  hasRun: boolean,
): boolean {
  if (!hasRun) return false;

  switch (step.type) {
    case 'experiment':
      return code !== step.initialCode;
    case 'debug':
      return code !== step.initialCode && !hasExecutionError(output);
    case 'exercise':
      return code.trim().length > 0 && output.join('').trim().length > 0;
    case 'predict':
    default:
      return true;
  }
}

export function areReasoningAnswersCorrect(
  answers: Record<number, string>,
  correctAnswers: readonly string[],
): boolean {
  return correctAnswers.every((answer, index) => answers[index] === answer);
}
