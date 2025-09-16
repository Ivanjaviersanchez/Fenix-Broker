import CountUp from 'react-countup';
import { Link, useNavigate } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6'; // para el nuevo logo de Twitter
import "./Home.css";
import '../colors.css';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';

import Accordion from 'react-bootstrap/Accordion';


import CarouselImage1 from '../assets/CarruselHome1.jpeg';
import CarouselImage2 from '../assets/slideGranizo.jpeg';
import CarouselImage3 from '../assets/slideTambienEsto.jpeg';
import CarouselImage4 from '../assets/slideTuMicroseguro.jpeg';

import FondoElegirnos from '../assets/LogoNeon.png'
import IconoSolucionesAgiles from '../assets/IconoSolucionesAgiles.png';
import IconoSegurosAdaptados from '../assets/IconoSegurosAdaptados.png';
import IconoResponsabilidad from '../assets/IconoResponsabilidad.png';

import SegurosHomeAuto from '../assets/SegurosHomeAuto6.png';
import SegurosHomeHogar from '../assets/SegurosHomeHogar666.png';
import SegurosComercio from '../assets/SegurosHomeComercio66.png';

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
    navigate('/somosfenix'); 
  };

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

      {/* Porque elegirnos */}
      <div>
        <h2 className='tituloElegirnos'>Porque elegirnos {">>>"}</h2>

        <div className="ContainerElegirnos">
          {/* Card 1 */}
          <motion.div 
            className="cardElegirnos"
            style={{ transformPerspective: "1000px" }}
            initial={{ opacity: 0, y: 50, rotateX: 15, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="cardOverlayElegirnos">
              <img src={IconoSolucionesAgiles} alt="Soluciones Ágiles" />
              <h3>Soluciones ágiles</h3>
              <p>
                Nuestra organización cuenta con asesoría 24/7 ante cualquier situación. 
                Nuestro equipo de asesores se encargará de darte servicio a la brevedad.
              </p>
              <Link to="/seguros/personas" className="cardLinkButtonElegirnos">Conoce más</Link>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div 
            className="cardElegirnos"
            style={{ transformPerspective: "1000px" }}
            initial={{ opacity: 0, y: 50, rotateX: 15, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <div className="cardOverlayElegirnos">
              <img src={IconoSegurosAdaptados} alt="Seguros Adaptados" />
              <h3>Seguros adaptados</h3>
              <p>
                Diseñados para dar la mejor y más adecuada cobertura a tus necesidades 
                con respaldo garantizado de las mejores compañías del mercado.
              </p>
              <Link to="/seguros" className="cardLinkButtonElegirnos">Ver Seguros</Link>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div 
            className="cardElegirnos"
            style={{ transformPerspective: "1000px" }}
            initial={{ opacity: 0, y: 50, rotateX: 15, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          >
            <div className="cardOverlayElegirnos">
              <img src={IconoResponsabilidad} alt="Responsabilidad y Compromiso" />
              <h3>Responsabilidad y Compromiso</h3>
              <p>
                SomosFenix es una organización con más de 30 años en el mercado 
                brindando confianza y respaldo en nuestros productos.
              </p>
              <Link to="/somosfenix" className="cardLinkButtonElegirnos">Conócenos</Link>
            </div>
          </motion.div>
        </div>
      </div>


      {/* Seguros de Home */ }
      <div>
        <h2 className='tituloSegurosHome'>Protegé todo con Fenix {">>>"}</h2>
      
        <div className="containerSegurosHome">
          <Link to="/seguros/autos" className="seguroItem">
            <img src={SegurosHomeAuto} alt="Seguro de Auto" />
            <h2 className="seguroTitulo">SEGURO DE AUTO</h2>
            <h2 className='seguroTituloBajo'>Coberturas a tu medida para cada viaje</h2>
            <h3>Cotíza tu Auto {">>>"}</h3>
          </Link>

          <Link to="/seguros/hogar" className="seguroItem">
            <img src={SegurosHomeHogar} alt="Seguro de Hogar" />
            <h2 className="seguroTitulo">SEGURO DE HOGAR</h2>
            <h2 className='seguroTituloBajo'>Protección para toda tu vivienda</h2>
            <h3>Cotíza tu Hogar {">>>"}</h3>
          </Link>

          <Link to="/seguros/comercios" className="seguroItem">
            <img src={SegurosComercio} alt="Seguro de Comercio" />
            <h2 className="seguroTitulo">INTEGRAL DE COMERCIO</h2>
            <h2 className='seguroTituloBajo'>Tu comercio protegido por Fenix</h2>
            <h3>Cotíza tu Comercio {">>>"}</h3>
          </Link>
        </div>

        <div className="tituloSegurosConBoton">
          <h2>Conóce todos nuestros seguros {">>>"} </h2>
          <Link to="/seguros" className="cardLinkButtonConoce">Ver Seguros</Link>
        </div>

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
        
        <div className="tituloCompanias">
          <span className="linea"></span>
          <h2>Aseguradoras que nos acompañan</h2>
          <span className="linea"></span>
        </div>
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

      {/* Preguntas frecuentes */}
      <div className='containerPreguntas'>

        <h2 className='tituloPreguntas'>Preguntas frecuentes {">>>"}</h2>

        <div className='containerAcordion'>
          <div className='acordionLeft'>
            <h3>¿Que debes saber de tu seguro?</h3>
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>¿Que vigencia tiene la póliza del seguro?</Accordion.Header>
                <Accordion.Body>
                  La vigencia de la póliza depende del seguro que contrates, suele ser anual pero pueden existir otras opciones. <br />
                  Te recomendamos prestar atención a la vigencia, los períodos de facturación y la cantidad de cuotas, ya que son variables que inciden en el costo final del seguro.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>¿En qué casos el seguro no cubre?</Accordion.Header>
                <Accordion.Body>
                  Hay varios motivos por los que el seguro puede no darte cobertura, los más habituales son: <br />
                  • Si no pagaste la cuota de tu seguro en tiempo y forma, la póliza queda suspendida, sin cobertura financiera. <br />
                  • Que la situación esté incluida entre las exclusiones detalladas en el contrato, es decir aquellos riesgos que no están cubiertos. <br />
                  Te mencionamos algunos ejemplos: En el caso de los seguros de vehículos, los siniestros provocados bajo estado de ebriedad no están cubiertos. Si asegurás tu auto o moto como uso particular y lo usas para trabajar, no está cubierto.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>¿Qué es la franquicia de un seguro?</Accordion.Header>
                <Accordion.Body>
                  La franquicia de un seguro es la parte del siniestro que está a cargo del asegurado, superado ese monto, la compañía indemnizará por la diferencia entre la valoración del daño y la franquicia. <br />
                  Por ejemplo, si un seguro tiene una franquicia de $100.000- y el  siniestro es por un monto mayor, la compañía descontará la franquicia (es decir $100.000.-) e indemnizará al asegurado por el saldo restante.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>¿Qué significa sin franquicia en un seguro?</Accordion.Header>
                <Accordion.Body>
                  Un seguro sin franquicia significa que la compañía de seguros cubre la indemnización completa en caso de un siniestro, sin que el asegurado deba pagar nada adicional.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>¿Qué cubre el seguro contra todo riesgo con franquicia?</Accordion.Header>
                <Accordion.Body>
                  Te cubre ante responsabilidad civil, pérdida total y parcial por incendio, robo y/o hurto y accidente. Es ideal para quienes  quieren reducir el riesgo al valor de la franquicia. <br />
                  Con Fenix, en seguros de automotor los daños parciales se cubren de acuerdo a la franquicia que elijas, puede ser franquicia de 3% o de 6% sobre el valor de 0km.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="5">
                <Accordion.Header>¿Qué cubre el seguro contra terceros? ¿Qué cubre el seguro de responsabilidad civil?</Accordion.Header>
                <Accordion.Body>
                  Para los automóviles y motos que circulan, es  la cobertura de contratación obligatoria para cumplir con las normativas vigentes. <br />
                  Está incluida en todos nuestros planes de seguro de autos y motos. <br />
                  El seguro de Responsabilidad Civil en general, en cualquier seguro, te cubre frente a reclamos como consecuencia de daños personales y materiales que le generes, con el bien asegurado, a terceras personas.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
          <div className='acordionRight'>
            <h3>Respuestas para nuestros asegurados</h3>
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Auxilio Mecánico: ¿Cómo solicito la grúa?</Accordion.Header>
                <Accordion.Body>
                  Deberás llamar a SOS a los siguientes teléfonos dependiendo donde te encuentres: <br />
                  Desde Argentina:   0800.345.1240 <br />
                  Desde otro país    +54 351 4858321 (Cobro revertido) <br />
                  Cobertura en: Argentina, Chile, Brasil (debajo del paralelo 24, Estado de Santa Catarina), Uruguay, Paraguay, Bolivia y Perú.  Río de Janeiro excluido. <br />
                  Tené en cuenta que la asistencia para Perú será a través de reintegro, por lo que deberás solicitar el servicio a SOS y luego efectuar el trámite correspondiente.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>¿Cómo pago mi seguro?</Accordion.Header>
                <Accordion.Body>
                  Podrás efectuar el pago de la póliza mediante: <br />
                  • Débito automático en cuenta bancaria por CBU o Tarjeta de Crédito (Visa, MasterCard, American Express, Argencard, Naranja y Titanio). <br />
                  • En efectivo (cuponera) <br />
                  Pagos online en Mercado Pago, Pago Mis Cuentas, Provincia NET, RIPSA PAGOS, Pronto Pago. <br />
                  Pagos  presenciales en Pago Fácil, Rapipago, Cobro Express, RIPSA PAGOS, Pronto Pago.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>¿Qué hacer en caso de siniestro?</Accordion.Header>
                <Accordion.Body>
                  En caso de que hayas tenido un siniestro tenés que saber que hay un plazo de 3 días para hacer la denuncia. <br />
                  Podés realizar la denuncia a través de alguno de nuestros canales: <br />
                  • A través de tu Productor Asesor de Seguros. <br />
                  • APP de Fenix Seguros <br />
                  • Portal de asegurados de Fenix Seguros <br />
                  • Por email a denuncias@-------.com.ar. En el asunto deberás colocar: DNI, nombre y apellido; y denuncia de (tipo de seguro) <br />
                  • Equipo de Atención al Cliente: Llamando al 0810------- de lunes a viernes de 9 a 19 horas.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>¿Cómo accedo a mi póliza digital en el celular?</Accordion.Header>
                <Accordion.Body>
                  Como asegurado podés visualizar tu seguro en la APP Mi Argentina. <br />
                  Como asegurado de Fenix, podés descargar la App móvil o ingresar al portal del asegurado y bajar tu póliza, tarjeta de circulación, certificado de cobertura y de Mercosur, entre otros documentos que necesites. <br />
                  • APP de Fenix Seguros <br />
                  • Portal de asegurados de Fenix Seguros
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>Baja del seguro: ¿Querés dar de baja la póliza?</Accordion.Header>
                <Accordion.Body>
                  En el caso de que decidas anular tu póliza vigente podés hacerlo en cualquier momento. Para eso deberás solicitarlo a: <br />
                  • Tu Productor Asesor de Seguros. <br />
                  • Equipo de Atención al Cliente: De lunes a viernes de 9 a 19 horas al 0810-345-0492 <br />
                  • Portal de asegurados de Fenix Seguros <br />
                  • APP de Fenix Seguros
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
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