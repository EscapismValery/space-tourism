import './App.css';
import { BrowserRouter  /*HashRouter*/ as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Pages/Home';
import Destination from './components/Pages/Destination';
import Crew from './components/Pages/Crew';
import Technology from './components/Pages/Technology';
import NoMatch404 from './components/Pages/NoMatch404';

function App() {
	return (
		<div className="App">
			<Router>
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route path="/Destination/*" element={<Destination />} />
					<Route path="/Crew" element={<Crew />} />
					<Route path="/Technology" element={<Technology />} />
					<Route path="*" element={<NoMatch404 />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
