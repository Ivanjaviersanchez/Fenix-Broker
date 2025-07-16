import { Outlet } from "react-router-dom";
import "./Empresas.css";

function Empresas() {
  return (
    <div>
        <h3>Seguros para empresas</h3>
        <Outlet />
    </div>
  )
}

export default Empresas