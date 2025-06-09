import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

function Header({ children }: { children: React.ReactNode }) {
	return (
		<header className={styles['header']}>
			<div className={styles['container']}>
				<NavLink to={'/'}>
					<img className={styles['logo']} src='/logo.svg'></img>
				</NavLink>
				{children}
			</div>
		</header>
	);
}

export default Header;
