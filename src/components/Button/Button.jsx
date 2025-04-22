import './button.css';

function Button({ text, onClick }) {
	return (
		<button className='counter-btn' onClick={onClick}>
			{text}
		</button>
	);
}

export default Button;
