import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import './ProductDetails.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaSms } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { GrCart } from "react-icons/gr";
import { MdOutlineMessage } from "react-icons/md";
import { useEffect, useState } from 'react';
import Footer from '../../components/Footer/Footer';
import { FiHeart } from "react-icons/fi";
import { FaCalculator } from "react-icons/fa6";
import { useParams } from 'react-router-dom';
import { productData } from '../../Data';

const ProductDetails = () => {
	const { id } = useParams();

	const [show, setShow] = useState(false);
	const [quantity, setQuantity] = useState(1);
	const [product, setProduct] = useState([]);

	const handleIncre = () => {
		setQuantity(quantity + 1);
	}

	const handleDecre = () => {
		if (quantity !== 1) {
			setQuantity(quantity - 1);
		}
	}

	const breadcrumbItems = [
		{ label: "الصفحة الرئيسية", url: "../" },
		{ label: " > بوكس تجربة المشاهير " }
	];

	useEffect(() => {
		const fetchProduct = () => {
			const result = productData.filter((pro) => pro.id === parseInt(id));
			if (result.length > 0) {
				setProduct(result[0]);
			} else {
				console.log("Product not found");
			}
		}
		fetchProduct();
	}, [id]);


	const settings = {
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: true,
		speed: 500,
		autoplay: true,
		autoplaySpeed: 2000,
		dots: true,
		appendDots: dots => (
			<div>
				<ul style={{ margin: "0px", padding: "0px", color: ' #0bb6b0', fontSize: '45px', }}>
					{dots}
				</ul>
			</div>
		),

		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
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
		<>
			<Breadcrumb items={breadcrumbItems} />
			<div className="product">
				<div className="topSlide">
					<Slider {...settings}>
						<div className="item">
							<img src="https://cdn.salla.sa/QxvOa/rms8EERk5tFK2GCPlYi6BrefqMz72dlUQkNAo7Nw.jpg" alt="" />
						</div>
						<div className="item">
							<img src="https://cdn.salla.sa/QxvOa/BNBUXNkJ3EufMoP2YOqUa9m4t2hy2Q3GiLsnXgN2.jpg" alt="" />
						</div>
						<div className="item">
							<img src="https://cdn.salla.sa/QxvOa/IdehbePKftjdjoEntxMRYMWW9XIHOrNfRdfhNU6H.jpg" alt="" />
						</div>
					</Slider>
				</div>
				<div className="links">
					<FaWhatsapp style={{ color: 'gray', fontSize: '30px', cursor: 'pointer' }} />
					<FaTwitter style={{ color: 'gray', fontSize: '30px', cursor: 'pointer' }} />
					<FaSms style={{ color: 'gray', fontSize: '30px', cursor: 'pointer' }} />
					<FaTelegramPlane style={{ color: 'gray', fontSize: '30px', cursor: 'pointer' }} />
					<FaInstagram style={{ color: 'gray', fontSize: '30px', cursor: 'pointer' }} />
				</div>
				<div className="productInfo">
					{product && (
						<>
							<div className="title">
								{/* <h1>بوكس تجربة المشاهير</h1> */}
								<h1>{product.title}</h1>
								<div className="subTitle">
									{/* <span>بوكس تجربة جميع اللحوم والمشاوي</span> */}
									<span>{product.subTitle}</span>
								</div>
							</div>
							<div className="prices">
								<span className='beforPrice'>SAR 699</span>
								<span className='price'>SAR 599</span>
							</div>
							<div className="caty">
								<span>بوكس تجربة المشاهير</span>
								<p>شامل الضريبة</p>
							</div>
							<div className="desc">
								<small>شامل وكامل ويجمل ويكمل</small>
								<p>غنم - بقر - حاشي - دجاج - مشاوي - ستيك 🥩- سجق - برجر - خبز - جبنة - صوصات - بهارات - خضار 🌶 🌽 🍅 🥕 🥬 🧅</p>
							</div>
							<div className="lastDe">
								<span>لاتفوتك التجربة الحصرية 😋</span>
							</div>
							<div className="tafassile">
								<h1>تفاصيل المنتج</h1>
								<div className="item">
									<div className="left">
										<GrCart />
										<span>الوزن</span>
									</div>
									<div className="right">{7} كيلو</div>
								</div>
							</div>
							<div className="items">
								<div className="center">
									<div className="conterLeft">الكمية</div>
									<div className="conterRight">
										<div className="pluas" onClick={handleIncre}>+</div>
										<div className="quantity">{quantity}</div>
										<div className="increas" onClick={handleDecre}>-</div>
									</div>
								</div>
								<div className="right">
									<div className="buttonShow" onClick={() => setShow(!show)}>
										<MdOutlineMessage />
										<span>كتابة ملاحظة</span>
									</div>
									{show && <div className="notInput">
										<input type="text" placeholder='ملاحضات ...' />
									</div>}
								</div>
							</div>
							<div className="totalprice">
								<div className="left">
									<FaCalculator />
									<span>مجموع </span>
								</div>
								<div className="right">
									<span>SAR 599</span>
								</div>
							</div>
						</>
					)}
				</div>
			</div>
			<Footer />
			<div className="rightCop">
				<span>جميع الحقوق محفوضة | 2024</span>
			</div>
			<div className="lastpage">
				<div className="waht">
					<div className="heard">
						<FiHeart />
					</div>
					<div className="cartButton" >
						<button>اضافة الى سلة</button>
					</div>
				</div>
			</div>
		</>
	)
}

export default ProductDetails
