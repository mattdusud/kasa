import Card from '../Card/Card'
import './Homecards.css'
import logements from '../../data/logements.json'

export default function Homecards() {

    return (
        <div className="homecards">
            {logements.map((logement) => (
                <Card key={logement.id} logement={logement} />
            ))}
        </div>
    )
}