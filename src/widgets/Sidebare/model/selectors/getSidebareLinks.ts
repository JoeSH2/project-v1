import { createSelector } from '@reduxjs/toolkit';

import { getUserAuth } from '@/entity/User';
import ArticleIcon from '@/shared/assets/icon/article.svg';
import AboutUsIcon from '@/shared/assets/icon/info.svg';
import MainPageIcon from '@/shared/assets/icon/mainPage.svg';
import ProfileIcon from '@/shared/assets/icon/profile.svg';
import { getAboutPage, getArticlesPage, getMainPage, getProfilePage } from '@/shared/const/route';

import { SidebareLinksType } from '../types/sidebareLinks';

export const getSidebareLinks = createSelector(getUserAuth, userData => {
  const linksSidebare: SidebareLinksType[] = [
    {
      path: getMainPage(),
      Icon: MainPageIcon,
      text: 'Home',
    },
    {
      path: getAboutPage(),
      Icon: AboutUsIcon,
      text: 'About us',
    },
  ];

  if (userData) {
    linksSidebare.push(
      {
        path: getProfilePage(userData.id),
        Icon: ProfileIcon,
        text: 'Profile',
        authLink: true,
      },
      {
        path: getArticlesPage(),
        Icon: ArticleIcon,
        text: 'Articles',
        authLink: true,
      },
    );
  }

  return linksSidebare;
});
