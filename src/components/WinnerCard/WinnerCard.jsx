import styles from './WinnerCard.module.scss';
import first from '../../assets/first.png';
import best from '../../assets/bestseller.webp';

import { winnerAdvatages, filterdProducts } from '../../utils/productData';
import { DescriptionList } from '../DescriptionList/DescriptionList';
import { ProductInfo } from '../ProductInfo/ProductInfo';
import { RatingStars } from '../RatingStars/RatingStars';
import { Button } from '../Button/Button';
import { Price } from '../Price';
import { Advantage } from '../Advantage/Advantage';

export const WinnerCard = () => {
	const winnerProduct = filterdProducts[0];
	return (
		<div className={styles.winnerCard}>
			<div className={styles.winnerCard__top}>
				<img src={first} alt="first place" />
				<h3>{winnerProduct.productName}</h3>
				<p>Best Overall Blood Glucose Monitor</p>
			</div>
			<div className={styles.winnerCard__middle}>
				<a href="/" className={styles.winnerCard__imageContainer}>
					<img
						className={styles.winnerCard__image}
						src={winnerProduct.productImage}
						alt="product"
					/>
				</a>
				<div className={styles.winnerCard__list}>
					<DescriptionList list={winnerProduct.featureList} columns={1} bold />
				</div>
				<div className={styles.winnerCard__info}>
					<ProductInfo>
						<p>{winnerProduct.rating}</p>
						<RatingStars rating={winnerProduct.rating} />
						<img src={best} alt="bestseller" />
						<p>{winnerProduct.usersRateText}</p>
						<Button
							buttonText={winnerProduct.buttonText}
							href={winnerProduct.buttonHref}
							buttonTooltip={winnerProduct.buttonTooltip}
						/>
						<p>{winnerProduct.shippingInfo}</p>
						<Price
							price={winnerProduct.price}
							oldPrice={winnerProduct.oldPrice}
						/>
					</ProductInfo>
				</div>
			</div>
			<div className={styles.winnerCard__bottom}>
				{winnerAdvatages.map(advantage => {
					return <Advantage advantage={advantage} key={advantage.advantage} />;
				})}
			</div>
		</div>
	);
};
