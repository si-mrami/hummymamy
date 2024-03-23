import { useState } from 'react';
import { productData } from '../../Data';
import Card from '../Card/Card';
import './Meats.scss';

const Meats = () => {
	const [products, setProducts] = useState(productData);
	return (
		<div className="meats">
			<div className="cardTop">
				<div className="left">
					<div className="allProduct">
						<span>لحومنا الفاخرة</span>
					</div>
				</div>
				<div className="right">
					<div className="buttonAll">
						<button>عرض الكل</button>
					</div>
				</div>
			</div>
			<div className="cardList">
				{products.slice(0, 4).map(product => (
					<div key={product.id}>
						<Card product={product} />
					</div>
				))}
			</div>
		</div>
	)
}

export default Meats
