export enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
  PROFILE = 'profile',
  NOT_FOUND = 'not_found',
  ARTICLE = 'articles',
  ARTICLE_DETAILS = 'article_details',
  ARTICLE_CREATE = 'article_create',
  ARTICLE_EDIT = 'article_edit',
  ADMIN = 'admin',
  FORBIDDEN = 'forbidden',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ABOUT]: '/about',
  [AppRoutes.PROFILE]: '/profile/', // + id
  [AppRoutes.ARTICLE]: '/articles',
  [AppRoutes.ARTICLE_DETAILS]: '/articles/', // + id
  [AppRoutes.ARTICLE_CREATE]: '/articles/create',
  [AppRoutes.ARTICLE_EDIT]: '/articles/edit/', // + id
  [AppRoutes.ADMIN]: '/admin',
  [AppRoutes.FORBIDDEN]: '/forbidden',
  // last
  [AppRoutes.NOT_FOUND]: '*',
};
