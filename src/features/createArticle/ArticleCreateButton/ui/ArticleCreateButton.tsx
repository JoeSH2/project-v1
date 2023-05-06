import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button } from 'shared/ui/Button'
import { RoutePath } from 'shared/config/routeConfig/AppRoute'
import { AppLink } from 'shared/ui/AppLink'
import style from './ArticleCreateButton.module.scss'

interface ArticleCreateButtonProps {
  className?: string
}

export const ArticleCreateButton: FC<ArticleCreateButtonProps> = (props) => {
  const { className } = props
  const { t } = useTranslation()

  return (
    <AppLink to={RoutePath.article_create}>
      <Button className={classNames(style.ArticleCreateButton, {}, [className])}>{t('Create article')}</Button>
    </AppLink>
  )
}
