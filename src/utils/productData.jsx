import productVitals from '../assets/product-vitals.jpg';
import productFreshcare from '../assets/product-freshcare.jpg';
import productMetene from '../assets/product-metene.jpg';
import productCareliving from '../assets/product-careliving.jpg';
import productStelo from '../assets/product-stelo.jpg';
import check from '../assets/check.png';
import wrong from '../assets/wrong.png';
import building from '../assets/building.webp';
import box from '../assets/box.webp';
import thumb from '../assets/thumb-up.webp';

export const productData = [
	{
		productName: 'BloodVitals',
		productImage: productVitals,
		featureList: [
			{
				feature: '100 % Pain-Free Testing Without Finger Pricks or Needles',
				status: check,
			},
			{
				feature: 'Eliminate The Risk of Infection',
				status: check,
			},
			{
				feature:
					'FDA-Cleared Techwronglogy Offers Medical-Precision LED Readings',
				status: check,
			},
			{
				feature: 'Monitor Blood Glucose, Heart Rate & Blood Oxygen',
				status: check,
			},
			{
				feature: 'Fastly Gain Results in Just 8 Seconds',
				status: check,
			},
			{
				feature:
					'Perfect for Sensitive Skin, Ideal for Seniors & Frequent Testers',
				status: check,
			},
			{
				feature: 'Compact & Portable',
				status: check,
			},
			{
				feature: 'Long Battery Life & Auto Shutoff',
				status: check,
			},
			{
				feature: 'Wrong Ongoing Costs',
				status: check,
			},
			{
				feature: '30-Day Money-Back Guarantee',
				status: check,
			},
		],
		rating: '9.9',
		usersRateText: '30,000 users gave this brand 5 stars',
		buttonText: 'Visit Site',
		buttonHref: '/',
		shippingInfo: '1-3 Days Express Shipping',
		price: '$39.95',
		oldPrice: '$79.80',
	},
	{
		productName: 'Freshcare',
		productImage: productFreshcare,
		featureList: [
			{
				feature: 'wrongn-invasive blood glucose testing techwronglogy',
				status: check,
			},
			{
				feature: 'Use OLED screen to display results',
				status: check,
			},
			{
				feature: 'Accommodate different fingers size',
				status: check,
			},
			{
				feature: 'Long battery life',
				status: check,
			},
			{
				feature: 'Monitors blood oxygen & pulse rate',
				status: check,
			},
			{
				feature:
					'Less accurate without FDA-cleared medical-grade techwronglogy',
				status: wrong,
			},
			{
				feature: 'Vague testing speed',
				status: wrong,
			},
		],
		rating: '9.5',
		usersRateText: '3,400+ USERS GAVE THIS BRAND 4.5 STARS',
		buttonText: 'VISIT AMAZON',
		buttonHref:
			'https://www.amazon.com/Invasive-Meter-Glucose-pricking-Upgraded-Use-1PCS-W1/dp/B0FC5WJWY7/ref=sr_1_2_sspa?crid=35K235IQ49BLG&dib=eyJ2IjoiMSJ9.JmmnqUw6-IXwaXiguezTBr7Xo6LoVX_KoYoDYEEyDP_b9uJQSrusoilvR9K4IWDNO6oZpBMoblR37ZJj4riUnlNtAal6c7LUaB-1qOY_vjeLqc3bnzno20UVEyk5pfU27Xb86gl08bz2VYzadLvykujetBJplVMfkD3CXTZLbd_AUIG_Q41nD4TihP9pbjCOTIPODXb-TQIiCgEn8QuGuQjL1DvjvNmwqDqUPGUMRnXykPsc62lBhJ1gPGSg0avPwr-5FjSz6hfpPBbUbKITM3eVtWRH3NKtWSUeMumD-GI.ailWyvC6XsFilFux8p_WACT1Ndh22nbmNx0s9J8rfE4&dib_tag=se&keywords=non+invasive+glucose+monitor&qid=1750062189&sprefix=non+invasivglucose+monitor%2Caps%2C376&sr=8-2-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1&sub4=eyJtZWFzdXJlbWVudF9pZCI6ICJHLVhTRk1FVjdMRU0iLCJjbGllbnRfaWQiOiAiMTIzMTMwMzc2NS4xNzU2MTMyNDU1In0=&subid4=eyJtZWFzdXJlbWVudF9pZCI6ICJHLVhTRk1FVjdMRU0iLCJjbGllbnRfaWQiOiAiMTIzMTMwMzc2NS4xNzU2MTMyNDU1In0=&sub5=null&subid5=null',
		shippingInfo: '2-5 Days Standard Shipping',
		price: '$29.99',
		oldPrice: false,
	},
	{
		productName: 'Metene',
		productImage: productMetene,
		featureList: [
			{
				feature: 'Advanced techwronglogy ensures high accuracy',
				status: check,
			},
			{
				feature: 'Minimal blood sample needed',
				status: check,
			},
			{
				feature: 'Stores 450 readings with averages and trends',
				status: check,
			},
			{
				feature: 'Large display ideal for seniors',
				status: check,
			},
			{
				feature: 'Delivers results in 7 seconds',
				status: check,
			},
			{
				feature: 'Requires finger pricks',
				status: wrong,
			},
			{
				feature: 'Ongoing costs for test',
				status: wrong,
			},
			{
				feature: 'Tracks only glucose',
				status: wrong,
			},
		],
		rating: '9.3',
		usersRateText: '1,600+ USERS GAVE THIS BRAND 4.5 STARS',
		buttonText: 'VISIT AMAZON',
		buttonHref:
			'https://www.amazon.com/Glucose-Monitor-Glucometer-Lancets-Solution/dp/B08LYC288R/ref=sr_1_1?crid=3FC2WK50GLTOC&dib=eyJ2IjoiMSJ9.sWKOufhKRnE9p1rNLF6bFhHO8QdHF-orGDZiA5zLWy_4o8xpX7deN1_yrCOpLpDZGwuElUTZfKTnKbiw2dz_HKj4-ASdy_q9d0zXuhOBkPD7b2KPhNTXdw6v7pTwwBqMTpz5XUSNunx0_38qVscjACTeGHlRG8u8FMbJ7z7uQE2_cQoc12FobALR22FB0yfl9gclr7Z9Lf8Syq3xfPjqU3DcO2GNt4z_fOguVtVN4A8.M5XY3Qg25FIyfJwoAR1r6NlQXy2ZGYZmlrrIYwjJZik&dib_tag=se&keywords=blood+glucose+monitoring+device&qid=1749891565&sprefix=blood+glucose+monitoring+device%2Caps%2C871&sr=8-1&sub4=eyJtZWFzdXJlbWVudF9pZCI6ICJHLVhTRk1FVjdMRU0iLCJjbGllbnRfaWQiOiAiMTIzMTMwMzc2NS4xNzU2MTMyNDU1In0=&subid4=eyJtZWFzdXJlbWVudF9pZCI6ICJHLVhTRk1FVjdMRU0iLCJjbGllbnRfaWQiOiAiMTIzMTMwMzc2NS4xNzU2MTMyNDU1In0=&sub5=null&subid5=null',
		shippingInfo: '2-5 Days Standard Shipping',
		price: '$89.99',
		oldPrice: false,
	},
	{
		productName: 'Careliving',
		productImage: productCareliving,
		featureList: [
			{
				feature: 'Complete starter kit',
				status: check,
			},
			{
				feature: 'Requires tiny blood sample',
				status: check,
			},
			{
				feature: 'Delivers results in 5 seconds',
				status: check,
			},
			{
				feature: 'Offers 12 depth settings to reduce pain',
				status: check,
			},
			{
				feature: 'Stores 350 results',
				status: check,
			},
			{
				feature: 'Still invasive—wrong alternative to needles',
				status: wrong,
			},
			{
				feature: 'Must repurchase test strips',
				status: wrong,
			},
			{
				feature: 'Tracks only blood glucose',
				status: wrong,
			},
		],
		rating: '9.0',
		usersRateText: '840+ USERS GAVE THIS BRAND 4 STARS',
		buttonText: 'VISIT AMAZON',
		buttonHref:
			'https://www.amazon.com/CareLiving-Glucose-Diabetes-Portable-Glucometer/dp/B0BJ66WCBL/ref=sr_1_21?crid=3FC2WK50GLTOC&dib=eyJ2IjoiMSJ9.B30U2vTTznmV9d6HvE4TlTFwfQl9yYFy6b5df-AkM38UFjvngaElDACKfIEEBIl3jze1zJ8wX--4B-m7HgK5aLfIaXQb1UUMZXFe7OzhCHACYGKW87TuTd-PM6mJVgMMNvoctyg68Nr0F702fWykKbRA-EkoQaQRXXfHHZsiMuLtI3ArAEg8w12YTcdQGjBGhEscZ77ciMtfEFr6dou1R3R1-hE1_4jnEZCMIyTYesM.2nQ1QL7JnMISrh69-iazf8nWBC2PiIxqnD_Gu4a1exE&dib_tag=se&keywords=blood+glucose+monitoring+device&qid=1749891507&sprefix=blood+glucose+monitoring+device%2Caps%2C871&sr=8-21&sub4=eyJtZWFzdXJlbWVudF9pZCI6ICJHLVhTRk1FVjdMRU0iLCJjbGllbnRfaWQiOiAiMTIzMTMwMzc2NS4xNzU2MTMyNDU1In0=&subid4=eyJtZWFzdXJlbWVudF9pZCI6ICJHLVhTRk1FVjdMRU0iLCJjbGllbnRfaWQiOiAiMTIzMTMwMzc2NS4xNzU2MTMyNDU1In0=&sub5=null&subid5=null',
		shippingInfo: '2-5 Days Standard Shipping',
		price: '$21.99',
		oldPrice: false,
	},
	{
		productName: 'Stelo',
		productImage: productStelo,
		featureList: [
			{
				feature: 'Accurate glucose biosensor without a prescription',
				status: check,
			},
			{
				feature: 'Comprehensive App Analytics',
				status: check,
			},
			{
				feature: 'wrong finger pricks',
				status: check,
			},
			{
				feature: 'Provides personalized insights to improve diet',
				status: check,
			},
			{
				feature: 'Limited user eligibility',
				status: wrong,
			},
			{
				feature: 'Unclear sensor longevity/cost',
				status: wrong,
			},
			{
				feature: 'Lacks hypo/hyperglycemia alarms',
				status: wrong,
			},
			{
				feature: 'Requires smartphone for data access',
				status: wrong,
			},
		],
		rating: '8.9',
		usersRateText: '730+ USERS GAVE THIS BRAND 4 STARS',
		buttonText: 'VISIT AMAZON',
		buttonHref:
			'https://www.amazon.com/Stelo-Biosensor-Continuous-Monitoring-Personalized/dp/B0DTZ616WZ/ref=sr_1_2?crid=3FC2WK50GLTOC&dib=eyJ2IjoiMSJ9.sWKOufhKRnE9p1rNLF6bFhHO8QdHF-orGDZiA5zLWy_4o8xpX7deN1_yrCOpLpDZGwuElUTZfKTnKbiw2dz_HKj4-ASdy_q9d0zXuhOBkPD7b2KPhNTXdw6v7pTwwBqMTpz5XUSNunx0_38qVscjACTeGHlRG8u8FMbJ7z7uQE2_cQoc12FobALR22FB0yfl9gclr7Z9Lf8Syq3xfPjqU3DcO2GNt4z_fOguVtVN4A8.M5XY3Qg25FIyfJwoAR1r6NlQXy2ZGYZmlrrIYwjJZik&dib_tag=se&keywords=blood%2Bglucose%2Bmonitoring%2Bdevice&qid=1749891565&sprefix=blood%2Bglucose%2Bmonitoring%2Bdevice%2Caps%2C871&sr=8-2&th=1&sub4=eyJtZWFzdXJlbWVudF9pZCI6ICJHLVhTRk1FVjdMRU0iLCJjbGllbnRfaWQiOiAiMTIzMTMwMzc2NS4xNzU2MTMyNDU1In0=&subid4=eyJtZWFzdXJlbWVudF9pZCI6ICJHLVhTRk1FVjdMRU0iLCJjbGllbnRfaWQiOiAiMTIzMTMwMzc2NS4xNzU2MTMyNDU1In0=&sub5=null&subid5=null',
		shippingInfo: '2-5 Days Standard Shipping',
		price: '$99',
		oldPrice: false,
	},
];

export const filterdProducts = productData.sort((product1, product2) => {
	return Number(product2.rating) - Number(product1.rating);
});

export const winnerAdvatages = [
	{
		advantage: 'Built to Last',
		description:
			'Made with high-quality materials for long-lasting durability and consistent performance.',
		icon: building,
	},
	{
		advantage: 'Quick and Reliable Shipping',
		description:
			'Get your package delivered swiftly and efficiently, so you can start using it right away.',
		icon: box,
	},
	{
		advantage: 'Risk-Free Purchase',
		description:
			"Enjoy peace of mind with a 30-day money-back guarantee, ensuring a hassle-free return if you're not satisfied.",
		icon: thumb,
	},
];
