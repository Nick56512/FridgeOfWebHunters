import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"

function RecipePage(){

	const {id} = useParams()
	const [post, setPost] = useState(null)

	useEffect(() => {
		fetch(`https://jsonplaceholder.typicode.com/photos/${id}`)
		.then(res => res.json())
		.then(data => setPost(data))
	}, [id])

	return(
		<>
		{post && (
			<>
				<h2>{post.title}</h2>
				<img src={post.url}></img>
			</>
		)

		}
		</>
	)
}

export default RecipePage