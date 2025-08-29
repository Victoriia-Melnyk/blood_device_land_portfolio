import styles from './Advantage.module.scss';

export const Advantage = ({ advantage }) => {
	return (
		<div className={styles.advantage}>
			<img className={styles.advantage__icon} src={advantage.icon} alt="icon" />
			<div className={styles.advantage__text}>
				<p className={styles.advantage__title}>{advantage.advantage}</p>
				<p className={styles.advantage__subtitle}>{advantage.description}</p>
			</div>
		</div>
	);
};
