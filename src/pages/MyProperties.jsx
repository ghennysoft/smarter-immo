import './Home.css'
import { Link } from 'react-router-dom'
import {Bath, Bed} from 'lucide-react'
import HeaderComponent from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import axios from 'axios'

const MyProperties = () => {

  const {currentUser} = useSelector(state=>state.user);

  const [properties, setProperties] = useState([]);

  useEffect(()=>{
      const getProperties = async () => {
        await axios({
          method: "get",
          url: "http://127.0.0.1:8000/api/myProperties/",
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
    console.log(properties);

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
                        <img src={property?.main_image ? 'http://127.0.0.1:8000'+property?.main_image : "/images/r1.png"} alt="img" height={200} />
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
                  : <h4 className='text-muted mb-5'>Vous n'avez publier aucune proriété</h4>
              }

            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default MyProperties;
