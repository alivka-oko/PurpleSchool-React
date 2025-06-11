import Paragraph from '../Paragraph/Paragraph';
import Title from '../Title/Title';
import styles from './NotFound.module.css';

export function NotFound() {
	return (
		<div className={styles['NotFound']}>
			<Title>Упс... Ничего не найдено</Title>
			<Paragraph>
				Попробуйте изменить запрос или ввести более точное название фильма
			</Paragraph>
		</div>
	);
}

export default NotFound;
