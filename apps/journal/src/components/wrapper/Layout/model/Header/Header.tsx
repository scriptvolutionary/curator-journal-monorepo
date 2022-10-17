import { BsFillGearFill } from 'react-icons/bs'
import { FaMoon } from 'react-icons/fa'

import { Heading } from '@components/typography'

export const Header = () => {
	return (
		<nav className='sticky left-0 top-0 h-16 w-full bg-slate-900/75 backdrop-blur'>
			<div className='flex h-full items-center justify-between px-6'>
				<Heading className='text-sm text-slate-100' label='Добро пожаловать!' preset='h6' />
				<div className='flex items-center gap-4'>
					<button
						type='button'
						className='inline-block rounded bg-transparent px-2.5 py-2.5 text-xs font-medium uppercase leading-tight text-slate-300 transition duration-300 ease-in-out hover:bg-slate-700/50 hover:text-blue-600 focus:outline-none focus:ring-0 active:bg-slate-800/50 active:text-blue-700'
					>
						<FaMoon className='h-4 w-4' />
					</button>
					<button
						type='button'
						className='inline-block rounded bg-transparent px-2.5 py-2.5 text-xs font-medium uppercase leading-tight text-slate-300 transition duration-300 ease-in-out hover:bg-slate-700/50 hover:text-blue-600 focus:outline-none focus:ring-0 active:bg-slate-800/50 active:text-blue-700'
					>
						<BsFillGearFill className='h-4 w-4' />
					</button>
					<div className='dropdown relative'>
						<a
							className='hidden-arrow dropdown-toggle flex items-center'
							href='#'
							id='dropdownMenuButton2'
							role='button'
							data-bs-toggle='dropdown'
							aria-expanded='false'
						>
							<img
								src='https://mdbootstrap.com/img/new/avatars/2.jpg'
								className='rounded-full'
								style={{ height: 25, width: 25 }}
								alt=''
								loading='lazy'
							/>
						</a>
						<ul
							className=' dropdown-menu absolute right-0 left-auto z-50 float-left m-0 mt-1 hidden min-w-max list-none rounded-lg border border-slate-700 bg-slate-900/75 bg-clip-padding py-2 text-left text-base text-slate-300 backdrop-blur '
							aria-labelledby='dropdownMenuButton2'
						>
							<li>
								<a
									className=' dropdown-item block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal hover:bg-slate-700/50'
									href='#'
								>
									Action
								</a>
							</li>
							<li>
								<a
									className=' dropdown-item block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal hover:bg-slate-700/50'
									href='#'
								>
									Another action
								</a>
							</li>
							<li>
								<a
									className=' dropdown-item block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal hover:bg-slate-700/50'
									href='#'
								>
									Something else here
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</nav>
	)
}
