import { useState } from 'react'
import { RouterProvider } from 'react-router-dom'

import { privateRouter, publicRouter } from '@utils/providers'

export default function App() {
	const [isVerify, setIsVerify] = useState(true)

	return <RouterProvider router={!isVerify ? publicRouter : privateRouter} />
}
