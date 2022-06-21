import { Link } from 'react-router-dom'

function Homepage () {
	return (
		<section>
			<h1>Welcome to Bolttech Task Maker</h1>
			<p>
				If you don't have any account yet, please, <Link to='/users/create'>create an account</Link>.
				If you already has one, please, be free to <Link to='/login'>login</Link>
			</p>
		</section>
	)
}

export { Homepage }
