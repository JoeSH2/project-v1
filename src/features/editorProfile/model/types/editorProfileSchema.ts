import { LoadingStatus } from '@/shared/types/LoadingStatus';
import { Profile } from '@/entity/Profile';
import { validateError } from '../consts';

export interface ProfileSchema {
  data?: Profile;
  form?: Profile;
  isLoading?: boolean;
  error?: string;
  status?: LoadingStatus | '';
  readonly?: boolean;
  validateForm?: validateError[];
}
