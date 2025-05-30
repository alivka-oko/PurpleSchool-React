import styles from './Button.module.css';

function Button({ text, className, ...props }) {
	return (
		<button
			className={
				className ? `${className} ${styles['button']}` : styles['button']
			}
			{...props}
		>
			{text}
		</button>
	);
}

export default Button;
