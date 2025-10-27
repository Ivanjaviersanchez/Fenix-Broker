import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 
import "./HomeCarruselSeguros.css";

// Importar logos de seguros
import logoSeguroAuto from "../assets/LogoSeguroAuto.png";
import logoSeguroMoto from "../assets/LogoSeguroMoto.png";
import logoSeguroHogar from "../assets/LogoSeguroHogar.png";
import logoSeguroMovilidad from "../assets/LogoSeguroMovilidad.png";
import logoSeguroObjetos from "../assets/LogoSeguroObjetos.png";
import logoSeguroRetiro from "../assets/LogoSeguroRetiro.png";
import logoSeguroVida from "../assets/LogoSeguroVida.png";
import logoSeguroComercio from "../assets/LogoSeguroComercio.png";
import logoSeguroConsorcio from "../assets/LogoSeguroConsorcio.png";
import logoRespCivilEmpresa from "../assets/LogoRespCivilEmpresas.png";
import logoSeguroBuque from "../assets/LogoSeguroBuques.png";
import logoSeguroART from "../assets/LogoSeguroART.png";
import logoSeguroCaucionEmpresa from "../assets/LogoSeguroCaucionEmpresa.png";


function CarruselSeguros() {

    // Lista de seguros (misma que en Seguros.jsx)
    const segurosList = [
    { id: "autos", title: "SEGUROS PARA AUTOS", img: logoSeguroAuto, list: ["Responsabilidad Civil", "Terceros Completo", "Todo Riesgo"] },
    { id: "motos", title: "SEGUROS PARA MOTOS", img: logoSeguroMoto, list: ["Seguro Moto Base", "Seguro Moto Plus", "Seguro Moto Premium"] },
    { id: "hogar", title: "SEGUROS PARA EL HOGAR", img: logoSeguroHogar, list: ["Seguro Hogar Premium", "Seguro de Caución"] },
    { id: "movilidad", title: "SEGUROS DE MOVILIDAD", img: logoSeguroMovilidad, list: ["Bicicletas", "Monopatines"] },
    { id: "objetos", title: "OBJETOS PERSONALES", img: logoSeguroObjetos, list: ["Seguro de Bolso", "Seguro de Celulares", "Seguro de Notebooks"] },
    { id: "retiro", title: "SEGUROS DE RETIRO", img: logoSeguroRetiro, list: ["Plan de Retiro Básico", "Plan de Retiro Plus"] },
    { id: "vida", title: "SEGUROS DE VIDA", img: logoSeguroVida, list: ["Vida Individual", "Vida Colectivo"] },
    { id: "comercios", title: "SEGUROS PARA COMERCIOS", img: logoSeguroComercio, list: ["Todo Riesgo Operativo", "Seguro para Incendio","Seguro para Robo"] },
    { id: "consorcios", title: "SEGUROS PARA CONSORCIOS", img: logoSeguroConsorcio, list: ["Responsabilidad Civil", "Daños por incendio", "Cobertura integral"] },
    { id: "respcivil", title: "RESPONSABILIDAD CIVIL PARA EMPRESAS", img: logoRespCivilEmpresa, list: ["Responsabilidad Civil General", "Responsabilidad Profesional"] },
    { id: "buques", title: "SEGUROS DE BUQUES", img: logoSeguroBuque, list: ["Cobertura Total de Buques", "Responsabilidad Marítima"] },
    { id: "art", title: "SEGUROS ART", img: logoSeguroART, list: ["Cobertura por accidente", "Cobertura por enfermedad laboral"] },
    { id: "caucionempresas", title: "SEGUROS DE CAUCION PARA EMPRESAS", img: logoSeguroCaucionEmpresa, list: ["Caución Contractual", "Caución Judicial"] },
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
        { breakpoint: 1200, settings: { slidesToShow: 3 } },
        { breakpoint: 991, settings: { slidesToShow: 2 } },
        { breakpoint: 768, settings: { slidesToShow: 2 } },
        { breakpoint: 575, settings: { slidesToShow: 1 } }
        ]
    };

  return (
    <section className="CarruselSegurosSection">
      <Slider {...settings}>
        {segurosList.map((item, index) => (
          <div className="cardSegurosHome" key={index}>
            {/* Logo como imagen (fallback robusto) */}
            <img src={item.img} alt={item.title} className="cardLogo" />

            <h3 className="cardTitleDefault">{item.title}</h3>

            <div className="cardOverlaySeguro">
              <h3 className="cardTitleHover">{item.title}</h3>
              <ul className="segurosList">
                {item.list.map((text, i) => (
                  <li key={i}>{text}</li>
                ))}
              </ul>
              <Link to={`/seguros/${item.id}`} className="ButtonSeguroCarrusel">Ver Seguros {">>>"}</Link>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}

export default CarruselSeguros;