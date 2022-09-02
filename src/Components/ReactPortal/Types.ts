import { ReactNode } from 'react'

export type ICreateWrapperAndAppendToBody = (
	wrapperId: string
) => HTMLDivElement

export interface IReactPortalProps {
	children: ReactNode
	wrapperId: string
}
