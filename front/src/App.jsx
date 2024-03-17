import './App.scss';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Login from './pages/Login/Login';

const App = () => {
	return (
		<div className="app">
			<Navbar/>
			<Router>
				<div className="appContainer">
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/login' element={<Login/>}/>
					</Routes>
				</div>
			</Router>
		</div>
	)
}

export default App
