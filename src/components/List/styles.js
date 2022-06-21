import styled from 'styled-components'

export const ListContainer = styled.ul`
	list-style: none;
	display: flex;
	width: 100%;
	flex-wrap: wrap;

	li.list-project {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		padding: 8px;
		margin: 8px;
		border: 1px solid #cccccc;
		border-radius: 8px;
		width: 350px;

		strong {
			margin-bottom: 16px;
		}
	}

	li {
		display: flex;
		align-items: center;

		span {
			color: #cccccc;
		}

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
