import styles from './LoginForm.module.css';
import Input from '../Input/Input';
import Button from '../Button/Button';
import Title from '../Title/Title';
import { useEffect, useRef } from 'react';
import { useReducer } from 'react';
import { formReducer, INITIAL_STATE } from './LoginForm.state';

function LoginForm({ onSubmit }) {
	const [formState, dispatchForm] = useReducer(formReducer, INITIAL_STATE);
	const { values, isFormReadyToSubmit, isValid } = formState;
	const loginObject = useRef();

	const login = (e) => {
		e.preventDefault();
		isValid.login = true;
		dispatchForm({ type: 'SUBMIT' });
	};

	useEffect(() => {
		let timerId;
		if (!isValid.login) {
			loginObject.current.focus();
			timerId = setTimeout(() => {
				dispatchForm({ type: 'RESET' });
				console.log('Чистим');
			}, 1000);
		}
		return () => {
			clearTimeout(timerId);
		};
	}, [isValid]);

	useEffect(() => {
		if (isFormReadyToSubmit) {
			onSubmit({ name: values.login });
			dispatchForm({ type: 'RESET' });
		}
	}, [onSubmit, isFormReadyToSubmit, values.login]);

	const inputChange = (e) => {
		dispatchForm({
			type: 'SET_VALUE',
			payload: { [e.target.name]: e.target.value }
		});
	};

	return (
		<form className={styles['login-area']} onSubmit={login}>
			<div className={styles['login-area-title']}>
				<Title>Вход</Title>
			</div>
			<div className={styles['login-area-input']}>
				<Input
					placeholder={'Ваше имя'}
					onChange={inputChange}
					name='login'
					value={values.login}
					isValid={isValid.login}
					ref={loginObject}
				></Input>
				<Button className={styles['button']} text={'Войти в профиль'} />
			</div>
		</form>
	);
}

export default LoginForm;
