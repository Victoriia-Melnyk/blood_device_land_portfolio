import { GetDate } from '../GetDate/GetDate';
import styles from './Tooltip.module.scss';

export const Tooltip = () => {
	return (
		<div className={styles.tooltip}>
			<span>70% OFF</span> Ends:
			<br />
			<GetDate />
		</div>
	);
};
