import styles from './Button.module.css';

function Button({ text, onClick }) {
	const buttonClick = onClick
		? onClick
		: () => {
			console.log(`Я кнопка: ${text}`);
		};
	return (
		<button className={styles['button']} onClick={buttonClick}>
			{' '}
			{text}{' '}
		</button>
	);
}

export default Button;
