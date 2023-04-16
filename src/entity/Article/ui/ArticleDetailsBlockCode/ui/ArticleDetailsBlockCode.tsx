import { ArticleBlockCode } from 'entity/Article/model/types/Article';
import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Code } from 'shared/ui/Code';

import cls from './ArticleDetailsBlockCode.module.scss';

interface ArticleDetailsBlockCodeProps {
   className?: string;
   block: ArticleBlockCode;
}

export const ArticleDetailsBlockCode: FC<ArticleDetailsBlockCodeProps> = (props) => {
  const { className, block } = props;

  return (
    <div className={classNames(cls.articleDetailsBlockCode, {}, [className])}>
      <Code text={block.code} />
    </div>
  );
};
