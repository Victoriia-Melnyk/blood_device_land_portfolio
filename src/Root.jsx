import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import { HomePage } from './pages/HomePage/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage/ContactPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { TermsPage } from './pages/TermsPage';
import { DisclosurePage } from './pages/DisclosurePage';

export const BASE_URL =
	window.location.hostname === 'localhost'
		? ''
		: '/blood_device_land_portfolio';

export const Root = () => (
	<BrowserRouter>
		<Routes>
			<Route path={`${BASE_URL}/`} element={<App />}>
				<Route index element={<HomePage />} />
				<Route path="about" element={<AboutPage />} />
				<Route path="contact" element={<ContactPage />} />
				<Route path="privacy" element={<PrivacyPage />} />
				<Route path="terms" element={<TermsPage />} />
				<Route path="disclosure" element={<DisclosurePage />} />
			</Route>
		</Routes>
	</BrowserRouter>
);
