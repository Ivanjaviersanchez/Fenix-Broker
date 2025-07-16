import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Container, Button } from "react-bootstrap";
import logo from "../assets/LogoImagen.png";
import Footer from "./Footer";
import "./Layout.css";

function Layout() {
  const [expanded, setExpanded] = useState(false);
  const [showSeguros, setShowSeguros] = useState(false);
  const [showSiniestros, setShowSiniestros] = useState(false);

  return (
    <>
        <Navbar className="navbarStyles" expand="md" sticky="top" expanded={expanded}>
            <Container>
                {/* LOGO y título */}
                <Navbar.Brand as={Link} to="/" onClick={() => setExpanded(false)} className="d-flex align-items-center">
                    <img src={logo} alt="Fenix logo" height="40" className="me-2"/>
                    <div className="logoTextStiles">
                        <span className="fw-bold fs-1 text-dark">Fenix</span>
                        <span className="fs-6 text-dark">Broker de seguros</span>
                    </div>
                
                </Navbar.Brand>

                {/* Botón Hamburguesa */}
                <Navbar.Toggle aria-controls="main-navbar-nav" onClick={() => setExpanded((prev) => !prev)}/>

                {/* Menú */}
                <Navbar.Collapse id="main-navbar-nav">
                    <Nav className="ms-auto text-center">
                        <Nav.Link as={Link} to="/" onClick={() => setExpanded(false)} className="mx-2">
                            Inicio
                        </Nav.Link>
                        <Nav.Link as={Link} to="/somosfenix" onClick={() => setExpanded(false)} className="mx-2">
                            SomosFenix
                        </Nav.Link>

                        {/* SEGUROS */}
                        <NavDropdown title="Seguros | Cotizaciones" id="seguros-dropdown" className="mx-2 custom-dropdown" show={showSeguros} onMouseEnter={() => setShowSeguros(true)} onMouseLeave={() => setShowSeguros(false)}>
                            <NavDropdown.Item as={Link} to="/seguros" onClick={() => {setExpanded(false); setShowSeguros(false);}}>
                                Nuestros productos
                            </NavDropdown.Item>

                            <NavDropdown.Divider />

                            <NavDropdown.Item as={Link} to="/seguros/personas" onClick={() => {setExpanded(false); setShowSeguros(false);}}>
                                Personas
                            </NavDropdown.Item>

                            <NavDropdown.Item as={Link} to="/seguros/empresas" onClick={() => {setExpanded(false); setShowSeguros(false);}}>
                                Empresas
                            </NavDropdown.Item>
                        </NavDropdown>

                        {/* SINIESTROS */}
                        <NavDropdown title="Siniestros | Denuncias" id="siniestros-dropdown" className="mx-2 custom-dropdown" show={showSiniestros} onMouseEnter={() => setShowSiniestros(true)} onMouseLeave={() => setShowSiniestros(false)}>
                            <NavDropdown.Item as={Link} to="/siniestros/asistencia" onClick={() => {setExpanded(false); setShowSiniestros(false); }}>
                                Asistencia mecánica
                            </NavDropdown.Item>

                            <NavDropdown.Item as={Link} to="/siniestros/art" onClick={() => {setExpanded(false); setShowSiniestros(false); }}>
                                ART Denuncias
                            </NavDropdown.Item>

                            <NavDropdown.Item as={Link} to="/siniestros/urgencias" onClick={() => {setExpanded(false); setShowSiniestros(false); }}>
                                Urgencias
                            </NavDropdown.Item>
                        </NavDropdown>

                        <Nav.Link as={Link} to="/novedades" onClick={() => setExpanded(false)} className="mx-2">
                            Novedades
                        </Nav.Link>
                        <Nav.Link as={Link} to="/contacto" onClick={() => setExpanded(false)} className="mx-2">
                            Contacto
                        </Nav.Link>
                        <Nav.Link as={Link} to="/cotiza" onClick={() => setExpanded(false)} className="cotiza-cta mx-2">
                            Cotizá Ahora 📈
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>

            </Container>
        </Navbar>

        <Outlet />
        <Footer />
    </>
  );
}

export default Layout;
