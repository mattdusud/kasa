import './Home.css'
import Banner from '../../components/Banner/Banner'
import Homecards from '../../components/Homecards/Homecards'
import photoHome from "../../assets/photoHome.png"
export default function Home() {
  return (
    <div className="home">
      <Banner src={photoHome} alt="Bannière Kasa" text="Chez vous, partout et ailleurs" light={false} />
      <Homecards />
    </div>
  )
}