import { Link } from 'react-router-dom';

import SegurosHomeAuto from '../assets/SegurosHomeAuto6.png';
import SegurosHomeHogar from '../assets/SegurosHomeHogar6666.png';
import SegurosComercio from '../assets/SegurosHomeComercio66.png';
import "./HomeSeguros.css";

function HomeSeguros() {
  return (
    <div>
        
        <h2 className='tituloSegurosHome'>Protegé todo con Fenix {">>>"}</h2>
      
        <div className="containerSegurosHome">
          <Link to="/seguros/autos" className="seguroItem">
            <img src={SegurosHomeAuto} alt="Seguro de Auto" />
            <h2 className="seguroTitulo">SEGURO DE AUTO</h2>
            <h2 className='seguroTituloBajo'>Coberturas a tu medida para cada viaje</h2>
            <h3>Cotíza tu Auto {">>>"}</h3>
          </Link>

          <Link to="/seguros/hogar" className="seguroItem">
            <img src={SegurosHomeHogar} alt="Seguro de Hogar" />
            <h2 className="seguroTitulo">SEGURO DE HOGAR</h2>
            <h2 className='seguroTituloBajo'>Protección para toda tu vivienda</h2>
            <h3>Cotíza tu Hogar {">>>"}</h3>
          </Link>

          <Link to="/seguros/comercios" className="seguroItem">
            <img src={SegurosComercio} alt="Seguro de Comercio" />
            <h2 className="seguroTitulo">INTEGRAL DE COMERCIO</h2>
            <h2 className='seguroTituloBajo'>Tu comercio protegido por Fenix</h2>
            <h3>Cotíza tu Comercio {">>>"}</h3>
          </Link>
        </div>

        <div className="tituloSegurosConBoton">
          <h2>Conóce todos nuestros seguros {">>>"} </h2>
          <Link to="/seguros" className="cardLinkButtonConoce">Ver Seguros</Link>
        </div>

    </div>
  )
}

export default HomeSeguros