import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Layout } from './layout/Layout/Layout';
import { Home } from './pages/Home/Home';
import { Login } from './pages/Login/Login';
import { ErrorPage } from './pages/ErrorPage/ErrorPage';
import { Favorites } from './pages/Favorites/Favorites';
import { Movie } from './pages/Movie/Movie';
import axios from 'axios';
import { PREFIX_URL } from './helpers/api';
import { AuthRequire } from './helpers/AuthRequire';
const routes = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				path: '/',
				element: (
					<AuthRequire>
						<Home />
					</AuthRequire>
				),
			},
			{
				path: 'login',
				element: <Login />,
			},
			{
				path: 'favorites',
				element: (
					<AuthRequire>
						<Favorites />
					</AuthRequire>
				),
			},
			{
				path: 'movie/:id',
				errorElement: <>Ошибка</>,
				element: <Movie />,
				loader: ({ params }) => {
					return {
						data: new Promise((resolve, reject) => {
							axios
								.get(PREFIX_URL + `/?tt=${params.id}`)
								.then((response) => resolve(response.data))
								.catch((err) => {
									reject(err);
								});
						}),
					};
				},
			},
			{
				path: '*',
				element: <ErrorPage />,
			},
		],
	},
]);

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<RouterProvider router={routes}></RouterProvider>
	</StrictMode>
);
