import './Home.css'
import { Link } from 'react-router-dom'
import {Bath, Bed} from 'lucide-react'
import HeaderComponent from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { apiURL } from '../utils/variables'

const Properties = () => {

  const {currentUser} = useSelector(state=>state.user);

  const [properties, setProperties] = useState([]);

  useEffect(()=>{
    const getProperties = async () => {
      await axios({
        method: "get",
        url: `${apiURL}/api/property-list/`,
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
      </HeaderComponent>

      <div className="properties mt-lg-5">
        <div className="container">
          <h2 className='p-4'>Propriétés</h2>
          <div className="list-items">
            <div className="row m-0">

              {
                properties?.length !== 0
                  ? properties?.map((property)=>(
                    <div key={property?.id} className="col-md-6 col-lg-4 item mb-4">
                      <Link to={`/detail/${property?.id}`}>
                        <img src={property?.main_image ? property?.main_image : "/images/r1.png"} alt="img" height={200} />
                        <div className="d-flex justify-content-between pt-2">
                          <h3 className="themeColor1">${property?.price}</h3>
                          <p className="m-0" style={{ paddingTop: '2px' }}><small className='for'>{property?.annonce_type}</small> &nbsp;</p>
                        </div>
                        <h6>{property?.title}</h6>
                        <b className='text-dark'>{property?.bedrooms} <Bed width={15} /> &nbsp; {property?.bathrooms} <Bath width={15} /></b>
                        <hr className="my-0" />
                      </Link>
                    </div>
                  ))
                  : <h4 className='text-muted mb-5'>Aucune proriété publié pour l'instant</h4>
              }

            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Properties
