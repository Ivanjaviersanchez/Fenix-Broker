import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

import IconoSolucionesAgiles from '../assets/IconoSolucionesAgiles.png';
import IconoSegurosAdaptados from '../assets/IconoSegurosAdaptados.png';
import IconoResponsabilidad from '../assets/IconoResponsabilidad.png';
import "./HomeElegirnos.css";

function HomeElegirnos() {
  return (
    <div>
        
        {/* Porque elegirnos */}
        <div>
            <h2 className='tituloElegirnos'>Porque elegirnos {">>>"}</h2>

            <div className="ContainerElegirnos">
                {/* Card 1 */}
                <motion.div 
                    className="cardElegirnos"
                    style={{ transformPerspective: "1000px" }}
                    initial={{ opacity: 0, y: 50, rotateX: 15, scale: 0.9 }}
                    whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <div className="cardOverlayElegirnos">
                    <img src={IconoSolucionesAgiles} alt="Soluciones Ágiles" />
                    <h3>Soluciones ágiles</h3>
                    <p>
                        Nuestra organización cuenta con asesoría 24/7 ante cualquier situación. 
                        Nuestro equipo de asesores se encargará de darte servicio a la brevedad.
                    </p>
                    <Link to="/seguros/personas" className="cardLinkButtonElegirnos">Conoce más {">>"}</Link>
                    </div>
                </motion.div>

                {/* Card 2 */}
                <motion.div 
                    className="cardElegirnos"
                    style={{ transformPerspective: "1000px" }}
                    initial={{ opacity: 0, y: 50, rotateX: 15, scale: 0.9 }}
                    whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                >
                    <div className="cardOverlayElegirnos">
                    <img src={IconoSegurosAdaptados} alt="Seguros Adaptados" />
                    <h3>Seguros adaptados</h3>
                    <p>
                        Diseñados para dar la mejor y más adecuada cobertura a tus necesidades 
                        con respaldo garantizado de las mejores compañías del mercado.
                    </p>
                    <Link to="/seguros" className="cardLinkButtonElegirnos">Ver Seguros {">>"}</Link>
                    </div>
                </motion.div>

                {/* Card 3 */}
                <motion.div 
                    className="cardElegirnos"
                    style={{ transformPerspective: "1000px" }}
                    initial={{ opacity: 0, y: 50, rotateX: 15, scale: 0.9 }}
                    whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                >
                    <div className="cardOverlayElegirnos">
                    <img src={IconoResponsabilidad} alt="Responsabilidad y Compromiso" />
                    <h3>Responsabilidad y Compromiso</h3>
                    <p>
                        Fenix es una organización con más de 30 años en el mercado 
                        brindando confianza y respaldo a cada asegurado.
                    </p>
                    <Link to="/somosfenix" className="cardLinkButtonElegirnos">Conócenos {">>"}</Link>
                    </div>
                </motion.div>
            </div>
        </div>

    </div>
  )
}

export default HomeElegirnos;