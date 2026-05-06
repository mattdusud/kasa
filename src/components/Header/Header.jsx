import './Header.css'
import { Link, NavLink } from 'react-router-dom'
import logo from "../../assets/logo.svg"

export default function Header() {
  return (
    <div className="header">
      <div className="header-logo">
        <img src={logo} alt="Logo Kasa" />
      </div>
      <nav className="header-nav">
        <NavLink to="/home" className="header-link">Accueil</NavLink>
        <NavLink to="/about" className="header-link">A Propos</NavLink>
      </nav>
    </div>
  )
}