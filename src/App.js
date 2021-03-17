import './css/app.css';
import Navbar from './components/navbar/Navbar';
import Deadlines from './components/deadlines/Deadlines';

function App() {
	return (
		<div className="root">
			<Navbar />
			<Deadlines />
		</div>
	);
}

export default App;
