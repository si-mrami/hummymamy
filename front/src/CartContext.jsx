import React, { createContext, useContext, useState } from 'react';

export const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
	const [cartItems, setCartItems] = useState(() => {
		const storedCartItems = localStorage.getItem('cartItems');
		return storedCartItems ? JSON.parse(storedCartItems) : [];
	});

	// add a product to the cart
	const addToCart = (product) => {
		const newCartItems = [...cartItems, product];
		setCartItems(newCartItems);
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

	const value = {
		cartItems,
		addToCart,
		removeFromCart,
		clearCart,
	};

	return (
		<CartContext.Provider value={value}>
			{children}
		</CartContext.Provider>
	);
};

