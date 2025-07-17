import { Outlet } from "react-router-dom";
import "./Personas.css";

function Personas() {
  return (
    <div className="containerPersonas">
      <h3>Seguros para Personas</h3>
      <Outlet />
    </div>
    
  )
}

export default Personas