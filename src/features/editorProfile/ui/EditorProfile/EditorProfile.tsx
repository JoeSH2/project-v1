import { FC, memo } from 'react';

import { useAppDispatch } from '@/shared/hooks/useAppDispatch';
import { useInitialEffect } from '@/shared/hooks/useInitialEffect';
import { ReducerList, useAsyncWrapperReducer } from '@/shared/lib/useAsyncWrapperReducer/useAsyncWrapperReducer';

import { fetchProfileData } from '../../model/services/fetchProfileData/fetchProfileData';
import { editorProfileReducer } from '../../model/slice/editorProfileSlice';
import { EditorProfileForm } from '../EditorProfileForm/ui/EditorProfileForm';
import { EditorProfileHeader } from '../EditorProfileHeader/EditorProfileHeader';

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
