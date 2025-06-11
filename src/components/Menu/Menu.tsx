import { useContext } from 'react';
import styles from './Menu.module.css';
import cn from 'classnames';
import { UserContext } from '../../context/user.context';
import { IUserContext } from '../../interfaces/IUserConext';
import { NavLink } from 'react-router-dom';

function Menu() {
	const { loggedUser, logout } = useContext<IUserContext>(UserContext);
	return (
		<div className={styles['menu']}>
			<NavLink
				to={'/'}
				className={({ isActive }) =>
					cn(styles['menu-link'], { [styles['active']]: isActive })
				}
			>
				Поиск фильмов
			</NavLink>
			<NavLink
				to={'/favorites'}
				className={({ isActive }) =>
					cn(styles['menu-link'], { [styles['active']]: isActive })
				}
			>
				Мои фильмы
			</NavLink>
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
				<NavLink
					to={'/login'}
					className={({ isActive }) =>
						cn(styles['menu-link'], styles['login'], {
							[styles['active']]: isActive,
						})
					}
				>
					Войти
					<img src='/login.svg' alt='иконка двери' className='icon' />
				</NavLink>
			)}
		</div>
	);
}

export default Menu;
