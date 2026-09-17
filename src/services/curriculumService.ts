import { curriculum } from '../data/curriculum';
import { Stage, Lesson } from '../types/curriculum';

export class CurriculumService {
  public getAllStages(): Stage[] {
    return Object.values(curriculum) as Stage[];
  }

  public getLessonsForStage(stageId: string | undefined): Lesson[] {
    return this.getStageById(stageId)?.lessons ?? [];
  }

  public getStageById(stageId: string | undefined): Stage | undefined {
    if (!stageId) return undefined;
    return curriculum[stageId] as Stage | undefined;
  }

  public getLessonById(
    stageId: string | undefined,
    lessonId: string | undefined
  ): { stage: Stage; lesson: Lesson; index: number } | undefined {
    const stage = this.getStageById(stageId);
    if (!stage || !lessonId) return undefined;

    const index = stage.lessons.findIndex((l) => l.id === lessonId);
    if (index === -1) return undefined;

    return {
      stage,
      lesson: stage.lessons[index] as Lesson,
      index,
    };
  }

  public getNextLesson(
    stageId: string,
    lessonId: string
  ): { nextStageId: string; nextLessonId?: string; isStageComplete: boolean } {
    const stage = this.getStageById(stageId);
    if (!stage) {
      return { nextStageId: 'stage-01', isStageComplete: false };
    }

    const currentIndex = stage.lessons.findIndex((l) => l.id === lessonId);
    if (currentIndex !== -1 && currentIndex < stage.lessons.length - 1) {
      return {
        nextStageId: stageId,
        nextLessonId: stage.lessons[currentIndex + 1].id,
        isStageComplete: false,
      };
    }

    return {
      nextStageId: stageId,
      isStageComplete: true,
    };
  }

  public getPreviousLesson(stageId: string, lessonId: string): Lesson | undefined {
    const stage = this.getStageById(stageId);
    const index = stage?.lessons.findIndex((lesson) => lesson.id === lessonId) ?? -1;
    return index > 0 ? stage?.lessons[index - 1] : undefined;
  }
}

export const curriculumService = new CurriculumService();
