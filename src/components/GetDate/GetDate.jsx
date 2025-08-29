import { useEffect, useState } from 'react';
const months = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December',
];

export const GetDate = () => {
	const [date, setDate] = useState(null);

	const today = new Date();
	const futureDate = new Date(today);
	futureDate.setDate(today.getDate());

	const month = months[futureDate.getMonth()];
	const day = futureDate.getDate();
	const year = futureDate.getFullYear();

	useEffect(
		() => setDate(`${month.toUpperCase()} ${day}, ${year}`),
		[day, month, year]
	);

	return <span>{date}</span>;
};
