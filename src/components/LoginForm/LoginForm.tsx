import styles from './LoginForm.module.css';
import Input from '../Input/Input';
import Button from '../Button/Button';
import Title from '../Title/Title';
import { ChangeEvent, FormEvent, InputEvent, useEffect, useRef } from 'react';
import { useReducer, useContext } from 'react';
import { formReducer, INITIAL_STATE } from './LoginForm.state';
import { UserContext } from '../../context/user.context';

function LoginForm() {
  const { login } = useContext(UserContext);
  const [formState, dispatchForm] = useReducer(formReducer, INITIAL_STATE);
  const { values, isFormReadyToSubmit, isValid } = formState;
  const loginObject = useRef<HTMLInputElement>(null);

  const send = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    isValid.login = true;
    dispatchForm({ type: 'SUBMIT' });
  };

  useEffect(() => {
    let timerId: number | undefined;
    if (!isValid.login && loginObject.current) {
      loginObject.current.focus();
      timerId = setTimeout(() => {
        dispatchForm({ type: 'RESET_VALIDITY' });
      }, 1000);
    }
    return () => {
      clearTimeout(timerId);
    };
  }, [isValid]);

  useEffect(() => {
    if (isFormReadyToSubmit) {
      login(values.login);
      dispatchForm({ type: 'RESET' });
    }
  }, [login, isFormReadyToSubmit, values.login]);

  const inputChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatchForm({
      type: 'SET_VALUE',
      payload: { [e.target.name]: e.target.value },
    });
  };

  return (
    <form className={styles['login-area']} onSubmit={send}>
      <div className={styles['login-area-title']}>
        <Title>Вход</Title>
      </div>
      <div className={styles['login-area-input']}>
        <Input
          placeholder='Ваше имя'
          onChange={inputChange}
          name='login'
          value={values.login}
          isValid={isValid.login}
          ref={loginObject}
        ></Input>
        <Button className={styles['button']}>Войти в профиль</Button>
      </div>
    </form>
  );
}

export default LoginForm;
