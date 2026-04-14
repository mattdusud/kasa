import Card from '../Card/Card'
import './Homecards.css'
import logements from '../../data/logements.json'

function Homecards() {

    return (
        <div className="homecards">
            {logements.map((logement) => (
                <Card key={logement.id} logement={logement} />
            ))}
        </div>
    )
}
export default Homecards