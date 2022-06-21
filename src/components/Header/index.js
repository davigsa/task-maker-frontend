import { HeaderContainer, StyledLink, StyledUl } from './styles'

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
