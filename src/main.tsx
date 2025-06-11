import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Layout } from './layout/Layout/Layout';
import { Main } from './pages/Main/Main';
import { Login } from './pages/Login/Login';
import { Error } from './pages/Error/Error';
import { Favorites } from './pages/Favorites/Favorites';
import { Movie } from './pages/Movie/Movie';
const routes = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				path: '/',
				element: <Main />,
			},
			{
				path: 'login',
				element: <Login />,
			},
			{
				path: 'favorites',
				element: <Favorites/>
			},
			{
				path: 'movie/:id',
				element: <Movie/>
			},
			{
				path: '*',
				element: <Error />,
			},
		],
	},
]);

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<RouterProvider router={routes}></RouterProvider>
	</StrictMode>
);
