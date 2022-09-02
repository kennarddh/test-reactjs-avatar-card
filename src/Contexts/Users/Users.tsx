import React, { createContext, useState, useEffect, FC } from 'react'

import { IApiResponseData, IUsersProvider, IUsersContext, IUser } from './Types'

const UsersContext = createContext<IUsersContext>({
	Users: [],
	SetUsers: () => {}, // eslint-disable-line @typescript-eslint/no-empty-function
})

export const UsersProvider: FC<IUsersProvider> = ({ children }) => {
	const [Users, SetUsers] = useState<IUser[]>([])

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

export type { IApiResponseData, IUsersProvider, IUsersContext, IUser }

export default UsersContext
