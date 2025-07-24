import { Outlet, Link } from "react-router-dom";
import "./Personas.css";
import logoSeguroAuto from "../assets/LogoSeguroAuto.png"
import logoSeguroMoto from "../assets/LogoSeguroMoto.png"
import logoSeguroHogar from "../assets/LogoSeguroHogar.png"
import logoSeguroMovilidad from "../assets/LogoSeguroMovilidad.png"
import logoSeguroObjetos from "../assets/LogoSeguroObjetos.png"
import logoSeguroRetiro from "../assets/LogoSeguroRetiro.png"
import logoSeguroVida from "../assets/LogoSeguroVida.png"

function Personas() {
  const segurosList = [
      { title: "Seguros para Autos", img: logoSeguroAuto, list: ["Responsabilidad Civil", "Terceros Completo", "Todo Riesgo"] },
      { title: "Seguros para Motos", img: logoSeguroMoto, list: ["Seguro Moto Base", "Seguro Moto Plus", "Seguro Moto Premium"] },
      { title: "Seguros para el Hogar", img: logoSeguroHogar, list: ["Seguro Hogar Premium", "Seguro de Caución"] },
      { title: "Seguros de Movilidad", img: logoSeguroMovilidad, list: ["Bicicletas", "Monopatines"] },
      { title: "Objetos Personales", img: logoSeguroObjetos, list: ["Seguro de Bolso", "Seguro de Celulares", "Seguro de Notebooks"] },
      { title: "Seguros de Retiro", img: logoSeguroRetiro, list: ["Plan de Retiro Básico", "Plan de Retiro Plus"] },
      { title: "Seguros de Vida", img: logoSeguroVida, list: ["Vida Individual", "Vida Colectivo"] },
    ];

  return (
    <div>
      <div className="ContainerPersonas">
        <h2>Seguros para Personas</h2>
        <p>Conocé las coberturas y servicios de seguros para Personas que tenemos para vos, adaptados a tus necesidades.</p>
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

export default Personas