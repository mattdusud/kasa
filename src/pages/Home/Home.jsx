import './Home.css'
import Banner from '../../components/Banner/Banner'
import Homecards from '../../components/Homecards/Homecards'

function Home() {
  return (
    <div className="home">
      <Banner />
      <Homecards/>
    </div>
  )
}

export default Home