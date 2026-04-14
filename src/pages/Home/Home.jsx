import './Home.css'
import Banner from '../../components/Banner/Banner'
import Homecards from '../../components/Homecards/Homecards'

function Home() {
  return (
    <div className="home">
      <Banner src="/src/assets/photoHome.png" alt="Bannière Kasa" text="Chez vous, partout et ailleurs" light={false} />
      <Homecards/>
    </div>
  )
}

export default Home