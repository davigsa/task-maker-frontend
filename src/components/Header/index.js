import styled from 'styled-components'

import { Link } from 'react-router-dom'

const HeaderContainer = styled.header`
	padding: 16px;
	background: #00e88f;
	font-weight: bolder;
	display: flex;
	align-items: center;
	justify-content: space-around;
`

const StyledUl = styled.ul`
	list-style: none;
	display: flex;

	li {
		&:not(:last-child) {
			margin-right: 24px;
		}
	}
`

const StyledLink = styled(Link)`
	text-decoration: none;
	color: #000;
	transition: all .3s ease-in;
`

function Header () {
	return (
		<HeaderContainer className="App-header">
			<span>Bolttech Task Maker</span>
			<nav>
				<StyledUl>
					<li><StyledLink to={'/login'}>Login</StyledLink></li>
				</StyledUl>
			</nav>
		</HeaderContainer>
	)
}

export { Header }
