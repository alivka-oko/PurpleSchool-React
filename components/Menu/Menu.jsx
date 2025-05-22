import styles from './Menu.module.css';
import cn from 'classnames';

function Menu() {
	return (
		<div className={styles['menu']}>
			{' '}
			<a href='#' className={styles['menu-link']}>
        Поиск фильмов
			</a>
			<a href='#' className={styles['menu-link']}>
        Мои фильмы
			</a>
			<a href='#' className={cn(styles['menu-link'], styles['login'])}>
        Войти <img src='/login.svg' alt='иконка двери' className='icon' />
			</a>
		</div>
	);
}

export default Menu;
