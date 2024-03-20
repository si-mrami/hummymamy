import './LastAdvant.scss';
import EventAvailableOutlinedIcon from '@mui/icons-material/EventAvailableOutlined';
import CardGiftcardOutlinedIcon from '@mui/icons-material/CardGiftcardOutlined';
import HeadsetMicOutlinedIcon from '@mui/icons-material/HeadsetMicOutlined';

const LastAdvant = () => {
	return (
		<div className="storeAdvant">
			<div className="advant">
				<div className="title">
					<h1>مزايا المتجر</h1>
				</div>
				<div className="items">
					<div className="item">
						<div className="icon">
							<HeadsetMicOutlinedIcon style={{ color: '#FFF', fontSize: "32px" }} />
						</div>
						<span>👩‍💼 خدمة ❤️ العملاء 🤵🏻</span>
						<div className="desc">
							<p>
								معاك بأي وقت، لخدمتك و راحتك بأفضل الطرق الممكنة و بتغطية كاملة للمملكة واكيد لكل مدن و دول العالم
							</p>
						</div>
					</div>

					<div className="item">
						<div className="icon">
							<CardGiftcardOutlinedIcon style={{ color: '#FFF', fontSize: "32px" }} />
						</div>
						<span>🤗 أهدي 💕 أحبابك 🤗</span>
						<div className="desc">
							<p>
								وش احسن من انك تهدي أحبابك ! اطلبها وادفعها وحط عنوانهم بالشحن , وبنوصلها بكل حب ❤️
							</p>
						</div>
					</div>

					<div className="item">
						<div className="icon">
							<EventAvailableOutlinedIcon style={{ color: '#FFF', fontSize: "32px" }} />
						</div>
						<span>🎖 شهادة الايزو 🎖</span>
						<div className="desc">
							<p>
								حرصنا على التعبئة والتجهيز في مصنع حاصل على أعلى شهادات الجودة في السلامة الغذائية لتقديم منتج مضمون وآمن غذائياً.
							</p>
						</div>
					</div>

				</div>
			</div>
		</div>
	)
}

export default LastAdvant
