import './Advantes.scss';
import WorkspacePremiumOutlinedIcon from '@mui/icons-material/WorkspacePremiumOutlined';
import PaymentsOutlinedIcon from '@mui/icons-material/PaymentsOutlined';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';


const Advantes = () => {
	return (
		<div className="storeAdvant">
			<div className="advant">
				<div className="title">
					<h1>مزايا المتجر</h1>
				</div>
				<div className="items">
					<div className="item">
						<div className="icon">
							<CheckCircleOutlinedIcon style={{ color: '#FFF', fontSize: "32px" }} />
						</div>
						<span>
							🧑‍🔬 المختبرات 🔬
						</span>
						<div className="desc">
							<p>
								فحصنا المستمر عند أدق المختبرات المختصة بالأغذية حتى نتاكد من جودتها دائمًا
							</p>
						</div>
					</div>

					<div className="item">
						<div className="icon">
							<PaymentsOutlinedIcon style={{ color: '#FFF', fontSize: "32px" }} />
						</div>
						<span>💵 خيارات الدفع 💳</span>
						<div className="desc">
							<p>
								متاحة جميع خيارات الدفع الالكتروني في " هامي يامي " وبأمان تام
							</p>
						</div>
					</div>

					<div className="item">
						<div className="icon">
							<WorkspacePremiumOutlinedIcon style={{ color: '#FFF', fontSize: "32px" }} />
						</div>
						<span>💎 ضمان ماسي 💎</span>
						<div className="desc">
							<p>
								كل أنواع الأغذية في "هامي يامي" مطابقة للمواصفات والمقاييس
							</p>
						</div>
					</div>

				</div>
			</div>
		</div>
	)
}

export default Advantes
