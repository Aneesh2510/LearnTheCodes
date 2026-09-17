export type LessonStatus = 'completed' | 'current' | 'locked' | 'available';

export type ActivityType = 'reasoning' | 'code_journey';

export interface LessonSection {
  id: string;
  type: string;
  heading: string;
  content: string;
}

export interface ReasoningQuestion {
  question: string;
  options: string[];
  correctAnswer: string;
}

export interface ReasoningActivityData {
  type: 'reasoning';
  heading: string;
  prompt: string;
  questions: ReasoningQuestion[];
  successMessage: string;
}

export type StepType = 'predict' | 'experiment' | 'debug' | 'exercise';

export interface GuidedStep {
  id: string;
  type: StepType;
  title: string;
  prompt: string;
  initialCode: string;
  buttonText?: string;
  hints?: string[];
}

export interface GuidedCodeActivityData {
  type: 'code_journey';
  heading: string;
  steps: GuidedStep[];
}

export type InteractiveActivity = ReasoningActivityData | GuidedCodeActivityData;

export interface Lesson {
  id: string;
  title: string;
  time: string;
  exercises: string;
  difficulty: string;
  status: LessonStatus;
  sections: LessonSection[];
  interactive?: InteractiveActivity;
}

export interface Stage {
  id: string;
  number: string;
  title: string;
  subtitle?: string;
  description: string;
  estimatedTime: string;
  lessonsCount: number;
  difficulty: string;
  status: LessonStatus;
  prerequisites: string[];
  lessons: Lesson[];
}

export type Curriculum = Record<string, Stage>;
