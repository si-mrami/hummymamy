import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import './Cart.scss';
import Footer from '../../components/Footer/Footer';
import { FaCheck } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { MdOutlineMessage } from "react-icons/md";
import { useState } from 'react';
import { FaCalculator } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";

const Cart = () => {

	const [show, setShow] = useState(false)

	const breadcrumbItems = [
		{ label: "الصفحة الرئيسية", url: "../" },
		{ label: " > سلة المشتريات" }
	];
	return (
		<>
			<Breadcrumb items={breadcrumbItems} />
			<div className="cart">
				<div className="itemdesign">
					<div className="left">
						<FaCheck />
					</div>
					<div className="centre"></div>
					<div className="right">2</div>
				</div>
				<div className="desc">
					<span>سلة المشتريات</span>
					<span>طريقة الدفع</span>
				</div>
				<div className="items">
					<div className="item">
						<div className="left">
							<div className="first">
								<div className="productImg">
									<img src="https://cdn.salla.sa/QxvOa/design/Rk4wmbgZEZfu1kpuRLgxkcQ7cug2asCUpXHaLu0B.png" alt="" />
								</div>
								<div className="descInfo">
									<span>lohooome</span>
									<p>570 SAR</p>
								</div>
								<div className="closeIcon">
									<IoMdClose />
								</div>
							</div>
							<div className="description">
								<p>hey</p>
							</div>
						</div>
						<div className="center">
							<div className="conterLeft">الكمية</div>
							<div className="conterRight">
								<div className="pluas">+</div>
								<div className="quantity">4</div>
								<div className="increas">-</div>
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
							<span>مجموع السلة</span>
						</div>
						<div className="right">
							<span>SAR 599</span>
						</div>
					</div>
					<div className="buttonValide">
						<button>
							اتمام الطلب
							<FaArrowLeft />
						</button>
					</div>
				</div>
			</div>
			<Footer />
			<div className="rightCop">
				<span>جميع الحقوق محفوضة | 2024</span>
			</div>
		</>
	)
}

export default Cart
