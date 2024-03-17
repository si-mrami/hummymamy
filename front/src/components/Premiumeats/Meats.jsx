import Card from '../Card/Card';
import './Meats.scss';

const Meats = () => {
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
				<Card />
				<Card />
				<Card />
				<Card />
				
			</div>
		</div>
	)
}

export default Meats
