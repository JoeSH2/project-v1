import { CounterSchema } from 'entity/Counter';
import { UserSchema } from 'entity/User';
import { LoginUserScheme } from 'features/AuthWithUsername';

export interface StateSchema {
    counter: CounterSchema;
    user: UserSchema;
    loginUser: LoginUserScheme;
}
