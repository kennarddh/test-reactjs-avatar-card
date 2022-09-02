import { ReactNode } from 'react'

export interface IModalContainer {
	backgroundColor: string
}

export interface IModalContent {
	width: string | number
	height: string | number
	color: string
	backgroundColor: string
	border: string
	padding: string | number
	margin: string | number
	radius: string | number
	flexDirection: string
}

export interface IModalProps {
	wrapperId: string
	containerProps: IModalContainer
	contentProps: IModalContent
	children: ReactNode
}

export interface IModalHandle {
	Open: () => void
	Close: () => void
}
