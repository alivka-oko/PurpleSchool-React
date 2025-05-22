import './SearchArea.css';
import Input from '../Input/Input';
import Button from '../Button/Button';
import Paragraph from '../Paragraph/Paragraph';
import Title from '../Title/Title';

function SearchArea() {
	const search = () => {
		console.log('Кнопочка работает');
	};
	return (
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
	);
}

export default SearchArea;
