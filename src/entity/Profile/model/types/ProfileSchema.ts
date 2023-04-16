import { CountryList } from 'entity/Country/index';
import { CurrencyList } from 'entity/Currency';
import { LoadingStatus } from 'shared/types/LoadingStatus';

export interface Profile {
    id?: string,
    first?: string,
    lastname?: string,
    age?: number,
    currency?: CurrencyList,
    country?: CountryList,
    city?: string,
    username?: string,
    avatar?: string
}

export enum validateError {
    INCORRECT_FIRSTNAME = 'Incorrect firstname',
    INCORRECT_LASTNAME = 'Incorrect lastname',
    INCORRECT_USERNAME = 'Incorrect username',
    INCORRECT_AGE = 'Incorrect age',
    INCORRECT_AVATAR = 'Incorrect avatar',
    INCORRECT_CITY = 'Incorrect city',
    INCORRECT_COUNTRY = 'Incorrect country',
    INCORRECT_CURRNECY = 'Incorrect currency',
    NO_DATA = 'Error data'
}

export interface ProfileSchema {
    data?: Profile;
    form?: Profile;
    isLoading?: boolean;
    error?: string;
    status?: LoadingStatus | '',
    readonly?: boolean;
    validateForm?: validateError[]
}
