import Carousel from 'react-bootstrap/Carousel';
import CarouselImage1 from '../assets/CarruselHome1.jpeg';
import CarouselImage2 from '../assets/slideGranizo.jpeg';
import CarouselImage3 from '../assets/slideTambienEsto.jpeg';
import CarouselImage4 from '../assets/slideTuMicroseguro.jpeg';
import "./HomeCarrusel.css";

function HomeCarrusel() {
  return (
    <div>

        <div className="ContainerCarruselHome">
            <Carousel>
            <Carousel.Item>
                <img className="d-block w-100" src={CarouselImage1} alt="First slide"/>
                <Carousel.Caption>
                <h3>First slide label {">>>"}</h3>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <div className="d-flex">
                <img className="w-33" src={CarouselImage2} alt="Second slide"/>
                <img className="w-33" src={CarouselImage3} alt="Second slide"/>
                <img className="w-33" src={CarouselImage4} alt="Second slide"/>
                </div>
                <Carousel.Caption>
                <h3>Second slide label {">>>"}</h3>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <div className="d-flex">
                <img className="w-33" src={CarouselImage2} alt="Third slide"/>
                <img className="w-33" src={CarouselImage3} alt="Third slide"/>
                <img className="w-33" src={CarouselImage4} alt="Third slide"/>
                </div>
                <Carousel.Caption>
                <h3>Third slide label {">>>"}</h3>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <div className="d-flex">
                <img className="w-33" src={CarouselImage2} alt="Third slide"/>
                <img className="w-33" src={CarouselImage3} alt="Third slide"/>
                <img className="w-33" src={CarouselImage4} alt="Third slide"/>
                </div>
                <Carousel.Caption>
                <h3>Third slide label {">>>"}</h3>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
        </div>

    </div>
  )
}

export default HomeCarrusel;