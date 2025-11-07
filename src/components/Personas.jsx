import { Outlet, Link } from "react-router-dom";
import "./Personas.css";
import SEO from "./SEO";

import logoSeguroAuto from "../assets/LogoSeguroAuto.png"
import logoSeguroMoto from "../assets/LogoSeguroMoto.png"
import logoSeguroHogar from "../assets/LogoSeguroHogar.png"
import logoSeguroMovilidad from "../assets/LogoSeguroMovilidad.png"
import logoSeguroObjetos from "../assets/LogoSeguroObjetos.png"
import logoSeguroRetiro from "../assets/LogoSeguroRetiro.png"
import logoSeguroVida from "../assets/LogoSeguroVida.png"

function Personas() {
  const segurosList = [
      { id: "autos", title: "SEGUROS PARA AUTOS", img: logoSeguroAuto, list: ["Responsabilidad Civil", "Terceros Completo", "Todo Riesgo"] },
      { id: "motos", title: "SEGUROS PARA MOTOS", img: logoSeguroMoto, list: ["Seguro Moto Base", "Seguro Moto Plus", "Seguro Moto Premium"] },
      { id: "hogar", title: "SEGUROS PARA EL HOGAR", img: logoSeguroHogar, list: ["Seguro Hogar Premium", "Seguro de Caución"] },
      { id: "movilidad", title: "SEGUROS DE MOVILIDAD", img: logoSeguroMovilidad, list: ["Bicicletas", "Monopatines"] },
      { id: "objetos", title: "OBJETOS PERSONALES", img: logoSeguroObjetos, list: ["Seguro de Bolso", "Seguro de Celulares", "Seguro de Notebooks"] },
      { id: "retiro", title: "SEGUROS DE RETIRO", img: logoSeguroRetiro, list: ["Plan de Retiro Básico", "Plan de Retiro Plus"] },
      { id: "vida", title: "SEGUROS DE VIDA", img: logoSeguroVida, list: ["Vida Individual", "Vida Colectivo"] },
    ];

  return (
    <div>

      <SEO
        title="Seguros para Personas | Autos, Motos, Hogar y Vida"
        description="Protegé lo que más querés. Organización FENIX ofrece seguros para personas: autos, motos, hogar, accidentes personales, vida y más."
        keywords="seguros personas, autos, motos, hogar, vida, seguros individuales, fenix, mar del plata"
        url="https://www.organizacionfenix.com/seguros/personas"
      />


      <div className="ContainerPersonas">
        <h2>Seguros para Personas {">>>"}</h2>
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
              <Link to={`/seguros/${item.id}`} className="cardLinkButtonSeguro">Ver Seguros{">>>"}</Link>
            </div>
          </div>
        ))}
      </section>

      <Outlet /> 
    </div>
    
  )
}

export default Personas