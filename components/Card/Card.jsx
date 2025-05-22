import styles from './Card.module.css';

function Card({ data }) {
	return (
		<div className={styles['card']}>
			<div className={styles['card-content']}>
				<div className={styles['card-top']}>
					<div className={styles['card-rating']}>
						<img src='/rating.svg' alt='рейтинг' className={styles['rating']} />

						{data.rating}
					</div>
					<a href='#'>
						<img
							src={data.posterUrl}
							alt={'Постер ' + data.title}
							className={styles['card-image']}
						/>
					</a>
				</div>
				<div className={styles['card-bottom']}>
					<div className={styles['card-title']}>{data.title}</div>
					<button className={styles['card-favorite-button']}>
						<img src='/like.svg' alt='в избранное' /> В избранное
					</button>
				</div>
			</div>
			<img src={data.posterUrl} alt='' className={styles['card-bg-image']} />
		</div>
	);
}

export default Card;
