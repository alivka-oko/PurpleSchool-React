import { createContext } from 'react';
import { IUser } from '../Types/IUser';
import { IUserContext } from '../Types/IUserConext';
export const UserContext = createContext<IUserContext>({
  loggedUser: null,
  login: () => {},
  logout: () => {},
});
