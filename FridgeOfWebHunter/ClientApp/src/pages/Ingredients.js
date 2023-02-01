import DropDownList from '../atoms/Drop-Down-List'
import { useState, useEffect } from 'react'

function Ingredients(){

	const [ingredients, setIngredients] = useState([])
	const [filtered, setFiltered] = useState('')

	useEffect(() => {
		getIngredients()
	}, [])

	async function getIngredients(){
		await fetch('https://dummyjson.com/products')
		.then(res => res.json())
		.then(data => setIngredients(data.products))
		.catch(e => console.log(e))
	}

	function filterInredients(filter){
		setFiltered(filter)
	}

	return(
		<>
			<h1>Ingredients</h1>
			<DropDownList
			value={filtered}
			onChange={filterInredients}
			defaultValue="Все продукты"
			options={[
				{value: 'meat', name: "Мясные продукты"},
				{value: 'milk', name: "Молочные продукты"},
				{value: 'vegetables', name: "Овощи"},
				{value: 'fruits', name: "Фрукты и ягоды"}
			]}
			/>
			{ingredients.map(ingredient => (
				<div key={ingredient.id}>
					<h2>{ingredient.title}</h2>
					<h3>{ingredient.category}</h3>
					<img src={ingredient.thumbnail}></img>
				</div>
			))
			}
		</>
	)
}

export default Ingredients