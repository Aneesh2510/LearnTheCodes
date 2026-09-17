export interface StageRouteParams {
  stageId?: string;
  [key: string]: string | undefined;
}

export interface LessonRouteParams extends StageRouteParams {
  lessonId?: string;
}

export interface NavPath {
  label: string;
  path: string;
  isExternal?: boolean;
}
