import styles from './Header.module.css';

function Header({ children }) {
	return (
		<header className={styles['header']}>
			<div className={styles['container']}>
				<img className={styles['logo']} src='/logo.svg'></img>
				{children}
			</div>
		</header>
	);
}

export default Header;
