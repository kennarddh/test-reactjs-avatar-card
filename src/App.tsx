import React, { useContext, FC } from 'react'

import Card from '@/Components/Card/Card'

import UsersContext, { IUsersContext, IUser } from '@/Contexts/Users/Users'

import { Cards } from '@/Styles'

const App: FC = () => {
	const { Users } = useContext<IUsersContext>(UsersContext)

	return (
		<Cards>
			{Users.map((user: IUser) => (
				<Card user={user} key={user.id} />
			))}
		</Cards>
	)
}

export default App
