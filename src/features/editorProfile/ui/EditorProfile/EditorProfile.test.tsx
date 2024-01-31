import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import componentRender from '@/shared/lib/tests/componentRender/componentRender';

import { CurrencyList } from '@/entity/Currency';
import { Profile } from '@/entity/Profile';
import { CountryList } from '@/entity/Country';
import { editorProfileReducer } from '../../model/slice/editorProfileSlice';
import { EditorProfile } from '../EditorProfile/EditorProfile';

const profile: Profile = {
  id: '1',
  first: 'admin',
  lastname: 'admin',
  age: 22,
  currency: CurrencyList.RUB,
  country: CountryList.UKRAINE,
  city: 'Moscow',
  username: 'Admin',
  avatar: '',
};

const options = {
  initialState: {
    profile: {
      data: profile,
      readonly: true,
      form: profile,
    },
    user: {
      authData: {
        id: '1',
        avatar: '',
        username: 'Admin',
      },
    },
  },
  asyncReducer: {
    profile: editorProfileReducer,
  },
};

describe('Edit profile', () => {
  test('readonly status', async () => {
    componentRender(<EditorProfile id='1' />, options);
    await userEvent.click(screen.getByTestId('EditorProfileHeader.EditBtn'));
    expect(screen.getByTestId('EditorProfileHeader.CancelBtn'));
  });

  test('error validation', async () => {
    componentRender(<EditorProfile id='1' />, options);

    await userEvent.click(screen.getByTestId('EditorProfileHeader.EditBtn'));

    await userEvent.clear(screen.getByTestId('ProfileList.username'));
    await userEvent.clear(screen.getByTestId('ProfileList.firstname'));

    await userEvent.click(screen.getByTestId('EditorProfileHeader.SaveBtn'));

    expect(screen.findByAltText('Error data'));
  });
});
