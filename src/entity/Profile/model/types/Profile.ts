import { CountryList } from '@/entity/Country';
import { CurrencyList } from '@/entity/Currency';

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
