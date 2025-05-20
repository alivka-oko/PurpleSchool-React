import './Header.css';

function Header({ children }) {
	return (
		<header className='header'>
			<div className="container">
				<img src='/logo.svg'></img>
				{children}
			</div>
		</header>
	);
}

export default Header;
