import { useContext, useEffect } from 'react'

import { HeaderContainer, StyledLink, StyledUl } from './styles'
import { GlobalContext } from '../../contexts/GlobalContext'

function Header () {
	const { globalState } = useContext(GlobalContext)

	return (
		<HeaderContainer className="App-header">
			<span>Bolttech Task Maker</span>
			<nav>
				<StyledUl>
					{globalState?.user 
					? <li>{`Hello, ${globalState.user.username}`}</li>
					: <>
							<li><StyledLink to={'/login'}>Login</StyledLink></li>
							<li><StyledLink to={'/users/create'}>Create account</StyledLink></li>
						</>
					}
				</StyledUl>
			</nav>
		</HeaderContainer>
	)
}

export { Header }
