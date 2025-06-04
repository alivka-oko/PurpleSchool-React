import { useContext } from 'react';
import styles from './Menu.module.css';
import cn from 'classnames';
import { UserContext } from '../../context/user.context';

function Menu() {
	const { loggedUser, logout } = useContext(UserContext);
	return (
		<div className={styles['menu']}>
			<a href='#' className={styles['menu-link']}>
        Поиск фильмов
			</a>
			<a href='#' className={styles['menu-link']}>
        Мои фильмы
			</a>
			{loggedUser && loggedUser.name ? (
				<a href='#' className={cn(styles['user'])}>
					{loggedUser.name}{' '}
					<img src='/user.svg' alt='иконка пользователя' className='icon' />
				</a>
			) : (
				''
			)}
			{loggedUser && loggedUser.name ? (
				<button
					onClick={logout}
					className={cn(styles['menu-link'], styles['login'])}
				>
          Выйти
				</button>
			) : (
				<button
					onClick={logout}
					className={cn(styles['menu-link'], styles['login'])}
				>
          Войти
					<img src='/login.svg' alt='иконка двери' className='icon' />
				</button>
			)}
		</div>
	);
}

export default Menu;
