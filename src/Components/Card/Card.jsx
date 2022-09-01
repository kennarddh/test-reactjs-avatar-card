import React, { useContext } from 'react'

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

import UsersContext from '@/Contexts/Users'

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

const Card = ({ user }) => {
	const { SetUsers } = useContext(UsersContext)

	const ToggleLike = () => {
		SetUsers(prev =>
			prev.map(item => {
				if (item.id === user.id) {
					return { ...item, isLiked: !item.isLiked }
				}

				return item
			})
		)
	}

	const Remove = () => {
		const confirmation = confirm(`Are you sure to delete ${user.username}`)

		if (!confirmation) return

		SetUsers(prev => prev.filter(item => item.id !== user.id))
	}

	return (
		<Container>
			<Image
				src={`https://avatars.dicebear.com/v2/avataaars/${user.username}.svg?options[mood][]=happy`}
			/>
			<Body>
				<Name>{user.username}</Name>
				<BodyText>
					<BodyIcon>
						<FontAwesomeIcon icon={faEnvelope} />
					</BodyIcon>
					{user.email}
				</BodyText>
				<BodyText>
					<BodyIcon>
						<FontAwesomeIcon icon={faPhone} />
					</BodyIcon>
					{user.phone}
				</BodyText>
				<BodyText>
					<BodyIcon>
						<FontAwesomeIcon icon={faGlobe} />
					</BodyIcon>
					{user.website}
				</BodyText>
			</Body>
			<Actions>
				<ActionButton onClick={ToggleLike}>
					<FontAwesomeIcon
						icon={user.isLiked ? faSolidHeart : faHeart}
						color='#ff0000'
					/>
				</ActionButton>
				<ActionDivider />
				<ActionButton>
					<FontAwesomeIcon icon={faPenToSquare} />
				</ActionButton>
				<ActionDivider />
				<ActionButton onClick={Remove}>
					<FontAwesomeIcon icon={faTrash} />
				</ActionButton>
			</Actions>
		</Container>
	)
}

export default Card
