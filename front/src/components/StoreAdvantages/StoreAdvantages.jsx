import './StoreAdvantages.scss';
import RocketLaunchOutlinedIcon from '@mui/icons-material/RocketLaunchOutlined';
import RestaurantOutlinedIcon from '@mui/icons-material/RestaurantOutlined';
import { FaSackDollar } from "react-icons/fa6";

const StoreAdvantages = () => {
	return (
		<div className="storeAdvant">
			<div className="advant">
				<div className="title">
					<h1>مزايا المتجر</h1>
				</div>
				<div className="items">
					<div className="item">
						<div className="icon">
							<FaSackDollar style={{ color: '#FFF', fontSize: "32px" }} />
						</div>
						<span>💰أفضل الاسعار 💰
						</span>
						<div className="desc">
							<p>
								منتجات بجودة عالية وأسعار تنافسية
							</p>
						</div>
					</div>

					<div className="item">
						<div className="icon">
							<RestaurantOutlinedIcon style={{ color: '#FFF', fontSize: "32px" }} />
						</div>
						<span>🏆 جودة عالية 100% 🥇</span>
						<div className="desc">
							<p>افضل انواع الاغذية وطرق التخزين والتحضير والتغليف

							</p>
						</div>
					</div>

					<div className="item">
						<div className="icon">
							<RocketLaunchOutlinedIcon style={{ color: '#FFF', fontSize: "32px" }} />
						</div>
						<span>🚀 التوصيل والشحن 🚀</span>
						<div className="desc">
							<p>لجميع مدن ومناطق العالم في اسرع وقت حسب نوع المنتج

							</p>
						</div>
					</div>

				</div>
			</div>
		</div>
	)
}

export default StoreAdvantages
