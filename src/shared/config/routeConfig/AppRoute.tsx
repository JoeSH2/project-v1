import { AboutPageAsync, MainPageAsync } from 'pages'
import { ArticleCreatePage } from 'pages/ArticleCreatePage'
import { ArticlesPageAsync } from 'pages/ArticlesPage'
import { AtriclesDetailsPageAsync } from 'pages/AtriclesDetailsPage'
import { PageNotFound } from 'pages/PageNotFound'
import { ProfilePage } from 'pages/ProfilePage'
import { RouteProps } from 'react-router'

export type RouterAuth = RouteProps & {
  authUser?: boolean
}

export enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
  PROFILE = 'profile',
  NOT_FOUND = 'not_found',
  ARTICLE = 'articles',
  ARTICLE_DETAILS = 'article_details',
  ARTICLE_CREATE = 'article_create',
  ARTICLE_EDIT = 'article_edit',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ABOUT]: '/about',
  [AppRoutes.PROFILE]: '/profile/', // + id
  [AppRoutes.ARTICLE]: '/articles',
  [AppRoutes.ARTICLE_DETAILS]: '/articles/', // + id
  [AppRoutes.ARTICLE_CREATE]: '/articles/create',
  [AppRoutes.ARTICLE_EDIT]: '/articles/create/', // + id
  // last
  [AppRoutes.NOT_FOUND]: '*',
}

export const routesConfig: Record<AppRoutes, RouterAuth> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainPageAsync />,
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
    element: <AtriclesDetailsPageAsync />,
    authUser: true,
  },
  [AppRoutes.ARTICLE_CREATE]: {
    path: `${RoutePath.article_create}`,
    element: <ArticleCreatePage />,
    authUser: true,
  },
  [AppRoutes.ARTICLE_EDIT]: {
    path: `${RoutePath.article_details}:id`,
    element: <ArticleCreatePage />,
    authUser: true,
  },
}
