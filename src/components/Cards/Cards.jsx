import styles from './Cards.module.css';
import Card from '../Card/Card';

function Cards({ data }) {
	return (
		<div className={styles['cards']}>
			{data.map((item) => {
				return <Card data={item} key={item.id} />;
			})}
		</div>
	);
}

export default Cards;
