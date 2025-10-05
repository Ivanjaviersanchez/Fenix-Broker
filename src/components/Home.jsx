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

function Home() {

  return (
    <div>

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