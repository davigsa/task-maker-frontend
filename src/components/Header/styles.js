import styled from 'styled-components'

import { Link } from 'react-router-dom'

export const HeaderContainer = styled.header`
	padding: 16px;
	background: #00e88f;
	font-weight: bolder;
	display: flex;
	align-items: center;
	justify-content: space-around;
`

export const StyledUl = styled.ul`
	list-style: none;
	display: flex;

	li {
		&:not(:last-child) {
			margin-right: 24px;
		}
	}
`

export const StyledLink = styled(Link)`
	text-decoration: none;
	color: #000;
	transition: all .3s ease-in;
`
