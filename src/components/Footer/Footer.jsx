import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row m-0 py-5">
          <div className="col-lg-6">
            <div className="d-flex align-items-end mb-3" style={{marginTop: '-30px'}}>
              <img src="/logo-smarter-immo.png" width={80} alt="" />
              <h4 className='themeColor1' style={{fontWeight: 'bold'}}>Smarter Immo</h4>
            </div>
            <p>
              Votre partenaire de confiance pour tous vos projets immobiliers. <br />
              Nous vous accompagnons dans l'achat, <br /> la vente et la location de votre bien.
            </p>
          </div>
          <div className="col-md-6 col-lg-3 links">
            <b>Lien rapides</b>
            <Link to={'/'}>Accueil</Link>
            <Link to={'/properties'}>Propriétés</Link>
            <Link to={'/about'}>A propos</Link>
            <Link to={'/contact'}>Contact</Link>
          </div>
          <div className="col-md-6 col-lg-3">
            <b>Contact</b>
            <p className="my-2">+243 999 999 999</p>
            <p className="my-2">contact@immoelite.fr</p>
            <p className="my-2">123 Avenue des Champs-Élysées 75008 Paris, France</p>
          </div>
        </div>
        <hr />
        <p className='m-0 text-center copyright'>&copy; 2025 Smarter Immo. Tout droits réservés.</p>
      </div>
    </footer>
  )
}

export default Footer
