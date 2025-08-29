import styles from './ProductInfo.module.scss';

export const ProductInfo = ({ children }) => {
	return <div className={styles.productInfo}>{children}</div>;
};
