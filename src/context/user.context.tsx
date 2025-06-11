import { createContext } from 'react';
import { IUserContext } from '../Types/IUserConext';
export const UserContext = createContext<IUserContext>({
  loggedUser: null,
  login: () => {},
  logout: () => {},
});
