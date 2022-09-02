import React, { useContext, useRef, FC, RefObject } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faHeart,
	faPenToSquare,
	faEnvelope,
} from '@fortawesome/free-regular-svg-icons'
import {
	faTrash,
	faPhone,
	faGlobe,
	faHeart as faSolidHeart,
} from '@fortawesome/free-solid-svg-icons'

import UsersContext, { IUser, IUsersContext } from 'Contexts/Users/Users'

import Modal, { ICardModalHandle } from 'Components/Card/Modal/Modal'

import {
	Container,
	Image,
	Name,
	BodyText,
	Body,
	ActionButton,
	Actions,
	ActionDivider,
	BodyIcon,
} from './Styles'

import { Props, IToggleLike, IRemove } from './Types'

const Card: FC<Props> = ({ user }) => {
	const { SetUsers } = useContext<IUsersContext>(UsersContext)

	const ModalRef = useRef<ICardModalHandle>()

	const ToggleLike: IToggleLike = () => {
		SetUsers((prev: IUser[]) =>
			prev.map((item: IUser) => {
				if (item.id === user.id) {
					return { ...item, isLiked: !item.isLiked }
				}

				return item
			})
		)
	}

	const Remove: IRemove = () => {
		const confirmation: boolean = confirm(
			`Are you sure to delete ${user.username}`
		)

		if (!confirmation) return

		SetUsers((prev: IUser[]) =>
			prev.filter((item: IUser) => item.id !== user.id)
		)
	}

	return (
		<>
			<Container>
				<Image
					src={`https://avatars.dicebear.com/v2/avataaars/${user.username}.svg?options[mood][]=happy`}
					alt='Avatar'
				/>
				<Body>
					<Name>{user.username}</Name>
					<BodyText as='a' href={`mailto:${user.email}`}>
						<BodyIcon>
							<FontAwesomeIcon icon={faEnvelope} />
						</BodyIcon>
						{user.email}
					</BodyText>
					<BodyText as='a' href={`tel:${user.email}`}>
						<BodyIcon>
							<FontAwesomeIcon icon={faPhone} />
						</BodyIcon>
						{user.phone}
					</BodyText>
					<BodyText as='a' href={`//${user.website}`}>
						<BodyIcon>
							<FontAwesomeIcon icon={faGlobe} />
						</BodyIcon>
						{user.website}
					</BodyText>
				</Body>
				<Actions>
					<ActionButton
						onClick={ToggleLike}
						aria-label={user.isLiked ? 'Cancel like' : 'Like'}
					>
						<FontAwesomeIcon
							icon={user.isLiked ? faSolidHeart : faHeart}
							color='#ff0000'
						/>
					</ActionButton>
					<ActionDivider />
					<ActionButton
						onClick={() => {
							if (ModalRef.current?.Open) ModalRef.current?.Open()
						}}
						aria-label='Edit'
					>
						<FontAwesomeIcon icon={faPenToSquare} />
					</ActionButton>
					<ActionDivider />
					<ActionButton onClick={Remove} aria-label='Remove avatar'>
						<FontAwesomeIcon icon={faTrash} />
					</ActionButton>
				</Actions>
			</Container>
			<Modal user={user} ref={ModalRef as RefObject<ICardModalHandle>} />
		</>
	)
}

export default Card
