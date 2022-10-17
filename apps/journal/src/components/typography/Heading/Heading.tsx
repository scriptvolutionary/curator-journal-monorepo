import { clsxm } from '@utils/helpers'

enum HeadingPreset {
	h1,
	h2,
	h3,
	h4,
	h5,
	h6
}

type HeadingProps = {
	className?: string
	label?: string
	preset?: keyof typeof HeadingPreset
}

export const Heading = ({ className, label, preset = 'h1', ...rest }: HeadingProps) => {
	const classNames = clsxm(
		'font-medium leading-tight',
		[
			preset === 'h1' && 'text-5xl',
			preset === 'h2' && 'text-4xl',
			preset === 'h3' && 'text-3xl',
			preset === 'h4' && 'text-2xl',
			preset === 'h5' && 'text-xl',
			preset === 'h6' && 'text-base'
		],
		className
	)

	if (preset === 'h2') {
		return (
			<h2 className={classNames} {...rest}>
				{label}
			</h2>
		)
	} else if (preset === 'h3') {
		return (
			<h3 className={classNames} {...rest}>
				{label}
			</h3>
		)
	} else if (preset === 'h4') {
		return (
			<h4 className={classNames} {...rest}>
				{label}
			</h4>
		)
	} else if (preset === 'h5') {
		return (
			<h5 className={classNames} {...rest}>
				{label}
			</h5>
		)
	} else if (preset === 'h6') {
		return (
			<h6 className={classNames} {...rest}>
				{label}
			</h6>
		)
	} else
		return (
			<h1 className={classNames} {...rest}>
				{label}
			</h1>
		)
}
