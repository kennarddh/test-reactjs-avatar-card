import React, { useEffect, useContext } from 'react'

import Card from '@/Components/Card/Card'

import UsersContext from '@/Contexts/Users'

import { Cards } from '@/Styles'

const App = () => {
	const { Users, SetUsers } = useContext(UsersContext)

	useEffect(() => {
		const controller = new AbortController()

		const signal = controller.signal

		fetch('https://jsonplaceholder.typicode.com/users', { signal })
			.then(response => response.json())
			.then(data => SetUsers(data))
			.catch(console.log)

		return () => controller.abort()
	}, [])

	return (
		<Cards>
			{Users.map(user => (
				<Card user={user} key={user.id} />
			))}
		</Cards>
	)
}

export default App
