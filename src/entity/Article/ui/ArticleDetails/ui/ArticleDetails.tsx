import { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import DateIcon from '@/shared/assets/icon/date.svg';
import EyeIcon from '@/shared/assets/icon/eye.svg';
import style from './ArticleDetails.module.scss';
import { ReducerList, useAsyncWrapperReducer } from '@/shared/lib/useAsyncWrapperReducer/useAsyncWrapperReducer';
import { ArticleBlockType } from '../../../model/consts/index';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch';
import { getArticleDetailsData, getArticleDetailsLoading } from '../../../model/selectors/getArticleDetails';
import { getCanEditArticle } from '@/pages/ArticleDetailsPage';
import { ArticleBlock } from '../../../model/types/Article';
import { ArticleDetailsBlockCode } from '../../../ui/ArticleDetailsBlockCode';
import { ArticleDetailsBlockImage } from '../../../ui/ArticleDetailsBlockImage';
import { ArticleDetailsBlockText } from '../../../ui/ArticleDetailsBlockText';
import { useInitialEffect } from '@/shared/hooks/useInitialEffect';
import { fetchArticleById } from '../../../model/services/fetchArticleById';
import { Block } from '@/shared/ui/Block';
import { Skeleton } from '@/shared/ui/Skeleton';
import { Button } from '@/shared/ui/Button';
import { ArticleEditButton } from '@/features/createArticle';
import { Svg } from '@/shared/ui/Svg/ui/Svg';
import { Text } from '@/shared/ui/Text';
import { ArticleReducer } from '../../../model/slice/ArticleSlice';
import { RoutePath } from '@/app/routes/config/routeConfig';

interface ArticleDetailsProps {
  className?: string;
  id: string;
}

const reduserList: ReducerList = { articleDetails: ArticleReducer };

export const ArticleDetails: FC<ArticleDetailsProps> = memo((props: ArticleDetailsProps) => {
  const { className, id } = props;
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const isLoading = useSelector(getArticleDetailsLoading);
  const data = useSelector(getArticleDetailsData);
  const navigate = useNavigate();
  const canEdit = useSelector(getCanEditArticle);

  const renderBlock = useCallback((block: ArticleBlock) => {
    switch (block.type) {
      case ArticleBlockType.CODE:
        return <ArticleDetailsBlockCode key={block.id} block={block} className={style.block} />;

      case ArticleBlockType.IMAGE:
        return <ArticleDetailsBlockImage key={block.id} block={block} className={style.block} />;

      case ArticleBlockType.TEXT:
        return <ArticleDetailsBlockText key={block.id} block={block} className={style.block} />;

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
      <Block>
        <div className={style.ArticleDetails}>
          <div className={style.avatar}>
            <Skeleton className={style.img} width='750px' height='300px' rounded={4} />
          </div>
          <div className={style.values}>
            <Skeleton className={style.title} marginBottom={25} width='430px' height='36px' rounded={4} />
            <div className={style.valuesItem}>
              <Skeleton marginRight={25} className={style.svg} rounded={4} />
              <Skeleton width='120px' height='24px' rounded={4} />
            </div>
            <div className={style.valuesItem}>
              <Skeleton marginRight={25} className={style.svg} rounded={4} />
              <Skeleton width='120px' height='24px' rounded={4} />
            </div>
          </div>
        </div>
        <div>
          <Skeleton className={style.img} marginTop={25} marginBottom={15} width='550px' height='36px' rounded={4} />
          <Skeleton className={style.img} marginBottom={5} width='100%' height='16px' rounded={4} />
          <Skeleton className={style.img} marginBottom={5} width='100%' height='16px' rounded={4} />
          <Skeleton className={style.img} marginBottom={5} width='100%' height='16px' rounded={4} />
          <Skeleton className={style.img} marginBottom={5} width='100%' height='16px' rounded={4} />
          <Skeleton className={style.img} marginBottom={5} width='100%' height='16px' rounded={4} />
          <Skeleton className={style.img} width='60%' height='16px' rounded={4} />
          <Skeleton className={style.img} marginTop={20} width='100%' height='350px' rounded={4} />
        </div>
      </Block>
    );
  }

  return (
    <Block>
      <div className={style.absoluteBtn}>
        <Button className={style.backBtn} onClick={onBack}>
          {t('Back')}
        </Button>
        {canEdit && <ArticleEditButton className={style.editBtn} id={id} />}
      </div>
      <div className={style.ArticleDetails}>
        <div className={style.avatar}>
          <img className={style.img} src={data?.img} alt={data?.title} />
        </div>
        <div className={style.values}>
          <Text className={style.title} size='xl' align='left' title={data?.title} />
          <div className={style.valuesItem}>
            <Svg className={style.svg} Svg={EyeIcon} />
            <span>{data?.views}</span>
          </div>
          <div className={style.valuesItem}>
            <Svg className={style.svg} Svg={DateIcon} />
            <span>{data?.createdAt}</span>
          </div>
        </div>
      </div>
      {data?.blocks.map(renderBlock)}
    </Block>
  );
});
