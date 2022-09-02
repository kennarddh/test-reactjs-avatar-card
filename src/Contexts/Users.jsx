import React, { createContext, useState, useEffect } from 'react'

const UsersContext = createContext({})

export const UsersProvider = ({ children }) => {
	const [Users, SetUsers] = useState([])

	useEffect(() => {
		const controller = new AbortController()

		const signal = controller.signal

		fetch('https://jsonplaceholder.typicode.com/users', { signal })
			.then(response => response.json())
			.then(data =>
				SetUsers(data.map(item => ({ ...item, isLiked: false })))
			)
			.catch(console.log)

		return () => controller.abort()
	}, [])

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
