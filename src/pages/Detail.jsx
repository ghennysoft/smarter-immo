import './Detail.css'
import {Bath, Bed, Building2, DollarSign, Hotel, HousePlus, MapPin, MapPinIcon, UserRoundSearchIcon} from 'lucide-react'
import HeaderComponent from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

const Detail = () => {
  return (
    <div className='Detail'>
      <HeaderComponent>
      </HeaderComponent>

      <div className="property pt-5">
        <div className="container">
            <div className="row m-0">
              <div className="col-lg-9 item mb-3">
                <img src="/images/r1.png" alt="img" className='w-100 mb-3' />
                <h2 className="mt-2" style={{fontWeight: 'bolder'}}>Résidence Immo</h2>
                <div className="d-flex align-items-center">
                  <MapPinIcon width={18} />  &nbsp;
                  <span>Kinshasa, RDC</span>
                </div>
                <h5 className='mt-3'><b>Description</b></h5>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus, commodi quae voluptates rerum expedita ipsa numquam reiciendis eum iste ullam voluptas, perferendis blanditiis distinctio, laboriosam quo ut sit molestiae consequuntur.</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus, commodi quae voluptates rerum expedita ipsa numquam reiciendis eum iste ullam voluptas, perferendis blanditiis distinctio, laboriosam quo ut sit molestiae consequuntur.</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus, commodi quae voluptates rerum expedita ipsa numquam reiciendis eum iste ullam voluptas, perferendis blanditiis distinctio, laboriosam quo ut sit molestiae consequuntur.</p>
              </div>
              <div className="col-lg-3 item mb-3">
                <div className="py-3">
                  <h1>$500.00</h1>
                  <div className="row mt-3">
                    <div className="col-md-6 mb-3">
                      <div className="d-flex gap-2">
                        <div className='border-primary' style={{border: '2px solid #777', padding: '10px'}}>
                          <Bed width={20} height={20} className='text-primary' /> <br />
                        </div>
                        <b>
                          <small>Chambres</small> <br />
                          <span style={{fontSize: '0.9rem'}}>2</span>
                        </b>
                      </div>
                    </div>
                    <div className="col-md-6 mb-3">
                      <div className="d-flex gap-2">
                        <div className='border-primary' style={{border: '2px solid #777', padding: '10px'}}>
                          <Bath width={20} height={20} className='text-primary' /> <br />
                        </div>
                        <b>
                          <small>Garage</small> <br />
                          <span style={{fontSize: '0.9rem'}}>1</span>
                        </b>
                      </div>
                    </div>
                    <div className="col-md-6 mb-3">
                      <div className="d-flex gap-2">
                        <div className='border-primary' style={{border: '2px solid #777', padding: '10px'}}>
                          <Bath width={20} height={20} className='text-primary' /> <br />
                        </div>
                        <b>
                          <small>Salle de bain</small> <br />
                          <span style={{fontSize: '0.9rem'}}>2</span>
                        </b>
                      </div>
                    </div>
                    <div className="col-md-6 mb-3">
                      <div className="d-flex gap-2">
                        <div className='border-primary' style={{border: '2px solid #777', padding: '10px'}}>
                          <Bath width={20} height={20} className='text-primary' /> <br />
                        </div>
                        <b>
                          <small>Taille</small> <br />
                          <span style={{fontSize: '0.9rem'}}>7m x 10m</span>
                        </b>
                      </div>
                    </div>
                    <div className="col-md-6 mb-3">
                      <div className="d-flex gap-2">
                        <div className='border-primary' style={{border: '2px solid #777', padding: '10px'}}>
                          <Bath width={20} height={20} className='text-primary' /> <br />
                        </div>
                        <b>
                          <small>Status</small> <br />
                          <span style={{fontSize: '0.9rem'}}>A vendre</span>
                        </b>
                      </div>
                    </div>
                    <div className="col-md-6 mb-3">
                      <div className="d-flex gap-2">
                        <div className='border-primary' style={{border: '2px solid #777', padding: '10px'}}>
                          <Bath width={20} height={20} className='text-primary' /> <br />
                        </div>
                        <b>
                          <small>Type</small> <br />
                          <span style={{fontSize: '0.9rem'}}>Appartement</span>
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
                      <h4>John Doe</h4>
                    </div>
                  </div>
                </div>

                {/* <h5 className='themeColor1'>Maps</h5>
                <div className="map"></div> */}
              </div>
            </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Detail
