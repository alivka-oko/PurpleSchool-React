import styles from './Paragraph.module.css';
import cn from 'classnames';

function Paragraph({ children, size }) {
	let paragraphClass = size ? `paragraph paragraph-${size}` : 'paragraph';
	const classNameModule = paragraphClass.split(' ').map((className) => styles[className]);
	return <p className={cn(classNameModule)}>{children}</p>;
}

export default Paragraph;
