import "./SiniestrosAsegurados.css";
import { FaUserInjured, FaUserTie, FaRegHandshake, FaExternalLinkAlt } from "react-icons/fa";

function SiniestrosAsegurados() {
  return (
    <div className="siniestros-container">
      {/* Encabezado */}
      <div className="siniestros-header">
        <h3>Informar un siniestro</h3>
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
          <button className="btn-vermas">Ver más</button>
        </div>

        <div className="siniestro-card destacado">
          <FaRegHandshake className="icon" />
          <h4>Autogestión</h4>
          <p>
            Ingresá a la sección Siniestros para poder iniciar tu denuncia y realizar otras gestiones.
          </p>
          <div className="btns">
            <button className="btn-conocer">Conocer más</button>
          </div>
        </div>

        <div className="siniestro-card">
          <FaUserTie className="icon" />
          <h4>Productor Asesor de Seguros</h4>
          <p>
            Comunicate con tu intermediario o acercate a nuestras oficinas.
          </p>
          <button className="btn-vermas">Ver más</button>
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
        <p>Conocé cómo iniciar o consultar el estado de un reclamo.</p>
        <button className="btn-vermas">Ver más</button>
      </div>
    </div>
  );
}

export default SiniestrosAsegurados;

