import './App.css';
import Button from '../components/Button/Button';
import Paragraph from '../components/Paragraph/Paragraph';

function App() {
	return (
		<>
			<Paragraph>Стандартный параграф</Paragraph>
			<Paragraph size="small">Здесь много букав размером поменьше</Paragraph>
			<Button>Здесь текст</Button>
		</>
	);
}

export default App;
