import styles from './Button.module.scss';
import { Arrow } from '../../assets/Arrow';
import { Tooltip } from '../Tooltip/Tooltip';
import { Link } from 'react-router-dom';

export const Button = ({ buttonText, href, index }) => {
	const isExternal = href.startsWith('http');

	return (
		<div className={styles.buttonContainer}>
			{index === 0 && <Tooltip />}
			{isExternal ? (
				<a
					className={styles.button}
					href={href}
					target="_blank"
					rel="noreferrer"
				>
					<span>{buttonText}</span>
					{Arrow}
				</a>
			) : (
				<Link to={href} className={styles.button}>
					<span>{buttonText}</span>
					{Arrow}
				</Link>
			)}
		</div>
	);
};
