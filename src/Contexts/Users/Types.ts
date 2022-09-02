import { SetStateAction, Dispatch, ReactNode } from 'react'

export interface IApiResponseData {
	id: number
	name: string
	username: string
	email: string
	address: {
		street: string
		suite: string
		city: string
		zipcode: string
		geo: {
			lat: string
			lng: string
		}
	}
	phone: string
	website: string
	company: {
		name: string
		catchPhrase: string
		bs: string
	}
}

export interface IUser extends IApiResponseData {
	isLiked: boolean
}

export interface IUsersContext {
	Users: IUser[]
	SetUsers: Dispatch<SetStateAction<IUser[]>>
}

export interface IUsersProvider {
	children: ReactNode
}
