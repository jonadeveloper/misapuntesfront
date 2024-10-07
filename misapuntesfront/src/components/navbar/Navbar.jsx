import { Link, Outlet } from "react-router-dom"
import '../navbar/Navbar.css'

export default function Navbar() {
  return (
    <>
    <header>
      <Link to="/" className="linkDisabled">
        <h2>Mis Apuntes <span>Front</span></h2>
      </Link>
      <nav>
        <Link className="item" to="/">Inicio</Link>
        <Link className="item" to="/about">About</Link>
        <Link className="item" to="/apuntes">Apuntes</Link>
        <Link className="item" to="/contactame">Contactame</Link>
      </nav>
    </header>
    <main role="main">
      <Outlet/>
    </main>
    </>
  )
}
