
function Input({children, props}) {
	return (
		<div className="Input">
			<input {...props} placeholder={children}></input>
		</div>
	);
}

export default Input;
