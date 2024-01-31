import { FC, memo } from 'react';
import { ReducerList, useAsyncWrapperReducer } from '@/shared/lib/useAsyncWrapperReducer/useAsyncWrapperReducer';
import { editorProfileReducer } from '../../model/slice/editorProfileSlice';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch';
import { useInitialEffect } from '@/shared/hooks/useInitialEffect';
import { fetchProfileData } from '../../model/services/fetchProfileData/fetchProfileData';
import { EditorProfileHeader } from '../EditorProfileHeader/EditorProfileHeader';
import { EditorProfileForm } from '../EditorProfileForm/ui/EditorProfileForm';

interface EditorProfileProps {
  className?: string;
  id: string | undefined;
}

const reducerList: ReducerList = {
  profile: editorProfileReducer,
};

export const EditorProfile: FC<EditorProfileProps> = memo((props: EditorProfileProps) => {
  const { className, id } = props;
  const dispatch = useAppDispatch();

  useInitialEffect(() => {
    if (id) {
      dispatch(fetchProfileData(id));
    }
  });

  useAsyncWrapperReducer(reducerList);
  return (
    <div className={className}>
      <EditorProfileHeader />
      <EditorProfileForm />
    </div>
  );
});
