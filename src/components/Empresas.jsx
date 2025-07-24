import { Outlet, Link } from "react-router-dom";
import "./Empresas.css";
import empresasBg from "../assets/EmpresasBG.png"; 

import logoSeguroComercio from "../assets/LogoSeguroComercio.png"
//import logoSeguroConsorcio from ""
//import logoRespCivilEmpresa from ""
//import logoSeguroBuque from ""
//import logoSeguroART from ""
//import logoSeguroCaucionEmpresa from ""

function Empresas() {
  const segurosList = [
      { title: "Seguros para Comercios", img: logoSeguroComercio, list: ["Todo Riezgo Operativo", "Seguro para Incendio","Seguro para Robo"] },
      //{ title: "Seguros para Consorcios", img: logoSeguroConsorcio, list: ["Seguro para OTROS", "Seguro para OTROS"] },
      //{ title: "Responsabilidad Civil para Empresas", img: logoRespCivilEmpresa, list: ["Seguro para OTROS", "Seguro para OTROS"] },
      //{ title: "Seguros de Buques", img: logoSeguroBuque, list: ["Seguro para OTROS", "Seguro para OTROS"] },
      //{ title: "Seguros ART", img: logoSeguroART, list: ["Seguro para OTROS", "Seguro para OTROS"] },
      //{ title: "Seguros de Caucion para Empresas", img: logoSeguroCaucionEmpresa, list: ["Seguro para OTROS", "Seguro para OTROS"] },
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
              <Link to="/seguros/personas" className="cardLinkButtonSeguro">Ver Seguros</Link>
            </div>
          </div>
        ))}
      </section>

      <Outlet /> 
    </div>
  )
}

export default Empresas