import React, { useContext } from 'react'

import Card from '@/Components/Card/Card'

import UsersContext from '@/Contexts/Users'

import { Cards } from '@/Styles'

const App = () => {
	const { Users } = useContext(UsersContext)

	return (
		<Cards>
			{Users.map(user => (
				<Card user={user} key={user.id} />
			))}
		</Cards>
	)
}

export default App
