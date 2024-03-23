import "./Card.scss";
import { CiShoppingCart } from "react-icons/ci";
import { Link } from 'react-router-dom';
import { useCart } from "../../CartContext";

const Card = ({ product }) => {

	if (!product || !product.image) {
		return null;
	}

	const { addToCart } = useCart();

	const handleAddToCart = () => {
		addToCart(product);
	};
	return (
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
	)
}

export default Card
