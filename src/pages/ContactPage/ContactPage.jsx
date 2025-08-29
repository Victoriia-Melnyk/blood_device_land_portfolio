import styles from './Contact.module.scss';

export const ContactPage = () => {
	return (
		<div div className={styles.contactPage}>
			<h1>Contact Us</h1>
			<p>
				If you have any questions, please contact us. The contact details are as
				follows:
			</p>
			<p>
				Email:{' '}
				<a
					href="mailto:contact@consumerguidereviews.org"
					style={{ color: '#000' }}
				>
					contact@consumerguidereviews.org
				</a>
			</p>
			<p>Address: 4910 Gordon Street, Muscoy, California, 92407</p>
			<p>Tel: 909-473-1172</p>
		</div>
	);
};
