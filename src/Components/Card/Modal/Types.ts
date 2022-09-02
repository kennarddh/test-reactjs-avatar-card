import { MouseEvent } from 'react'

import { IUser } from '@/Contexts/Users/Users'

export interface Props {
	user: IUser
}

export type IClose = (event: MouseEvent<HTMLButtonElement>) => void

export interface ICardModalHandle {
	Open?: () => void
}
