import './App.scss';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Cart from './pages/Cart/Cart';
import ProductDetails from './pages/ProductDetials/ProductDetails';
import PaymentForm from './components/PaymentForm/PaymentForm';
import VerfyCode from './components/verfyCode/VerfyCode';
import { CartProvider } from './CartContext';

// YummYummtasty.com

const App = () => {
	return (
		<CartProvider>
			<div className="app">
				<Router>
					<Navbar />
					<div className="appContainer">
						<Routes>
							<Route path='/' element={<Home />} />
							<Route path='/cart' element={<Cart />} />
							<Route path='product/:id' element={<ProductDetails />} />
							<Route path='/payment' element={<PaymentForm />} />
							<Route path='/code-verfycation' element={<VerfyCode />} />
						</Routes>
					</div>
				</Router>
			</div>
		</CartProvider>
	)
}

export default App
