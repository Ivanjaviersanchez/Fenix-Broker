import { Link } from "react-router-dom";
import "./Seguros.css";
import personasBg from "../assets/CardPersonas.png";  
import empresasBg from "../assets/CardEmpresas.png"; 
import logoSeguroAuto from "../assets/LogoSeguroAuto.png"
import logoSeguroMoto from "../assets/LogoSeguroMoto.png"
import logoSeguroHogar from "../assets/LogoSeguroHogar.png"
import logoSeguroMovilidad from "../assets/LogoSeguroMovilidad.png"
import logoSeguroObjetos from "../assets/LogoSeguroObjetos.png"
import logoSeguroRetiro from "../assets/LogoSeguroRetiro.png"
import logoSeguroVida from "../assets/LogoSeguroVida.png"
import logoSeguroComercio from "../assets/LogoSeguroComercio.png"
import logoSeguroConsorcio from "../assets/LogoSeguroConsorcio.png"
import logoRespCivilEmpresa from "../assets/LogoRespCivilEmpresas.png"
import logoSeguroBuque from "../assets/LogoSeguroBuques.png"
import logoSeguroART from "../assets/LogoSeguroART.png"
import logoSeguroCaucionEmpresa from "../assets/LogoSeguroCaucionEmpresa.png"

function Seguros() {
  const segurosList = [
    { id: "autos", title: "SEGUROS PARA AUTOS", img: logoSeguroAuto, list: ["Responsabilidad Civil", "Terceros Completo", "Todo Riesgo"] },
    { id: "motos", title: "SEGUROS PARA MOTOS", img: logoSeguroMoto, list: ["Seguro Moto Base", "Seguro Moto Plus", "Seguro Moto Premium"] },
    { id: "hogar", title: "SEGUROS PARA EL HOGAR", img: logoSeguroHogar, list: ["Seguro Hogar Premium", "Seguro de Caución"] },
    { id: "movilidad", title: "SEGUROS DE MOVILIDAD", img: logoSeguroMovilidad, list: ["Bicicletas", "Monopatines"] },
    { id: "objetos", title: "OBJETOS PERSONALES", img: logoSeguroObjetos, list: ["Seguro de Bolso", "Seguro de Celulares", "Seguro de Notebooks"] },
    { id: "retiro", title: "SEGUROS DE RETIRO", img: logoSeguroRetiro, list: ["Plan de Retiro Básico", "Plan de Retiro Plus"] },
    { id: "vida", title: "SEGUROS DE VIDA", img: logoSeguroVida, list: ["Vida Individual", "Vida Colectivo"] },
    { id: "comercios", title: "SEGUROS PARA COMERCIOS", img: logoSeguroComercio, list: ["Todo Riezgo Operativo", "Seguro para Incendio","Seguro para Robo"] },
    { id: "consorcios", title: "SEGUROS PARA CONSORCIOS", img: logoSeguroConsorcio, list: ["Responsabilidad Civil", "Daños por incendio", "Cobertura integral"] },
    { id: "respcivil", title: "RESPONSABILIDAD CIVIL PARA EMPRESAS", img: logoRespCivilEmpresa, list: ["Responsabilidad Civil General", "Responsabilidad Profesional"] },
    { id: "buques", title: "SEGUROS DE BUQUES", img: logoSeguroBuque, list: ["Cobertura Total de Buques", "Responsabilidad Marítima"] },
    { id: "art", title: "SEGUROS ART", img: logoSeguroART, list: ["Cobertura por accidente", "Cobertura por enfermedad laboral"] },
    { id: "caucionempresas", title: "SEGUROS DE CAUCION PARA EMPRESAS", img: logoSeguroCaucionEmpresa, list: ["Caución Contractual", "Caución Judicial"] },
  ];

  return (
    <div>
      <div className="ContainerSegurosH3">
        <h3>Seguros Fenix {">>>"}</h3>
      </div>

      {/* Intro: Personas / Empresas */}
      <section className="ContainerPersonasEmpresas">
        <div className="cardSegurosIntro" style={{ backgroundImage: `url(${personasBg})` }}>
          <div className="cardOverlay">
            <h3>Personas</h3>
            <p>Contamos con todas las coberturas para vos y tu familia.</p>
            <Link to="/seguros/personas" className="cardLinkButtonVer">Ver Seguros {">>>"}</Link>
          </div>
        </div>

        <div className="cardSegurosIntro" style={{ backgroundImage: `url(${empresasBg})` }}>
          <div className="cardOverlay">
            <h3>Empresas</h3>
            <p>Protegé tu negocio con planes a medida para empresas.</p>
            <Link to="/seguros/empresas" className="cardLinkButtonVer">Ver Seguros {">>>"}</Link>
          </div>
        </div>
      </section>

      <div className="ContainerSegurosP">
        <p>Conocé todas las coberturas y servicios de seguros que tenemos para vos, adaptados a tus necesidades.</p>
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
              <Link to={`/seguros/${item.id}`} className="ButtonSeguro">Ver Seguros {">>>"}</Link>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Seguros;
