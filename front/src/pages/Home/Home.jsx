import Cards from '../../components/Cards/Cards';
import Header from '../../components/Header/Header';
import Meats from '../../components/Premiumeats/Meats';
import StoreAdvantages from '../../components/StoreAdvantages/StoreAdvantages';
import './Home.scss';

const Home = () => {
	return (
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
				<Meats/>
				<StoreAdvantages/>
			</div>
		</div>
	)
}

export default Home
