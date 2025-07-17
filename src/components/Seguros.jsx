import { Link } from "react-router-dom";
import "./Seguros.css";
import personasBg from "../assets/PersonasBG.png";  
import empresasBg from "../assets/EmpresasBG.png"; 

function Seguros() {
  return (
    <div>
      <h2>Seguros generales para Personas y Empresas</h2>

      <section className="Container">
        {/* Card Personas */}
        <div className="card" style={{backgroundImage: `url(${personasBg})`, backgroundSize: "cover", backgroundPosition: "center", color: "white", position: "relative",}} >
          <div className="cardOverlay">
            <h3>Personas</h3>
            <p>Contamos con todas las coberturas para vos y tu familia.</p>
            <Link to="/seguros/personas" className="cardLinkButton">
              Ver Seguros para Personas
            </Link>
          </div>
        </div>

        {/* Card Empresas */}
        <div className="card" style={{backgroundImage: `url(${empresasBg})`, backgroundSize: "cover", backgroundPosition: "center", color: "white", position: "relative",}} >
          <div className="cardOverlay">
            <h3>Empresas</h3>
            <p>Protegé tu negocio con planes a medida para empresas.</p>
            <Link to="/seguros/empresas" className="cardLinkButton">
              Ver Seguros para Empresas
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Seguros;
