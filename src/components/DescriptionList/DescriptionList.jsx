import styles from './DescriptionList.module.scss';

export const DescriptionList = ({ list, columns, bold }) => {
	return (
		<ul
			className={`${styles.descriptionList} ${
				styles[`descriptionList--${columns}`]
			}`}
			style={{ fontWeight: bold && 700 }}
		>
			{list.map((item, index) => {
				return (
					<li key={index}>
						<img src={item.status} alt="" />
						{item.feature}
					</li>
				);
			})}
		</ul>
	);
};
