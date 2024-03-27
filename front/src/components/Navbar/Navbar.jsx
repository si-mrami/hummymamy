import './Navbar.scss';
import { CiShoppingCart } from "react-icons/ci";
import { IoSearchOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
// import { TiThMenu } from "react-icons/ti";
import { Link } from 'react-router-dom';
import logo from '../../assets/hummyyummtasty.png';
import { CartContext } from '../../CartContext';
import { useContext } from 'react';
import Badge from '@mui/material/Badge';

const Navbar = () => {
	const { cartItems } = useContext(CartContext);
	return (
		<div className="navbar">
			<div className="containerNav">
				<div className="right">
					{/* <TiThMenu /> */}
					<Link to='/'>
						<div className="logo">
							<img src={logo} alt="" />
						</div>
					</Link>
				</div>
				<div className="left">
					<div className="leftElement">
						<div className="userLogin"><FaRegUser /></div>
						<div className="search"><IoSearchOutline /></div>
						<Link to='/cart'>
								<Badge badgeContent={cartItems.length} color="secondary">
									<div className="cart">
										<CiShoppingCart />
									</div>
								</Badge>
						</Link>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Navbar
