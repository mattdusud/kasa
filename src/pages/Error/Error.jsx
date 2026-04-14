import './Error.css'
import { Link } from 'react-router-dom'

function Error() {
  return (
    <div className="error">
        <div className="error-code">404</div>
        <div className="error-message">Oups! La page que vous demandez n'existe pas.</div>
        <Link to="/home" className="error-link">Retourner sur la page d'accueil</Link>
    </div>
  )
}

export default Error