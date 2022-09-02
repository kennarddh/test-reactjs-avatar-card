import styled from 'styled-components'

export const Container = styled.div`
	min-height: 400px;

	border: 1px solid #8b8b8b;

	border-radius: 5px;
`

export const Image = styled.img`
	height: 250px;
	width: 100%;

	background-color: #dadada;
`

export const Body = styled.div`
	height: calc(100% - 54px - 250px);
	width: 100%;

	padding: 10px 20px;

	display: flex;
	align-items: flex-start;
	gap: 10px;

	flex-direction: column;
`

export const Name = styled.h3`
	word-break: break-all;
`

export const BodyText = styled.p`
	color: #505050;

	word-break: break-all;
`

export const BodyIcon = styled.span`
	font-size: 1.2rem;
	margin-right: 10px;
`

export const Actions = styled.div`
	height: 50px;
	width: 100%;

	display: flex;
	justify-content: space-evenly;
	align-items: center;

	background-color: #dadada;

	border-radius: 0 0 5px 5px;
`

export const ActionButton = styled.button`
	background-color: transparent;

	border: none;

	font-size: 1.5rem;

	cursor: pointer;
`

export const ActionDivider = styled.div`
	background-color: #bebebe;

	border-radius: 5px;

	width: 5px;
	height: 70%;

	color: rgba(0, 0, 0, 0);
`
