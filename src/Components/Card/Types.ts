import { IUser } from '@/Contexts/Users/Users'

export interface Props {
	user: IUser
}

export type IToggleLike = () => void

export type IRemove = () => void
