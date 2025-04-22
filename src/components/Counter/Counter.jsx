import './counter.css';
import Button from '../Button/Button';

function Counter() {
	return (
		<div>
			<Button text={'Decrease'} />
			<Button text={'Reset to 0'} />
			<Button text={'Increase'} />
		</div>
	);
}

export default Counter;
