import './Home.css'
import { Link } from 'react-router-dom'
import {Bath, Bed} from 'lucide-react'
import HeaderComponent from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

const MyProperties = () => {
  return (
    <div className='Home'>
      <HeaderComponent>
      </HeaderComponent>

      <div className="properties mt-lg-5">
        <div className="container">
          <h2 className='p-4'>Mes Propriétés</h2>
          <div className="list-items">
            <div className="row m-0">
              <div className="col-md-6 col-lg-4 item mb-4">
                <Link to={'/detail'}>
                  <img src="/images/r1.png" alt="img" />
                  <div className="d-flex justify-content-between pt-2">
                    <h3 className="themeColor1">$500</h3>
                    <p className="m-0" style={{ paddingTop: '2px' }}><small className='for'>A louer</small> &nbsp;</p>
                  </div>
                  <h6>Résidence IMMO KIN</h6>
                  <b className='text-dark'>2 <Bed width={15} /> &nbsp; 1 <Bath width={15} /></b>
                  <hr className="my-0" />
                </Link>
              </div>
              
              <div className="col-md-6 col-lg-4 item mb-4">
                <Link to={'/detail'}>
                  <img src="/images/r1.png" alt="img" />
                  <div className="d-flex justify-content-between pt-2">
                    <h3 className="themeColor1">$500</h3>
                    <p className="m-0" style={{ paddingTop: '2px' }}><small className='for'>A louer</small> &nbsp;</p>
                  </div>
                  <h6>Résidence IMMO KIN</h6>
                  <b className='text-dark'>2 <Bed width={15} /> &nbsp; 1 <Bath width={15} /></b>
                  <hr className="my-0" />
                </Link>
              </div>

              <div className="col-md-6 col-lg-4 item mb-4">
                <Link to={'/detail'}>
                  <img src="/images/r1.png" alt="img" />
                  <div className="d-flex justify-content-between pt-2">
                    <h3 className="themeColor1">$500</h3>
                    <p className="m-0" style={{ paddingTop: '2px' }}><small className='for'>A louer</small> &nbsp;</p>
                  </div>
                  <h6>Résidence IMMO KIN</h6>
                  <b className='text-dark'>2 <Bed width={15} /> &nbsp; 1 <Bath width={15} /></b>
                  <hr className="my-0" />
                </Link>
              </div>

              <div className="col-md-6 col-lg-4 item mb-4">
                <Link to={'/detail'}>
                  <img src="/images/r1.png" alt="img" />
                  <div className="d-flex justify-content-between pt-2">
                    <h3 className="themeColor1">$500</h3>
                    <p className="m-0" style={{ paddingTop: '2px' }}><small className='for'>A louer</small> &nbsp;</p>
                  </div>
                  <h6>Résidence IMMO KIN</h6>
                  <b className='text-dark'>2 <Bed width={15} /> &nbsp; 1 <Bath width={15} /></b>
                  <hr className="my-0" />
                </Link>
              </div>

              <div className="col-md-6 col-lg-4 item mb-4">
                <Link to={'/detail'}>
                  <img src="/images/r1.png" alt="img" />
                  <div className="d-flex justify-content-between pt-2">
                    <h3 className="themeColor1">$500</h3>
                    <p className="m-0" style={{ paddingTop: '2px' }}><small className='for'>A louer</small> &nbsp;</p>
                  </div>
                  <h6>Résidence IMMO KIN</h6>
                  <b className='text-dark'>2 <Bed width={15} /> &nbsp; 1 <Bath width={15} /></b>
                  <hr className="my-0" />
                </Link>
              </div>

              <div className="col-md-6 col-lg-4 item mb-4">
                <Link to={'/detail'}>
                  <img src="/images/r1.png" alt="img" />
                  <div className="d-flex justify-content-between pt-2">
                    <h3 className="themeColor1">$500</h3>
                    <p className="m-0" style={{ paddingTop: '2px' }}><small className='for'>A louer</small> &nbsp;</p>
                  </div>
                  <h6>Résidence IMMO KIN</h6>
                  <b className='text-dark'>2 <Bed width={15} /> &nbsp; 1 <Bath width={15} /></b>
                  <hr className="my-0" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default MyProperties;
