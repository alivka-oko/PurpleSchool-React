import styles from './Cards.module.css';
import Card from '../Card/Card';
import { CardsProps } from './CardsProps';

function Cards({ data }: CardsProps) {
	return (
		<div className={styles['cards']}>
			{data.map((item) => {
				return <Card data={item} key={item.id} />;
			})}
		</div>
	);
}

export default Cards;
