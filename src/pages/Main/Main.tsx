import mockData from '../../assets/data/mockData';
import Cards from '../../components/Cards/Cards';
import LoginForm from '../../components/LoginForm/LoginForm';
import SearchArea from '../../components/SearchArea/SearchArea';

export function Main() {
	return (
		<>
			<SearchArea />
			<Cards data={mockData} />
		</>
	);
}
