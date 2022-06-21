import { useState } from 'react'
import axios from 'axios'

import { ListContainer, StyledText}  from './styles'

function List ({ items, token }) {
	const [dataItems, setDataItems] = useState(items)

	const handleDelete = () => {
		// axios.delete(
		// 	`http://localhost:3333/api/tasks/${task.id}`,
		// 	{
		// 		headers: {
		// 			'Content-type': 'application/json; charset=UTF-8',
		// 			Authorization: `Bearer ${token}`
		// 		}
		// 	}
		// ).then(() => {
		// 	setDataItems(dataItems[index].Tasks?.filter(item => item.id !== task.id))

		// }).catch(e => console.log(e.response.data))
	}
	return (
		<ListContainer>
			{dataItems.map((item, index) => (
				<li key={item.id} className='list-project'>
					<strong>{item.projectName}</strong>
					<ul>
						{item.Tasks?.map((task) => {
							const date = new Date(task.createdAt)
							const threatedDate = `${date.getDay()}/${date.getMonth()}/${date.getFullYear()}`
							return (
								<li key={task.id}>
									<input type='checkbox' checked={task.completed} />
									<StyledText isFinished={task.completed}>{task.description}</StyledText>
									<span>{threatedDate}</span>
									{!task.completed && <button onClick={() => handleDelete()}><span alt='Garbage can'>🗑</span></button>}
								</li>
							)})}
					</ul>
				</li>
			))}
		</ListContainer>
	)
}

export { List }
