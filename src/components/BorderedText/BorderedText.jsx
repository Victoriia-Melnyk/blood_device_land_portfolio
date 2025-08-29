import styles from './BorderedText.module.scss';

export const BorderedText = ({ children, borderColor, backgroundColor }) => {
	return (
		<div
			className={styles.borderedText}
			style={{ backgroundColor, borderColor }}
		>
			{children}
		</div>
	);
};
