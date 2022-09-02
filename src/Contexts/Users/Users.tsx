import React, { createContext, useState, useEffect, FC } from 'react'

import {
	IApiResponseData,
	IUsersProvider,
	IUsersContext,
	IUsers,
} from '@/Contexts/Users/UsersTypes'

const UsersContext = createContext<IUsersContext>({
	Users: [],
})

export const UsersProvider: FC<IUsersProvider> = ({ children }) => {
	const [Users, SetUsers] = useState<IUsers[]>([])

	useEffect(() => {
		const controller: AbortController = new AbortController()

		const signal: AbortSignal = controller.signal

		fetch('https://jsonplaceholder.typicode.com/users', { signal })
			.then((response: Response) => response.json())
			.then((data: IApiResponseData[]) =>
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

export type { IApiResponseData, IUsersProvider, IUsersContext, IUsers }

export default UsersContext
