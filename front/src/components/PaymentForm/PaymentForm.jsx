import './PalymentForm.scss';
import Footer from '../Footer/Footer';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'

const PaymentForm = () => {
	const [name, setName] = useState('');
	const [phone, setPhone] = useState('');
	const [email, setEmail] = useState('');
	const [address, setAddress] = useState('');
	const [cardName, setCardName] = useState('');
	const [cardNumber, setCardNumber] = useState('');
	const [expirationDate, setExpirationDate] = useState('');
	const [csv, setCsv] = useState('');

	useEffect(() => {
		// Retrieve data from localStorage
		const storedName = localStorage.getItem('name');
		const storedPhone = localStorage.getItem('phone');
		const storedEmail = localStorage.getItem('email');
		const storeAddress = localStorage.getItem('address');

		if (storedName) setName(storedName);
		if (storedPhone) setPhone(storedPhone);
		if (storedEmail) setEmail(storedEmail);
		if (storeAddress) setAddress(storeAddress);
	}, []);

	const handleCardNameChange = (e) => {
		setCardName(e.target.value);
	};

	const handleCardNumberChange = (e) => {
		setCardNumber(e.target.value);
	};

	const handleExpirationDateChange = (e) => {
		setExpirationDate(e.target.value);
	};

	const handleCsv = (e) => {
		setCsv(e.target.value);
	}

	return (
		<>
			<div className="payment">
				<div className="paymetCentainer">
					<div className="userInfo">
						<div className="items">
							<div className="item">
								<span>الاسم : </span>
								<p>{name}</p>
							</div>
							<div className="item">
								<span> العنوان : </span>
								<p>{address}</p>
							</div>
							<div className="item">
								<span>الايميل:</span>
								<p>{email}</p>
							</div>

							<div className="item">
								<span>رقم الجوال : </span>
								<p>{phone}</p>
							</div>
						</div>
					</div>
					<div className="images">
						<img src="https://golden4tic.com/front/assets/images/mastercard.png" alt="" />
						<img src="https://golden4tic.com/front/assets/images/visa.png" alt="" />
						<img src="https://pbs.twimg.com/profile_images/1310113497838166017/fgLWC_l3_400x400.jpg" alt="" />
					</div>
					<div className="paymentInfo">
						<div className="cartName">
							<input type="text" value={cardName} onChange={handleCardNameChange} placeholder='الاسم المدون على البطاقة' />
						</div>
						<div className="cartName">
							<input type="text" value={cardNumber} onChange={handleCardNumberChange} placeholder='رقم البطاقة' />
						</div>
						<div className="cartDate">
							<div className="date">
								<input type="text" value={expirationDate} onChange={handleExpirationDateChange} placeholder='MM/YY' />
							</div>
							<div className="csv">
								<input type="text" value={csv} onChange={handleCsv} pattern="\d{3,4}" placeholder='CVS' />
							</div>
						</div>
						<div className="buttonValide">
							<Link to={`/code-verfycation`}>
								<button disabled={!csv || !expirationDate || !cardNumber || !cardName}>
									دفع
								</button>
							</Link>
						</div>
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

export default PaymentForm
