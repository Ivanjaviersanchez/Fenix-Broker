import { Link } from "react-router-dom";
import { FaUserInjured, FaPhoneAlt, FaWhatsapp, FaEnvelope, FaUserTie, FaRegHandshake, FaExternalLinkAlt } from "react-icons/fa";
import "./SiniestrosAsegurados.css";
import SEO from "./SEO";

function SiniestrosAsegurados() {
  return (
    <div className="siniestros-container">

      <SEO
        title="Siniestros Asegurados | Organización FENIX"
        description="Informá tu siniestro con Organización FENIX. Si sos asegurado, denunciá accidentes, robos o daños fácilmente por teléfono, WhatsApp o correo electrónico."
        keywords="denunciar siniestro, seguros fenix, asegurados fenix, accidente de auto, denuncia de siniestro, contacto seguros fenix, asistencia de seguros"
        url="https://www.organizacionfenix.com/siniestros/asegurados"
        image="https://www.organizacionfenix.com/assets/LogoFinal.png"
      />

      {/* Encabezado */}
      <div className="siniestros-header">
        <h2>Informar un siniestro</h2>
        <h3>ASEGURADOS FENIX</h3>
        <p>
          Si tuviste un siniestro, notificanos dentro de las 72h de ocurrido el hecho,
          a través de los siguientes medios.
        </p>
      </div>

      {/* Tarjetas principales */}

      <div className="siniestros-cards">

        <div className="siniestro-card">
          <FaUserInjured className="icon" />
          <h4>¿Hay lesionados o necesitás asistencia?</h4>
          <p>
            Contactate de manera inmediata a través de nuestras líneas telefónicas.
          </p>

          <div className="contact-icons">
            <div className="contact-icons">
              <a href="tel:+542235059018" className="contact-icon phone" aria-label="Llamar">
                <FaPhoneAlt />
                <span>Llamar</span>
              </a>
              <a
                href="https://wa.me/5492235059018?text=URGENTE!!%20Necesito%20asistencia%20por%20un%20siniestro"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-icon whatsapp"
                aria-label="WhatsApp"
              >
                <FaWhatsapp />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>


        <div className="siniestro-card destacado">
          <FaRegHandshake className="icon" />
          <h4>Informar un siniestro ahora</h4>
          <p>
            Envíanos tus datos de asegurado por E-mail o Whatsapp para poder iniciar tu denuncia.
          </p>
          <div className="contact-icons">
            <div className="contact-icons">
              <a
                href="mailto:info@organizacionfenix.com?subject=Denuncia%20de%20Siniestro&body=Hola%2C%20quiero%20informar%20un%20siniestro."
                className="contact-icon email"
                aria-label="Enviar correo"
              >
                <FaEnvelope />
                <span>E-mail</span>
              </a>
              <a
                href="https://wa.me/5492235059018?text=Hola!%20Necesito%20informar%20un%20siniestro"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-icon whatsapp"
                aria-label="WhatsApp"
              >
                <FaWhatsapp />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        <div className="siniestro-card">
          <FaUserTie className="icon" />
          <h4>Productor Asesor de Seguros</h4>
          <p>
            Comunicate con tu asesor intermediario para informar un siniestro.
          </p>
          <div className="contact-icons">
            <div className="contact-icons">
            <a href="tel:+542235059018" className="contact-icon phone" aria-label="Llamar">
              <FaPhoneAlt />
              <span>Llamar</span>
            </a>
            <a
              href="https://wa.me/5492235059018?text=Hola!%20Necesito%20contactar%20con%20un%20asesor%20para%20informar%20un%20siniestro"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-icon whatsapp"
              aria-label="WhatsApp"
            >
              <FaWhatsapp />
              <span>WhatsApp</span>
            </a>
          </div>
          </div>
        </div>
      </div>

      {/* Documentación */}
      <div className="siniestros-docs">
        <h4>Documentación a presentar</h4>
        <p>Conocé cómo iniciar o consultar el estado de un reclamo.</p>

        <div className="docs-fields">
          <div>
            <label>Producto</label>
            <select>
              <option>Automotores y Motovehículos</option>
              <option>Hogar</option>
              <option>Comercio</option>
            </select>
          </div>
          <div>
            <label>Tipo de siniestro</label>
            <select>
              <option>Responsabilidad Civil por Daños a Terceros</option>
              <option>Robo o Hurto</option>
              <option>Incendio</option>
            </select>
          </div>
        </div>

        <button className="btn-vermas">Ver más</button>
      </div>

      {/* Sección final */}
      <div className="siniestros-tercero">
        <h4>¿Sos tercero?</h4>
        <p>Conocé cómo iniciar un reclamo ante un siniestro.</p>
        <Link to="/siniestros/terceros" className="btn-vermas">
          Ver más {">>"}
        </Link>
      </div>
    </div>
  );
}

export default SiniestrosAsegurados;

