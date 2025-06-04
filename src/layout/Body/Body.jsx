import styles from './Body.module.css';
import cn from 'classnames';

function Body({ children }) {
	return (
		<>
			<div className={cn(styles['body'], 'container')}>{children}</div>
		</>
	);
}

export default Body;
