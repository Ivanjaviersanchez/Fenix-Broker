import { Link } from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel';
import CarouselImage1 from '../assets/CarruselHome1.jpeg';
import CarouselImage2 from '../assets/CarruselHome2.jpeg';
import "./HomeCarrusel.css";

function HomeCarrusel() {
  return (
    <div>

        <div className="ContainerCarruselHome">
            <Carousel>
                <Carousel.Item>
                    <img className="d-block w-100" src={CarouselImage1} alt="First slide"/>
                    <Carousel.Caption>
                        <h3>
                            <Link to="/somosfenix" className="TextoCarrusel">
                                Organización Fénix {">>>"}
                            </Link>
                        </h3>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img className="d-block w-100" src={CarouselImage2} alt="Second slide"/>
                    <Carousel.Caption>
                        <h3>
                            <Link to="/seguros" className="TextoCarrusel">
                                Seguros Fénix {">>>"}
                            </Link>
                        </h3>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img className="d-block w-100" src={CarouselImage2} alt="Second slide"/>
                    <Carousel.Caption>
                        <h3>
                            <Link to="/seguros" className="TextoCarrusel">
                                Benefícios Fenix {">>>"}
                            </Link>
                        </h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>

    </div>
  )
}

export default HomeCarrusel;