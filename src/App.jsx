import './App.css';
import Button from '../components/Button/Button';
import Paragraph from '../components/Paragraph/Paragraph';
import Title from '../components/Title/Title';
import Header from '../layout/Header/Header';
import Menu from '../components/Menu/Menu';
import Body from '../layout/Body/Body';
import Input from '../components/Input/Input';

function App() {
	const search = () => {
		console.log('Так так');
	};
	return (
		<>
			<Header>
				<Menu>
					<a href='#' className='menu-link'>
            Поиск фильмов
					</a>
					<a href='#' className='menu-link'>
            Мои фильмы
					</a>
					<a href='#' className='menu-link'>
            Войти
					</a>
				</Menu>
			</Header>
			<Body>
				<Title>Поиск</Title>
				<Paragraph size='small'>
          Введите название фильма, сериала или мультфильма для поиска и
          добавления в избранное.
				</Paragraph>
				<Paragraph>Стандартный параграф</Paragraph>
				<Input placeholder={'Без иконки'}></Input>
				<Button text={'Искать'} onClick={search} />
				<Input placeholder={'Введите название'} icon='search'></Input>
			</Body>
		</>
	);
}

export default App;
