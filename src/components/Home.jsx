import "./Home.css";
import Carousel from 'react-bootstrap/Carousel';
import CarouselImage1 from '../assets/SeguroAutos.png';
import CarouselImage2 from '../assets/SeguroAutos.png';
import CarouselImage3 from '../assets/SeguroAutos.png';


function Home() {
  return (
    <div>

      <div className="ContainerCarruselHome">
        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100" src={CarouselImage1} alt="First slide"/>
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={CarouselImage2} alt="Second slide"/>
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={CarouselImage3} alt="Third slide"/>
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>

    </div>
  )
}

export default Home