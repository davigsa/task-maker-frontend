import { Routes, Route } from 'react-router-dom'
import { GlobalCss } from './assets/globalCss'

import { Header } from './components/Header'
import { Homepage } from './pages/Homepage'
import { Login } from './pages/Login'
import { NoMatch } from './pages/404'

function App() {
	return (
		<>
			<GlobalCss />
			<div className="App">
				<Header />
				<Routes>
					<Route path='/' element={<Homepage />} />
					<Route path='/login' element={<Login />} />
					<Route path='*' element={<NoMatch />} />
				</Routes>
			</div>
		</>
	)
}

export default App
