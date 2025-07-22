import { Link } from "react-router-dom";
import "./Seguros.css";
import personasBg from "../assets/PersonasBG.png";  
import empresasBg from "../assets/EmpresasBG.png"; 

function Seguros() {
  return (
    <div>

      <section className="ContainerSeguros">
        {/* Card Personas */}
        <div className="cardSeguros" style={{backgroundImage: `url(${personasBg})`, backgroundSize: "cover", backgroundPosition: "center", color: "white", position: "relative",}} >
          <div className="cardOverlay">
            <h3>Personas</h3>
            <p>Contamos con todas las coberturas para vos y tu familia.</p>
            <Link to="/seguros/personas" className="cardLinkButton">
              Ver Seguros para Personas
            </Link>
          </div>
        </div>

        {/* Card Empresas */}
        <div className="cardSeguros" style={{backgroundImage: `url(${empresasBg})`, backgroundSize: "cover", backgroundPosition: "center", color: "white", position: "relative",}} >
          <div className="cardOverlay">
            <h3>Empresas</h3>
            <p>Protegé tu negocio con planes a medida para empresas.</p>
            <Link to="/seguros/empresas" className="cardLinkButton">
              Ver Seguros para Empresas
            </Link>
          </div>
        </div>
      </section>

      <div className="ContainerSeguros">
        <h3>Conocé todas las coberturas y servicios de seguros que tenemos para vos, adaptados a tus necesidades.</h3>
      </div>

      <section className="ContainerSegurosGrid4">

        {/* Card Seguros para Autos */}
        <div className="cardSeguros" style={{backgroundImage: `url(${personasBg})`, backgroundSize: "cover", backgroundPosition: "center", color: "white", position: "relative",}} >
          <div className="cardOverlay">
            <h3>Seguros para Autos</h3>
            <ul className="segurosList">
              <li>Responsabilidad Civil</li>
              <li>Terceros Completo</li>
              <li>Todo Riesgo</li>
            </ul> 
            <Link to="/seguros/personas" className="cardLinkButton">
              Ver Seguros para Autos
            </Link>
          </div>
        </div>
        {/* Card Seguros para Motos */}
        <div className="cardSeguros" style={{backgroundImage: `url(${personasBg})`, backgroundSize: "cover", backgroundPosition: "center", color: "white", position: "relative",}} >
          <div className="cardOverlay">
            <h3>Seguros para Motos</h3>
            <ul className="segurosList">
              <li>Seguro Moto Base</li>
              <li>Seguro Moto Plus</li>
              <li>Seguro Moto Premium</li>
            </ul> 
            <Link to="/seguros/personas" className="cardLinkButton">
              Ver Seguros para Motos
            </Link>
          </div>
        </div>
        {/* Card Seguros para el Hogar */}
        <div className="cardSeguros" style={{backgroundImage: `url(${personasBg})`, backgroundSize: "cover", backgroundPosition: "center", color: "white", position: "relative",}} >
          <div className="cardOverlay">
            <h3>Seguros para el Hogar</h3>
            <ul className="segurosList">
              <li>Seguro Hogar Premium</li>
              <li>Seguro de Caución para Alquiler</li>
            </ul> 
            <Link to="/seguros/personas" className="cardLinkButton">
              Ver Seguros para el Hogar
            </Link>
          </div>
        </div>
        {/* Card Seguros de Movilidad */}
        <div className="cardSeguros" style={{backgroundImage: `url(${personasBg})`, backgroundSize: "cover", backgroundPosition: "center", color: "white", position: "relative",}} >
          <div className="cardOverlay">
            <h3>Seguros de Movilidad</h3>
            <ul className="segurosList">
              <li>Seguro para Bicicletas</li>
              <li>Seguro para Monopatines</li>
            </ul> 
            <Link to="/seguros/personas" className="cardLinkButton">
              Ver Seguros de Movilidad
            </Link>
          </div>
        </div>
        {/* Card Seguros de Objetos Personales */}
        <div className="cardSeguros" style={{backgroundImage: `url(${personasBg})`, backgroundSize: "cover", backgroundPosition: "center", color: "white", position: "relative",}} >
          <div className="cardOverlay">
            <h3>Seguros de Objetos Personales</h3>
            <ul className="segurosList">
              <li>Seguro para Bolso</li>
              <li>Seguro para OTRO</li>
              <li>Seguro para OTRO</li>
            </ul> 
            <Link to="/seguros/personas" className="cardLinkButton">
              Ver Seguros de Objetos Personales
            </Link>
          </div>
        </div>
        {/* Card Seguros de Retiro */}
        <div className="cardSeguros" style={{backgroundImage: `url(${personasBg})`, backgroundSize: "cover", backgroundPosition: "center", color: "white", position: "relative",}} >
          <div className="cardOverlay">
            <h3>Seguros de Retiro</h3>
            <ul className="segurosList">
              <li>Seguro para OTRO</li>
              <li>Seguro para OTRO</li>
            </ul> 
            <Link to="/seguros/personas" className="cardLinkButton">
              Ver Seguros de Retiro
            </Link>
          </div>
        </div>
        {/* Card Seguros de Vida */}
        <div className="cardSeguros" style={{backgroundImage: `url(${personasBg})`, backgroundSize: "cover", backgroundPosition: "center", color: "white", position: "relative",}} >
          <div className="cardOverlay">
            <h3>Seguros de Vida</h3>
            <ul className="segurosList">
              <li>Seguro para OTRO</li>
              <li>Seguro para OTRO</li>
            </ul> 
            <Link to="/seguros/personas" className="cardLinkButton">
              Ver Seguros de Vida
            </Link>
          </div>
        </div>
        {/* Card Seguros de OTRO */}
        <div className="cardSeguros" style={{backgroundImage: `url(${personasBg})`, backgroundSize: "cover", backgroundPosition: "center", color: "white", position: "relative",}} >
          <div className="cardOverlay">
            <h3>Seguros de OTRO</h3>
            <ul className="segurosList">
              <li>Seguro para OTRO</li>
              <li>Seguro para OTRO</li>
            </ul> 
            <Link to="/seguros/personas" className="cardLinkButton">
              Ver Seguros de OTRO
            </Link>
          </div>
        </div>

      </section>

    </div>
  );
}

export default Seguros;
