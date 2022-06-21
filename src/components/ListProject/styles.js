import styled from 'styled-components'

export const ListContainer = styled.ul`
	list-style: none;

	li {
		display: flex;
		align-items: center;

		&:not(:last-child) {
			margin-bottom: 16px;
		}

		button {
			border: none;
			cursor: pointer;
		}
	}
`

export const StyledText = styled.p`
	margin: 0 16px;
	text-decoration: ${props => props.isFinished ? 'line-through' : 'none'};
`
