import { useState } from 'react'
import styled from 'styled-components'

const FormContainer = styled.form`
	display: flex;
	flex-direction: column;
	width: 320px;
	margin: 0 auto;
	
	input {
		padding: 16px;
		border: none;
		outline: none;
		margin-bottom: 16px;
	}

	button {
		border: none;
		background-color: #00e88f;
		padding: 16px;
		border-radius: 24px;
		font-weight: bold;
	}
`

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
