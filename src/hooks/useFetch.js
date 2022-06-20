import { useState, useEffect } from 'react'

export const useFetch = (url) => {
	const [data, setData] = useState([])
	const [loading, setLoading] = useState(true)

	const fetchData = () => {
		fetch(url)
			.then(response => response.json())
			.then(json => setData(json))

		setLoading(false)
	}

	useEffect(() => {
		fetchData()
	}, [])

	return { data, setData, loading }
}