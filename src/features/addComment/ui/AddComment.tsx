import { FC, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch';
import { ReducerList, useAsyncWrapperReducer } from '@/shared/lib/useAsyncWrapperReducer/useAsyncWrapperReducer';
import { addCommentActions, addCommentReducer } from '@/features/addComment/model/slice/addCommentSlice';
import { getCommentFormText } from '@/features/addComment/model/selectors/getCommentFormData';
import style from './AddComment.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Input } from '@/shared/ui/Input';
import { Button } from '@/shared/ui/Button';

interface AddCommentProps {
  className?: string;
  onSendComment: (text: string) => void;
}

const reducerList: ReducerList = { commentForm: addCommentReducer };

const AddComment: FC<AddCommentProps> = ({ className, onSendComment }) => {
  const { t } = useTranslation('about');
  const text = useSelector(getCommentFormText);
  const dispatch = useAppDispatch();

  const onCommentChangeHandler = useCallback(
    (value: string) => {
      dispatch(addCommentActions.setText(value));
    },
    [dispatch],
  );

  const onSubmitForm = useCallback(() => {
    onSendComment(text || '');
    onCommentChangeHandler('');
  }, [onCommentChangeHandler, onSendComment, text]);

  useAsyncWrapperReducer(reducerList);

  return (
    <form action='' className={classNames(style.AddComment, {}, [className])}>
      <Input placeholder='Comment' className={style.input} value={text} onChange={onCommentChangeHandler} />
      <Button onClick={onSubmitForm} className={style.btn}>
        {t('Comment')}
      </Button>
    </form>
  );
};

export default AddComment;
