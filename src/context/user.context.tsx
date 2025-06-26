import { createContext } from 'react';
import { IUserContext } from '../interfaces/IUserConext';
export const UserContext = createContext<IUserContext>({
  loggedUser: null,
  login: () => {},
  logout: () => {}
});
