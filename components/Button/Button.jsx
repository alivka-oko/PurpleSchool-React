import './Button.css';

function Button({ text, onClick }) {
	const buttonClick = onClick
		? onClick
		: () => {
			console.log(`Я кнопка: ${text}`);
		};
	return (
		<button className='button' onClick={buttonClick}>
			{' '}
			{text}{' '}
		</button>
	);
}

export default Button;
