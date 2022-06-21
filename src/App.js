import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import { GlobalCss } from './assets/globalCss'
import { GlobalContext } from './contexts/GlobalContext'
import { Header } from './components/Header'
import { Homepage } from './pages/Homepage'
import { Login } from './pages/Login'
import { CreateAccount } from './pages/CreateAccount'
import { NoMatch } from './pages/404'

function App() {
	const [globalState, setGlobalState] = useState({})
	
	return (
		<GlobalContext.Provider value={{ globalState, setGlobalState }}>
			<GlobalCss />
			<div className="App">
				<Header />
				<Routes>
					<Route path='/' element={<Homepage />} />
					<Route path='/login' element={<Login />} />
					<Route path='/users/create' element={<CreateAccount />} />
					<Route path='*' element={<NoMatch />} />
				</Routes>
			</div>
		</GlobalContext.Provider>
	)
}

export default App
