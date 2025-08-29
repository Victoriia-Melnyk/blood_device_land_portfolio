import { CardsList } from '../../components/CardsList/CardsList';
import videoFile from '../../assets/image1.mp4';
import image from '../../assets/image2.jpg';
import writer from '../../assets/writer.png';
import styles from './HomePage.module.scss';
import { WinnerCard } from '../../components/WinnerCard/WinnerCard';
import { BorderedText } from '../../components/BorderedText/BorderedText';
import { Button } from '../../components/Button/Button';
import { Done } from '../../assets/Done';
import { GetDate } from '../../components/GetDate/GetDate';

export const HomePage = () => {
	return (
		<div className={styles.homePage}>
			<div className={styles.homePage__bunner}>
				<div className={styles.homePage__bunnerText}>
					<h1>
						2025's Best Blood Glucose Monitoring Device Tested—One Game Changer
						Gives You Painless Glucose Monitoring & Accurate Results in Seconds.
						No Blood Needed!
					</h1>

					<p>
						{Done} Last updated ⏤ <GetDate />
					</p>
				</div>
			</div>
			<section className={styles.homePage__presentation}>
				<p>
					<b>Are you tired of painful finger pricks for glucose tests?</b>
				</p>
				<p>
					<b>
						Need a glucose monitor solution that's painless &amp; convenient?
					</b>
				</p>
				<p>
					<b>
						Looking for a device that could save you money and give accurate
						results in seconds?
					</b>
				</p>
				<p>
					You've come to the right place. We've thoroughly evaluated leading
					blood glucose monitors from top brands like Accu-Chek, OneTouch, and
					FreeStyle, available at major pharmacies and retailers worldwide.
				</p>
				<p>
					Our laboratory-level testing uncovered revolutionary advancements in
					non-invasive monitoring technology, with one device that truly stands
					above the rest. This outperformed model redefines diabetes care,
					delivering pain-free testing, lab-accurate results, and smart features
					in one compact device.
				</p>
				<p>
					<b>
						This breakthrough innovation comes from a team dedicated to
						transforming diabetes management. Their FDA-cleared technology
						provides unmatched performance - offering hospital-grade accuracy
						without the needles, at a fraction of the long-term cost of
						traditional methods.
					</b>
				</p>
			</section>
			<section className={styles.homePage__products}>
				<h2>#1 Best Rated Blood Glucose Monitoring Device</h2>
				<CardsList />
			</section>
			<video
				src={videoFile}
				autoPlay
				muted
				playsInline
				disablePictureInPicture
			/>
			<section className={styles.homePage__winner} id="review">
				<WinnerCard />
			</section>
			<section className={styles.homePage__description}>
				<BorderedText borderColor={'#baa069'} backgroundColor="#f9ebb8">
					<p>
						Did you know there's a new blood glucose device that can monitor
						your blood sugar in SECONDS!? BloodVitals has already helped
						thousands of people control their blood sugar level painlessly while
						slashing test strips bills. Now, tens of thousands are flying off
						the shelves every week...
					</p>
				</BorderedText>
				<h2 className={styles.homePage__descriptionTitle}>
					Why BloodVitals Is the #1 Pick for Painless Blood Glucose Monitor
				</h2>
				<p>
					<b>BloodVitals</b> outperforms every traditional glucose monitor we
					tested. It dominates in all critical categories - especially the most
					vital one: delivering medical-grade accuracy without painful needles,
					while remaining effortless to use and truly portable.
				</p>
				<p>
					BloodVitals incorporates cutting-edge health tech that sets a new
					standard for 2025. Its patented non-invasive sensor technology makes
					finger pricks obsolete - other manufacturers will need to
					revolutionize their approach to match this breakthrough. This isn't
					just an improvement, it's the future of diabetes management that
					patients have been waiting for.
				</p>
				<div className={styles.homePage__descriptionItem}>
					<h3>Pain-Free & Non-Invasive Technology</h3>
					<p>
						BloodVitals revolutionizes blood glucose monitoring with its{' '}
						<b>FDA-approved, needle-free</b> technology, eliminating the pain
						and anxiety of traditional finger pricks. Using advanced sensors, it
						delivers
						<b>medical-grade accuracy in just 5-8 seconds</b>—ideal for seniors
						and those with sensitive skin. No blood samples,{' '}
						<b>no infection risks,</b> just a seamless and stress-free
						experience.
					</p>
				</div>
				<img src={image} alt="product" />
				<div className={styles.homePage__descriptionItem}>
					<h3> Medical-Grade Accuracy & Speed</h3>
					<p>
						Unlike traditional glucometers, BloodVitals provides{' '}
						<b>hospital-level precision</b> without the hassle. Its
						high-sensitivity sensors ensure dependable results in seconds,
						empowering users to <b>manage diabetes confidently</b> while
						avoiding costly and time-consuming doctor visits.
					</p>
				</div>
				<p>Key Features:</p>
				<ul>
					<li>
						<b>❄️±2% accuracy – Trustworthy, consistent readings.</b>
					</li>
					<li>
						<b>
							❄️5-8 second response time – Faster than conventional methods.
						</b>
					</li>
					<li>
						<b>
							❄️Auto energy-saving – Extends battery life with smart shutoff.
						</b>
					</li>
				</ul>
				<div className={styles.homePage__descriptionItem}>
					<h3>All-in-One Health Tracking</h3>
					<p>
						BloodVitals goes beyond glucose monitoring, offering real-time
						insights into multiple vital signs, including{' '}
						<b>heart rate and blood oxygen levels.</b> This all-in-one
						functionality helps users
						<b>track their overall health</b> and make informed decisions about
						diet, exercise, and medication—all from the comfort of home.
					</p>
				</div>
				<div className={styles.homePage__descriptionItem}>
					<h3>Cost-Effective & User-Friendly</h3>
					<p>
						BloodVitals <b>saves money long-term</b> by reducing the need for
						expensive test strips and frequent clinic visits. Its simple,
						one-touch operation makes it accessible for all ages, while the LED
						display and ergonomic design ensure effortless use at home or on the
						go.
					</p>
				</div>
				<BorderedText borderColor="red" backgroundColor="#feffa1">
					<p>
						<b>UPDATE:</b>{' '}
						<a
							href="/"
							target="_blank"
							style={{
								color: '#2281c9',
								textDecoration: 'none',
								fontWeight: '600',
							}}
						>
							BloodVitals
						</a>{' '}
						is currently running the Special Sale. You get 70% OFF discounts if
						you buy it today, only from the official website. Tick-tock, the
						clock is ticking, and the special sale is winding down. Don't miss
						out on the chance to upgrade your life at an unbeatable price!
					</p>
				</BorderedText>
				<Button
					buttonText="CHECK DISCOUNTS
							& AVAILABILITY"
					href="/"
				/>
				<div className={styles.homePage__stickyContainer}>
					<div>
						<strong>
							<span>#1 – BloodVitals</span>
						</strong>
						<strong>
							<span style={{ color: '#0aa520' }}>$39.95</span>
							{'  '}
							<span
								style={{ color: '#ff0000', textDecoration: 'line-through' }}
							>
								$79.80
							</span>
						</strong>
					</div>
					<Button buttonText="Visit site" href="/" />
				</div>
				<div className={styles.homePage__testimonial}>
					<img src={writer} alt="testimonial writer" />
					<div>
						<p>
							Written By:{' '}
							<span style={{ color: '#257bd9', fontWeight: 700 }}>
								Dr. Olivia S. Hartwell
							</span>
						</p>
						<p>
							Dr. Hartwell is a board-certified endocrinologist specializing in
							diabetes management technologies. With over 12 years of clinical
							experience and rigorous testing of 150+ glucose monitoring
							devices, she provides evidence-based insights into non-invasive
							health tech—focusing on accuracy, usability, and real-world
							patient benefits over marketing claims.
						</p>
					</div>
				</div>
			</section>
		</div>
	);
};
