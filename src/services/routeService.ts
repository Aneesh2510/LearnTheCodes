export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  REGISTER: '/register',
  FORGOT_PASSWORD: '/forgot-password',
  RESET_PASSWORD: '/reset-password',
  DASHBOARD: '/dashboard',
  STAGE_DETAIL: '/learn/python/stage/:stageId',
  LESSON: '/learn/python/stage/:stageId/lesson/:lessonId',
} as const;

export class RouteService {
  public static getStageRoute(stageId: string): string {
    return `/learn/python/stage/${stageId}`;
  }

  public static getLessonRoute(stageId: string, lessonId: string): string {
    return `/learn/python/stage/${stageId}/lesson/${lessonId}`;
  }

  public static getSafeRedirect(path: string | undefined): string {
    if (!path) return ROUTES.DASHBOARD;
    if (!path.startsWith('/') || path.startsWith('//') || path.includes(':')) return ROUTES.DASHBOARD;
    return path;
  }
}

export const getStageRoute = RouteService.getStageRoute;
export const getLessonRoute = RouteService.getLessonRoute;
export const getSafeRedirect = RouteService.getSafeRedirect;
