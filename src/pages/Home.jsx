import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
import {Bath, Bed, Building2, DollarSign, Hotel, HousePlus, MapPin, UserRoundSearchIcon} from 'lucide-react'
import HeaderComponent from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useSelector } from 'react-redux'

const Home = () => {

  const {currentUser} = useSelector(state=>state.user);

  const [properties, setProperties] = useState([]);

  useEffect(()=>{
    const getProperties = async () => {
      await axios({
        method: "get",
        url: "http://127.0.0.1:8000/api/properties/",
        withCredentials: true,
        headers: {
          "Authorization": `Token ${currentUser.token}`,
        },
      })
      .then((res)=>{
        setProperties(res.data)
      })
      .catch((err)=>{
        console.log(err)
      })
    }
    getProperties();
  }, []);

  return (
    <div className='Home'>
      
      <HeaderComponent>
        <div className="hero mt-5">
          <div className="row justify-content-between m-0">
            <div className="col-lg-7 left px-0">
              <h4 className='title'>TROUVEZ VOTRE MAISON DE REVE AVEC SMARTER IMMO</h4>
              <h5>Tous les goûts - Tous les prix - Tout style - Tout lieu</h5>
              <div className="search-bar">
                <div className="row m-0 filter py-5" style={{gap: '0.3rem'}}>
                  <div className="col-lg-3 px-0 mb-2">
                    <div className="input-group">
                      <div className="input-group-text bg-muted">
                      <MapPin />
                      </div>
                      <input type="text" className='form-control' placeholder='Lieu' />
                    </div>
                  </div>
                  <div className="col-lg-3 px-0 mb-2">
                    <div className="input-group">
                      <div className="input-group-text bg-muted">
                      <DollarSign />
                      </div>
                      <input type="text" className='form-control' placeholder='Prix' />
                    </div>
                  </div>
                  <div className="col-lg-3 px-0 mb-2">
                    <div className="input-group">
                      <div className="input-group-text bg-muted">
                      <HousePlus />
                      </div>
                      <select name="for" defaultValue={""} id="for" className='form-control'>
                        <option disabled value="">Type</option>
                        <option value="rent">A louer</option>
                        <option value="sell">A vendre</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-3 px-0">
                    <button className='btn' style={{backgroundColor: 'rgb(247, 135, 6)', color: '#fff'}}>Rechercher</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-5 p-0 d-none d-lg-block">
              <img src="/images/hero-image.png" className='h-100' alt="hero" />
            </div>
          </div>
        </div>
      </HeaderComponent>

      <div className="about">
        <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="position-relative">
              <img src="/smarter_about.png" alt="img" /> 
            </div>
            {/* <div className="position-relative">
              <div className="box p-4">
              </div>
              <img src="/images/about.jpg" alt="img" /> 
            </div> */}
          </div>
          <div className="col-lg-6 pt-5">
            <h2 className='mb-3'><b className='text-primary'>Smarter</b> <b style={{color: 'rgb(247, 135, 6)'}}>Immo</b>, le meilleur endroit pour trouver une propriété</h2>
            <p>
              Rétrouvez des maisons adaptées quelque soit vos besoins et exigences en terme de localisation, du prix, de la composition, etc.
            </p>
            <ul style={{lineHeight: '40px'}}>
              <li>Mettez votre propriété en vente ou en location</li>
              <li>Sécurité garantie</li>
              <li>Payez après satisfaction</li>
              <li>Discutez avec le propriétaire</li>
              <li>Service client disponible 24h/7</li>
            </ul>
            <Link to={'/about'} className="btn" style={{backgroundColor: 'rgb(247, 135, 6)', color: '#fff'}}>En savoir plus</Link>
          </div>
        </div>
        </div>
      </div>

      <div className="services mt-5 py-5">
        <div className="container">
          <h2 style={{marginLeft: '20px', marginBottom: '50px'}}>Nos services</h2>
          <div className="row">
            <div className="col-md-6 col-lg-3 mb-3">
              <div className="d-flex flex-column align-items-center">
                <Hotel width={70} height={70} />
                <h6 className='my-2'>Appartements à louer</h6>
                <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro sint impedit, distinctio vel ex laboriosam, saepe commodi.</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 mb-3">
              <div className="d-flex flex-column align-items-center">
                <Building2 width={70} height={70} />
                <h6 className='my-2'>Maison à vendre</h6>
                <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro sint impedit, distinctio vel ex laboriosam, saepe commodi.</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 mb-3">
              <div className="d-flex flex-column align-items-center">
                <HousePlus width={70} height={70} />
                <h6 className='my-2'>Maison à louer</h6>
                <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro sint impedit, distinctio vel ex laboriosam, saepe commodi.</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 mb-3">
              <div className="d-flex flex-column align-items-center">
                <UserRoundSearchIcon width={70} height={70} />
                <h6 className='my-2'>Agent immobilier</h6>
                <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro sint impedit, distinctio vel ex laboriosam, saepe commodi.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="properties mt-5 py-5">
        <div className="container">
          <h2 style={{marginLeft: '20px'}}>Propriétés</h2>
          <div className="list-items mt-4">
            <div className="row m-0">

              {
                properties?.length !== 0
                  ? properties?.slice(0,3)?.map((property)=>(
                    <div className="col-md-6 col-lg-4 item mb-4">
                      <Link to={`/detail/${property?.id}`}>
                        <img src={property?.image ? 'http://127.0.0.1:8000'+property?.image : "/images/r1.png"} alt="img" />
                        <div className="d-flex justify-content-between pt-2">
                          <h3 className="themeColor1">${property?.price}</h3>
                          <p className="m-0" style={{ paddingTop: '2px' }}><small className='for'>{property?.annonce_type}</small> &nbsp;</p>
                        </div>
                        <h6>Résidence IMMO KIN</h6>
                        <b className='text-dark'>{property?.bedrooms} <Bed width={15} /> &nbsp; {property?.bathrooms} <Bath width={15} /></b>
                        <hr className="my-0" />
                      </Link>
                    </div>
                  ))
                  : <h4 className='text-muted mb-5'>Aucune proriété publié pour l'instant</h4>
              }
              
            </div>

            <Link to={"/properties"} className='btn btn-primary'>Voir plus de Propriétés</Link>
          </div>

          {/* <div className="cats">
            <h3>Par catégorie</h3>
            <div className="row m-0">
              <div className="col-md-4 mb-2">
                <div className='d-flex'>
                  <h5>Appartements</h5>
                  <h4>27</h4>
                </div>
              </div>
              <div className="col-md-4 mb-2">
                <div className='d-flex'>
                  <h5>Villas</h5>
                  <h4>14</h4>
                </div>
              </div>
              <div className="col-md-4 mb-2">
                <div className='d-flex'>
                  <h5>Maisons</h5>
                  <h4>46</h4>
                </div>
              </div>
            </div>
          </div> */}

          {/* <div className="cta">
            <div className="container">
              <div className="row m-0 box">
                <div className="col-md-6">
                  <img src="/images/call-to-action.jpg" alt="" className='img-fluid' style={{borderRadius: '10px'}} />
                </div>
                <div className="col-md-6">
                  <h2 style={{fontSize: '3rem'}} className='text-white'>Service client opérationel 24h/7</h2>
                  <h5 className="my-4 text-white">Notre équipe d'assistance est disponible, entrez en contact avec nous à tout moment</h5>
                  <button className="btn themeBgColor1 p-3">Nous Contacter</button>
                </div>
              </div>
            </div>
          </div> */}

          {/* <div className="partenaires">
            <div className="container">
              <h3>Nos partenaires</h3>
              <div className="d-flex">
                <img src="/vite.svg" alt="" />
                <img src="/vite.svg" alt="" />
                <img src="/vite.svg" alt="" />
                <img src="/vite.svg" alt="" />
                <img src="/vite.svg" alt="" />
                <img src="/vite.svg" alt="" />
              </div>
            </div>
          </div> */}
          
        </div>
      </div>

    <Footer />

    </div>
  )
}

export default Home
