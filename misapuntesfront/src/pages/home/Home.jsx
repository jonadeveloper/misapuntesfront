import './Home.css';
import HomeImage from '../../assets/homeimage1.png'
export default function Home() {
  return (
    <section id="home">
      <div className='divhome'>
        <h1 className='title'>Tu Guía en el Universo del <br/> <span>Desarrollo Frontend.</span></h1>
        <p className='subtitle'>
          Apuntes claros y prácticos que te ayudarán a enfrentar los desafíos más comunes en el desarrollo frontend moderno.
        </p>
        <p className="author">
          Una iniciativa de <a href='https://instagram.com/jona.dev_ok' target="_blank">JonaDev</a> para la comunidad.
        </p>
      </div>
      <div className="divhome">
        <img className='homeimage' src={HomeImage} alt="imagen descriptiva" />
      </div>
    </section>
  )
}
