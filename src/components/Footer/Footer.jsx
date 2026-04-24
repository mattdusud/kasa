import './Footer.css'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <img src="/src/assets/footer-logo.svg" alt="Logo Kasa" />
      <h2 className="footer-title">© 2020 Kasa. All rights reserved</h2>
    </footer>
  )
}