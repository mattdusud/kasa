import './Footer.css'
import { Link } from 'react-router-dom'
import logo from "../../assets/footer-logo.svg"
export default function Footer() {
  return (
    <footer className="footer">
      <img src={logo} alt="Logo Kasa" />
      <h2 className="footer-title">© 2020 Kasa. All rights reserved</h2>
    </footer>
  )
}