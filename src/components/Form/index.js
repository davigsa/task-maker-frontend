import { useState } from 'react'

import { FormContainer } from './styles'

function Form ({ onSubmit, createAcc, hasError }) {
	const [formData, setFormData] = useState({
		username: '',
		password: '',
		firstName: '',
		lastName: ''
	})

	const handleSubmit = (e) => {
		e.preventDefault()
		onSubmit(createAcc ? formData : { username: formData.username, password: formData.password })
	}

	return (
		<FormContainer onSubmit={handleSubmit}>
			{hasError && <span>{hasError}</span>}
			{createAcc &&
				<>
					<input type='text' name='firstName' placeholder='First Name' value={formData.firstName} onChange={e => setFormData({...formData, firstName: e.target.value})} />
					<input type='text' name='lastName' placeholder='Last Name' value={formData.lastName} onChange={e => setFormData({...formData, lastName: e.target.value})} />
				</>
			}
			<input type='text' name='username' placeholder='Username' value={formData.username} onChange={e => setFormData({...formData, username: e.target.value})}></input>
			<input type='password' name='password' placeholder='Password' value={formData.password} onChange={e => setFormData({...formData, password: e.target.value})}></input>
			<button type='submit'>{createAcc ? 'Create' : 'Login'}</button>
		</FormContainer>
	)
}

export { Form }
