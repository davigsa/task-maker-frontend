import { useState } from 'react'

import { FormContainer } from './styles'

function LoginForm () {
	const [formData, setFormData] = useState({
		username: '',
		password: ''
	})

	const handleSubmit = (e) => {
		e.preventDefault()
		setFormData
	}

	return (
		<FormContainer onSubmit={handleSubmit}>
			<input type='text' name='username' placeholder='username' value={formData.username} onChange={e => setFormData({...formData, username: e.target.value})}></input>
			<input type='password' name='password' placeholder='password' value={formData.password} onChange={e => setFormData({...formData, password: e.target.value})}></input>
			<button type='submit'>Login</button>
		</FormContainer>
	)
}

export { LoginForm }
