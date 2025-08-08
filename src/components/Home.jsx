import CountUp from 'react-countup';
import { useNavigate } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6'; // para el nuevo logo de Twitter
import "./Home.css";
import Carousel from 'react-bootstrap/Carousel';
import CarouselImage1 from '../assets/SeguroAutos.png';
import CarouselImage2 from '../assets/SeguroAutos.png';
import CarouselImage3 from '../assets/SeguroAutos.png';


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
        </Carousel>
      </div>

      {/* Porque elegirnos */}
      <div className="ContainerElegirnos">
        
      </div>

      {/* Contadores */}
      <div className="ContainerContadoresHome" ref={ref}>
        <h2>Siempre listos para asesorarte</h2>
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

        <button className="BtnConocenos" onClick={handleConocenosClick}>Conocenos</button>
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