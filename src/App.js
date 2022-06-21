import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'

import { GlobalCss } from './assets/globalCss'
import { GlobalContext } from './contexts/GlobalContext'
import { Header } from './components/Header'
import { Homepage } from './pages/Homepage'
import { Login } from './pages/Login'
import { CreateAccount } from './pages/CreateAccount'
import { ListProjects } from './pages/ListProjects'
import { NoMatch } from './pages/404'

function App() {
	const [globalState, setGlobalState] = useState({})

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
		<GlobalContext.Provider value={{ globalState, setGlobalState }}>
			<GlobalCss />
			<div className="App">
				<Header />
				<Routes>
					<Route path='/' element={<Homepage />} />
					<Route path='/login' element={<Login />} />
					<Route path='/users/create' element={<CreateAccount />} />
					<Route path='/list' element={<ListProjects />} />
					<Route path='*' element={<NoMatch />} />
				</Routes>
			</div>
		</GlobalContext.Provider>
	)
}

export default App
