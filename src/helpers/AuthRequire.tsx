import { ReactNode, useContext } from 'react';
import { Navigate } from 'react-router-dom';
import getActiveUser from './getActiveUser';

export function AuthRequire({ children }: { children: ReactNode }) {
  const activeUser = getActiveUser();
  if (!activeUser) {
    return <Navigate to='/login'></Navigate>;
  }
  return children;
}
