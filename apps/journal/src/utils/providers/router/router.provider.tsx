import { createBrowserRouter } from 'react-router-dom'

import Layout from '@components/wrapper'

import { HomeView } from '@views/private'
import LoginView from '@views/public'

export const privateRouter = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [{ path: '', element: <HomeView /> }]
	}
])

export const publicRouter = createBrowserRouter([
	{
		path: '*',
		element: <LoginView />
	}
])
