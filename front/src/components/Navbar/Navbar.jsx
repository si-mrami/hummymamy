import './Navbar.scss';
import { CiShoppingCart } from "react-icons/ci";
import { IoSearchOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { TiThMenu } from "react-icons/ti";



const Navbar = () => {
	return (
		<div className="navbar">
			<div className="containerNav">
				<div className="right">
					<TiThMenu />
					<div className="logo">
						<img src="https://cdn.salla.sa/QxvOa/xkcdCS65aZcWbyJplReRw5UnchDu6HCmSLi19SZA.jpg" alt="" />
					</div>
				</div>
				<div className="left">
					<div className="leftElement">
						<div className="userLogin"><FaRegUser /></div>
						<div className="search"><IoSearchOutline /></div>
						<div className="cart">
							<CiShoppingCart />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Navbar
