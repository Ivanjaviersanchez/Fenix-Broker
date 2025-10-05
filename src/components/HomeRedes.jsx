import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6'; // para el nuevo logo de Twitter
import "./HomeRedes.css";

function HomeRedes() {
  return (
    <div>
        
        {/* Redes sociales */}
        <div className='containerRedesHome'>
            <div className="tituloRedes">
                <span className="linea"></span>
                <h2>Seguinos en nuestras <span>Redes Sociales</span></h2>
                <span className="linea"></span>
            </div>

            <div className="redesIcons">
                <a className="facebook" href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                    <FaFacebookF />
                </a>
                <a className="twitter" href="https://x.com" target="_blank" rel="noopener noreferrer">
                    <FaXTwitter />
                </a>
                <a className="instagram" href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                    <FaInstagram />
                </a>
                <a className="youtube" href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                    <FaYoutube />
                </a>
                <a className="linkedin" href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                    <FaLinkedinIn />
                </a>
            </div>
        </div>

    </div>
  )
}

export default HomeRedes