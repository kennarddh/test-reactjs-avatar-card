import React, { useContext, FC } from 'react'

import Card from '@/Components/Card/Card'

import UsersContext, { IUsersContext, IUsers } from '@/Contexts/Users/Users'

import { Cards } from '@/Styles'

const App: FC = () => {
	const { Users } = useContext<IUsersContext>(UsersContext)

	return (
		<Cards>
			{Users.map((user: IUsers) => (
				<Card user={user} key={user.id} />
			))}
		</Cards>
	)
}

export default App
