import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import Loading from "../atoms/Loading"

function Recipes(){

	const [recipes, setRecipes] = useState([])
	const [isLoading, setLoading] = useState(false)

	useEffect(() => {
		getRecipes()
	}, [])

	async function getRecipes(){
			setLoading(true)
			setTimeout(async () => {
				await fetch('https://jsonplaceholder.typicode.com/photos')
				.then(res => res.json())
				.then(data => data.slice(0, 50))
				.then(slicedData => setRecipes(slicedData))
				.catch(e => console.log(e))
				setLoading(false)
			}, 700)
			
		}

	return(
		<>
			<h1>Recipes</h1>
			{isLoading 
			? <Loading></Loading>
			:
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
	)
}

export default Recipes