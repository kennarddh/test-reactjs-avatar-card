import React, {
	forwardRef,
	useCallback,
	useEffect,
	useRef,
	useState,
	useContext,
	useImperativeHandle,
} from 'react'

import ModalComponent, { IModalHandle } from '@/Components/Modal/Modal'
import Input from '@/Components/Input/Input'

import UsersContext, { IUsersContext } from '@/Contexts/Users/Users'

import { Button } from './Styles'

import { Props, IClose, ICardModalHandle } from './Types'

const Modal = forwardRef<ICardModalHandle, Props>(({ user }, ref) => {
	const { SetUsers } = useContext<IUsersContext>(UsersContext)

	const ModalComponentRef = useRef<IModalHandle | null>()

	const [Email, SetEmail] = useState<string>('')
	const [Phone, SetPhone] = useState<string>('')
	const [Website, SetWebsite] = useState<string>('')
	const [Username, SetUsername] = useState<string>('')

	useEffect(() => {
		SetEmail(user.email)
		SetPhone(user.phone)
		SetWebsite(user.website)
		SetUsername(user.username)
	}, [user.email, user.phone, user.website, user.username])

	useImperativeHandle(ref, () => ({
		Open() {
			ModalComponentRef.current?.Open()
		},
	}))

	const Close = useCallback<IClose>(
		event => {
			event.stopPropagation()

			SetUsers(prev =>
				prev.map(item => {
					if (item.id === user.id) {
						return {
							...item,
							email: Email,
							phone: Phone,
							website: Website,
							username: Username,
						}
					}

					return item
				})
			)

			ModalComponentRef.current?.Close()
		},
		[Email, Phone, SetUsers, Username, Website, user.id]
	)

	return (
		<ModalComponent
			wrapperId={`user_${user.id}`}
			ref={modalRef => {
				ModalComponentRef.current = modalRef
			}}
			contentProps={{
				width: '50%',
				height: '50%',
			}}
		>
			<Input
				placeholder='Username'
				type='text'
				value={Username}
				onChange={event => SetUsername(event.target.value)}
			/>
			<Input
				placeholder='Email'
				type='email'
				value={Email}
				onChange={event => SetEmail(event.target.value)}
			/>
			<Input
				placeholder='Phone'
				type='text'
				value={Phone}
				onChange={event => SetPhone(event.target.value)}
			/>
			<Input
				placeholder='Website'
				type='text'
				value={Website}
				onChange={event => SetWebsite(event.target.value)}
			/>
			<Button onClick={Close}>Close</Button>
		</ModalComponent>
	)
})

Modal.displayName = 'CardModal'

export type { ICardModalHandle }

export default Modal
