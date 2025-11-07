import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import {
  FaWhatsapp,
  FaCarCrash,
  FaAmbulance,
  FaTruckPickup,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import "./Contacto.css";
import SEO from "./SEO";

function Contacto() {
  return (
    <div className="ContainerContacto">

      <SEO
        title="Contacto | Conoce nuestra Sucursal en Mar del plata, habla con un asesor de Organización FENIX"
        description="¿Tenés dudas o querés cotizar un seguro? Contactanos por WhatsApp, mail o completá el formulario y un asesor de FENIX te responderá enseguida."
        keywords="contacto, asesor, seguros, organización fenix, mar del plata, cotización, whatsapp"
        url="https://www.organizacionfenix.com/contacto"
      />

      
      {/* === SECCIÓN 1: CONTACTO FENIX === */}
      <Card className="SucursalCard">
        <div className="SucursalContactContainer">
          <h3 className="SucursalContactTitle">Contacto Fenix {">>>"}</h3>
          <h4>Saavedra 3107 Piso 9</h4>
          <h4>Mar del Plata - Buenos Aires</h4>

          {/* --- WHATSAPP --- */}
          <p className="ContactoItem">
            <FaWhatsapp className="IconoContacto whatsapp" />
            <a
              href="https://wa.me/5492235059018?text=Hola!%20Quisiera%20contactar%20con%20un%20asesor%20de%20FENIX.%20Gracias!"              target="_blank"
              rel="noopener noreferrer"
              className="LinkContacto"
            >
              +54 9 223 5059018
            </a>
          </p>

          {/* --- EMAIL --- */}
          <p className="ContactoItem">
            <FaEnvelope className="IconoContacto" />
            <a
              href="mailto:info@organizacionfenix.com?subject=Consulta%20desde%20el%20sitio%20web&body=Hola!%20Quisiera%20hacer%20una%20consulta%20sobre%20seguros."
              className="LinkContacto"
            >
              info@organizacionfenix.com
            </a>
          </p>

          <Link to="/somosfenix">
            <Button className="ContactoBTN">Sucursal FENIX {">>>"}</Button>
          </Link>
        </div>
      </Card>


      {/* === SECCIÓN 2: NÚMEROS ÚTILES === */}
      <Card className="NumerosUtilesCard">
        <div className="NumerosUtilesContainer">
          <h3 className="NumerosUtilesTitle">Números útiles {">>>"}</h3>

          <div className="NumerosGrid">
            <div className="NumeroCard">
              <FaWhatsapp className="NumeroIcon whatsapp" />
              <h3>Whatsapp FENIX</h3>
              <a
                href="https://wa.me/5492235059018?text=Hola!%20Quisiera%20contactar%20con%20un%20asesor%20de%20FENIX.%20Gracias!"              target="_blank"
                rel="noopener noreferrer"
                className="numero"
              >
                +54 9 223 5059018
              </a>
              <p>Disponible las 24 h.</p>
            </div>

            <div className="NumeroCard">
              <FaCarCrash className="NumeroIcon" />
              <h3>Siniestros Automotor</h3>
              <p className="numero">0800 777 4643</p>
              <p>Disponible las 24 h.</p>
            </div>

            <div className="NumeroCard">
              <FaAmbulance className="NumeroIcon" />
              <h3>Emergencias Médicas Íntegro</h3>
              <p className="numero">0800 555 2850</p>
              <p>Disponible las 24 h.</p>
            </div>

            <div className="NumeroCard">
              <FaTruckPickup className="NumeroIcon" />
              <h3>Asistencia al vehículo y las personas</h3>
              <p className="numero">0800 333 2766</p>
              <p className="numero">+54 0342 410 3221</p>
              <p>Disponible las 24 h.</p>
            </div>

            <div className="NumeroCard">
              <FaWhatsapp className="NumeroIcon whatsapp" />
              <h3>Whatsapp asistencia</h3>
              <p className="numero">+54 3493 520 650</p>
              <p>Disponible las 24 h.</p>
            </div>

            <div className="NumeroCard">
              <FaPhoneAlt className="NumeroIcon" />
              <h3>Consultas generales</h3>
              <p className="numero">0800 444 2850</p>
              <p>Lunes a viernes de 8 a 20 h.</p>
            </div>
          </div>
        </div>
      </Card>

      {/* === SECCIÓN 3: TELÉFONOS DE COMPAÑÍAS === */}
      <Card className="SucursalCard">
        <div className="SucursalContactContainer">
          <div className="TelefonosTitle">
            <h3>Teléfonos de compañías {">>>"}</h3>
          </div>
          <div className="TelefonosUtiles">
            <div className="TelefonosBlock">
              <h3>Auxilio mecánico:</h3>
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
              <h3>Urgencias domiciliarias:</h3>
              <ul>
                <li>Allianz: 0800-888-2427</li>
                <li>QBE: 0810-999-7693</li>
                <li>Sura: 0800-999-76925</li>
                <li>Zurich: 0800-222-1600</li>
              </ul>
            </div>
            <div className="TelefonosBlock">
              <h3>ART – Emergencias:</h3>
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
  );
}

export default Contacto;

