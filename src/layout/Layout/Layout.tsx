import Header from '../Header/Header';
import Menu from '../../components/Menu/Menu';
import { UserContextProvider } from '../../context/UserContextProvider';
import Body from '../Body/Body';
import { Outlet } from 'react-router-dom';

export function Layout() {
	return (
		<>
			<UserContextProvider>
				<Header>
					<Menu />
				</Header>
				<Body>
					<Outlet></Outlet>
				</Body>
			</UserContextProvider>
		</>
	);
}

export default Layout;
