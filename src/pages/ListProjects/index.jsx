import { useEffect, useContext, useState } from 'react'
import axios from 'axios'

import { List } from '../../components/List'
import { AddItem } from '../../components/AddItem'
import { GlobalContext } from '../../contexts/GlobalContext'

function ListProjects() {
	const { globalState, setGlobalState } = useContext(GlobalContext)
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState('')

	useEffect(() => {
		axios.get(
			'http://localhost:3333/api/projects',
			{
				headers: {
					'Content-type': 'application/json; charset=UTF-8',
					Authorization: `Bearer ${globalState?.user?.token}`
				}
			}
		).then(res => {
			console.log(res)
			setGlobalState({ ...globalState, data: res.data})
			setLoading(false)

		}).catch(e => console.log(e.response.data))
	}, [globalState?.user?.token])

	const handleSubmit = (projectName) => {
		axios.post(
			'http://localhost:3333/api/projects',
			{
				projectName
			},
			{
				headers: {
					'Content-type': 'application/json; charset=UTF-8',
					Authorization: `Bearer ${globalState.user.token}`
				}
			}
		).then(response => {
			console.log('response:::', response)
			const newData = globalState.data.push(response.data)
			setGlobalState({ ...globalState, data: newData})
		}).catch(e => setError(e.response.data))
	}

	return (
		<section>
			{globalState.user 
			? 
				<>
				<h2>Projects</h2>
				{loading 
					? <span>Loading...</span>
					: <List items={globalState.data} />
				}
				<AddItem placeholder={'Add project'} onSubmit={handleSubmit} hasError={error} />
			</>
		: <h2>Please, Log in</h2>	
		}
		</section>
	)
}

export { ListProjects }
