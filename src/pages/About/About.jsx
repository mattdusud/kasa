import './About.css'
import Banner from '../../components/Banner/Banner'
import Collapse from '../../components/Collapse/Collapse'
import bannerImg from "../../assets/photoAbout.png"

export default function About() {
  return (
    <div className="about">
      <Banner src={bannerImg} alt="Image de fond de la bannière de la page À propos" text="" light={true} />
      <Collapse id="1" dropdownTitle="Fiabilité" dropdownContent="Les annonces postées sur Kasa garantissent une fiabilité totale. 
            Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes." />
      <Collapse id="2" dropdownTitle="Respect" dropdownContent="La bienveillance fait partie des valeurs fondatrices de Kasa. 
            Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme." />
      <Collapse id="3" dropdownTitle="Service" dropdownContent="La qualité du service est au cœur de notre engagement chez Kasa. 
          Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance." />
      <Collapse id="4" dropdownTitle="Sécurité" dropdownContent="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que 
            pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte 
            qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la 
            sécurité domestique pour nos hôtes." />
    </div>
  )
}