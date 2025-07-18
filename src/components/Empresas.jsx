import { Outlet, Link } from "react-router-dom";
import "./Empresas.css";
import empresasBg from "../assets/EmpresasBG.png"; 

function Empresas() {
  return (
    <div>
      <h3 className="ContainerEmpresas">Seguros para Empresas</h3>

      <section className="ContainerEmpresas">
        {/* Card Empresas */}
        <div className="cardEmpresas" style={{backgroundImage: `url(${empresasBg})`, backgroundSize: "cover", backgroundPosition: "center", color: "white", position: "relative",}} >
          <div className="cardOverlayEmpresas">
            <h3>Empresas</h3>
            <p>Protegé tu negocio con planes a medida para empresas.</p>
            <Link to="/seguros/empresas" className="cardLinkButton">
              Ver Seguros para Empresas
            </Link>
          </div>
        </div>
      </section>

      <Outlet /> 
    </div>
  )
}

export default Empresas