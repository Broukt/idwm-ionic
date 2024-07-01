import { User } from './user';

/**
 * Represents the authentication information.
 */
export interface Auth {
  user: User;
  token: string;
}
