import { useContext } from 'react';
import LoginForm from '../../components/LoginForm/LoginForm';
import { UserContext } from '../../context/user.context';
import { useNavigate } from 'react-router-dom';

export function Login() {
	let navigate = useNavigate();
	const { loggedUser } = useContext(UserContext);
	if (loggedUser) {
		navigate('/');
	} else {
		return (
			<>
				<LoginForm />
			</>
		);
	}
}
