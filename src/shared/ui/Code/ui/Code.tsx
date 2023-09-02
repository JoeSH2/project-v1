import { FC, useCallback } from 'react'
import CopyIcon from 'shared/assets/icon/copy.svg'
import { classNames } from 'shared/lib/classNames/classNames'
import { Svg } from '../../Svg/ui/Svg'
import { Button, ButtonTheme } from '../../Button'

import style from './Code.module.scss'

interface CodeProps {
  className?: string
  text: string
}

export const Code: FC<CodeProps> = (props) => {
  const { className, text } = props
  const onCopy = useCallback(() => {
    navigator.clipboard.writeText(text)
  }, [text])

  return (
    <pre className={classNames(style.Code, {}, [className])}>
      <Button onClick={onCopy} className={style.copyBtn} theme={ButtonTheme.CLEAR}>
        <Svg className={style.copySvg} Svg={CopyIcon} />
      </Button>
      <code>{text}</code>
    </pre>
  )
}
