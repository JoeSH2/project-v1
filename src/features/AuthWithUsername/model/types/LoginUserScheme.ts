import { LoadingStatus } from 'shared/types/LoadingStatus';

export interface LoginUserScheme {
    username: string,
    password: string,
    isLoading: boolean;
    error?: string;
    status?: LoadingStatus | '';
}
