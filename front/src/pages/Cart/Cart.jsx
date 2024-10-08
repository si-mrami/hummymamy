import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import './Cart.scss';
import Footer from '../../components/Footer/Footer';
import { FaCheck } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { MdOutlineMessage } from "react-icons/md";
import React, { useContext, useState } from 'react';
import { FaCalculator } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";
import TextField from '@mui/material/TextField';
import { Dialog, DialogTitle, DialogContent, DialogContentText } from '@mui/material';
import { Link } from 'react-router-dom';
import { CartContext } from '../../CartContext';

const Cart = () => {

	const [openDialog, setOpenDialog] = useState(false);
	const [name, setName] = useState();
	const [phone, setPhone] = useState();
	const [email, setEmail] = useState();
	const [address, setAddress] = useState();

	const { cartItems, removeFromCart } = useContext(CartContext);


	const handleNamechange = (e) => { setName(e.target.value) }
	const handleEmailchange = (e) => { setEmail(e.target.value) }
	const handlePhonechange = (e) => { setPhone(e.target.value) }
	const handleAddresschange = (e) => { setAddress(e.target.value) }

	const handleCloseDialog = () => {
		setOpenDialog(false);
	};


	const [show, setShow] = useState(false);
	const [quantity, setQuantity] = useState(1);

	const breadcrumbItems = [
		{ label: "الصفحة الرئيسية", url: "../" },
		{ label: " > سلة المشتريات" }
	];

	const handleOpenDialog = () => {
		setOpenDialog(true);
	}

	const handleIncre = () => {
		setQuantity(quantity + 1);
	}

	const handleDecre = () => {
		if (quantity !== 1) {
			setQuantity(quantity - 1);
		}
	}

	const handleFormSubmit = (e) => {
		e.preventDefault();
	};

	// save data to localStorge
	const saveToLocal = () => {
		try {
			localStorage.setItem('name', name);
			localStorage.setItem('phone', phone);
			localStorage.setItem('email', email);
			localStorage.setItem('address', address);
		} catch (error) {
			console.error("Error saving data to localStorage:", error);
		}
	}
	const handleRemoveItem = (productId) => {
		removeFromCart(productId);
	};

	const calculateTotalPrice = () => {
		let totalPrice = 0;
		cartItems.map((product) => {
			const price = parseFloat(product.originalPrice.replace('SAR', '').trim());
			totalPrice += price * quantity;
		});

		return totalPrice.toFixed(2);
	};

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
					{cartItems.map((product, index) => (
						<div className="item" key={index}>
							<div className="left">
								<div className="first">
									<div className="productImg">
										<img src={product.image} alt="" />
									</div>
									<div className="descInfo">
										<span>{product.title}</span>
										<p>{product.originalPrice}</p>
									</div>
									<div className="closeIcon" onClick={() => handleRemoveItem(product.id)}>
										<IoMdClose />
									</div>
								</div>
								<div className="description">
									<p>{product.subTitle}</p>
								</div>
							</div>
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
					))}
					{cartItems.length > 0 && (
						<>
							<div className="totalprice">
								<div className="left">
									<FaCalculator />
									<span>مجموع السلة</span>
								</div>
								<div className="right">
									<span>SAR {calculateTotalPrice()}</span>
								</div>
							</div>

							<div className="buttonValide">
								<button onClick={() => handleOpenDialog()}>
									أطلب
									<FaArrowLeft />
								</button>
							</div>
						</>
					)}
				</div>
			</div>
			<Footer />
			<div className="rightCop">
				<span>جميع الحقوق محفوضة | 2024</span>
			</div>
			<Dialog className='dailog' open={openDialog} onClose={handleCloseDialog}>
				<DialogTitle style={{  color: 'gray', direction: 'rtl', fontSize:'15px' }}>المرجو ادخال جميع المعلومات الصحيحة</DialogTitle>
				<DialogContent>
					<DialogContentText>
						<div className="form" style={{ width: '100%', padding: '0.4rem', direction: 'rtl' }}>
							<form onSubmit={handleFormSubmit} style={{ direction: 'rtl', display: 'flex', gap: '20px', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
								<input
									style={{ border: '1px solid  rgb(24, 23, 23)', padding: '0.7rem', borderRadius: '6px' }}
									placeholder='الاسم الثلاتي'
									required
									value={name}
									onChange={handleNamechange}
								/>

								<input
									style={{ border: '1px solid  rgb(24, 23, 23)', padding: '0.7rem', borderRadius: '6px' }}
									placeholder='رقم الجوال'
									required
									value={phone}
									onChange={handlePhonechange}
								/>

								<input
									style={{ border: '1px solid  rgb(24, 23, 23)', padding: '0.7rem', borderRadius: '6px' }}
									placeholder='الايميل'
									required
									type='email'
									value={email}
									onChange={handleEmailchange}
								/>

								<input
									style={{ border: '1px solid  rgb(24, 23, 23)', padding: '0.7rem', borderRadius: '6px' }}
									placeholder=" العنوان "
									value={address}
									required
									onChange={handleAddresschange}
								/>
								<Link to='/payment'>
									<button onClick={saveToLocal}
										disabled={!name || !phone || !email || !address} style={{ backgroundColor: '#0bb6b0', color: '#FFF', border: 'none', padding: '0.5rem', borderRadius: '10px' }}>
										اتمام الطلب
										<FaArrowLeft />
									</button>
								</Link>
							</form>
						</div>
					</DialogContentText>
				</DialogContent>
			</Dialog>
		</>
	)
}

export default Cart
