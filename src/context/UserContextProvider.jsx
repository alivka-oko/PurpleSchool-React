import { useLocalStorage } from '../hooks/useLocalStorage.hook';
import { useEffect, useState } from 'react';
import { UserContext } from './user.context';

export function UserContextProvider({ children }) {
	const [users, setUsers] = useLocalStorage('users');
	const [loggedUser, setLoggedUser] = useState(null);

	const lastId = (users) => {
		if (users.length === 0) {
			return 0;
		}
		return Math.max(...users.map((e) => e.id));
	};

	const login = (user) => {
		const userExists = users.find((u) => u.name === user.name);
		const updatedUsers = users.map((u) => ({
			...u,
			isLogined: user.name === u.name
		}));
		if (!userExists) {
			updatedUsers.push({ ...user, isLogined: true, id: lastId(users) + 1 });
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
		setLoggedUser({});
	};
	return (
		<>
			<UserContext.Provider value={{ loggedUser, login, logout }}>
				{children}
			</UserContext.Provider>
		</>
	);
}
