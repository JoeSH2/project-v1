import { UserRole } from '@/entity/User';
import { AboutPage } from '@/pages/AboutPage';
import { AdminPage } from '@/pages/AdminPage';
import { ArticleCreatePage } from '@/pages/ArticleCreatePage';
import { ArticleDetailsPageAsync } from '@/pages/ArticleDetailsPage';
import { ArticlesPageAsync } from '@/pages/ArticlesPage';
import { ForbiddenPage } from '@/pages/ForbiddenPage';
import { MainPage } from '@/pages/MainPage';
import { PageNotFound } from '@/pages/PageNotFound';
import { ProfilePage } from '@/pages/ProfilePage';
import {
  AppRoutes,
  getAboutPage,
  getAdminPage,
  getArticleCreatePage,
  getArticleDetailsPage,
  getArticleEditPage,
  getArticlesPage,
  getForbiddenPage,
  getMainPage,
  getProfilePage,
} from '@/shared/const/route';
import { RouterAuth } from '@/shared/types/route';

export const routesConfig: Record<AppRoutes, RouterAuth> = {
  [AppRoutes.MAIN]: {
    path: getMainPage(),
    element: <MainPage />,
  },
  [AppRoutes.ABOUT]: {
    path: getAboutPage(),
    element: <AboutPage />,
  },
  [AppRoutes.ADMIN]: {
    path: getAdminPage(),
    element: <AdminPage />,
    authUser: true,
    roles: [UserRole.ADMIN, UserRole.MANAGER],
  },
  [AppRoutes.PROFILE]: {
    path: getProfilePage(':id'),
    element: <ProfilePage />,
    authUser: true,
  },
  [AppRoutes.ARTICLE]: {
    path: getArticlesPage(),
    element: <ArticlesPageAsync />,
    authUser: true,
  },
  [AppRoutes.ARTICLE_DETAILS]: {
    path: getArticleDetailsPage(':id'),
    element: <ArticleDetailsPageAsync />,
    authUser: true,
  },
  [AppRoutes.ARTICLE_CREATE]: {
    path: getArticleCreatePage(),
    element: <ArticleCreatePage />,
    authUser: true,
  },
  [AppRoutes.ARTICLE_EDIT]: {
    path: getArticleEditPage(':id'),
    element: <ArticleCreatePage />,
    authUser: true,
  },
  [AppRoutes.FORBIDDEN]: {
    path: getForbiddenPage(),
    element: <ForbiddenPage />,
    authUser: true,
  },
  [AppRoutes.NOT_FOUND]: {
    path: '*',
    element: <PageNotFound />,
  },
};
