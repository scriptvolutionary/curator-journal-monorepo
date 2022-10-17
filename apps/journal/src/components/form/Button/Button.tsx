import { ComponentPropsWithRef, forwardRef } from 'react'

import { clsxm } from '@utils/helpers'

type ButtonProps = {
	label: string
	className?: string
	isLoading?: boolean
} & ComponentPropsWithRef<'button'>

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	({ label, className, ...rest }: ButtonProps, ref) => {
		return (
			<button
				ref={ref}
				type='submit'
				data-mdb-ripple='true'
				data-mdb-ripple-color='light'
				className={clsxm(
					'inline-block w-full',
					'text-sm font-medium uppercase leading-tight text-blue-100',
					'rounded shadow-md',
					'px-7 py-3',
					'bg-blue-600',
					'hover:bg-blue-700 hover:shadow-lg',
					'focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0',
					'active:bg-blue-800 active:shadow-lg',
					'disabled:cursor-not-allowed disabled:bg-blue-600/60 disabled:text-blue-100/60',
					'transition duration-150 ease-in-out',
					className
				)}
				{...rest}
			>
				{label}
			</button>
		)
	}
)
