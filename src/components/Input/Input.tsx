import styles from './Input.module.css';
import cn from 'classnames';
import { InputProps } from './InputProps';

const iconsUrl: Record<string, string> = {
	search: './search.svg',
};

function Input({ icon, onChange, ref, isValid = true, ...props }: InputProps) {
	if (icon && iconsUrl[icon]) {
		return (
			<div className={cn(styles['input'])}>
				<img src={iconsUrl[icon]} alt='icon' className='icon' />
				<input
					{...props}
					type='text'
					className={cn({ [styles['invalid']]: !isValid })}
					onChange={onChange}
				/>
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
