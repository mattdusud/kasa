import './Banner.css'

const Banner = ({src,alt,text,light}) => {
  return (
    <div className="banner">
      <img src={src} alt={alt} className={`banner-image ${light ? 'banner-light' : 'banner-dark'}`}/>
        <h1 className="slogan">{text}</h1>
    </div>
  )
}

export default Banner