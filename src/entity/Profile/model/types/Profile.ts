import { CurrencyList } from 'entity/Currency/model/types/CurrencyList';
import { CountryList } from 'entity/Country/model/types/CountryList';

export interface Profile {
  id?: string;
  first?: string;
  lastname?: string;
  age?: number;
  currency?: CurrencyList;
  country?: CountryList;
  city?: string;
  username?: string;
  avatar?: string;
}
