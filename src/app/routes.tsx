import { createBrowserRouter } from 'react-router-dom'

import HomePage from '../pages/public/HomePage'
import { getPlaygroundRoutes } from '../playground/routes'

export const router = createBrowserRouter([
    { path: '/', element: <HomePage /> },
    ...getPlaygroundRoutes(),
])
