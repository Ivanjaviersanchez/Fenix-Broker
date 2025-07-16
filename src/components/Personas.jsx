import { Outlet } from "react-router-dom";
import "./Personas.css";

function Personas() {
  return (
    <div>
      <h3>Seguros para Personas</h3>
      <Outlet />
    </div>
    
  )
}

export default Personas