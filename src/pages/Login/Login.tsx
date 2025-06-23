import { useContext } from 'react';
import LoginForm from '../../components/LoginForm/LoginForm';
import { UserContext } from '../../context/user.context';
import { Navigate, useNavigate } from 'react-router-dom';

export function Login() {
	const { loggedUser } = useContext(UserContext);
	if (loggedUser) {
		return <Navigate to='/'></Navigate>;
	} else {
		return (
			<>
				<LoginForm />
			</>
		);
	}
}
