import styles from './App.module.scss';
import { Header } from './components/Header';
import { Footer } from './components/Footer/Footer';
import { Outlet } from 'react-router-dom';

export const App = () => {
	return (
		<div className={styles.app}>
			<Header />
			<main className={styles.app__container}>
				<Outlet />
			</main>
			<Footer />
		</div>
	);
};

export default App;
