import styles from './CardsList.module.scss';

import { ProductCard } from '../ProductCard/ProductCard';
import { ExpandTop } from '../../assets/ExpandTop';
import { ExpandDown } from '../../assets/ExpandDown';
import { useEffect, useState } from 'react';
import { filterdProducts } from '../../utils/productData';

export const CardsList = () => {
	const [productsList, setProductsList] = useState(filterdProducts.slice(0, 3));
	const [expanded, setExpanded] = useState(false);

	const changeProductView = () => {
		setExpanded(!expanded);
	};

	useEffect(() => {
		setProductsList(expanded ? filterdProducts : filterdProducts.slice(0, 3));
	}, [expanded, setProductsList]);

	return (
		<div className={styles.cardsList}>
			{productsList.map((product, index) => {
				return (
					<ProductCard
						product={product}
						key={product.productName}
						index={index}
						expanded={expanded}
					/>
				);
			})}
			<div className={styles.cardsList__expandButtonContainer}>
				<button
					onClick={changeProductView}
					className={styles.cardsList__expandButton}
				>
					{expanded ? ExpandTop : ExpandDown}
				</button>
			</div>
			<p>See the rest of the list</p>
		</div>
	);
};
