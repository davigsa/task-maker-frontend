import { useState } from 'react'
import axios from 'axios'

import { ListContainer, StyledText}  from './styles'

function List ({ items, token }) {
	const [dataItems, setDataItems] = useState(items)

	const handleDelete = (id) => {
		axios.delete(
			`http://localhost:3333/api/tasks/${id}`,
			{
				headers: {
					'Content-type': 'application/json; charset=UTF-8',
					Authorization: `Bearer ${token}`
				}
			}
		).then(() => {
		//	Lógica para manter no state

		}).catch(e => console.log(e.response.data))
	}

	const handleCheck = (task) => {
		axios.put(
			`http://localhost:3333/api/tasks/${task.id}`,
			{
				completed: !task.completed,
				description: task.description,
				priority: task.priority
			},
			{
				headers: {
					'Content-type': 'application/json; charset=UTF-8',
					Authorization: `Bearer ${token}`
				}
			}
		).then(() => {

		}).catch(e => console.log(e.response.data))
	}

	return (
		<ListContainer>
			{dataItems.map((item, index) => (
				<>
					<li key={item.id} className='list-project'>
						<strong>{item.projectName}</strong>
						<ul>
							{item.Tasks?.map((task) => {
								const date = new Date(task.createdAt)
								const threatedDate = `${date.getDay()}/${date.getMonth()}/${date.getFullYear()}`
								return (
									<li key={task.id}>
										<input type='checkbox' defaultChecked={task.completed} onChange={() => handleCheck(task)} />
										<StyledText isFinished={task.completed}>{task.description}</StyledText>
										<span>{threatedDate}</span>
										{!task.completed && <button onClick={() => handleDelete(task.id)}><span alt='Garbage can'>🗑</span></button>}
									</li>
								)})}
						</ul>
					</li>
				</>
			))}
		</ListContainer>
	)
}

export { List }
