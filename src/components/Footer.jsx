import "./Footer.css";
import LogoSSN from '../assets/LogoSSN.png';

function Footer() {
  return (
    <footer className="footerStyles">
      {/* Fila 1 - Link centrado */}
      <div className="footerTop">
        <a href="https://www.argentina.gob.ar/ssn" target="_blank" rel="noopener noreferrer" className="footerLink">
          www.argentina.gob.ar/ssn
        </a>
      </div>

      {/* Fila 2 - Logo centrado */}
      <div className="footerLogoRow">
        <a href="https://www.argentina.gob.ar/ssn" target="_blank" rel="noopener noreferrer">
          <img src={LogoSSN} alt="SSN Logo"/>
        </a>
      </div>

      {/* Fila 3 - Textos en 2 columnas */}
      <div className="footerContainer">
        {/* Columna Izquierda */}
        <div className="footerLeft">
          <p>
            La entidad aseguradora dispone de un Servicio de Atención al
            Asegurado que atenderá las consultas y reclamos que presenten los
            tomadores de seguros, asegurados, beneficiarios y/o
            derechohabientes.
          </p>

          <p>
            En caso de reclamo ante la entidad aseguradora no resuelto o
            desestimado, podrá denunciarlo a través de{" "}
            <a
              href="https://www.argentina.gob.ar/ssn"
              target="_blank"
              rel="noopener noreferrer"
              className="footerLink"
            >
              www.argentina.gob.ar/ssn
            </a>
          </p>
        </div>

        {/* Columna Derecha */}
        <div className="footerRight">
          <p>
            <strong>El Servicio de Atención al Asegurado (SAA)</strong> está
            integrado por:
          </p>
          <p>
            <strong>RESPONSABLE:</strong> Fernando Rodríguez <br />
            <strong>SUPLENTE:</strong> Paola Candia
          </p>
          <p>
            <strong>EMAIL:</strong>{" "}
            <a href="mailto:saa@atmseguros.com.ar" className="footerLink">
              saa@atmseguros.com.ar
            </a>
          </p>
          <p>
            <strong>TELÉFONO:</strong> 1152390230
          </p>
        </div>
      </div>

      {/* Línea inferior */}
      <div className="footerBottom">
        © 2025 Organización Fenix. Todos los derechos reservados.
      </div>
    </footer>
  );
}

export default Footer;

