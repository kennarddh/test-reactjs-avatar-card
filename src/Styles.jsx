import styled from 'styled-components'

export const Cards = styled.div`
	--max: 4;

	display: grid;
	grid-template-columns: repeat(var(--max), calc((100% / var(--max)) - 15px));
	gap: 20px;

	max-width: 100%;

	margin: 30px 20px;

	min-height: 100%;

	@media screen and (max-width: 1200px) {
		--max: 3;
	}

	@media screen and (max-width: 900px) {
		--max: 2;
	}

	@media screen and (max-width: 650px) {
		--max: 1;
	}
`
