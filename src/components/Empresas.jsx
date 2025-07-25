import { Outlet, Link } from "react-router-dom";
import "./Empresas.css";

import logoSeguroComercio from "../assets/LogoSeguroComercio.png"
import logoSeguroConsorcio from "../assets/LogoSeguroConsorcio.png"
import logoRespCivilEmpresa from "../assets/LogoRespCivilEmpresas.png"
import logoSeguroBuque from "../assets/LogoSeguroBuques.png"
import logoSeguroART from "../assets/LogoSeguroART.png"
import logoSeguroCaucionEmpresa from "../assets/LogoSeguroCaucionEmpresa.png"

function Empresas() {
  const segurosList = [
      { id: "comercios", title: "Seguros para Comercios", img: logoSeguroComercio, list: ["Todo Riezgo Operativo", "Seguro para Incendio","Seguro para Robo"] },
      { id: "consorcios", title: "Seguros para Consorcios", img: logoSeguroConsorcio, list: ["Responsabilidad Civil", "Daños por incendio", "Cobertura integral"] },
      { id: "respcivil", title: "Responsabilidad Civil para Empresas", img: logoRespCivilEmpresa, list: ["Responsabilidad Civil General", "Responsabilidad Profesional"] },
      { id: "buques", title: "Seguros de Buques", img: logoSeguroBuque, list: ["Cobertura Total de Buques", "Responsabilidad Marítima"] },
      { id: "art", title: "Seguros ART", img: logoSeguroART, list: ["Cobertura por accidente", "Cobertura por enfermedad laboral"] },
      { id: "caucionempresas", title: "Seguros de Caucion para Empresas", img: logoSeguroCaucionEmpresa, list: ["Caución Contractual", "Caución Judicial"] },
    ];

  return (
    <div>
      <div className="ContainerEmpresas">
        <h2>Seguros para Empresas</h2>
        <p>Conocé las coberturas y servicios de seguros para Empresas que tenemos para vos, adaptados a tus necesidades.</p>
      </div>

      {/* Grid de Seguros */}
      <section className="ContainerSegurosGrid4">
        {segurosList.map((item, index) => (
          <div className="cardSeguros" key={index} style={{ backgroundImage: `url(${item.img})` }}>
            <h3 className="cardTitleDefault">{item.title}</h3>
            <div className="cardOverlaySeguro">
              <h3 className="cardTitleHover">{item.title}</h3>
              <ul className="segurosList">
                {item.list.map((text, i) => (
                  <li key={i}>{text}</li>
                ))}
              </ul>
              <Link to={`/seguros/${item.id}`} className="cardLinkButtonSeguro">Ver Seguros</Link>
            </div>
          </div>
        ))}
      </section>

      <Outlet /> 
    </div>
  )
}

export default Empresas