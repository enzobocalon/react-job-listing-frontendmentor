import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './assets/styles/global';
import defaultTheme from './assets/styles/themes/defaultTheme';
import CardGroup from './components/CardGroup';
import Header from './components/Header';
import JobProvider from './context/JobsContext';

function App() {
	return (
		<JobProvider>
			<ThemeProvider theme={defaultTheme}>
				<GlobalStyle />
				<Header />
				<CardGroup />
			</ThemeProvider>
		</JobProvider>
	);
}

export default App;
