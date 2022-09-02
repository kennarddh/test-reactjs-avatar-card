/* eslint-disable jest/require-hook */
import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'

import './index.css'

import { UsersProvider } from 'Contexts/Users/Users'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
	<React.StrictMode>
		<UsersProvider>
			<App />
		</UsersProvider>
	</React.StrictMode>
)
