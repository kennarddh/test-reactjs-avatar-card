import styled from 'styled-components'

import { IInput } from './Types'

const Input = styled.input<IInput>`
	width: ${({ width }) => (typeof width === 'number' ? `${width}px` : width)};

	height: ${({ height }) =>
		typeof height === 'number' ? `${height}px` : height};

	border-radius: 15px;
	padding: 10px 20px;

	border: none;

	background-color: #b6b6b6;

	resize: none;

	&::placeholder {
		color: white;
	}

	&:focus {
		outline: 1px solid black;
	}

	&::file-selector-button {
		border: none;
		border-radius: 5px;
		height: 100%;
	}
`

Input.defaultProps = {
	width: '70%',
	height: '40%',
}

export default Input
