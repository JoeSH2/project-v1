import { fetchArticleById } from 'entity/Article/model/services/fetchArticleById';
import { ArticleReducer } from 'entity/Article/model/slice/ArticleSlice';
import { ArticleBlock, ArticleBlockType } from 'entity/Article/model/types/Article';
import {
  FC, memo, useCallback, useEffect,
} from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import DateIcon from 'shared/assets/icon/date.svg';
import EyeIcon from 'shared/assets/icon/eye.svg';
import { RoutePath } from 'shared/config/routeConfig/AppRoute';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import { useInitialEffect } from 'shared/hooks/useInitialEffect';
import { classNames } from 'shared/lib/classNames/classNames';
import { ReducerList, useAsyncWrapperReducer } from 'shared/lib/useAsyncWrapperReducer/useAsyncWrapperReducer';
import { Avatar } from 'shared/ui/Avatar';
import { Button } from 'shared/ui/Button';
import { Skeleton } from 'shared/ui/Skeleton';
import { Svg } from 'shared/ui/Svg/ui/Svg';
import { Text } from 'shared/ui/Text';

import {
  getArticleDetailsData,
  getArticleDetailsLoading,
} from '../../../model/selectors/getArticleDetails';
import { ArticleDetailsBlockCode } from '../../ArticleDetailsBlockCode';
import { ArticleDetailsBlockImage } from '../../ArticleDetailsBlockImage';
import { ArticleDetailsBlockText } from '../../ArticleDetailsBlockText';
import style from './ArticleDetails.module.scss';

interface ArticleDetailsProps {
   className?: string;
   id: string;
}

const reduserList: ReducerList = {
  articleDetails: ArticleReducer,
};

export const ArticleDetails: FC<ArticleDetailsProps> = memo((props: ArticleDetailsProps) => {
  const { className, id } = props;
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const isLoading = useSelector(getArticleDetailsLoading);
  const data = useSelector(getArticleDetailsData);
  const navigate = useNavigate();

  const renderBlock = useCallback((block: ArticleBlock) => {
    switch (block.type) {
    case ArticleBlockType.CODE:
      return (
        <ArticleDetailsBlockCode key={block.id} block={block} className={style.block} />
      );

    case ArticleBlockType.IMAGE:
      return (
        <ArticleDetailsBlockImage key={block.id} block={block} className={style.block} />
      );

    case ArticleBlockType.TEXT:
      return (
        <ArticleDetailsBlockText key={block.id} block={block} className={style.block} />
      );

    default:
      return null;
    }
  }, []);

  const onBack = useCallback(() => {
    navigate(RoutePath.articles);
  }, [navigate]);

  useAsyncWrapperReducer(reduserList);

  useInitialEffect(() => {
    dispatch(fetchArticleById(id));
  });

  if (isLoading) {
    return (
      <div className={style.wrapper}>
        <Skeleton width="200px" height="200px" rounded="50%" marginBottom="15px" />
        <Skeleton width="40%" height="36px" rounded="2px" marginBottom="40px" />
        <div>
          <Skeleton width="25px" height="25px" rounded="2px" marginRight={20} />
          <Skeleton width="15%" height="16px" rounded="2px" />
        </div>
        <div>
          <Skeleton width="25px" height="25px" rounded="2px" marginRight={20} />
          <Skeleton width="15%" height="16px" rounded="2px" />
        </div>
        <Skeleton width="100%" height="16px" rounded="2px" marginTop={15} marginBottom="15px" />
        <Skeleton width="100%" height="16px" rounded="2px" marginBottom="15px" />
        <Skeleton width="40%" height="16px" rounded="2px" marginBottom="30px" />
        <Skeleton width="100%" height="100px" rounded="6px" marginBottom="50px" />
        <Skeleton width="100%" height="16px" rounded="2px" marginBottom="15px" />
        <Skeleton width="100%" height="16px" rounded="2px" marginBottom="15px" />
        <Skeleton width="100%" height="16px" rounded="2px" />
      </div>
    );
  }

  return (
    <div className={classNames(style.ArticleDetails, {}, [className])}>
      <Button className={style.backBtn} onClick={onBack}>{t('Back')}</Button>
      <div className={style.avatar}><img className={style.img} src={data?.img} alt={data?.title} /></div>
      <Text title={data?.title} />
      <div className={style.values}>
        <div className={style.valuesItem}>
          <Svg className={style.svg} Svg={EyeIcon} />
          <span>{data?.views}</span>
        </div>
        <div className={style.valuesItem}>
          <Svg className={style.svg} Svg={DateIcon} />
          <span>{data?.createdAt}</span>
        </div>
      </div>
      {data?.blocks.map(renderBlock)}
    </div>
  );
});
