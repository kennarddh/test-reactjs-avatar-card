/* eslint-disable jest/require-hook */
import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'

import '@/index.css'

import { UsersProvider } from '@/Contexts/Users'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
	<React.StrictMode>
		<UsersProvider>
			<App />
		</UsersProvider>
	</React.StrictMode>
)
