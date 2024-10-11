import '../navbar/Navbar.css'
import { Link} from "react-router-dom"
import Logo from '../../assets/logo.svg';
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaThreads } from "react-icons/fa6";


export default function Navbar() {
  return (
    <>
    <header>
      <Link to="/" className="linkDisabled">
      <div className="logo">
        <img src={Logo} width={'75px'} height={'75px'} alt='Logo-mis-apuntes-front'/>
        <h2>Mis Apuntes <span>Front</span></h2>
      </div>
      </Link>
      <nav className="menu-navigator">
        <Link className="item" to="/">Inicio</Link>
        <Link className="item" to="/apuntes">Apuntes</Link>
        <Link className="item" to="/sobre-mi">Sobre mi</Link>
        <Link className="item" to="/contactame">Contactame</Link>
      </nav>
      <nav className="social-menu">
        <a href="https://instagram.com/jona.dev_ok" target="_blank">
          <FaInstagram />
        </a>
        <a href="https://www.youtube.com/@jonadeveloper" target="_blank">
          <FaYoutube />
        </a>
        <a href="https://github.com/jonadeveloper/" target="_blank">
          <FaGithub />
        </a>
        <a href="https://www.threads.net/@jona.dev_ok" target="_blank">
          <FaThreads />
        </a>
      </nav>
    </header>
    </>
  )
}
