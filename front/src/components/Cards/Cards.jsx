import './Cards.scss';
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { useRef, useState } from 'react';
import Card from '../Card/Card';
import { productData } from '../../Data';


const Cards = () => {

	const sliderRef = useRef(null);
	const [products, setProducts] = useState(productData);

	const handlePrevClick = () => {
		if (sliderRef.current) {
			sliderRef.current.slickPrev();
		}
	};

	const handleNextClick = () => {
		if (sliderRef.current) {
			sliderRef.current.slickNext();
		}
	};

	const settings = {
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: true,
		speed: 500,
		autoplay: true,
		autoplaySpeed: 2000,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
				},
			},
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 4,
				},
			},
		],
	};
	return (
		<div className="cards">
			<div className="cardTop">
				<div className="left">
					<div className="allProduct">
						<span>جميع المنتجات</span>
					</div>
				</div>
				<div className="right">
					<div className="arrows">
						<div className="arroeLeft" onClick={handleNextClick}>
							<MdKeyboardArrowRight />
						</div>
						<div className="arrowRight" onClick={handlePrevClick}>
							<MdKeyboardArrowLeft />
						</div>
					</div>
					<div className="buttonAll">
						<button>عرض الكل</button>
					</div>
				</div>
			</div>
			<Slider ref={sliderRef} {...settings}>
				{products.map(product => (
					<div key={product.id}>
						<Card product={product} />
					</div>
				))}
			</Slider>
		</div>
	)
}

export default Cards
