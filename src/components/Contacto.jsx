import Card from 'react-bootstrap/Card';
/* import logo from "../assets/gotaFondo.png"; */
import "./Contacto.css";

function Contacto() {
  return (
    <div>
      
      <div className='ContainerContacto'  >
        <Card className="SucursalCard" style={{ 
          /* backgroundImage: `url(${logo})`, */
          
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}>
            <div className="SucursalContactContainer" > 
              <h3 className="SucursalContactTitle">Contacto Fenix {">>>"}</h3> 
              <h4>Saavedra 3107 Piso 9</h4> <h4>Mar del Plata - Buenos Aires</h4> 
                <p>
                  <strong>EMAIL:</strong>{" "}
                  <a href="mailto:info@organizacionfenix.com" className="LinkMail">
                    info@organizacionfenix.com
                  </a>
                </p>
                <p>
                  <strong>TELÉFONO:</strong> INGRESAR TELEFONO
                </p>
              
              <hr className="SucursalDivider" /> 

              <div className='TelefonosTitle'>
                  <h3>Teléfonos útiles {">>>"}</h3>
              </div>
              <div className="TelefonosUtiles" > 
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
  )
}

export default Contacto