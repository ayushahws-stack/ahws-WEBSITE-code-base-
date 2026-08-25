import { Link } from 'react-router-dom'
import './PageBanner.css'

export default function PageBanner({ title, image = "./WEBSITE GALLERY/other images/Kids walking to school .png" }) {
  return (
    <div className="page-banner-slash">
      <div className="pbs-bg-image" style={{ backgroundImage: `url(${image})` }}></div>
      <div className="pbs-content container">
        <div className="pbs-text">
          <h1>{title}</h1>
          <p className="breadcrumb-nav">
            <Link to="/">Home</Link> / <span>{title}</span>
          </p>
        </div>
      </div>
    </div>
  )
}
