import styles from './RatingStars.module.scss';
import star from '../../assets/star.png';
import halfStar from '../../assets/star-half.png';
import emptyStar from '../../assets/star-empty.png';

export const RatingStars = ({ rating }) => {
	const normalizedRating = Number(rating) - 5;
	const integerPart = Math.trunc(normalizedRating);
	const fractionalPart = normalizedRating - integerPart;

	return (
		<div className={styles.ratingStars}>
			{Array.from({ length: integerPart }, (_, i) => (
				<img key={i} src={star} alt="star" />
			))}
			{fractionalPart < 0.5 && <img src={emptyStar} alt="" />}
			{fractionalPart === 0.5 && <img src={halfStar} alt="" />}
			{fractionalPart > 0.5 && <img src={star} alt="" />}
			{integerPart < 4 &&
				Array.from(
					{ length: 5 - integerPart - 1 }, // Прибрано зайву кому
					(_, i) => <img key={`empty-${i}`} src={emptyStar} alt="empty star" />
				)}
		</div>
	);
};
