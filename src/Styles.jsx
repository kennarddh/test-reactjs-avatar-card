import styled from 'styled-components'

export const Cards = styled.div`
	/**
   * User input values.
   */
	--grid-layout-gap: 20px;
	--grid-column-count: 4;
	--grid-item--min-width: 250px;

	/**
   * Calculated values.
   */
	--gap-count: calc(var(--grid-column-count) - 1);
	--total-gap-width: calc(var(--gap-count) * var(--grid-layout-gap));
	--grid-item--max-width: calc(
		(100% - var(--total-gap-width)) / var(--grid-column-count)
	);

	display: grid;

	grid-template-columns: repeat(
		auto-fill,
		minmax(
			max(var(--grid-item--min-width), var(--grid-item--max-width)),
			1fr
		)
	);

	grid-gap: var(--grid-layout-gap);

	max-width: 100%;

	margin: 30px 20px;

	min-height: 100%;
`
