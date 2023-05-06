import { getUserAuth, userActions } from 'entity/User'
import { LoginModal } from 'features/AuthWithUsername'
import { FC, memo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import LogoIcon from 'shared/assets/icon/LOGO.svg'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button } from 'shared/ui/Button'
import { Text } from 'shared/ui/Text'

import { ArticleCreateButton } from 'features/createArticle'
import style from './Navbare.module.scss'

interface NavbareProps {
  className?: string
}

export const Navbare: FC<NavbareProps> = memo(({ className }: NavbareProps) => {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const [isOpenModal, setIsOpenModal] = useState(false)
  const authData = useSelector(getUserAuth)

  const onCloseModal = () => {
    setIsOpenModal(false)
  }

  const clickLogout = () => {
    dispatch(userActions.logout())
    onCloseModal()
  }

  return (
    <div className={classNames(style.Navbare, {}, [className])}>
      <div className={style.linkWrapper}>
        <LogoIcon className={style.logo} />
        <Text size='xl' className={style.title} title={t('TIOL')} />
      </div>
      {authData ? (
        <div className={style.wrapperLog}>
          <ArticleCreateButton />
          <Button className={style.logBtn} onClick={clickLogout}>
            {t('Logout')}
          </Button>
        </div>
      ) : (
        <>
          <Button className={style.logBtn} onClick={() => setIsOpenModal(true)}>
            {t('Sign in')}
          </Button>
          {isOpenModal && <LoginModal isOpen={isOpenModal} onClose={onCloseModal} />}
        </>
      )}
    </div>
  )
})
