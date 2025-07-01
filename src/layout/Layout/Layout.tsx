import Header from '../Header/Header';
import Menu from '../../components/Menu/Menu';
import Body from '../Body/Body';
import { Outlet } from 'react-router-dom';

export function Layout() {
  return (
    <>
      <Header>
        <Menu />
      </Header>
      <Body>
        <Outlet></Outlet>
      </Body>
    </>
  );
}

export default Layout;
