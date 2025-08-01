import './Detail.css'
import {Bath, Bed, Building2, DollarSign, Hotel, HousePlus, MapPin, MapPinIcon, UserRoundSearchIcon} from 'lucide-react'
import HeaderComponent from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { apiURL } from '../utils/variables'

const Detail = () => {
  
    const {currentUser} = useSelector(state=>state.user);
    const {id} = useParams();
    const [property, setProperty] = useState([]);
  
    useEffect(()=>{
      const getProperty = async () => {
        await axios({
          method: "get",
          url: `${apiURL}/api/property/${id}`,
        })
        .then((res)=>{
          setProperty(res.data)
        })
        .catch((err)=>{
          // console.log(err)
        })
      }
      getProperty();
    }, [id]);

  return (
    <div className='Detail'>
      <HeaderComponent>
      </HeaderComponent>

      <div className="property pt-5">
        <div className="container">
            <div className="row m-0">
              <div className="col-lg-9 item mb-3">
                <img src={property?.main_image ? apiURL+property?.main_image : "/images/r1.png"} alt="img" className='w-100 mb-3' />
                <h2 className="mt-2" style={{fontWeight: 'bolder'}}>{property?.title}</h2>
                <div className="d-flex align-items-center mb-12">
                  <MapPinIcon width={18} className='text-primary' />  &nbsp;
                  <span>{property?.address}</span>
                </div>
                <h1 className='text-primary' style={{fontWeight: 'bold'}}>${property?.price}</h1>
                <h5 className='mt-4'><b>Description</b></h5>
                <p>{property?.description}</p>
                
                {
                  property?.equipments && 
                  <>
                    <h5 className='mt-4'><b>Equipements</b></h5>
                    <ul className='row'>
                      {
                        property?.equipments?.split(',').map((item, index)=>(
                          <div key={index} className="col-sm-6 col-md-4 p-3">
                            <li style={{textTransform: 'capitalize'}}>{item}</li>
                          </div>
                        ))
                      }
                    </ul>
                  </>
                }
              </div>
              <div className="col-lg-3 item mb-3">
                <div className="py-3">
                  <div className="row mt-3">
                    <div className="col-sm-6 mb-3">
                      <div className="d-flex gap-2">
                        <div className='border-primary' style={{border: '2px solid #777', padding: '10px'}}>
                          <Bed width={20} height={20} className='text-primary' /> <br />
                        </div>
                        <b>
                          <small>Chambres</small> <br />
                          <span style={{fontSize: '0.9rem'}}>{property?.bedrooms}</span>
                        </b>
                      </div>
                    </div>
                    <div className="col-sm-6 mb-3">
                      <div className="d-flex gap-2">
                        <div className='border-primary' style={{border: '2px solid #777', padding: '10px'}}>
                          <Bath width={20} height={20} className='text-primary' /> <br />
                        </div>
                        <b>
                          <small>Salle de bain</small> <br />
                          <span style={{fontSize: '0.9rem'}}>{property?.bathrooms}</span>
                        </b>
                      </div>
                    </div>
                    <div className="col-sm-6 mb-3">
                      <div className="d-flex gap-2">
                        <div className='border-primary' style={{border: '2px solid #777', padding: '10px'}}>
                          <Bath width={20} height={20} className='text-primary' /> <br />
                        </div>
                        <b>
                          <small>Taille</small> <br />
                          <span style={{fontSize: '0.9rem'}}>{property?.long} x {property?.larg} m</span>
                        </b>
                      </div>
                    </div>
                    <div className="col-sm-6 mb-3">
                      <div className="d-flex gap-2">
                        <div className='border-primary' style={{border: '2px solid #777', padding: '10px'}}>
                          <Bath width={20} height={20} className='text-primary' /> <br />
                        </div>
                        <b>
                          <small>Status</small> <br />
                          <span style={{fontSize: '0.9rem'}}>{property?.annonce_type}</span>
                        </b>
                      </div>
                    </div>
                    <div className="col-sm-6 mb-3">
                      <div className="d-flex gap-2">
                        <div className='border-primary' style={{border: '2px solid #777', padding: '10px'}}>
                          <Bath width={20} height={20} className='text-primary' /> <br />
                        </div>
                        <b>
                          <small>Type</small> <br />
                          <span style={{fontSize: '0.9rem'}}>{property?.property_type}</span>
                        </b>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="themeBgColor1 p-3">
                  <div className="row">
                    <div className="col-3 p-1">
                      <img src="/smarter_about.png" alt="" className='img-fluid' style={{borderRadius: "50%", border: "3px solid #ccc"}} />
                    </div>
                    <div className="col-9 mt-3">
                      <h6 style={{margin: '0px', fontSize: '0.5rem'}}>PROPRIETAIRE</h6>
                      <h4>{property?.owner?.first_name} {property?.owner?.last_name}</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Detail
