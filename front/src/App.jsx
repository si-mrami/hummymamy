import './App.scss';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Cart from './pages/Cart/Cart';
import ProductDetails from './pages/ProductDetials/ProductDetails';
import PaymentForm from './components/PaymentForm/PaymentForm';

// YummYummtasty.com

const App = () => {
	return (
		<div className="app">
			<Router>
				<Navbar />
				<div className="appContainer">
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/cart' element={<Cart />} />
						<Route path='product/:id' element={<ProductDetails />} />
						<Route path='/payment' element={<PaymentForm />} />
					</Routes>
				</div>
			</Router>
		</div>
	)
}

export default App
