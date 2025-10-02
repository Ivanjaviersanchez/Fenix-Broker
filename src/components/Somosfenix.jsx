import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import CardImg from "../assets/Oficina1.jpeg";
import LogoFinal from "../assets/LogoFenixBlanco.png"
import "./Somosfenix.css";
import { div } from 'framer-motion/client';

function Somosfenix() {
  return (
    <div>

      <div className="ContainerCardSomosFenix">
        <Card className="cardSomosFenix">
          <div className="cardImageBackground" style={{ backgroundImage: `url(${CardImg})` }} />
          <Card.ImgOverlay className="cardOverlay">
            <Card.Title className="cardTitle">Somos Fenix {">>>"}</Card.Title>
            <Card.Text className="cardText">
              Con más de 30 años en el mercado, brindamos protección a personas, empresas e instituciones con coberturas que se adaptan a sus necesidades.
            </Card.Text>
          </Card.ImgOverlay>
        </Card>
      </div>

      <div className="ContainerSucursal">
        <Card className="SucursalCard">
          <div className="SucursalText">
            <Card.Body>
              <Card.Title className="SucursalTitle">Sucursal Fenix </Card.Title>
              <Card.Title className="SucursalSubTitle">Mar del plata </Card.Title>
              
              <Card.Text className="SucursalDescription">
                En Fénix Broker de Seguros ofrecemos atención personalizada en nuestra oficina de Mar del Plata, acompañando a nuestros clientes con soluciones integrales en seguros para personas, empresas e instituciones. <br />
                Como parte de una red nacional con respaldo y trayectoria, brindamos asesoramiento profesional, cotizaciones a medida y gestión eficiente de pólizas y siniestros, trabajando con las principales compañías aseguradoras del país.
              </Card.Text>

              <Button
                className="SucursalBTN"
                variant="primary"
                onClick={() => {
                  const phoneNumber = "549223555555"; // tu número de WhatsApp en formato internacional
                  const message = "Hola, quiero contactar con un asesor para consultar sobre seguros.";
                  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
                  window.open(url, "_blank");
                }}
              >
                Contacta con nosotros {">>>"}
              </Button>
            </Card.Body>
          </div>

          {/* Mapa en lugar de imagen */}
          <div className="SucursalMap">
            <iframe
              width="100%"
              height="100%"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
              title="Mapa Sucursal Fenix Mar del Plata"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3143.5072351804265!2d-57.56905661008187!3d-38.01195277299547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9584dc212bdd81eb%3A0xee36ea205b2a9d2e!2sORGANIZACION%20FENIX!5e0!3m2!1ses!2sus!4v1758943836092!5m2!1ses!2sus"
            ></iframe>
          </div>
        </Card>
      </div>

      <div className='ContainerContacto' >
        <Card className="SucursalCard" >
            <div className="SucursalContactContainer"> 
              <h3 className="SucursalContactTitle">Contacto Fenix {">>>"}</h3> 
              <h4>Saavedra 3107 Piso 9</h4> <h4>Mar del Plata - Buenos Aires</h4> 
              <h4>Tel: 223555555</h4> 
              <h4>info@brokerfenix.com.ar</h4> 
              
              <hr className="SucursalDivider" /> 

              <div className='TelefonosTitle'>
                  <h3>Teléfonos útiles {">>>"}</h3>
              </div>
              <div className="TelefonosUtiles"> 
                <div className="TelefonosBlock"> 
                  <h5>Auxilio mecánico:</h5> 
                  <ul> 
                    <li>Allianz: 0800-888-2427</li> 
                    <li>La Caja: 0810-555-2252</li> 
                    <li>Chubb: 0800-5555-2482</li> 
                    <li>Federación Patronal: 0800-222-0920</li> 
                    <li>Mapfre: 0810-222-0468</li> 
                    <li>QBE: 0810-999-2424</li> 
                    <li>Sura: 0800-999-76925</li> 
                    <li>Zurich: 0800-222-1600</li> 
                  </ul> 
                </div> 
                <div className="TelefonosBlock"> 
                  <h5>Urgencias domiciliarias:</h5> 
                  <ul> 
                    <li>Allianz: 0800-888-2427</li> 
                    <li>QBE: 0810-999-7693</li> 
                    <li>Sura: 0800-999-76925</li> 
                    <li>Zurich: 0800-222-1600</li> 
                  </ul> 
                </div> 
                <div className="TelefonosBlock"> 
                  <h5>ART – Emergencias:</h5> 
                  <ul>
                      <li>Asociart: 0800-888-0093</li>
                      <li>Berkley: 0800-777-2020</li> 
                      <li>Experta: 0800-888-0200</li> 
                      <li>Federación Patronal: 0800-222-2222</li> 
                      <li>La Segunda: 0800-444-2782</li> 
                      <li>Provincia ART: 0800-333-1333</li> 
                      <li>SMG: 0800-666-2000</li> 
                    </ul> 
                  </div> 
                </div>
            </div> 
        </Card>

      </div>


    </div>
    
  );
}

export default Somosfenix;