import { FC } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ArticleBlockCode } from '@/entity/Article/model/types/Article';
import { Code } from '@/shared/ui/Code';

import style from './ArticleDetailsBlockCode.module.scss';

interface ArticleDetailsBlockCodeProps {
  className?: string;
  block: ArticleBlockCode;
}

export const ArticleDetailsBlockCode: FC<ArticleDetailsBlockCodeProps> = props => {
  const { className, block } = props;

  return (
    <div className={classNames(style.articleDetailsBlockCode, {}, [className])}>
      <Code text={block.code} />
    </div>
  );
};
