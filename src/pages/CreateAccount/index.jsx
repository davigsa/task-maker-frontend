import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

import { Form } from '../../components/Form'

function CreateAccount () {
	const navigate = useNavigate()
	const [error, setError] = useState('')

	const handleSubmit = ({ firstName, lastName, username, password }) => {
		axios.post(
			'http://localhost:3333/api/users',
			{
				firstName,
				lastName,
				username,
				password,
			},{
				headers: {
					'Content-type': 'application/json; charset=UTF-8'
				}
			}
		).then(response => {
			navigate('/login')
		}).catch(e => setError(e.response.data))
	}

	return (
		<section>
			<h2>Login</h2>
			<Form onSubmit={handleSubmit} createAcc hasError={error}/>
		</section>
	)
}

export { CreateAccount }
