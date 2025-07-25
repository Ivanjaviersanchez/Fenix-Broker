import './App.css'
/* import 'bootstrap/dist/css/bootstrap.min.css'; */
import {BrowserRouter,Routes,Route} from "react-router-dom";

//   IMPORT COMPONENTS
import Layout from './components/Layout';
import Home from './components/Home';
import Somosfenix from './components/Somosfenix';
import Seguros from './components/Seguros';
import Personas from './components/Personas';
import Empresas from './components/Empresas';
import Siniestros from './components/Siniestros';
import Novedades from './components/Novedades';
import Contacto from './components/Contacto';
import Cotiza from './components/Cotiza';
import Error from './components/Error';
import DetalleSeguro from './components/DetalleSeguro';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path='/somosfenix' element={<Somosfenix/>} />
            <Route path='/seguros' element={<Seguros />} />
            <Route path='/seguros/personas' element={<Personas />} />
            <Route path='/seguros/empresas' element={<Empresas />} />

            <Route path='/seguros/:id' element={<DetalleSeguro />} />
            
            <Route path='/siniestros' element={<Siniestros/>} />
            <Route path='/novedades' element={<Novedades/>} />
            <Route path='/contacto' element={<Contacto/>} />
            <Route path='/cotiza' element={<Cotiza/>} />
            <Route path='/*' element={<Error/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
