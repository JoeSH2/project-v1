import { AdminPage } from '@/pages/AdminPage';
import { UserRole } from '@/entity/User';
import { ProfilePage } from '@/pages/ProfilePage';
import { PageNotFound } from '@/pages/PageNotFound';
import { ArticlesPageAsync } from '@/pages/ArticlesPage';
import { ArticleDetailsPageAsync } from '@/pages/ArticleDetailsPage';
import { ArticleCreatePage } from '@/pages/ArticleCreatePage';
import { ForbiddenPage } from '@/pages/ForbiddenPage';
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
import { MainPage } from '@/pages/MainPage';
import { AboutPage } from '@/pages/AboutPage';

export const routesConfig: Record<AppRoutes, RouterAuth> = {
  [AppRoutes.MAIN]: {
    path: getMainPage(),
    element: <MainPage />,
  },
  [AppRoutes.ADMIN]: {
    path: getAdminPage(),
    element: <AdminPage />,
    authUser: true,
    roles: [UserRole.ADMIN, UserRole.MANAGER],
  },
  [AppRoutes.ABOUT]: {
    path: getAboutPage(),
    element: <AboutPage />,
  },
  [AppRoutes.PROFILE]: {
    path: getProfilePage(':id'),
    element: <ProfilePage />,
  },
  [AppRoutes.NOT_FOUND]: {
    path: '*',
    element: <PageNotFound />,
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
};
