import { Link } from "react-router-dom"

function SignUp(){

	return(
		<>
			<h1>SignUp</h1>
			<Link  to={`/SignIn`}>Есть аккаунт? Войди!</Link>
		</>
	)
}

export default SignUp