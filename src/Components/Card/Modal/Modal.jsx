import React, {
	forwardRef,
	useCallback,
	useEffect,
	useRef,
	useState,
	useContext,
	FC,
} from 'react'

import ModalComponent from '@/Components/Modal/Modal'
import Input from '@/Components/Input/Input'

import UsersContext from '@/Contexts/Users'

import { Button } from './Styles'

import { Props } from './Types'

const Modal: FC<Props> = ({ user }, ref) => {
	const { SetUsers } = useContext(UsersContext)

	const ModalComponentRef = useRef()

	const [Email, SetEmail] = useState('')
	const [Phone, SetPhone] = useState('')
	const [Website, SetWebsite] = useState('')
	const [Username, SetUsername] = useState('')

	useEffect(() => {
		SetEmail(user.email)
		SetPhone(user.phone)
		SetWebsite(user.website)
		SetUsername(user.username)
	}, [user.email, user.phone, user.website, user.username])

	const Close = useCallback(
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

				ref.current = {
					Open: modalRef?.Open,
				}
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
}

export default forwardRef(Modal)
