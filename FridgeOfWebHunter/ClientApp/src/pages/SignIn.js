import { Link } from "react-router-dom"

function SignIn(){

	return(
		<>
			<h1>SignIn</h1>
			<Link  to={`/SignUp`}>Нет аккаунта? Зарегистрируйся!</Link>
		</>
	)
}

export default SignIn