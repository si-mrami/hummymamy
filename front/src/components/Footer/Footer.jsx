import './Footer.scss';
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { MdOutlinePhone } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
import { FaSnapchat } from "react-icons/fa6";

const Footer = () => {
	return (
		<div className="footer">
			<div className="items">
				<div className="item">
					<div className="title">
						<h1>من نحن</h1>
					</div>
					<div className="desc">
						<p>International Foods Market MmmmmmmmM كل ما لذ و طاب ... بأفضل جودة في متجرنا هامي يامي
						</p>
					</div>
					<div className="socailMedia">
						<div className="reseu">
							<FaWhatsapp />
							<span>واتساب</span>
						</div>

						<div className="reseu">
							<MdOutlinePhoneAndroid />
							<span>الجوال</span>
						</div>
						<div className="reseu">
							<MdOutlinePhone />
							<span>الهاتف</span>
						</div>
					</div>
				</div>

				<div className="item">
					<div className="title">
						<h1>روابط مهمة</h1>
					</div>
					<div className="centainerr">
						<div className="left">
							<span>سياسة الشحن والتوصيل</span>
							<span>سياسة الدفع</span>
							<span>سياسة الخصوصية</span>
						</div>
						<div className="right">
							<span>الاسترجاع والاستبدال</span>
							<span>خدمة العملاء</span>
							<span>عروض رمضان 2024</span>
						</div>
					</div>
				</div>

				<div className="item">
					<div className="title">
						<h1>تواصل معنا</h1>
					</div>
					<div className="contact">
						<div className="icon">
							<FaInstagram/>
						</div>
						<div className="icon">
							<FaTiktok/>
						</div>
						<div className="icon">
							<FaSnapchat/>
						</div>
					</div>
					<div className="Announ">
						<h1>كل ما لدا وطاب ....بافضل جودة</h1>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Footer
