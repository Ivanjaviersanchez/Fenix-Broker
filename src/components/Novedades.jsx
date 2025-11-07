import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Novedades.css";
import SEO from "./SEO";

import flyer1 from "../assets/FlyerMoto.jpeg";
import flyer2 from "../assets/FlyerMimoAuto.jpeg";
import flyer3 from "../assets/FlyerAutos.jpeg";
import flyer4 from "../assets/FlyerBolso.jpeg";
import flyer5 from "../assets/FlyerEfectos.jpeg";
import flyer6 from "../assets/FlyerPortatiles.jpeg";
import VideoInstitucional from "../assets/VideoInstitucional.mp4";

function Novedades() {
  const flyers = [flyer1, flyer2, flyer3, flyer4, flyer5, flyer6];
  const [index, setIndex] = useState(0);
  const [showControls, setShowControls] = useState(false);

  const videoRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % flyers.length);
    }, 10000);
    return () => clearInterval(interval);
  }, [flyers.length]);

  useEffect(() => {
    if (videoRef.current) videoRef.current.playbackRate = 0.7;
  }, []);

  const handleVideoEnd = () => setShowControls(true);

  return (
    <div className="novedades-container">

      <SEO
        title="Novedades | Noticias Instagram "
        description="Enterate de las últimas novedades, consejos y noticias del mundo de los seguros con Organización FENIX. Actualidad, prevención y tips útiles."
        keywords="novedades, noticias, seguros, consejos, organización fenix, mar del plata"
        url="https://www.organizacionfenix.com/novedades"
      />


      {/* === BLOQUE 1: FLYERS === */}
      <div className="novedades-instagram">
        
        <div className="novedades-carousel">
          <AnimatePresence mode="wait">
            <motion.img
              key={index}
              src={flyers[index]}
              alt={`Flyer ${index + 1}`}
              className="novedades-flyer"
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            />
          </AnimatePresence>
        </div>

        <div className="novedades-title">
          <h2>Seguinos en Instagram {">>>"}</h2>
          <p>Conocé todas las novedades, beneficios y coberturas actuales de FENIX</p>
          <h3>@fenix.brokerseguros</h3>

          <a
            href="https://www.instagram.com/fenix.brokerseguros?igsh=M20zajJ0bmVlaXpy"
            className="instagram-float"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
              alt="Instagram"
            />
          </a>
        </div>
      </div>

      {/* === BLOQUE 2: VIDEO === */}
      <div className="novedades-instagram reverse">
        <div className="novedades-title">
          <h2>Conocé Fénix {">>>"}</h2>
          <p>Descubrí quiénes somos y cómo trabajamos para vos</p>
        </div>

        <div className="novedades-carousel">
          <video
            ref={videoRef}
            src={VideoInstitucional}
            className="novedades-video"
            autoPlay
            muted
            playsInline
            onEnded={handleVideoEnd}
            controls={showControls}
          />
        </div>
      </div>
    </div>
  );
}

export default Novedades;

