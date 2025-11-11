import { Link } from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel';
import CarouselImage1 from '../assets/CarruselHome1.jpeg';
import CarouselImage2 from '../assets/CarruselHome2.jpeg';
import CarouselImage3 from '../assets/CarruselHome3.png';
import CarouselImage4 from '../assets/CarruselHome4.png';
import "./HomeCarrusel.css";

function HomeCarrusel() {
  return (
    <div>

        <div className="ContainerCarruselHome">
            <Carousel>
                <Carousel.Item>
                    <img className="d-block w-100" src={CarouselImage1} alt="Organizacion Fenix"/>
                    <Carousel.Caption>
                        <h3>
                            <Link to="/somosfenix" className="TextoCarrusel">
                                Organización Fénix {">>>"}
                            </Link>
                        </h3>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img className="d-block w-100" src={CarouselImage2} alt="Seguros Fenix"/>
                    <Carousel.Caption>
                        <h3>
                            <Link to="/seguros" className="TextoCarrusel">
                                Seguros Fénix {">>>"}
                            </Link>
                        </h3>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img className="d-block w-100" src={CarouselImage3} alt="Seguros Descuentos"/>
                    <Carousel.Caption>
                        <h3>
                            <Link
                                className="TextoCarrusel"
                                variant="primary"
                                onClick={() => {
                                const phoneNumber = "5492233420530"; // tu número de WhatsApp en formato internacional
                                const message = "Hola, quiero acceder al DESCUENTO en seguros publicado.";
                                const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
                                window.open(url, "_blank");
                                }}
                            >
                                Contacta Ahora {">>>"}
                            </Link>
                        </h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src={CarouselImage4} alt="Seguros Descuentos"/>
                    <Carousel.Caption>
                        <h3>
                            <Link
                                className="TextoCarrusel"
                                variant="primary"
                                onClick={() => {
                                const phoneNumber = "5492233420530"; // tu número de WhatsApp en formato internacional
                                const message = "Hola, quiero acceder a la promo de CONGELAR por 3 meses en seguros publicado.";
                                const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
                                window.open(url, "_blank");
                                }}
                            >
                                Contacta Ahora {">>>"}
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