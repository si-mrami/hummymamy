import { useContext } from 'react';
import Advantes from '../../components/Advantes/Advantes';
import Cards from '../../components/Cards/Cards';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import LastAdvant from '../../components/LastAdvant/LastAdvant';
import Meats from '../../components/Premiumeats/Meats';
import Review from '../../components/Review/Review';
import Shef from '../../components/Shef/Shef';
import StoreAdvantages from '../../components/StoreAdvantages/StoreAdvantages';
import './Home.scss';
import { CartContext } from '../../CartContext';

const Home = () => {
	const { message } = useContext(CartContext);
	return (
		<>
			<div className='home'>
				<div className="homeConatainer">
					<Header />
					<div className="imgages">
						<img src="https://cdn.salla.sa/QxvOa/design/w0F7nKb3xBGlmQFxBnjTOKKzj52FBRhJOZLDHmfI.png?rand=0.1733991638627812" alt="" />
					</div>
					<Header />
					<Cards />
					<div className="imgages">
						<img src="https://cdn.salla.sa/QxvOa/design/fgqcnCsCMe2ZuOZVBx7VhMkEXQQgm8iOxp4vf2Uq.png" alt="" />
					</div>
					<Meats />
					<StoreAdvantages />
					<div className="imgages">
						<img src="https://cdn.salla.sa/QxvOa/design/UHoC6SvO4ogxKatinQg7ZgyIxdnfHTDonA4mSjWd.png" alt="" />
					</div>
					<Review />
					<Header />
					<Advantes />
					{/* <div className="imgages">
					<img src="https://cdn.salla.sa/QxvOa/design/E0TpugLVkqcl75zjbyiuEzWroB49REQUGyg2nuaV.png" alt="" />
				</div> */}
					<div className="imgages">
						<img src="https://cdn.salla.sa/QxvOa/design/Rk4wmbgZEZfu1kpuRLgxkcQ7cug2asCUpXHaLu0B.png" alt="" />
					</div>
					<Shef />
					<div className="imgages">
						<img src="https://cdn.salla.sa/QxvOa/design/owJUu8BuA1YLW1S0ITi9WXfcSTqWilLekl65pMfJ.jpg?rand=0.9594381438714663" alt="" />
					</div>
					<LastAdvant />
					<Footer />
					<div className="rightCop">
						<span>جميع الحقوق محفوضة | 2024</span>
					</div>
				</div>
			</div>
			{message ? (<div className="messageSucess">
				<div className="container">
					<span>تمت اضافة المنتج الى السلة ...</span>
				</div>
			</div>) : null}
		</>
	)
}

export default Home
