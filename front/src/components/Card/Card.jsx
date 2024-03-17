import "./Card.scss";
import { CiShoppingCart } from "react-icons/ci";

const Card = () => {
	return (
		<div className="card">
			<div className="cardImg">
				<img src="https://cdn.salla.sa/QxvOa/1rBU0v9xF80rCpv5uSWyEw640QphbRUAwNentPZb.png" alt="" />
			</div>
			<div className="cardInfo">
				<div className="title">
					<h1>دبيحة حري كاملة (صغيرة)</h1>
				</div>
				<div className="desc">
					<p>صغيرة (11-14) تقريبا</p>
				</div>
				<hr />
				<div className="prices">
					<div className="price">
						<span>1500 SAR</span>
					</div>
					<div className="pricebefore">
						<span>1700 SAR</span>
					</div>
				</div>
				<div className="buttonAdd">
					<button>
						<CiShoppingCart />
					</button>
				</div>
			</div>
		</div>
	)
}

export default Card
