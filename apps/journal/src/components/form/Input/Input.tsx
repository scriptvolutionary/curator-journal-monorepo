import { InputHTMLAttributes } from 'react'

import { clsxm } from '@utils/helpers'

type InputProps = {
	className?: string
	inputClassName?: string
	name: string
	label: string
	type: string
	validateResponse?: string
	placeholder: string
} & InputHTMLAttributes<HTMLInputElement>

export const Input = ({
	className,
	inputClassName,
	name,
	label,
	type,
	validateResponse,
	placeholder,
	...rest
}: InputProps) => {
	return (
		<div className={clsxm('w-full', className)}>
			<label htmlFor={name} className={validateResponse && 'text-rose-500'}>
				{label}
			</label>
			<input
				type={type}
				className={clsxm(
					'form-control block w-full',
					'text-base font-normal text-slate-300',
					'mt-1 px-3 py-1.5',
					'rounded border',
					validateResponse ? 'border-rose-500' : 'border-slate-800',
					'bg-transparent bg-clip-padding',
					validateResponse ? 'focus:border-rose-500' : 'focus:border-blue-600',
					validateResponse ? 'focus:text-rose-500' : 'focus:text-slate-100',
					'focus:outline-none',
					validateResponse && 'focus:ring-0',
					'transition duration-200 ease-in',
					inputClassName
				)}
				id={name}
				placeholder={placeholder}
				{...rest}
			/>
			<div className={validateResponse ? 'mt-1 text-sm text-rose-600' : 'hidden'}>
				{validateResponse}
			</div>
		</div>
	)
}
