import { useMemo } from 'react';
import { curriculumService } from '../services/curriculumService';

export function useLesson(stageId: string | undefined, lessonId: string | undefined) {
  return useMemo(
    () => curriculumService.getLessonById(stageId, lessonId),
    [stageId, lessonId],
  );
}
