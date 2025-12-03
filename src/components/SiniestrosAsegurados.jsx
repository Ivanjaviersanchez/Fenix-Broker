import { Link } from "react-router-dom";
import { FaUserInjured, FaPhoneAlt, FaWhatsapp, FaEnvelope, FaUserTie, FaRegHandshake, FaExternalLinkAlt } from "react-icons/fa";
import SiniestrosForm from "./SiniestrosForm";
import "./SiniestrosAsegurados.css";
import SEO from "./SEO";

function SiniestrosAsegurados() {
  return (
    <div className="siniestros-container">

      <SEO
        title="Siniestros para Asegurados | Organización FENIX"
        description="Denunciá y gestioná tus siniestros como asegurado con Organización FENIX. Asistencia rápida, clara y personalizada para resolver tu caso."
        keywords="siniestros asegurados, denuncia de siniestros, asistencia seguro, organización fenix"
        url="https://www.organizacionfenix.com/siniestros/asegurados"
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
          <h4>¿Necesitás asistencia por un siniestro?</h4>
          <p>
            Contactate de manera inmediata con las compañias aseguradoras.
          </p>

          <div className="contact-icons contact-companias">
            <a href="tel:08109993200" className="contact-icon phone" aria-label="Llamar">
              <FaPhoneAlt />
              <span>Seguros Rivadavia:  0810-999-3200</span>
            </a>
            <a href="tel:08008884488" className="contact-icon phone" aria-label="Llamar">
              <FaPhoneAlt />
              <span>Mercantil Andina: 0800-888-4488</span>
            </a>
            <a href="tel:08007774643" className="contact-icon phone" aria-label="Llamar">
              <FaPhoneAlt />
              <span>Sancor Seguros: 0800-777-4643</span>
            </a>
            <a href="tel:08003333244" className="contact-icon phone" aria-label="Llamar">
              <FaPhoneAlt />
              <span>Meridional Seguros: 0800-333-3244</span>
            </a>
          </div>
        </div>


        <div className="siniestro-card destacado">
          <FaRegHandshake className="icon" />
          <h4>Informar un siniestro ahora</h4>
          <p>
            Envíanos tus datos de asegurado por E-mail o Whatsapp para poder iniciar tu denuncia.
          </p>
          <div className="contact-icons">
            <a
              href="mailto:siniestros@organizacionfenix.com?subject=Denuncia%20de%20Siniestro&body=Hola%2C%20quiero%20informar%20un%20siniestro."
              className="contact-icon email"
              aria-label="Enviar correo"
            >
              <FaEnvelope />
              <span>E-mail</span>
            </a>
            <a
              href="https://wa.me/5492235059024?text=Hola!%20Necesito%20informar%20un%20siniestro"
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

        <div className="siniestro-card">
          <FaUserTie className="icon" />
          <h4>Productor Asesor de Seguros</h4>
          <p>
            Comunicate con tu asesor intermediario para informar un siniestro.
          </p>
          <div className="contact-icons">
            <a href="tel:+542235059024" className="contact-icon phone" aria-label="Llamar">
              <FaPhoneAlt />
              <span>Llamar</span>
            </a>
            <a
              href="https://wa.me/5492235059024?text=Hola!%20Necesito%20contactar%20con%20un%20asesor%20para%20informar%20un%20siniestro"
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

      {/* Formulario de siniestros */}
      <div className="siniestros-docs">
        <h4>Informá un siniestro por nuestra web {">>"}</h4>
        <p>Completa el formulario y adjunta la documentación, tu solicitud sera procesada a la brebedad por nuestros asesores.</p>

        {/* Llamado a Componente de Formulario */}
        <SiniestrosForm />
       
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

