import { useState, useEffect } from 'react'

import { ListContainer, StyledText}  from './styles'

const staticData = [
	{
		text: 'TExt text text',
		createdAt: 1655759946196,
		priority: 'High',
		isFinished: false
	},
	{
		text: 'TExt text text',
		createdAt: 1655759946196,
		priority: 'Low',
		isFinished: false
	},
	{
		text: 'TExt text text',
		createdAt: 1655759946196,
		priority: 'Medium',
		isFinished: true
	},
	{
		text: 'TExt text text',
		createdAt: 1655759946196,
		priority: 'High',
		isFinished: false
	},
	{
		text: 'TExt text text',
		createdAt: 1655759946196,
		priority: 'High',
		isFinished: true
	}
]

function ListProject () {
	const [items, setItems] = useState([])
	const handleDelete = (i) => {
		console.log(i)
	}

	useEffect(() => {
		setItems(staticData)
	}, [])

	return (
		<ListContainer>
			{items.map((item, index) => (
				<li key={index}>
					<input type='checkbox' checked={item.isFinished} />
					<StyledText isFinished={item.isFinished}>{item.text}</StyledText>
					<button onClick={() => handleDelete(index)}><span alt='Garbage can'>🗑</span></button>
				</li>
			))}
		</ListContainer>
	)
}

export { ListProject }
