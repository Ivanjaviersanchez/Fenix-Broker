import CountUp from 'react-countup';
import { Link, useNavigate } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import "./HomeContadores.css";

function HomeContadores() {

    const navigate = useNavigate();

  const { ref, inView } = useInView({
    triggerOnce: false,     // Solo una vez
    threshold: 0.5          // 30% visible para activarse
  });

  const handleConocenosClick = () => {
    navigate('/somosfenix'); 
  };

  return (
    <div>
        
        {/* Contadores Siempre listos para asesorarte */}
        <div className="ContainerContadoresHome" ref={ref}>
            <h2>Siempre listos para asesorarte {">>>"}</h2>
            <p>El trato personalizado es una característica que nos destaca y posibilita forjar relaciones de largo plazo con nuestros clientes.</p>
        
            <div className="Contadores">
              <div className="ContadorItem">
                <h3>{inView && <CountUp end={200} duration={3} />}+</h3>
                <p>Empresas nos eligen</p>
              </div>
              <div className="ContadorItem">
                <h3>{inView && <CountUp end={30} duration={3} />}+</h3>
                <p>Años asesorando en el mercado</p>
              </div>
              <div className="ContadorItem">
                <h3>{inView && <CountUp end={100} duration={3} />}%</h3>
                <p>De los clientes nos recomiendan</p>
              </div>
            </div>
        
            <button className="BtnConocenos" onClick={handleConocenosClick}>Conócenos</button>
        </div>

    </div>
  )
}

export default HomeContadores;