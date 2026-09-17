export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  REGISTER: '/register',
  STAGE_DETAIL: '/learn/python/stage/:stageId',
  LESSON: '/learn/python/stage/:stageId/lesson/:lessonId',
  DASHBOARD_REDIRECT: '/learn/python/stage/stage-01',
} as const;

export class RouteService {
  public static getStageRoute(stageId: string): string {
    return `/learn/python/stage/${stageId}`;
  }

  public static getLessonRoute(stageId: string, lessonId: string): string {
    return `/learn/python/stage/${stageId}/lesson/${lessonId}`;
  }
}

export const getStageRoute = RouteService.getStageRoute;
export const getLessonRoute = RouteService.getLessonRoute;
