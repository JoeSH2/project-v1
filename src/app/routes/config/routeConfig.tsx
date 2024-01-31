import { AboutPageAsync, MainPageAsync } from '@/pages';
import { AdminPage } from '@/pages/AdminPage';
import { UserRole } from '@/entity/User';
import { ProfilePage } from '@/pages/ProfilePage';
import { PageNotFound } from '@/pages/PageNotFound';
import { ArticlesPageAsync } from '@/pages/ArticlesPage';
import { ArticleDetailsPageAsync } from '@/pages/ArticleDetailsPage';
import { ArticleCreatePage } from '@/pages/ArticleCreatePage';
import { ForbiddenPage } from '@/pages/ForbiddenPage';
import { AppRoutes } from '@/shared/const/route';
import { RouterAuth } from '@/shared/types/route';

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
export const routesConfig: Record<AppRoutes, RouterAuth> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainPageAsync />,
  },
  [AppRoutes.ADMIN]: {
    path: RoutePath.admin,
    element: <AdminPage />,
    authUser: true,
    roles: [UserRole.ADMIN, UserRole.MANAGER],
  },
  [AppRoutes.ABOUT]: {
    path: RoutePath.about,
    element: <AboutPageAsync />,
  },
  [AppRoutes.PROFILE]: {
    path: `${RoutePath.profile}:id`,
    element: <ProfilePage />,
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <PageNotFound />,
  },
  [AppRoutes.ARTICLE]: {
    path: RoutePath.articles,
    element: <ArticlesPageAsync />,
    authUser: true,
  },
  [AppRoutes.ARTICLE_DETAILS]: {
    path: `${RoutePath.article_details}:id`,
    element: <ArticleDetailsPageAsync />,
    authUser: true,
  },
  [AppRoutes.ARTICLE_CREATE]: {
    path: `${RoutePath.article_create}`,
    element: <ArticleCreatePage />,
    authUser: true,
  },
  [AppRoutes.ARTICLE_EDIT]: {
    path: `${RoutePath.article_edit}:id`,
    element: <ArticleCreatePage />,
    authUser: true,
  },
  [AppRoutes.FORBIDDEN]: {
    path: RoutePath.forbidden,
    element: <ForbiddenPage />,
    authUser: true,
  },
};
