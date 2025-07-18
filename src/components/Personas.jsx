import { Outlet, Link } from "react-router-dom";
import "./Personas.css";
import personasBg from "../assets/PersonasBG.png";  

function Personas() {
  return (
    <div>
      <h3 className="ContainerPersonas">Seguros para Personas</h3>

      <section className="ContainerPersonas">
        {/* Card Personas */}
        <div className="cardPersonas" style={{backgroundImage: `url(${personasBg})`, backgroundSize: "cover", backgroundPosition: "center", color: "white", position: "relative",}} >
          <div className="cardOverlayPersonas">
            <h3>Personas</h3>
            <p>Contamos con todas las coberturas para vos y tu familia.</p>
            <Link to="/seguros/personas" className="cardLinkButton">
              Ver Seguros para Personas
            </Link>
          </div>
        </div>
      </section>

      <Outlet /> 
    </div>
    
  )
}

export default Personas