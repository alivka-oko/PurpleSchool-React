import styles from './Menu.module.css';
import cn from 'classnames';

function Menu({ user, toggleLogin }) {
	return (
		<div className={styles['menu']}>
			<a href='#' className={styles['menu-link']}>
        Поиск фильмов
			</a>
			<a href='#' className={styles['menu-link']}>
        Мои фильмы
			</a>
			{user && user.name ? (
				<a href='#' className={cn(styles['user'])}>
					{user.name}{' '}
					<img src='/user.svg' alt='иконка пользователя' className='icon' />
				</a>
			) : (
				''
			)}
			<button
				onClick={toggleLogin}
				className={cn(styles['menu-link'], styles['login'])}
			>
				{user && user.name ? (
					'Выйти '
				) : (
					<>
						{'Войти'}
						<img src='/login.svg' alt='иконка двери' className='icon' />
					</>
				)}
			</button>
		</div>
	);
}

export default Menu;
