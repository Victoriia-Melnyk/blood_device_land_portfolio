import { DescriptionList } from '../DescriptionList/DescriptionList';
import { Button } from '../Button/Button';
import { Price } from '../Price';
import { RatingStars } from '../RatingStars/RatingStars';
import flag from '../../assets/Flag.png';
import styles from './ProductCard.module.scss';
import { ProductInfo } from '../ProductInfo/ProductInfo';

export const ProductCard = ({ product, index, expanded }) => {
	return (
		<div
			className={`${styles.productCard} ${
				expanded && index > 2 ? styles['productCard--show'] : ''
			}`}
		>
			<a href="/" className={styles.productCard__imageContainer}>
				<img
					className={styles.productCard__productImage}
					src={product.productImage}
					alt="product"
				/>
			</a>

			<div className={styles.productCard__infoTop}>
				<div className={styles.productCard__productName}>
					{product.productName}
				</div>
				<div className={styles.productCard__productRating}>
					Rating
					<RatingStars rating={product.rating} />
				</div>
			</div>

			<div className={styles.productCard__list}>
				<DescriptionList list={product.featureList} columns={2} />
			</div>
			{index === 0 && (
				<a href="/#review" className={styles.productCard__review}>
					&gt;&gt; Read Full Review &lt;&lt;
				</a>
			)}
			<div className={styles.productCard__info}>
				<ProductInfo>
					<p>{product.rating}</p>
					<RatingStars rating={product.rating} />
					<p>{product.usersRateText}</p>
					<Button
						buttonText={product.buttonText}
						href={product.buttonHref}
						index={index}
					/>
					<p>{product.shippingInfo}</p>
					<Price price={product.price} oldPrice={product.oldPrice} />
				</ProductInfo>
			</div>
			{index === 0 ? (
				<img
					className={`${styles.productCard__attachment} ${styles.productCard__attachmentGreen}`}
					src={flag}
					alt="flag"
				></img>
			) : (
				<div
					className={`${styles.productCard__attachment} ${styles.productCard__attachmentBlack}`}
				>
					{index + 1}
				</div>
			)}
		</div>
	);
};
