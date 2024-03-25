import "./Card.scss";
import { CiShoppingCart } from "react-icons/ci";
import { Link } from 'react-router-dom';
import { useCart } from "../../CartContext";
import Snackbar from '@mui/material/Snackbar';
import { useState } from "react";
import SnackbarContent from '@mui/material/SnackbarContent';

const Card = ({ product }) => {
	const { addToCart } = useCart();
	const [openSnackbar, setOpenSnackbar] = useState(false);

	if (!product || !product.image) {
		return null;
	}

	const handleAddToCart = () => {
		addToCart(product);
		setOpenSnackbar(true);
	};

	const handleCloseSnackbar = () => {
		setOpenSnackbar(false);
	};

	return (
		<>
			<div className="card">
				<div className="cardImg">
					<img src={product.image} alt="" />
				</div>
				<div className="cardInfo">
					<Link to={`/product/${product.id}`} >
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
					</Link>
					<div className="buttonAdd" onClick={handleAddToCart}>
						<button>
							<CiShoppingCart />
						</button>
					</div>
				</div>
			</div>
		
		</>
	);
}

export default Card;
