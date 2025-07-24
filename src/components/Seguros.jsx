import { Link } from "react-router-dom";
import "./Seguros.css";
import personasBg from "../assets/PersonasBG.png";  
import empresasBg from "../assets/EmpresasBG.png"; 
import logoSeguroAuto from "../assets/LogoSeguroAuto.png"
import logoSeguroMoto from "../assets/LogoSeguroMoto.png"
import logoSeguroHogar from "../assets/LogoSeguroHogar.png"
import logoSeguroMovilidad from "../assets/LogoSeguroMovilidad.png"
import logoSeguroObjetos from "../assets/LogoSeguroObjetos.png"
import logoSeguroRetiro from "../assets/LogoSeguroRetiro.png"
import logoSeguroVida from "../assets/LogoSeguroVida.png"
import logoSeguroComercio from "../assets/LogoSeguroComercio.png"
//import logoSeguroConsorcio from ""
//import logoRespCivilEmpresa from ""
//import logoSeguroBuque from ""
//import logoSeguroART from ""
//import logoSeguroCaucionEmpresa from ""

function Seguros() {
  const segurosList = [
    { title: "Seguros para Autos", img: logoSeguroAuto, list: ["Responsabilidad Civil", "Terceros Completo", "Todo Riesgo"] },
    { title: "Seguros para Motos", img: logoSeguroMoto, list: ["Seguro Moto Base", "Seguro Moto Plus", "Seguro Moto Premium"] },
    { title: "Seguros para el Hogar", img: logoSeguroHogar, list: ["Seguro Hogar Premium", "Seguro de Caución"] },
    { title: "Seguros de Movilidad", img: logoSeguroMovilidad, list: ["Bicicletas", "Monopatines"] },
    { title: "Objetos Personales", img: logoSeguroObjetos, list: ["Seguro de Bolso", "Seguro de Celulares", "Seguro de Notebooks"] },
    { title: "Seguros de Retiro", img: logoSeguroRetiro, list: ["Plan de Retiro Básico", "Plan de Retiro Plus"] },
    { title: "Seguros de Vida", img: logoSeguroVida, list: ["Vida Individual", "Vida Colectivo"] },
    { title: "Seguros para Comercios", img: logoSeguroComercio, list: ["Todo Riezgo Operativo", "Seguro para Incendio","Seguro para Robo"] },
    //{ title: "Seguros para Consorcios", img: logoSeguroConsorcio, list: ["Seguro para OTROS", "Seguro para OTROS"] },
    //{ title: "Responsabilidad Civil para Empresas", img: logoRespCivilEmpresa, list: ["Seguro para OTROS", "Seguro para OTROS"] },
    //{ title: "Seguros de Buques", img: logoSeguroBuque, list: ["Seguro para OTROS", "Seguro para OTROS"] },
    //{ title: "Seguros ART", img: logoSeguroART, list: ["Seguro para OTROS", "Seguro para OTROS"] },
    //{ title: "Seguros de Caucion para Empresas", img: logoSeguroCaucionEmpresa, list: ["Seguro para OTROS", "Seguro para OTROS"] },
  ];

  return (
    <div>
      {/* Intro: Personas / Empresas */}
      <section className="ContainerSeguros">
        <div className="cardSegurosIntro" style={{ backgroundImage: `url(${personasBg})` }}>
          <div className="cardOverlay">
            <h3>Personas</h3>
            <p>Contamos con todas las coberturas para vos y tu familia.</p>
            <Link to="/seguros/personas" className="cardLinkButton">Ver Seguros para Personas</Link>
          </div>
        </div>

        <div className="cardSegurosIntro" style={{ backgroundImage: `url(${empresasBg})` }}>
          <div className="cardOverlay">
            <h3>Empresas</h3>
            <p>Protegé tu negocio con planes a medida para empresas.</p>
            <Link to="/seguros/empresas" className="cardLinkButton">Ver Seguros para Empresas</Link>
          </div>
        </div>
      </section>

      <div className="ContainerSeguros">
        <h3>Conocé todas las coberturas y servicios de seguros que tenemos para vos, adaptados a tus necesidades.</h3>
      </div>

      {/* Grid de Seguros */}
      <section className="ContainerSegurosGrid5">
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
    </div>
  );
}

export default Seguros;
