import { ArticleBlockImage } from 'entity/Article/model/types/Article';
import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text';

import style from './ArticleDetailsBlockImage.module.scss';

interface ArticleDetailsBlockImageProps {
   className?: string;
   block: ArticleBlockImage
}

export const ArticleDetailsBlockImage: FC<ArticleDetailsBlockImageProps> = (props) => {
  const { className, block } = props;

  return (
    <div className={classNames(style.articleDetailsBlockImage, {}, [className])}>
      <img src={block.src} alt={block.title} />
      {block.title && (
        <Text size="m" className={style.text} text={block.title} align="center" />
      )}
    </div>
  );
};
