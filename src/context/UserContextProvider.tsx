import { useLocalStorage } from '../hooks/useLocalStorage.hook';
import { useEffect, useState } from 'react';
import { UserContext } from './user.context';
import { UserContextProviderProps } from './UserContextProviderProps';
import { IUser } from '../interfaces/IUser';

export function UserContextProvider({ children }: UserContextProviderProps) {
  const [users, setUsers] = useLocalStorage<IUser[]>('users', []);
  const [loggedUser, setLoggedUser] = useState<IUser | null>(null);

  const lastId = (users: IUser[]) => {
    if (users.length === 0) {
      return 0;
    }
    return Math.max(...users.map((e) => e.id));
  };

  const login = (login: string) => {
    const userExists = users.find((u) => u.name === login);
    const updatedUsers = users.map((u) => ({
      ...u,
      isLogined: login === u.name
    }));
    if (!userExists) {
      updatedUsers.push({
        name: login,
        isLogined: true,
        id: lastId(users) + 1
      });
    }
    setUsers(updatedUsers);
  };

  useEffect(() => {
    const activeUser = users.find((u) => u.isLogined === true);
    if (activeUser) {
      setLoggedUser(activeUser);
    }
  }, [users]);

  const logout = () => {
    const updatedUsers = users.map((u) => ({
      ...u,
      isLogined: false
    }));
    setUsers(updatedUsers);
    setLoggedUser(null);
  };
  return (
    <>
      <UserContext.Provider value={{ loggedUser, login, logout }}>
        {children}
      </UserContext.Provider>
    </>
  );
}
