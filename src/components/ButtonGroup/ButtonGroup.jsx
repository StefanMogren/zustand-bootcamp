import './buttonGroup.css';
import Button from '../Button/Button';
import useCountStore from '../../stores/useCountStores';

function ButtonGroup() {
	const { increaseCount, decreaseCount, resetCount } = useCountStore();

	return (
		<div className='counter-app__btn-grp'>
			<Button text={'Decrease'} onClick={decreaseCount} />
			<Button text={'Reset to 0'} onClick={resetCount} />
			<Button text={'Increase'} onClick={increaseCount} />
		</div>
	);
}

export default ButtonGroup;
