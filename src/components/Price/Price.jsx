import styles from './Price.module.scss';

export const Price = ({ price, oldPrice }) => {
	return (
		<div className={styles.price}>
			<span className={styles.price__new}>{price}</span>
			{oldPrice && <span className={styles.price__old}>{oldPrice}</span>}
		</div>
	);
};
