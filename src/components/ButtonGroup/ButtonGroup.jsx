import './buttonGroup.css';
import Button from '../Button/Button';

function ButtonGroup() {
	return (
		<div>
			<Button text={'Decrease'} />
			<Button text={'Reset to 0'} />
			<Button text={'Increase'} />
		</div>
	);
}

export default ButtonGroup;
