import { Link } from "react-router-dom";
import { FaUserInjured, FaPhoneAlt, FaWhatsapp, FaEnvelope, FaUserTie, FaRegHandshake, FaExternalLinkAlt } from "react-icons/fa";
import "./SiniestrosTerceros.css";
import SEO from "./SEO";

function SiniestrosTerceros() {
  return (
    <div className="siniestros-container">

      <SEO
        title="Siniestros para Terceros | Organización FENIX"
        description="Si sufriste un accidente con un asegurado de FENIX, podés realizar tu denuncia de siniestro fácilmente. Te asistimos en cada paso."
        keywords="siniestros terceros, denuncia siniestro, accidentes, organización fenix, seguro auto"
        url="https://www.organizacionfenix.com/siniestros/terceros"
      />

      {/* Encabezado */}
      <div className="siniestros-header">
        <h2>Informar un siniestro</h2>
        <h3>DE TERCEROS</h3>
        <p>
          Te brindamos toda la información para gestionar un siniestro por los daños y/o lesiones que sufriste como consecuencia de un accidente con un vehículo asegurado en FENIX.
        </p>
      </div>

      {/* Tarjetas principales */}

      <div className="siniestros-cards">

        <div className="siniestro-card">
          <FaUserInjured className="icon" />
          <h4>¿Necesitás asistencia por un siniestro?</h4>
          <p>
            En caso de tener un siniestro con un asegurado de nuestra organización debes realizar el reclamo en la compañia contratada mediante su portal web. 
          </p>

          <div className="contact-icons contact-web">
            <a
              href="https://www.segurosrivadavia.com/siniestros/terceros"
              className="contact-icon web-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaExternalLinkAlt />
              <span>Reclamos Rivadavia</span>
            </a>

            <a
              href="https://siniestros.mercantilandina.com.ar/terceros/#/login"
              className="contact-icon web-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaExternalLinkAlt />
              <span>Reclamos Mercantil Andina</span>
            </a>

            <a
              href="https://www.meridionalseguros.seg.ar/terceros/"
              className="contact-icon web-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaExternalLinkAlt />
              <span>Reclamos Meridional Seguros</span>
            </a>

            <a
              href="https://www.sancorseguros.com.ar/siniestros/soy-tercero"
              className="contact-icon web-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaExternalLinkAlt />
              <span>Reclamos Sancor Seguros</span>
            </a>

            <div className="otros-ws">
              <p>
                Si el asegurado tiene su póliza en otra compañía, <strong>consultanos por WhatsApp</strong>.
              </p>
              <a
                href="https://wa.me/5492235059024?text=Hola!%20Necesito%20información%20sobre%20un%20reclamo%20como%20tercero."
                target="_blank"
                rel="noopener noreferrer"
                className="contact-icon whatsapp"
              >
                <FaWhatsapp />
                <span>Enviar WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

      </div>


      {/* Sección final */}
      <div className="siniestros-tercero">
        <h4>¿Sos Asegurado FENIX?</h4>
        <p>Conocé cómo realizar tu reclamo.</p>
        <Link to="/siniestros/asegurados" className="btn-vermas">
          Ver más {">>"}
        </Link>
      </div>
    </div>
  );
}

export default SiniestrosTerceros;
