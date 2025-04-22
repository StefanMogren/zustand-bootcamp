import './counter.css';
import useCountStore from '../../stores/useCountStores';

function Counter() {
	const { count } = useCountStore();
	return <>{count}</>;
}

export default Counter;
