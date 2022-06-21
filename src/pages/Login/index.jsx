import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useState, useContext } from 'react'

import { Form } from '../../components/Form'
import { GlobalContext } from '../../contexts/GlobalContext'

function Login () {
	const navigate = useNavigate()
	const [error, setError] = useState('')
	const { globalState, setGlobalState } = useContext(GlobalContext)

	const handleSubmit = ({ username, password }) => {
		axios.post(
			'http://localhost:3333/api/auth',
			{
				username,
				password,
			},{
				headers: 'Content-type": "application/json; charset=UTF-8'
			}
		).then(res => {
			const user = { token: res.data.token, username: res.data.user.username }
			setGlobalState({ ...globalState, user})

			if (typeof window !== "undefined") {
				localStorage.setItem('user', JSON.stringify(user))
			}

			navigate('/list')
		}).catch(e => setError(e.response.data))
	}

	return (
		<section>
			<h2>Create Account</h2>
			<Form onSubmit={handleSubmit} hasError={error}/>
		</section>
	)
}

export { Login }
