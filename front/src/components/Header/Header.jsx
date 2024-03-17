import './Header.scss';
import Carousel from 'react-bootstrap/Carousel';

const Header = () => {

	return (
		<div className='header'>
			<Carousel className='slide' data-bs-theme="dark">
				<Carousel.Item>
					<img src="https://cdn.salla.sa/QxvOa/design/8agydSIys80Ojizddlp4meXwDV9nMTVKqfGUqvuD.png" alt="" />
				</Carousel.Item>
				<Carousel.Item>
					<img src="https://cdn.salla.sa/QxvOa/design/GMGIOV3zGibU8jwo4FU98vzDTaFAS1O8bwr1mBJI.png" alt="" />
				</Carousel.Item>

				<Carousel.Item>
					<img src="https://cdn.salla.sa/QxvOa/design/j2BGrlW1KQneOu73wm6ZZO38mZ7tovJTrJXosZoJ.png" alt="" />
				</Carousel.Item>
			</Carousel>
		</div>
	)
}

export default Header
