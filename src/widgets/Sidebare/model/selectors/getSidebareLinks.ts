import { createSelector } from '@reduxjs/toolkit';
import ProfileIcon from '@/shared/assets/icon/profile.svg';
import { getUserAuth } from '@/entity/User';
import ArticleIcon from '@/shared/assets/icon/article.svg';
import AboutUsIcon from '@/shared/assets/icon/info.svg';
import MainPageIcon from '@/shared/assets/icon/mainPage.svg';
import { SidebareLinksType } from '../types/sidebareLinks';
import { RoutePath } from '@/shared/const/route';

export const getSidebareLinks = createSelector(getUserAuth, userData => {
  const linksSidebare: SidebareLinksType[] = [
    {
      path: RoutePath.main,
      Icon: MainPageIcon,
      text: 'Home',
    },
    {
      path: RoutePath.about,
      Icon: AboutUsIcon,
      text: 'About us',
    },
  ];

  if (userData) {
    linksSidebare.push(
      {
        path: RoutePath.profile + userData.id,
        Icon: ProfileIcon,
        text: 'Profile',
        authLink: true,
      },
      {
        path: RoutePath.articles,
        Icon: ArticleIcon,
        text: 'Articles',
        authLink: true,
      },
    );
  }

  return linksSidebare;
});
