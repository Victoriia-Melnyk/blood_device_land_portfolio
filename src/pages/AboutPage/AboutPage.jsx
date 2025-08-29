import styles from './About.module.scss';

export const AboutPage = () => {
	return (
		<div className={styles.aboutPage}>
			<h1>About Us</h1>
			<p>
				Welcome to <strong>Consumer Guide Reviews</strong>, your trusted
				companion in navigating the vast world of consumer products.
			</p>
			<p>
				Our mission is simple: to provide reliable, insightful, and unbiased
				reviews to help you make confident purchasing decisions. In a market
				flooded with countless options, we cut through the noise by evaluating
				products across various categories, ensuring you get the most value for
				your money.
			</p>
			<p>
				At <strong>Consumer Guide Reviews</strong>, we believe that informed
				consumers are empowered consumers. That's why our team of experienced
				reviewers dedicates time to thoroughly test and analyze products, from
				everyday essentials to the latest innovations.
			</p>
			<p>
				Whether you're searching for the best kitchen appliances, tech gadgets,
				or personal care items, we aim to be your go-to resource for honest and
				detailed reviews.
			</p>
			<p>
				Thank you for trusting us to guide you on your shopping journey. We’re
				here to help you choose better, buy smarter, and enjoy more!
			</p>
		</div>
	);
};
