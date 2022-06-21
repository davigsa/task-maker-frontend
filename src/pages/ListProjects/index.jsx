import { useEffect, useContext, useState } from 'react'
import axios from 'axios'

import { List } from '../../components/List'
import { GlobalContext } from '../../contexts/GlobalContext'

function ListProjects() {
	const { globalState, setGlobalState } = useContext(GlobalContext)
	const [loading, setLoading] = useState(true)

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

	return (
		<section>
			<h2>Projects</h2>
			{loading 
				? <span>Loading...</span>
				: <List items={globalState.data} />
			}
		</section>
	)
}

export { ListProjects }
