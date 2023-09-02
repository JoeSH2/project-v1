import React, { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink';
import { Flex } from 'shared/ui/Stack/Flex/Flex';
import { SidebareLinksType } from '../../model/types/sidebareLinks';

import style from './SidebareLink.module.scss';

interface SidebareLinkProps {
  item: SidebareLinksType;
  collapse: boolean;
}

export const SidebareLink: FC<SidebareLinkProps> = memo(({ collapse, item }: SidebareLinkProps) => {
  const { t } = useTranslation();
  const { Icon, path, text } = item;
  return (
    <AppLink className={classNames(style.link, { [style.collapse]: collapse }, [])} to={path} theme={AppLinkTheme.DARK}>
      <Icon className={style.linkIcon} />
      {!collapse && <span>{t(text)}</span>}
    </AppLink>
  );
});
