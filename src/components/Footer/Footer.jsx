import { NavLink } from 'react-router-dom';
import styles from './Footer.module.scss';

export const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.footer__container}>
				<nav>
					<ul className={styles.footer__links}>
						<li>
							<NavLink to="/about" target="_blank">
								About |
							</NavLink>
						</li>
						<li>
							<NavLink to="/contact" target="_blank">
								Contact |
							</NavLink>
						</li>
						<li>
							<NavLink to="/privacy" target="_blank">
								Privacy Policy |
							</NavLink>
						</li>
						<li>
							<NavLink to="/terms" target="_blank">
								Terms |
							</NavLink>
						</li>
						<li>
							<NavLink to="/disclosure" target="_blank">
								Disclosure
							</NavLink>
						</li>
					</ul>
				</nav>
				<p>COPYRIGHT © 2025 consumerguidereviews. ALL RIGHTS RESERVED</p>
				<p>
					HEALTH DISCLAIMER: This website is not intended to provide medical
					advice or to take the place of medical advice and treatment from your
					personal physician. Visitors are advised to consult their own doctors
					or other qualified health professional regarding the treatment of
					medical conditions. The author shall not be held liable or responsible
					for any misunderstanding or misuse of the information contained on
					this site or for any loss, damage, or injury caused, or alleged to be
					caused, directly or indirectly by any treatment, action, or
					application of any food or food source discussed in this website. The
					U.S. Food and Drug Administration have not evaluated the statements on
					this website. The information is not intended to diagnose, treat,
					cure, or prevent any disease.
				</p>
				<p>
					MARKETING DISCLOSURE: This site may earn from qualifying purchases
					from Amazon and other links. As such you should know that the owner
					has a monetary connection to the product and services advertised on
					the site. The owner receives payment whenever a qualified lead is
					referred but that is the extent of it.
				</p>
				<p>
					ADVERTISING DISCLOSURE: This website and the products & services
					referred to on the site are advertising marketplaces. This website is
					an advertisement and not a news publication. Any photographs of
					persons used on this site are models. The owner of this site and of
					the products and services referred to on this site only provides a
					service where consumers can obtain and compare.
				</p>
			</div>
		</footer>
	);
};
