import { UserRole } from '../consts';

export interface User {
  id: string;
  username: string;
  avatar?: string;
  role?: UserRole[];
}

export interface UserSchema {
  authData?: User;
  mounted?: boolean;
}
