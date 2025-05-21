import './Cards.css';
import Card from '../Card/Card';

function Cards({ data }) {
	return (
		<div className='cards'>
			{data.map((item) => {
				return <Card data={item} key={item.id} />;
			})}
		</div>
	);
}

export default Cards;
