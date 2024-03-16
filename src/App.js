import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import { SearchInputProvider } from './components/Header/SearchBar/context/SearchInputContext';
import { PreferencesProvider, usePreferences } from './pages/PreferencePage/context/PreferenceContext';
import { FavoriteProvider } from './contexts/FavoriteContext/FavoriteContext';

import { Header } from './components/Header/Header';

import { HomePage } from './pages/HomePage/HomePage';
import { ResultPage } from './components/Header/SearchBar/SearchResultPage/ResultPage';
import { PreferencePage } from './pages/PreferencePage/PreferencePage';
import { FavoritePage } from './pages/FavoritePage/FavoritePage';

function App() {
	const preferences = usePreferences();
	const userPreferences = preferences ? preferences.userPreferences : null;

	return (
		<PreferencesProvider>
			<FavoriteProvider>
				<SearchInputProvider>
					<Router>
						<Header />
						<Routes>
							<Route path='/' element={userPreferences ? <Navigate to='/home' /> : <Navigate to='/preferences' />} />
							<Route path='/preferences' element={<PreferencePage />} />
							<Route path='/home' element={<HomePage />} />
							<Route path='/results' element={<ResultPage />} />
							<Route path='/favorites' element={<FavoritePage />} />
						</Routes>
					</Router>
				</SearchInputProvider>
			</FavoriteProvider>
		</PreferencesProvider>
	);
}

export default App;
