import './Logement.css'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import Carrousel from '../../components/Carrousel/Carrousel'
import logementsData from '../../data/logements.json'
import Rating from '../../components/Rating/Rating'
import Collapse from '../../components/Collapse/Collapse'

export default function Logement() {
  let { id } = useParams()
  const logement = logementsData.find(logement => logement.id === id)

  if (!logement) {
    return <Navigate to={"/Error"} />;
  }

  return (
    <div className="logement">
      <Carrousel images={logement.pictures} />
      <section className='logement-details'>
        <div className='logement-title-loc-tags'>
          <h1>{logement.title}</h1>
          <p>{logement.location}</p>
          <ul>
            {logement.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        </div>
        <div className='logement-host-rating'>
          <div className='logement-host-name-picture'>
            <p className='logement-host-name'>
              {logement.host.name}
            </p>
            <img className='logement-host-picture' src={logement.host.picture} />
          </div>
          <div className='logement-rating'>
            <Rating max='5' value={logement.rating} />
          </div>
        </div>
      </section>
      <section className='logement-description-equipment'>
        <Collapse id="Logement-Description" dropdownTitle={"Description"} dropdownContent={logement.description} />
        <Collapse id="Logement-Equipments" dropdownTitle={"Équipements"} dropdownContent={
          <ul>
            {logement.equipments.map((item, index) => (<li key={index}>{item}</li>))}
          </ul>} />
      </section>
    </div>
  )
}