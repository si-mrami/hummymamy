import React, { createContext, useContext, useEffect, useState } from 'react';

export const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
	const [cartItems, setCartItems] = useState(() => {
		const storedCartItems = localStorage.getItem('cartItems');
		return storedCartItems ? JSON.parse(storedCartItems) : [];
	});

	const [message, setMessage] = useState(false);

	// add a product to the cart
	const addToCart = (product) => {
		const newCartItems = [...cartItems, product];
		setCartItems(newCartItems);
		setMessage(true);
		localStorage.setItem('cartItems', JSON.stringify(newCartItems));
	};

	// remove a product from the cart
	const removeFromCart = (productId) => {
		const updatedCartItems = cartItems.filter(item => item.id !== productId);
		setCartItems(updatedCartItems);
		localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
	};

	// clear the cart
	const clearCart = () => {
		setCartItems([]);
		localStorage.removeItem('cartItems');
	};

	useEffect(() => {
		let timeout;
		if (message) {
			timeout = setTimeout(() => {
				setMessage(false);
			}, 2000);
		}

		return () => clearTimeout(timeout);
	}, [message]);

	const value = {
		cartItems,
		addToCart,
		removeFromCart,
		clearCart,
		message,
	};

	return (
		<CartContext.Provider value={value}>
			{children}
		</CartContext.Provider>
	);
};

