import ButtonGroup from './components/ButtonGroup/ButtonGroup';
import Counter from './components/Counter/Counter';

function App() {
	return (
		<div className='app'>
			<h1>Counter App</h1>
			<Counter count={45} />
			<ButtonGroup />
		</div>
	);
}

export default App;
