import './Header.css';

function Header({ children }) {
	return (
		<header className='header'>
			<div className='container'>
				<img className='logo' src='/logo.svg'></img>
				{children}
			</div>
		</header>
	);
}

export default Header;
