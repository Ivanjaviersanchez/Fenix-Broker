import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import {
  FaWhatsapp,
  FaCarCrash,
  FaExclamationTriangle,
  FaFileInvoiceDollar,
  FaRegFileAlt,
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
              href="https://wa.me/5492233420530?text=Hola!%20Quisiera%20contactar%20con%20un%20asesor%20de%20FENIX.%20Gracias!"              target="_blank"
              rel="noopener noreferrer"
              className="LinkContacto"
            >
              223 3420530
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


      {/* === SECCIÓN 2: LINEAS DE CONTACTO FENIX === */}
      <Card className="NumerosUtilesCard">
        <div className="NumerosUtilesContainer">
          <h3 className="NumerosUtilesTitle">Lineas de contacto FENIX {">>>"}</h3>

          <div className="NumerosGrid">
            <div className="NumeroCard">
              <FaWhatsapp className="NumeroIcon whatsapp" />
              <h3>Whatsapp FENIX</h3>
              <a
                href="https://wa.me/5492233420530?text=Hola!%20Quisiera%20contactar%20con%20un%20asesor%20de%20FENIX.%20Gracias!"              target="_blank"
                rel="noopener noreferrer"
                className="numero"
              >
                223-3420530
              </a>
              <p>Lunes a Viernes de 9 a 15hs.</p>
            </div>

            <div className="NumeroCard">
              <FaCarCrash className="NumeroIcon" />
              <h3>Siniestros</h3>
              <a
                href="https://wa.me/5492235059024?text=Hola!%20Quisiera%20contactar%20con%20un%20asesor%20para%20informar%20un%20siniestro."              target="_blank"
                rel="noopener noreferrer"
                className="numero"
              >
                223-5059024
              </a>
              <p>Lunes a Viernes de 9 a 15hs.</p>
            </div>

            <div className="NumeroCard">
              <FaExclamationTriangle className="NumeroIcon" />
              <h3>Urgencias</h3>
              <a
                href="https://wa.me/5492235814952?text=Hola!%20Quisiera%20contactar%20con%20un%20asesor%20para%20informar%20un%20siniestro."              target="_blank"
                rel="noopener noreferrer"
                className="numero"
              >
                223-5814952
              </a>
              
            </div>

            <div className="NumeroCard">
              <FaFileInvoiceDollar className="NumeroIcon" />
              <h3>Cobranzas FENIX</h3>
              <a
                href="https://wa.me/5492235289395?text=Hola!%20Quisiera%20contactar%20con%20Cobranzas%20por%20el%20pago%20del%20seguro."              target="_blank"
                rel="noopener noreferrer"
                className="numero"
              >
                223-5289395
              </a>
              <p>Lunes a Viernes de 9 a 15hs.</p>
            </div>

            <div className="NumeroCard">
              <FaRegFileAlt className="NumeroIcon" />
              <h3>Solicitud de Pólizas</h3>
              <a
                href="https://wa.me/5492234002377?text=Hola!%20Quisiera%20contactar%20con%20un%20asesor%20para%20solicitar%20una%20póliza."              target="_blank"
                rel="noopener noreferrer"
                className="numero"
              >
                223-4002377
              </a>
              <p>Lunes a Viernes de 9 a 15hs.</p>
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
                <li>Rivadavia: 0800-666-6789</li>
                <li>Mercantil Andina: 0800-777-2634</li>
                <li>Meridional: 0800-333-3244</li>
                <li>Sancor: 0800-777-4643</li>
              </ul>
            </div>
            <div className="TelefonosBlock">
              <h3>Urgencias domiciliarias:</h3>
              <ul>
                <li>Rivadavia: 0800-666-6789</li>
                <li>Mercantil Andina: 0800-777-2634</li>
                <li>Meridional: 0800-555-1234</li>
                <li>Sancor: 0800-555-2850</li>
                <li>Allianz: 0800-888-23234</li>
                <li>Galicia Seguros: 0800-555-2272</li>
              </ul>
            </div>
            <div className="TelefonosBlock">
              <h3>ART – Emergencias:</h3>
              <ul>
                <li>Prevencion: 0800-444-4278</li>
                <li>Asociart: 0800-888-0093</li>
                <li>Provincia art: 0800-333-1333</li>
                <li>Andina art: 0800-222-0202</li>
                <li>Experta art: 0800-888-0200</li>
              </ul>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default Contacto;

