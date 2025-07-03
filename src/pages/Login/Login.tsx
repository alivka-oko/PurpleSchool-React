import { Navigate } from 'react-router-dom';
import LoginForm from '../../components/LoginForm/LoginForm';
import getActiveUser from '../../helpers/getActiveUser';

export function Login() {
  const loggedUser = getActiveUser();
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
