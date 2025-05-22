import './App.css';
import Header from '../layout/Header/Header';
import Menu from '../components/Menu/Menu';
import Body from '../layout/Body/Body';
import mockData from './assets/data/mockData.js';
import Cards from '../components/Cards/Cards.jsx';
import SearchArea from '../components/SearchArea/SearchArea.jsx';

function App() {
	return (
		<>
			<Header>
				<Menu />
			</Header>
			<Body>
				<SearchArea />
				<Cards data={mockData} />
			</Body>
		</>
	);
}

export default App;
