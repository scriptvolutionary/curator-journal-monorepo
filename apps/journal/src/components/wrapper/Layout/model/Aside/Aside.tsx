import { BsJournals } from 'react-icons/bs'

import { Copyright, Heading } from '@components/typography'

export const Aside = () => {
	return (
		<div
			className='sticky top-0 col-span-2 h-screen w-full bg-slate-800'
			id='sidenavSecExample'
		>
			<div className='h-16 w-full px-6'>
				<div className='flex h-full items-center justify-center gap-4'>
					<BsJournals className='h-7 w-7 text-blue-600' />
					<Heading className='text-slate-100' label='Журнал куратора' preset='h6' />
					<span className='inline-block whitespace-nowrap rounded bg-blue-600 py-1 px-2.5 text-center align-baseline text-xs font-bold leading-none text-blue-100'>
						0.0.1
					</span>
				</div>
			</div>
			<hr className='mb-2 border-slate-600' />
			<ul className='relative px-1'>
				<li className='relative'>
					<a
						className='inline-flex h-12 w-full items-center overflow-hidden text-ellipsis whitespace-nowrap rounded py-4 px-6 text-sm text-slate-300 transition-all duration-200 ease-in-out hover:bg-slate-700/50 hover:text-blue-600 active:bg-slate-800/50 active:text-blue-700'
						href='#!'
						data-mdb-ripple='true'
						data-mdb-ripple-color='primary'
					>
						<svg
							aria-hidden='true'
							focusable={false}
							data-prefix='fas'
							className='mr-4 h-3 w-3'
							role='img'
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 512 512'
						>
							<path
								fill='currentColor'
								d='M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z'
							/>
						</svg>
						<span>Non-collapsible link</span>
					</a>
				</li>
				<li className='relative' id='sidenavSecEx2'>
					<a
						className='inline-flex h-12 w-full items-center overflow-hidden text-ellipsis whitespace-nowrap rounded py-4 px-6 text-sm text-slate-300 transition-all duration-200 ease-in-out hover:bg-slate-700/50 hover:text-blue-600 active:bg-slate-800/50 active:text-blue-700'
						data-mdb-ripple='true'
						data-mdb-ripple-color='primary'
						data-bs-toggle='collapse'
						data-bs-target='#collapseSidenavSecEx2'
						aria-expanded='false'
						aria-controls='collapseSidenavSecEx2'
					>
						<svg
							aria-hidden='true'
							focusable={false}
							data-prefix='fas'
							className='mr-4 h-3 w-3'
							role='img'
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 496 512'
						>
							<path
								fill='currentColor'
								d='M336.5 160C322 70.7 287.8 8 248 8s-74 62.7-88.5 152h177zM152 256c0 22.2 1.2 43.5 3.3 64h185.3c2.1-20.5 3.3-41.8 3.3-64s-1.2-43.5-3.3-64H155.3c-2.1 20.5-3.3 41.8-3.3 64zm324.7-96c-28.6-67.9-86.5-120.4-158-141.6 24.4 33.8 41.2 84.7 50 141.6h108zM177.2 18.4C105.8 39.6 47.8 92.1 19.3 160h108c8.7-56.9 25.5-107.8 49.9-141.6zM487.4 192H372.7c2.1 21 3.3 42.5 3.3 64s-1.2 43-3.3 64h114.6c5.5-20.5 8.6-41.8 8.6-64s-3.1-43.5-8.5-64zM120 256c0-21.5 1.2-43 3.3-64H8.6C3.2 212.5 0 233.8 0 256s3.2 43.5 8.6 64h114.6c-2-21-3.2-42.5-3.2-64zm39.5 96c14.5 89.3 48.7 152 88.5 152s74-62.7 88.5-152h-177zm159.3 141.6c71.4-21.2 129.4-73.7 158-141.6h-108c-8.8 56.9-25.6 107.8-50 141.6zM19.3 352c28.6 67.9 86.5 120.4 158 141.6-24.4-33.8-41.2-84.7-50-141.6h-108z'
							/>
						</svg>
						<span>Collapsible item 1</span>
						<svg
							aria-hidden='true'
							focusable={false}
							data-prefix='fas'
							className='ml-auto h-3 w-3'
							role='img'
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 448 512'
						>
							<path
								fill='currentColor'
								d='M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z'
							/>
						</svg>
					</a>
					<ul
						className='collapse accordion-collapse relative'
						id='collapseSidenavSecEx2'
						aria-labelledby='sidenavSecEx2'
						data-bs-parent='#sidenavSecExample'
					>
						<li className='relative'>
							<a
								href='#!'
								className='flex h-6 items-center overflow-hidden text-ellipsis whitespace-nowrap rounded py-4 pl-12 pr-6 text-xs text-slate-300 transition duration-300 ease-in-out hover:bg-slate-700/50 hover:text-blue-600'
								data-mdb-ripple='true'
								data-mdb-ripple-color='primary'
							>
								Link 1
							</a>
						</li>
						<li className='relative'>
							<a
								href='#!'
								className='flex h-6 items-center overflow-hidden text-ellipsis whitespace-nowrap rounded py-4 pl-12 pr-6 text-xs text-slate-300 transition duration-300 ease-in-out hover:bg-slate-700/50 hover:text-blue-600'
								data-mdb-ripple='true'
								data-mdb-ripple-color='primary'
							>
								Link 2
							</a>
						</li>
					</ul>
				</li>
			</ul>
			<hr className='my-2 border-slate-600' />
			<ul className='relative px-1'>
				<li className='relative'>
					<a
						className='inline-flex h-12 w-full items-center overflow-hidden text-ellipsis whitespace-nowrap rounded py-4 px-6 text-sm text-slate-300 transition-all duration-200 ease-in-out hover:bg-slate-700/50 hover:text-blue-600 active:bg-slate-800/50 active:text-blue-700'
						href='#!'
						data-mdb-ripple='true'
						data-mdb-ripple-color='primary'
					>
						<svg
							aria-hidden='true'
							focusable={false}
							data-prefix='fas'
							className='mr-4 h-3 w-3'
							role='img'
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 512 512'
						>
							<path
								fill='currentColor'
								d='M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z'
							/>
						</svg>
						<span>Non-collapsible link</span>
					</a>
				</li>
				<li className='relative' id='sidenavSecEx2'>
					<a
						className='inline-flex h-12 w-full items-center overflow-hidden text-ellipsis whitespace-nowrap rounded py-4 px-6 text-sm text-slate-300 transition-all duration-200 ease-in-out hover:bg-slate-700/50 hover:text-blue-600 active:bg-slate-800/50 active:text-blue-700'
						data-mdb-ripple='true'
						data-mdb-ripple-color='primary'
						data-bs-toggle='collapse'
						data-bs-target='#collapseSidenavSecEx3'
						aria-expanded='false'
						aria-controls='collapseSidenavSecEx3'
					>
						<svg
							aria-hidden='true'
							focusable={false}
							data-prefix='fas'
							className='mr-4 h-3 w-3'
							role='img'
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 496 512'
						>
							<path
								fill='currentColor'
								d='M336.5 160C322 70.7 287.8 8 248 8s-74 62.7-88.5 152h177zM152 256c0 22.2 1.2 43.5 3.3 64h185.3c2.1-20.5 3.3-41.8 3.3-64s-1.2-43.5-3.3-64H155.3c-2.1 20.5-3.3 41.8-3.3 64zm324.7-96c-28.6-67.9-86.5-120.4-158-141.6 24.4 33.8 41.2 84.7 50 141.6h108zM177.2 18.4C105.8 39.6 47.8 92.1 19.3 160h108c8.7-56.9 25.5-107.8 49.9-141.6zM487.4 192H372.7c2.1 21 3.3 42.5 3.3 64s-1.2 43-3.3 64h114.6c5.5-20.5 8.6-41.8 8.6-64s-3.1-43.5-8.5-64zM120 256c0-21.5 1.2-43 3.3-64H8.6C3.2 212.5 0 233.8 0 256s3.2 43.5 8.6 64h114.6c-2-21-3.2-42.5-3.2-64zm39.5 96c14.5 89.3 48.7 152 88.5 152s74-62.7 88.5-152h-177zm159.3 141.6c71.4-21.2 129.4-73.7 158-141.6h-108c-8.8 56.9-25.6 107.8-50 141.6zM19.3 352c28.6 67.9 86.5 120.4 158 141.6-24.4-33.8-41.2-84.7-50-141.6h-108z'
							/>
						</svg>
						<span>Collapsible item 1</span>
						<svg
							aria-hidden='true'
							focusable={false}
							data-prefix='fas'
							className='ml-auto h-3 w-3'
							role='img'
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 448 512'
						>
							<path
								fill='currentColor'
								d='M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z'
							/>
						</svg>
					</a>
					<ul
						className='collapse accordion-collapse relative'
						id='collapseSidenavSecEx3'
						aria-labelledby='sidenavSecEx3'
						data-bs-parent='#sidenavSecExample'
					>
						<li className='relative'>
							<a
								href='#!'
								className='flex h-6 items-center overflow-hidden text-ellipsis whitespace-nowrap rounded py-4 pl-12 pr-6 text-xs text-slate-300 transition duration-300 ease-in-out hover:bg-slate-700/50 hover:text-blue-600'
								data-mdb-ripple='true'
								data-mdb-ripple-color='primary'
							>
								Link 1
							</a>
						</li>
						<li className='relative'>
							<a
								href='#!'
								className='flex h-6 items-center overflow-hidden text-ellipsis whitespace-nowrap rounded py-4 pl-12 pr-6 text-xs text-slate-300 transition duration-300 ease-in-out hover:bg-slate-700/50 hover:text-blue-600'
								data-mdb-ripple='true'
								data-mdb-ripple-color='primary'
							>
								Link 2
							</a>
						</li>
					</ul>
				</li>
			</ul>
			<div className='absolute bottom-0 w-full bg-slate-800 pb-2 text-center'>
				<hr className='mb-2 border-slate-600' />
				<Copyright />
			</div>
		</div>
	)
}
