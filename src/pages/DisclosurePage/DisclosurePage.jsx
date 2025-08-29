import styles from './DisclosurePage.module.scss';

export const DisclosurePage = () => {
	return (
		<div className={styles.disclosurePage}>
			<h1>Disclosure</h1>
			<p>
				<strong>Disclosure</strong>
			</p>
			<p>
				At <strong>Consumer Guide Reviews</strong>, transparency and integrity
				are at the heart of everything we do. Our goal is to provide honest and
				unbiased product reviews to help you make well-informed purchasing
				decisions.
			</p>
			<p>
				To support the operation of this website, we may participate in
				affiliate marketing programs. This means that when you click on certain
				links and make a purchase, we may earn a small commission at no
				additional cost to you. These commissions help us maintain the site,
				create high-quality content, and continue providing valuable insights
				for our readers.
			</p>
			<p>
				We are committed to ensuring that our reviews remain objective and
				independent. Our evaluations are based on thorough research, product
				testing, and customer feedback. The potential for earning commissions
				does not influence our recommendations, and we only endorse products we
				genuinely believe offer value to our audience.
			</p>
			<p>
				Your trust is our priority, and we strive to maintain the highest level
				of transparency. If you have any questions about our disclosure policy,
				feel free to contact us. Thank you for supporting{' '}
				<strong>Consumer Guide Reviews</strong>!
			</p>
		</div>
	);
};
