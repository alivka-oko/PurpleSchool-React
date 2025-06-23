import { IUser } from './IUser';
export interface IUserContext {
  loggedUser: IUser | null;
  login: (login: string) => void;
  logout: () => void;
}
