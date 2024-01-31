import { FC, useCallback } from 'react';
import CopyIcon from '../../../assets/icon/copy.svg';

import style from './Code.module.scss';
import { classNames } from '../../../lib/classNames/classNames';
import { Button, ButtonTheme } from '../../Button';
import { Svg } from '../../Svg/ui/Svg';

interface CodeProps {
  className?: string;
  text: string;
}

export const Code: FC<CodeProps> = props => {
  const { className, text } = props;
  const onCopy = useCallback(() => {
    navigator.clipboard.writeText(text);
  }, [text]);

  return (
    <pre className={classNames(style.Code, {}, [className])}>
      <Button onClick={onCopy} className={style.copyBtn} theme={ButtonTheme.CLEAR}>
        <Svg className={style.copySvg} Svg={CopyIcon} />
      </Button>
      <code>{text}</code>
    </pre>
  );
};
