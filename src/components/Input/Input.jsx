import styles from './Input.module.css';
import cn from 'classnames';

function Input({ icon, onChange, ref, isValid = true, ...props }) {
	const iconsUrl = {
		search: './search.svg'
	};
	if (iconsUrl[icon]) {
		return (
			<div className={cn(styles['input'])}>
				<img src={iconsUrl[icon]} alt='icon' className='icon' />
				<input {...props} type='text' className={cn({ [styles['invalid']]: !isValid })}/>
			</div>
		);
	}
	return (
		<div className={cn(styles['input'])}>
			<input
				{...props}
				ref={ref}
				type='text'
				className={cn({ [styles['invalid']]: !isValid })}
				onChange={onChange}
			/>
		</div>
	);
}

export default Input;
