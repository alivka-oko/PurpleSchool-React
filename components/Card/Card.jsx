import './Card.css';

function Card({ data }) {
	return (
		<div className='card'>
			<div className='card-content'>
				<div className='card-top'>
					<div className='card-rating'>
						<img src='/rating.svg' alt='рейтинг' className='rating' />

						{data.rating}
					</div>
					<a href='#'>
						<img
							src={data.posterUrl}
							alt={'Постер ' + data.title}
							className='card-image'
						/>
					</a>
				</div>
				<div className='card-bottom'>
					<div className='card-title'>{data.title}</div>
					<button className='card-favorite-button'>
						<img src='/like.svg' alt='в избранное' /> В избранное
					</button>
				</div>
			</div>
			<img src={data.posterUrl} alt='' className='card-bg-image' />
		</div>
	);
}

export default Card;
