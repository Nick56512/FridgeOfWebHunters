import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

function Recipes(){

	const [recipes, setRecipes] = useState([])

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/photos')
		.then(res => res.json())
		.then(data => data.slice(0, 20))
		.then(slicedData => setRecipes(slicedData))
	}, [])

	return(
		<>
			<h1>Recipes</h1>
			<>
			{
				recipes.map(recipe => (
					<Link key={recipe.id} to={`/recipes/${recipe.id}`}>
						<div>
							<img alt="" src={recipe.url} width='600px' height='600px'></img>
							<p>{recipe.title}</p>
						</div>
					</Link>
				))
			}
			</>
		</>
	)
}

export default Recipes