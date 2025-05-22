import './App.css';
import Button from '../components/Button/Button';
import Paragraph from '../components/Paragraph/Paragraph';
import Title from '../components/Title/Title';
import Header from '../layout/Header/Header';
import Menu from '../components/Menu/Menu';
import Body from '../layout/Body/Body';
import Input from '../components/Input/Input';
import mockData from './assets/data/mockData.js';
import Cards from '../components/Cards/Cards.jsx';

function App() {
	const search = () => {
		console.log('Так так');
	};
	return (
		<>
			<Header>
				<Menu/>				
			</Header>
			<Body>
				<div className='search-area'>
					<div className='search-area-title'>
						<Title>Поиск</Title>
						<Paragraph size='small'>
              Введите название фильма, сериала или мультфильма для поиска и
              добавления в избранное.
						</Paragraph>
					</div>
					<div className='search-area-input'>
						<Input placeholder={'Введите название'} icon='search'></Input>
						<Button text={'Искать'} onClick={search} />
					</div>
				</div>
				<Cards data={mockData} />
			</Body>
		</>
	);
}

export default App;
