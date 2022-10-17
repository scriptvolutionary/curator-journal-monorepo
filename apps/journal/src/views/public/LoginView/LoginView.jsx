import { useState } from 'react'
import { BsJournals } from 'react-icons/bs'
import { FaUserShield } from 'react-icons/fa'

import { Button, Input } from '@components/form'
import { Copyright, Heading } from '@components/typography'

export default function LoginView() {
	const [identifier, setIdentifier] = useState('')
	const [password, setPassword] = useState('')
	const [onIdenfier, setOnIdentifier] = useState(false)
	const [onPassword, setOnPassword] = useState(false)
	const [identifierError, setIdentifierError] = useState('')
	const [passwordError, setPasswordError] = useState('')

	const identifierHandler = e => {
		setIdentifier(e.target.lavue)

		if (e.target.value.length < 4 || e.target.value.length > 12) {
			setIdentifierError('Идентификатор не может быть меньше 4-х и больше 12-ти символов')
			if (!e.target.value) {
				setIdentifierError('Идентификатор не может быть пустым')
			}
		} else {
			setIdentifierError('')
		}
	}

	const passwordHandler = e => {
		setPassword(e.target.lavue)

		if (e.target.value.length < 8 || e.target.value.length > 24) {
			setPasswordError('Пароль не может быть меньше 8-х и больше 24-х символов')
			if (!e.target.value) {
				setPasswordError('Пароль не может быть пустым')
			}
		} else {
			setPasswordError('')
		}
	}

	const blurHandler = e => {
		switch (e.target.name) {
			case 'identifier':
				setOnIdentifier(true)
				break
			case 'password':
				setOnPassword(true)
				break
		}
	}

	const checkForm =
		(passwordError && identifierError) ||
		passwordError ||
		identifierError ||
		identifier === '' ||
		password === ''
			? true
			: false

	return (
		<main className='h-screen w-screen'>
			<div className='flex h-full items-center justify-center'>
				<div className='grid w-full max-w-3xl place-items-center items-center rounded-lg px-16 md:grid-cols-2 md:p-0'>
					<div className='hidden h-full w-full items-center justify-center rounded-l-lg border border-blue-600 bg-blue-600 p-16 text-blue-100 md:flex'>
						<div className='flex h-full flex-col items-center justify-center gap-4 text-blue-50'>
							<BsJournals className='h-24 w-24' />
							<Heading label='Журнал' preset='h4' />
						</div>
					</div>
					<div className='h-full w-full rounded-lg border border-slate-700 p-8 md:mx-0 md:rounded-none md:rounded-r-lg md:p-16'>
						<div className='flex flex-col items-center gap-8'>
							<div className='text-center'>
								<Heading
									className='text-slate-50'
									label='Авторизация'
									preset='h5'
								/>
							</div>
							<form className='flex w-full flex-col items-center gap-4'>
								<Input
									onChange={e => identifierHandler(e)}
									onBlur={e => blurHandler(e)}
									name='identifier'
									label='Идентификатор'
									type='text'
									value={identifier}
									validateResponse={
										onIdenfier && identifierError
											? identifierError
											: identifierError
									}
									placeholder='Введите идентификатор'
								/>
								<Input
									onChange={e => passwordHandler(e)}
									onBlur={e => blurHandler(e)}
									className='mb-4'
									name='password'
									label='Пароль'
									type='password'
									value={password}
									validateResponse={
										onPassword && passwordError ? passwordError : passwordError
									}
									placeholder='Введите пароль'
								/>
								<Button label='Войти' disabled={checkForm} />
							</form>
							<div className='flex items-center justify-center gap-4'>
								<p className='text-sm'>Проблема со входом?</p>
								<a
									role='button'
									data-mdb-ripple='true'
									data-mdb-ripple-color='light'
									className='inline-block rounded bg-transparent px-2.5 py-2.5 text-xs font-medium uppercase leading-tight text-teal-600 transition duration-300 ease-in-out hover:bg-slate-800/25 hover:text-teal-500 focus:outline-none focus:ring-0 active:bg-slate-700/25'
									href='https://t.me/hellsmith'
									rel='noreferrer'
									target='_blank'
								>
									<FaUserShield className='h-5 w-5' />
								</a>
							</div>
						</div>
					</div>
				</div>
				<div className='absolute bottom-4'>
					<div className='flex h-max items-center justify-center'>
						<Copyright />
					</div>
				</div>
			</div>
		</main>
	)
}
