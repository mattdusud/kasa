import './Card.css'

const Card = ({ logement }) => {
    return (
        <div className="card" id={logement.id}>
            <div className="card-gradient"></div>
            <img src={logement.cover} alt={logement.title} className="card-cover" />
            <p className="card-title">{logement.title}</p>
        </div>
    )
}

export default Card