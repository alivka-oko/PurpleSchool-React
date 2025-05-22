import styles from './Input.module.css';
import cn from 'classnames';

function Input({ placeholder, icon, onChange }) {
	const iconsUrl = {
		search: './search.svg'
	};
	if (iconsUrl[icon]) {
		return (
			<div className={cn(styles['input'], styles['input'])}>
				<img src={iconsUrl[icon]} alt='icon' className='icon' />
				<input type='text' placeholder={placeholder} />
			</div>
		);
	}
	return (
		<div className={styles['input']}>
			<input type='text' placeholder={placeholder} onChange={onChange} />
		</div>
	);
}

export default Input;
