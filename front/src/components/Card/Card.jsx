import "./Card.scss";
import { CiShoppingCart } from "react-icons/ci";
import { Link } from 'react-router-dom';
import { useCart } from "../../CartContext";
import Snackbar from '@mui/material/Snackbar';
import React, { useState } from "react";
import SnackbarContent from '@mui/material/SnackbarContent';

const Card = ({ product }) => {
	const { addToCart } = useCart();

	if (!product || !product.image) {
		return null;
	}

	const handleAddToCart = () => {
		addToCart(product);
	};



	return (
		<>
			<div className="card">
				<Link to={`/product/${product.id}`} >
					<div className="cardImg">
						<img src={product.image} alt="" />
					</div>
					<div className="cardInfo">
						<div className="title">
							<h1>{product.title}</h1>
						</div>
						<div className="desc">
							<p>{product.subTitle}</p>
						</div>
						<hr />
						<div className="prices">
							<div className="price">
								<span>{product.originalPrice}</span>
							</div>
							<div className="pricebefore">
								<span>{product.discountedPrice}</span>
							</div>
						</div>
					</div>
				</Link>
				<div className="buttonAdd" onClick={handleAddToCart}>
					<button>
						<CiShoppingCart />
					</button>
				</div>
			</div>

		</>
	);
}

export default Card;
