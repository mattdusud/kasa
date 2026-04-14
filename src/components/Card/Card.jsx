import './Card.css'
import { Link } from 'react-router-dom'

const Card = ({ logement }) => {
    return (
        <Link to={`/logement/${logement.id}`}>
            <div className="card" id={logement.id}>
                <div className="card-gradient"></div>
                <img src={logement.cover} alt={logement.title} className="card-cover" />
                <p className="card-title">{logement.title}</p>
            </div>
        </Link>
    )
}

export default Card