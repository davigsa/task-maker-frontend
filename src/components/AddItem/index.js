import { useState } from 'react'

import { AddContainer } from './styles.js'

function AddItem ({ onSubmit, hasError, placeholder }) {
	const [inputData, setInputData] = useState('')

	const handleSubmit = (e) => {
		e.preventDefault()
		onSubmit(inputData)
		setInputData('')
	}

	return (
		<AddContainer onSubmit={handleSubmit}>
			{hasError && <span>{hasError}</span>}
			<input type='text' name='input' placeholder={placeholder} value={inputData} onChange={e => setInputData(e.target.value)}></input>
			<button type='submit'>Add</button>
		</AddContainer>
	)
}

export { AddItem }
