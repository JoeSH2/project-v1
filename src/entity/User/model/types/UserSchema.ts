import { FeaturesFlags } from '@/shared/types/featuresFlags';

import { UserRole } from '../consts';

import { JsonSettings } from './JsonSettings';

export interface User {
  id: string;
  username: string;
  avatar?: string;
  role?: UserRole[];
  features?: FeaturesFlags;
  jsonSettings?: JsonSettings;
}

export interface UserSchema {
  authData?: User;
  mounted?: boolean;
}
