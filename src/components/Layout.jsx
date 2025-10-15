import { useState, useEffect, useRef } from "react";
import { Link, Outlet } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import logo from "../assets/LogoFenixBlanco.png";
/* import logo from "../assets/LogoFinal.png";  */
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaMapMarkerAlt } from 'react-icons/fa';

import Footer from "./Footer";
import "./Layout.css";
import '../colors.css';

function Layout() {
  const [expanded, setExpanded] = useState(false);
  const [showSeguros, setShowSeguros] = useState(false);
  const [showSiniestros, setShowSiniestros] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const segurosRef = useRef(null);
  const siniestrosRef = useRef(null);

  // Detecta si es mobile
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Cierra dropdowns si haces clic fuera de ellos en mobile
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobile) {
        if (
          segurosRef.current &&
          !segurosRef.current.contains(event.target)
        ) {
          setShowSeguros(false);
        }
        if (
          siniestrosRef.current &&
          !siniestrosRef.current.contains(event.target)
        ) {
          setShowSiniestros(false);
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMobile]);

  const toggleSeguros = () => {
    if (isMobile) setShowSeguros((prev) => !prev);
  };

  const toggleSiniestros = () => {
    if (isMobile) setShowSiniestros((prev) => !prev);
  };

  return (
    <>
      <div className="navbarTop">
        <a className="location"  href="https://maps.app.goo.gl/a2mYtVHF3Js284DXA" target="_blank" rel="noopener noreferrer">
          <FaMapMarkerAlt />
        </a>
        <a className="facebook" href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebookF />
        </a>
        <a className="instagram" href="https://www.instagram.com/fenix.brokerseguros?igsh=M20zajJ0bmVlaXpy" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a className="linkedin" href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedinIn />
        </a>
      </div>
        
      <Navbar className="navbarStyles" expand="md" sticky="top" expanded={expanded}>
        <div className="container-fluid px-0">
          <Navbar.Toggle aria-controls="main-navbar-nav" onClick={() => setExpanded((prev) => !prev)} className="toggleStyles"/>

          <Navbar.Brand as={Link} to="/" onClick={() => setExpanded(false)} className="d-flex align-items-center">
            <img src={logo} alt="Fenix logo" className="me-1" />
            <div className="logoTextStiles">
              <h2 className="fw-bold text-dark">FENIX</h2>
            </div>
          </Navbar.Brand>

          <Navbar.Collapse id="main-navbar-nav">
            <Nav className="ms-auto text-center">

              {/* Inicio */}
              <Nav.Link as={Link} to="/" onClick={() => setExpanded(false)} className="mx-2">
                Inicio
              </Nav.Link>

              {/* Somos Fenix */}
              <Nav.Link as={Link} to="/somosfenix" onClick={() => setExpanded(false)} className="mx-2">
                SomosFenix
              </Nav.Link>

              {/* Seguros */}
              <NavDropdown
                ref={segurosRef}
                title="Seguros | Cotizaciones"
                id="seguros-dropdown"
                className="mx-2 custom-dropdown"
                show={showSeguros}
                onMouseEnter={() => !isMobile && setShowSeguros(true)}
                onMouseLeave={() => !isMobile && setShowSeguros(false)}
                onClick={toggleSeguros}
              >
                <NavDropdown.Item
                  as={Link}
                  to="/seguros"
                  onClick={() => {
                    setExpanded(false);
                    setShowSeguros(false);
                  }}
                >
                  Nuestros productos
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item
                  as={Link}
                  to="/seguros/personas"
                  onClick={() => {
                    setExpanded(false);
                    setShowSeguros(false);
                  }}
                >
                  Personas
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to="/seguros/empresas"
                  onClick={() => {
                    setExpanded(false);
                    setShowSeguros(false);
                  }}
                >
                  Empresas
                </NavDropdown.Item>
              </NavDropdown>

              {/* Siniestros */}
              <NavDropdown
                ref={siniestrosRef}
                title="Siniestros | Denuncias"
                id="siniestros-dropdown"
                className="mx-2 custom-dropdown"
                show={showSiniestros}
                onMouseEnter={() => !isMobile && setShowSiniestros(true)}
                onMouseLeave={() => !isMobile && setShowSiniestros(false)}
                onClick={toggleSiniestros}
              >
                <NavDropdown.Item
                  as={Link}
                  to="/siniestros/asistencia"
                  onClick={() => {
                    setExpanded(false);
                    setShowSiniestros(false);
                  }}
                >
                  Asistencia mecánica
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to="/siniestros/art"
                  onClick={() => {
                    setExpanded(false);
                    setShowSiniestros(false);
                  }}
                >
                  ART Denuncias
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to="/siniestros/urgencias"
                  onClick={() => {
                    setExpanded(false);
                    setShowSiniestros(false);
                  }}
                >
                  Urgencias
                </NavDropdown.Item>
              </NavDropdown>

              {/* Otros enlaces */}
              <Nav.Link as={Link} to="/novedades" onClick={() => setExpanded(false)} className="mx-2">
                Novedades
              </Nav.Link>
              <Nav.Link as={Link} to="/contacto" onClick={() => setExpanded(false)} className="mx-2">
                Contacto
              </Nav.Link>
              <Nav.Link as={Link} to="/cotiza" onClick={() => setExpanded(false)} className="cotiza-cta mx-3">
                Cotizá Ahora 📈
              </Nav.Link>

            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>

      <Outlet />

      {/* WhatsApp Floating Button */}
      <a href="https://wa.me/5491123456789?text=Hola%20quiero%20hablar%20con%20un%20asesor%20de%20seguros" className="whatsapp-float" target="_blank" rel="noopener noreferrer">
        <img src="https://cdn-icons-png.flaticon.com/512/124/124034.png" alt="WhatsApp"/>
      </a>

      {/* Instagram Floating Button */}
     {/*  <a href="https://www.instagram.com/tuusuario" className="instagram-float" target="_blank" rel="noopener noreferrer">
        <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="Instagram"/>
      </a> */}
      
      <Footer />
    </>
  );
}

export default Layout;

