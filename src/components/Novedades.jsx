// src/components/Novedades.jsx
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Novedades.css";

// Importá tus flyers desde assets
import flyer1 from "../assets/FlyerMoto.jpeg";
import flyer2 from "../assets/FlyerMimoAuto.jpeg";
import flyer3 from "../assets/FlyerAutos.jpeg";
import flyer4 from "../assets/FlyerBolso.jpeg";
import flyer5 from "../assets/FlyerEfectos.jpeg";
import flyer6 from "../assets/FlyerPortatiles.jpeg";
import { div } from "framer-motion/client";

function Novedades() {
  const flyers = [flyer1, flyer2, flyer3, flyer4, flyer5, flyer6];
  const [index, setIndex] = useState(0);

  // Cambia el flyer cada 4 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % flyers.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [flyers.length]);

  return (
    <div>

      <div className="novedades-container">
        <h2 className="novedades-title">Novedades y Promociones {">>>"}</h2>

        <div className="novedades-carousel">
          <AnimatePresence mode="wait">
            <motion.img
              key={index}
              src={flyers[index]}
              alt={`Flyer ${index + 1}`}
              className="novedades-flyer"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.8 }}
            />
          </AnimatePresence>
        </div>
      </div>

    </div>
  );
}

export default Novedades;
