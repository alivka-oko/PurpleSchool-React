import './App.css';
import Button from '../components/Button/Button';
import Paragraph from '../components/Paragraph/Paragraph';
import Title from '../components/Title/Title';

function App() {
	return (
		<>
			<Title>Заголовок</Title>
			<Paragraph size='small'>Здесь много букав размером поменьше</Paragraph>
			<Paragraph>Стандартный параграф</Paragraph>
			<Button>Здесь текст</Button>
		</>
	);
}

export default App;
