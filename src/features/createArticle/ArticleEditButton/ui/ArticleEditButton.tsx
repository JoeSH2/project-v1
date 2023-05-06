import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button } from 'shared/ui/Button'
import { AppLink } from 'shared/ui/AppLink'
import { RoutePath } from 'shared/config/routeConfig/AppRoute'
import style from './ArticleEditButton.module.scss'

interface ArticleEditButtonProps {
  className?: string
  id: string
}

export const ArticleEditButton: FC<ArticleEditButtonProps> = (props) => {
  const { className, id } = props
  const { t } = useTranslation()

  return (
    <AppLink to={RoutePath.article_edit + id}>
      <Button className={classNames(style.ArticleEditButton, {}, [className])}>{t('Edit article')}</Button>
    </AppLink>
  )
}
