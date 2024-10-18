import './Home.css';
import HomeImage from '../../assets/homeimage1.png'
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { IoLogoWebComponent } from "react-icons/io5";
import { FaReact } from "react-icons/fa6";
import { FaAngular } from "react-icons/fa6";
import { FaVuejs } from "react-icons/fa6";
import { SiAstro } from "react-icons/si";
import { RiSvelteLine } from "react-icons/ri";
import { RiNextjsFill } from "react-icons/ri";

export default function Home() {
  return (
    <>
    <section className="homecontainer">
      <div className='description'>
        <h1 className='title'>Tu Guía en el Universo del <br/> <span>Desarrollo Frontend.</span></h1>
        <p className='subtitle'>
          Apuntes claros y prácticos que te ayudarán a enfrentar los desafíos más comunes en el desarrollo frontend moderno.
        </p>
        <p className="author">
          Una iniciativa de <a href='https://instagram.com/jona.dev_ok' target="_blank">JonaDev</a> para la comunidad.
        </p>
      </div>
      <div className="homeimage">
        <img className='homeimage' src={HomeImage} alt="imagen descriptiva" />
      </div>
    </section>
    <div className="carousel">
      <div className="carousel-item">
        <FaHtml5 className='tech-logo' />
        <h3>Html</h3>
      </div>
      <div className="carousel-item">
        <FaCss3Alt className='tech-logo' />
        <h3>Css</h3>
      </div>
      <div className="carousel-item">
        <IoLogoJavascript className='tech-logo' />
        <h3>JavaScript</h3>
      </div>
      <div className="carousel-item">
        <IoLogoWebComponent className='tech-logo' />
        <h3>Web Components</h3>
      </div>
      <div className="carousel-item">
        <FaReact className='tech-logo' />
        <h3>React.js</h3>
      </div>
      <div className="carousel-item">
        <FaAngular className='tech-logo' />
        <h3>Angular.js</h3>
      </div>
      <div className="carousel-item">
        <FaVuejs className='tech-logo' />
        <h3>Vue.js</h3>
      </div>
      <div className="carousel-item">
        <SiAstro className='tech-logo' />
        <h3>Astro</h3>
      </div>
      <div className="carousel-item">
        <RiSvelteLine className='tech-logo' />
        <h3>Svelte</h3>
      </div>
      <div className="carousel-item">
        <RiNextjsFill className='tech-logo' />
        <h3>Next.js</h3>
      </div>
    </div>
      </>
  )
}
