import { Outlet } from 'react-router-dom'

import { Aside, Header } from './model'

export const Layout = () => {
	return (
		<div className='grid grid-cols-12'>
			<Aside />
			<div className='col-span-10'>
				<Header />
				<Outlet />
			</div>
		</div>
	)
}
