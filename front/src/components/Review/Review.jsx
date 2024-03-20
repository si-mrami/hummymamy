import './Review.scss';
import { IoStarSharp } from "react-icons/io5";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

const Review = () => {

	const settings = {
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: true,
		speed: 500,
		autoplay: true,
		autoplaySpeed: 2000,
		dots: true,
		appendDots: dots => (
			<div>
				<ul style={{ margin: "0px", padding: "0px", color: ' #0bb6b0', fontSize: '45px', }}>
					{dots}
				</ul>
			</div>
		),

		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
				},
			},
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 4,
				},
			},
		],
	};

	const reviews = [
		{
			reviewer: 'Nayyar Al-Omari',
			purchase: true,
			rating: 5,
			text: 'طلبت من عندهم بالليل ووصل الطلب اليوم الثاني الظهر سرررعه في التوصيل ماشاء الله 😍👏👏👏',
			time: 'مند يومين',

		},
		{
			reviewer: 'وقاص آل علي ',
			purchase: true,
			rating: 5,
			text: 'بصراحة وصلني الطلب ب اسرع وقت ممكن كنت اتخيلة والجهاز فخم مرة شكراً لكم على سرعة التوصيل وان شاء الله مو اخر مرة اطلب منكم',
			time: 'مند 4 ايام',

		},
		{
			reviewer: 'Young Al Faisal',
			purchase: true,
			rating: 5,
			text: 'منتجاتهم أصليه صراحه أنصح الناس تشتري من عندهم اجهزتهم ممتازه شكراً لكم 🥰❤️',
			time: 'مند 3 ايام',

		},
		{
			reviewer: 'يامن آل سعود',
			purchase: true,
			rating: 5,
			text: 'ما شاء الله تبارك الرحمن افضل متجر طلبت منهم اجهزة اشكر كل من ساهم في عمل هذا المتجر شكرا  و شكرا خاص إلى خدمة العملاء',
			time: 'مند يومين',

		},
		{
			reviewer: ' Yazid Al Sheikh Mubarak',
			purchase: true,
			rating: 5,
			text: 'الجهاز وصلني نفس الوصف سهل الاستخدام و شكله جميل و سعره مرره مناسب ارخص من السوق و المواقع الثانية و مواصفاته افضل من اغلب المنتجات المشابهة .. التوصيل سريع .. انصحكم فيه',
			time: 'مند يوم',

		},
		{
			reviewer: ' أيهم آل الشيخ',
			purchase: true,
			rating: 5,
			text: 'الف شكر لكم منتج اصلي وبسعر اقل من السوق مع ضمان الوكيل ... وباذن الله تعاملي معكم مستمر',
			time: 'مند يوم',

		},
		{
			reviewer: 'Adham Al-Shuaibi',
			purchase: true,
			rating: 5,
			text: 'المتجر فوق الممتاز قليل فيه 5 نجمات شكراً على تعاملهم',
			time: 'مند شهر',

		},
		{
			reviewer: ' أصيل الملا',
			purchase: true,
			rating: 5,
			text: 'المتجر اكثر من ممتاز 👌 سعر مميز ماشاء الله والمنتج يستاهل كل ريال ينحط فيه',
			time: 'مند اسبوع',

		},
		{
			reviewer: ' Ash Shaflot',
			purchase: true,
			rating: 5,
			text: 'شكراً لكل الطاقم العاملين على هذا المتجر على قولتهم ولا غلطه وملتزمين بمواعيد الشحن و اسعارهم خيالية وجودة عالية',
			time: 'مند 3 ايام',

		},
		{
			reviewer: ' أمجد التعلي',
			purchase: true,
			rating: 5,
			text: 'متجر فريد من نوعه و ان شاء الله مو اخر تعامل راح اخذ منكم منتجات واجهزة  ماقصرتو حقيقة 🌹',
			time: 'مند يوم',

		},
		{
			reviewer: ' Iyas Al-Enezi',
			purchase: true,
			rating: 5,
			text: 'أفضل متجر سرعه بالرد وصلني الجهاز في وقت قياسي شكراً لكم',
			time: 'مند 3 ايام',

		},
		{
			reviewer: 'إلياس السبيعي ',
			purchase: true,
			rating: 5,
			text: 'الشكر موصول للفريق المذهل في المتجر شكرا لكم وصلني الجهاز .',
			time: 'مند يومين',

		},
		{
			reviewer: ' Aws Al-Bishi',
			purchase: true,
			rating: 5,
			text: 'تستاهلون والله مليون نجمه تعاملكم خيالي خدمه مميزه',
			time: 'مند 4ايام',

		},
		{
			reviewer: ' آصف الغامدي',
			purchase: true,
			rating: 5,
			text: 'الله يعزكم انت افضل متجر قد شريت منه اسعاركم رهيببببببببب 🤘',
			time: 'مند يوم',

		},
		{
			reviewer: 'Elijah Al-Maliki ',
			purchase: true,
			rating: 5,
			text: 'انصحكم بتعامل معهم الحقيقة الجهاز وصلني مع كامل ملحقات الجهاز كامل بدون نقص افضل متجر الصراحه',
			time: 'مند يومين',

		},]

	return (
		<div className="review">
			<div className="items">
				<div className="title">
					<h1>آراء العملاء</h1>
				</div>
				<Slider {...settings}>
					<div className="item">
						<div className="itemTop">
							<div className="desc">
								<p> جميييل جداً. و خيارات كثيره و اسعاره مناسبه </p>
							</div>
						</div>
						<div className="itemInfo">
							<div className="image">
								<img src="https://cdn-icons-png.flaticon.com/128/3135/3135715.png" alt="" />
							</div>
							<div className="info">
								<span>Mohamed</span>
								<p>جدة</p>
							</div>
							<div className="start">
								<IoStarSharp style={{ color: 'yellow' }} />
								<IoStarSharp style={{ color: 'yellow' }} />
								<IoStarSharp style={{ color: 'yellow' }} />
								<IoStarSharp style={{ color: 'yellow' }} />
							</div>
						</div>
					</div>

				</Slider>
			</div>
		</div>
	)
}

export default Review
