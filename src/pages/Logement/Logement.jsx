import './Logement.css'
import { useParams } from 'react-router-dom'

const Logement = () => {
    let {id} = useParams()

  return (
    <div className="logement">
        Page du logement id = {id}
    </div>
  )
}

export default Logement