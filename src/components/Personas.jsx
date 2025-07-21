import { Outlet, Link } from "react-router-dom";
import "./Personas.css";
import Carousel from 'react-bootstrap/Carousel';
import CarouselImage1 from '../assets/LogoFenix1.png';
import CarouselImage2 from '../assets/LogoFenix1.png';
import CarouselImage3 from '../assets/LogoFenix1.png';
import personasBg from "../assets/PersonasBG.png";  

function Personas() {
  return (
    <div>
      <div className="ContainerCarruselPersonas">
        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100" src={CarouselImage1} alt="First slide"/>
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={CarouselImage2} alt="Second slide"/>
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={CarouselImage3} alt="Third slide"/>
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

      </div>
      <h3 className="ContainerPersonas">Seguros para Personas</h3>

      <section className="ContainerPersonas">
        {/* Card Personas */}
        <div className="cardPersonas" style={{backgroundImage: `url(${personasBg})`, backgroundSize: "cover", backgroundPosition: "center", color: "white", position: "relative",}} >
          <div className="cardOverlayPersonas">
            <h3>Personas</h3>
            <p>Contamos con todas las coberturas para vos y tu familia.</p>
            <Link to="/seguros/personas" className="cardLinkButton">
              Ver Seguros para Personas
            </Link>
          </div>
        </div>
      </section>

      <Outlet /> 
    </div>
    
  )
}

export default Personas