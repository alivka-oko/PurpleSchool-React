import { ReactNode, useContext } from 'react';
import { UserContext } from '../context/user.context';
import { Navigate } from 'react-router-dom';

export function AuthRequire({ children }: { children: ReactNode }) {
	const { loggedUser } = useContext(UserContext);
	if (!loggedUser) {
		return <Navigate to='/login'></Navigate>;
	}
	return children;
}
