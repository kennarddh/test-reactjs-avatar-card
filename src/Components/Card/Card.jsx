import React from 'react'

import { Container } from './Styles'

const Card = ({ user }) => {
	return <Container>{user.id}</Container>
}

export default Card
