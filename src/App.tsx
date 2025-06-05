import './App.module.css';
import Header from './layout/Header/Header';
import Menu from './components/Menu/Menu';
import Body from './layout/Body/Body';
import mockData from './assets/data/mockData';
import Cards from './components/Cards/Cards';
import SearchArea from './components/SearchArea/SearchArea';
import LoginForm from './components/LoginForm/LoginForm';
import { UserContextProvider } from './context/UserContextProvider';

function App() {
  return (
    <UserContextProvider>
      <Header>
        <Menu />
      </Header>
      <Body>
        <SearchArea />
        <Cards data={mockData} />
        <LoginForm />
      </Body>
    </UserContextProvider>
  );
}

export default App;
