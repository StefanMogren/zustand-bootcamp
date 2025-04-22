import ButtonGroup from './components/ButtonGroup/ButtonGroup';
import Counter from './components/Counter/Counter';

function App() {
	return (
		<div className='app'>
			<section className='counter-container'>
				<h1>Counter App</h1>
				<Counter count={45} />
				<ButtonGroup />
			</section>
		</div>
	);
}

export default App;
