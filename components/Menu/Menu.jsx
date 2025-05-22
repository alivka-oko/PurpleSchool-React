import './Menu.css';

function Menu() {
	return (
		<div className='menu'>
			{' '}
			<a href='#' className='menu-link'>
        Поиск фильмов
			</a>
			<a href='#' className='menu-link'>
        Мои фильмы
			</a>
			<a href='#' className='menu-link login'>
        Войти <img src='/login.svg' alt='иконка двери' className='icon' />
			</a>
		</div>
	);
}

export default Menu;
