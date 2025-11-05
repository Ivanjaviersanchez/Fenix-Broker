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
        title="Inicio | Organización FENIX"
        description="Seguros para autos, hogar, empresas y más. Cotizá tu póliza con Organización FENIX, asesoramiento integral en Mar del Plata."
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