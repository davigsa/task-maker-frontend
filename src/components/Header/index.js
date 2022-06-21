import { useContext, useEffect } from 'react'

import { HeaderContainer, StyledLink, StyledUl } from './styles'
import { GlobalContext } from '../../contexts/GlobalContext'

function Header () {
	const { globalState, setGlobalState } = useContext(GlobalContext)

	useEffect(() => {
		if (!globalState.user && typeof window !== "undefined") {
			const item = localStorage.getItem('user')
			const user = JSON.parse(item)

			if (item) {
				setGlobalState({ ...globalState, user})
			}
		}
	}, [globalState, setGlobalState])

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
