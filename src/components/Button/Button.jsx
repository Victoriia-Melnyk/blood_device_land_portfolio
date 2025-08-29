import styles from './Button.module.scss';
import { Arrow } from '../../assets/Arrow';
import { Tooltip } from '../Tooltip/Tooltip';

export const Button = ({ buttonText, href, index }) => {
	return (
		<div className={styles.buttonContainer}>
			{index === 0 && <Tooltip />}
			<a className={styles.button} href={href} target="_blank" rel="noreferrer">
				<span>{buttonText}</span>
				{Arrow}
			</a>
		</div>
	);
};
