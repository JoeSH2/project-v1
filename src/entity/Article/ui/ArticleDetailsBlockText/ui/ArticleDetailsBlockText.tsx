import { FC } from 'react';
import cls from './ArticleDetailsBlockText.module.scss';
import { ArticleBlockText } from '../../../model/types/Article';
import { Text } from '@/shared/ui/Text';
import { classNames } from '@/shared/lib/classNames/classNames';

interface ArticleDetailsBlockTextProps {
  className?: string;
  block: ArticleBlockText;
}

export const ArticleDetailsBlockText: FC<ArticleDetailsBlockTextProps> = props => {
  const { className, block } = props;

  return (
    <div className={classNames(cls.articleDetailsBlockText, {}, [className])}>
      <Text title={block.title} align='left' />
      {block.paragraphs.map(paragraph => (
        <p key={paragraph}>{paragraph}</p>
      ))}
    </div>
  );
};
