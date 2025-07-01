import styles from './LoginForm.module.css';
import Input from '../Input/Input';
import Button from '../Button/Button';
import Title from '../Title/Title';
import { ChangeEvent, FormEvent, useEffect, useRef, useState } from 'react';
import { UserContext } from '../../context/user.context';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store/store';
import { UserActions } from '../../store/user.slice';
function LoginForm() {
  const [inputValue, setInputValue] = useState('');
  const [inputValidity, setInputValidity] = useState(true);
  const dispatch = useDispatch<AppDispatch>();
  const loginObject = useRef<HTMLInputElement>(null);

  function checkValidity() {
    if (loginObject.current?.value == '') {
      setInputValidity(false);
      loginObject.current.focus();
      return false;
    }
    return true;
  }
  useEffect(() => {
    let timerId: number;
    if (!inputValidity) {
      timerId = setTimeout(() => {
        setInputValidity(true);
      }, 1000);
    }
    return () => {
      clearTimeout(timerId);
    };
  }, [inputValidity]);

  const send = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!checkValidity()) {
      return;
    }
    dispatch(UserActions.login(inputValue));
  };

  const inputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
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
          value={inputValue}
          isValid={inputValidity}
          ref={loginObject}
        ></Input>
        <Button className={styles['button']}>Войти в профиль</Button>
      </div>
    </form>
  );
}

export default LoginForm;
