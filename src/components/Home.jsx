import CountUp from 'react-countup';
import { Link, useNavigate } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6'; // para el nuevo logo de Twitter
import "./Home.css";
import '../colors.css';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';


import CarouselImage1 from '../assets/slideParaComercio.jpeg';
import CarouselImage2 from '../assets/slideGranizo.jpeg';
import CarouselImage3 from '../assets/slideTambienEsto.jpeg';
import CarouselImage4 from '../assets/slideTuMicroseguro.jpeg';

import FondoElegirnos from '../assets/LogoNeon.png'
import IconoSolucionesAgiles from '../assets/IconoSolucionesAgiles.png';
import IconoSegurosAdaptados from '../assets/IconoSegurosAdaptados.png';
import IconoResponsabilidad from '../assets/IconoResponsabilidad.png';

import LogoAllianz from '../assets/CarruselLogoAllianz.png';
import LogoAsociart from '../assets/CarruselLogoAsociart.png';
import LogoSura from '../assets/CarruselLogoSura.png';


function Home() {

  const navigate = useNavigate();

  const { ref, inView } = useInView({
    triggerOnce: false,     // Solo una vez
    threshold: 0.5          // 30% visible para activarse
  });

  const handleConocenosClick = () => {
    navigate('/somosfenix'); // Asegúrate de que esta ruta esté definida en tu router
  };

  return (
    <div>

      <div className="ContainerCarruselHome">
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
          <Carousel.Item>
            <img className="d-block w-100" src={CarouselImage4} alt="Third slide"/>
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>

      {/* Porque elegirnos */}
      <div>
        <h2 className='tituloElegirnos'>Porque elegirnos {">>>"}</h2>
      <div className="ContainerElegirnos">
        <div className="cardElegirnos">
          <div className="cardOverlayElegirnos">
            <img src={IconoSolucionesAgiles} alt="Soluciones Agiles" />
            <h3>Soluciones ágiles</h3>
            <p>Nuestra organización cuenta con asesoria 24/7 ante cualquier situación nuestro equipo de acesores se encargaran de darte servicio a la brevedad. </p>
            <Link to="/seguros/personas" className="cardLinkButtonElegirnos">Conoce mas</Link>
          </div>
        </div>
        <div className="cardElegirnos">
          <div className="cardOverlayElegirnos">
            <img src={IconoSegurosAdaptados} alt="Seguros Adaptados" />
            <h3>Seguros adaptados</h3>
            <p>Diseñados para dar la mejor y mas adecuada cobertura a tus necesidades con un respaldo 100% garantizado con las mejores companias del mercado.</p>
            <Link to="/seguros/empresas" className="cardLinkButtonElegirnos">Ver Seguros</Link>
          </div>
        </div>
        <div className="cardElegirnos">
          <div className="cardOverlayElegirnos">
            <img src={IconoResponsabilidad} alt="Responsabilidad y Compromiso" />
            <h3>Responsabilidad y Compromiso</h3>
            <p>SomosFenix una organización con más de 30 años en el mercádo brindando confianza y respaldo en nuestros productos.</p>
            <Link to="/somosfenix" className="cardLinkButtonElegirnos">Conócenos</Link>
          </div>
        </div>
      </div>
      </div>

      {/* Seguros de Home */ }
      <div className='ContainerSegurosHome'>

      </div>

      {/* Contadores Siempre listos para asesorarte */}
      <div className="ContainerContadoresHome" ref={ref}>
        <h2>Siempre listos para asesorarte {">>>"}</h2>
        <p>El trato personalizado es una característica que nos destaca y posibilita forjar relaciones de largo plazo con nuestros clientes.</p>

        <div className="Contadores">
          <div className="ContadorItem">
            <h3>{inView && <CountUp end={200} duration={3} />}+</h3>
            <p>Empresas nos eligen</p>
          </div>
          <div className="ContadorItem">
            <h3>{inView && <CountUp end={30} duration={3} />}+</h3>
            <p>Años asesorando en el mercado</p>
          </div>
          <div className="ContadorItem">
            <h3>{inView && <CountUp end={100} duration={3} />}%</h3>
            <p>De los clientes nos recomiendan</p>
          </div>
        </div>

        <button className="BtnConocenos" onClick={handleConocenosClick}>Conócenos</button>
      </div>

      {/* Carrusel de compañías de seguros */}
      <div className='containerCompaniasCarrusel'>
        <h3>Aseguradoras que nos acompañan {">>>"}</h3>
        <div className="carrusel-track">
          <div className="carrusel-slide">
            <img src={LogoAllianz} alt="Allianz" />
          </div>
          <div className="carrusel-slide">
            <img src={LogoAsociart} alt="Asociart ART" />
          </div>
          <div className="carrusel-slide">
            <img src={LogoSura} alt="Sura" />
          </div>

          {/* Duplicamos los logos para que el loop no corte */}
          <div className="carrusel-slide">
            <img src={LogoAllianz} alt="Allianz" />
          </div>
          <div className="carrusel-slide">
            <img src={LogoAsociart} alt="Asociart ART" />
          </div>
          <div className="carrusel-slide">
            <img src={LogoSura} alt="Sura" />
          </div>
        </div>
      </div>


      {/* Redes sociales */}
      <div className='containerRedesHome'>
        <div className="tituloRedes">
          <span className="linea"></span>
          <h2>Seguinos en nuestras <span>Redes Sociales</span></h2>
          <span className="linea"></span>
        </div>

        <div className="redesIcons">
          <a className="facebook" href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebookF />
          </a>
          <a className="twitter" href="https://x.com" target="_blank" rel="noopener noreferrer">
            <FaXTwitter />
          </a>
          <a className="instagram" href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a className="youtube" href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
            <FaYoutube />
          </a>
          <a className="linkedin" href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn />
          </a>
        </div>
      </div>

    </div>
  )
}

export default Home