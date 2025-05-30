import './App.module.css';
import Header from './layout/Header/Header';
import Menu from './components/Menu/Menu';
import Body from './layout/Body/Body';
import mockData from './assets/data/mockData';
import Cards from './components/Cards/Cards';
import SearchArea from './components/SearchArea/SearchArea';
import LoginForm from './components/LoginForm/LoginForm';
import { useLocalStorage } from './hooks/useLocalStorage.hook';
import { useEffect, useState } from 'react';

function App() {
	const [users, setUsers] = useLocalStorage('users');
	const [loggedUser, setLoggedUser] = useState({});
	const loging = (user) => {
		const userExists = users.find((u) => u.name === user.name);
		const updatedUsers = users.map((u) => ({
			...u,
			isLogined: user.name === u.name
		}));
		if (!userExists) {
			updatedUsers.push({ ...user, isLogined: true });
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
			<Header>
				<Menu user={loggedUser} logout={logout} />
			</Header>
			<Body>
				<SearchArea />
				<Cards data={mockData} />
				<LoginForm onSubmit={loging} />
			</Body>
		</>
	);
}

export default App;
