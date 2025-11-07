import HomeCarrusel from "./HomeCarrusel";
import HomeElegirnos from "./HomeElegirnos";
import HomeSeguros from "./HomeSeguros";
import HomeCarruselSeguros from "./HomeCarruselSeguros";
import HomeContadores from "./HomeContadores";
import HomeCompanias from "./HomeCompanias";
import HomePreguntas from "./HomePreguntas";
import HomeRedes from "./HomeRedes";

import "./Home.css";
import '../colors.css';
import SEO from "./SEO";

function Home() {

  return (
    <div>
      <SEO 
        title="Organización FENIX - Seguros para Autos, Hogar y Empresas en Mar del Plata"
        description="Cotizá tu seguro con Organización FENIX. Asesoramiento profesional en seguros para autos, motos, hogar y empresas en Mar del Plata."
        keywords="seguros, mar del plata, broker, autos, motos, hogar, empresas, cotizar seguro, fenix"
        url="https://www.organizacionfenix.com/"
      />
      {/*      SECCIONES DE HOME      */}
      <HomeCarrusel />
      <HomeElegirnos />
      <HomeSeguros />
      <HomeCarruselSeguros />
      <HomeContadores />
      <HomeCompanias />
      <HomePreguntas />
      <HomeRedes />

    </div>
  )
}
export default Home;