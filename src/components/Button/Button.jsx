import './button.css';

function Button({ text, onClick }) {
	return (
		<button className='counter-app__btn' onClick={onClick}>
			{text}
		</button>
	);
}

export default Button;
