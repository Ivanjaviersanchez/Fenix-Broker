import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import CardImg from "../assets/CardPersonas.png";
import "./Somosfenix.css";
import { div } from 'framer-motion/client';

function Somosfenix() {
  return (
    <div>

      <div className="ContainerCardSomosFenix">
        <Card className="cardSomosFenix">
          <div className="cardImageBackground" style={{ backgroundImage: `url(${CardImg})` }} />
          <Card.ImgOverlay className="cardOverlay">
            <Card.Title className="cardTitle">Somos Fenix {">>>"}</Card.Title>
            <Card.Text className="cardText">
              Con más de 30 años en el mercado, brindamos protección a personas, empresas e instituciones con coberturas que se adaptan a sus necesidades.
            </Card.Text>
          </Card.ImgOverlay>
        </Card>
      </div>

      <div className="sucursal-container">
        <Card className="sucursal-card">
          <div className="sucursal-text">
            <Card.Body>
              <Card.Title className="sucursal-title">Sucursales</Card.Title>
              <Card.Text className="sucursal-description">
                San Cristóbal Seguros logra estar cerca de sus asegurados a través de una amplia estructura en el país, conformada por 23 oficinas propias y una red de más de 6.000 productores asesores, que brindan atención personalizada a más de medio millón de asegurados.
              </Card.Text>
              <Button className="sucursal-btn" variant="primary">
                → Ver más
              </Button>
            </Card.Body>
          </div>
          <div className="sucursal-image">
            <Card.Img style={{ backgroundImage: `url(${CardImg})` }} alt="Sucursal" />
          </div>
        </Card>
      </div>

    </div>
    
  );
}

export default Somosfenix;