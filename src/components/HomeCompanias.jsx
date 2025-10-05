
import LogoRivadavia from '../assets/CarruselLogoRivadavia.png';
import LogoAllianz from '../assets/CarruselLogoAllianz.png';
import LogoProvinciaART from '../assets/CarruselLogoProvinciaART.png';
import LogoAsociart from '../assets/CarruselLogoAsociart.png';
import LogoMercantil from '../assets/CarruselLogoMercantil.png';
import LogoSancor from '../assets/CarruselLogoSancor.png';
import LogoSura from '../assets/CarruselLogoSura.png';
import "./HomeCompanias.css";

function HomeCompanias() {
  return (
    <div>
        
        {/* Carrusel de compañías de seguros */}
        <div className='containerCompaniasCarrusel'>
            
            <div className="tituloCompanias">
                <span className="linea"></span>
                <h2>Aseguradoras que nos acompañan</h2>
                <span className="linea"></span>
            </div>

            <div className="carrusel-track">
                <div className="carrusel-slide">
                    <img src={LogoRivadavia} alt="Rivadavia Seguros" />
                </div>
                <div className="carrusel-slide">
                    <img src={LogoAllianz} alt="Allianz" />
                </div>
                <div className="carrusel-slide">
                    <img src={LogoProvinciaART} alt="Provincia ART" />
                </div>
                <div className="carrusel-slide">
                    <img src={LogoAsociart} alt="Asociart ART" />
                </div>
                <div className="carrusel-slide">
                    <img src={LogoMercantil} alt="Mercantil Andina" />
                </div>
                <div className="carrusel-slide">
                    <img src={LogoSancor} alt="Sancor Seguros" />
                </div>
                <div className="carrusel-slide">
                    <img src={LogoSura} alt="Sura" />
                </div>

                {/* Duplicamos los logos para que el loop no corte */}
                <div className="carrusel-slide">
                    <img src={LogoRivadavia} alt="Rivadavia Seguros" />
                </div>
                <div className="carrusel-slide">
                    <img src={LogoAllianz} alt="Allianz" />
                </div>
                <div className="carrusel-slide">
                    <img src={LogoProvinciaART} alt="Provincia ART" />
                </div>
                <div className="carrusel-slide">
                    <img src={LogoAsociart} alt="Asociart ART" />
                </div>
                <div className="carrusel-slide">
                    <img src={LogoMercantil} alt="Mercantil Andina" />
                </div>
                <div className="carrusel-slide">
                    <img src={LogoSancor} alt="Sancor Seguros" />
                </div>
                <div className="carrusel-slide">
                    <img src={LogoSura} alt="Sura" />
                </div>
            </div>
        </div>

    </div>
  )
}

export default HomeCompanias