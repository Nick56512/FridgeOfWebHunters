import { NavLink } from "react-router-dom"

function Navigation(){

	return(
		<>
			 <NavLink to="/">Home</NavLink>
          <NavLink to="/recipes">Recipes</NavLink>
          <NavLink to="/ingredients">Ingredients</NavLink>
          <NavLink to="/signIn">SignIn</NavLink>
          <NavLink to="/signUp">SignUp</NavLink>
		</>
	)
}

export default Navigation