import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faHeart,
	faPenToSquare,
	faEnvelope,
} from '@fortawesome/free-regular-svg-icons'
import { faTrash, faPhone, faGlobe } from '@fortawesome/free-solid-svg-icons'

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
				<ActionButton>
					<FontAwesomeIcon icon={faHeart} color='#ff0000' />
				</ActionButton>
				<ActionDivider />
				<ActionButton>
					<FontAwesomeIcon icon={faPenToSquare} />
				</ActionButton>
				<ActionDivider />
				<ActionButton>
					<FontAwesomeIcon icon={faTrash} />
				</ActionButton>
			</Actions>
		</Container>
	)
}

export default Card
