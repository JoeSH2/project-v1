import { Profile } from 'entity/Profile';

import { validateError } from '../../types/ProfileSchema';

export const validateFormData = (profile?: Profile) => {
  if (!profile) {
    return [validateError.NO_DATA];
  }

  const { age, avatar, city, country, currency, first, lastname, username, } = profile;

  const error: validateError[] = [];

  if (!age && !Number.isInteger(age)) {
    error.push(validateError.INCORRECT_AGE);
  }
  if (!avatar) {
    error.push(validateError.INCORRECT_AVATAR);
  }
  if (!username) {
    error.push(validateError.INCORRECT_USERNAME);
  }
  if (!lastname) {
    error.push(validateError.INCORRECT_LASTNAME);
  }
  if (!first) {
    error.push(validateError.INCORRECT_FIRSTNAME);
  }
  if (!city) {
    error.push(validateError.INCORRECT_CITY);
  }
  if (!country) {
    error.push(validateError.INCORRECT_COUNTRY);
  }
  if (!currency) {
    error.push(validateError.INCORRECT_CURRNECY);
  }

  return error;
};
