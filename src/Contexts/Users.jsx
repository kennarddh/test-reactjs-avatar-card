import React, { createContext, useState } from 'react'

const UsersContext = createContext({})

export const UsersProvider = ({ children }) => {
	const [Users, SetUsers] = useState([])

	return (
		<UsersContext.Provider
			value={{
				Users,
				SetUsers,
			}}
		>
			{children}
		</UsersContext.Provider>
	)
}

export default UsersContext
