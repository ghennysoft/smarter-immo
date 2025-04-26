import React from 'react'
import './Detail.css'
import HeaderComponent from '../components/Header/Header'

const Detail = () => {
  return (
    <div className='Detail'>
      <HeaderComponent>
      </HeaderComponent>

      <div className="property pt-5">
        <div className="container">
            <div className="row m-0">
              <div className="col-lg-8 item mb-3">
                <img src="/images/r1.png" alt="img" className='w-100 mb-3' />
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus, commodi quae voluptates rerum expedita ipsa numquam reiciendis eum iste ullam voluptas, perferendis blanditiis distinctio, laboriosam quo ut sit molestiae consequuntur.</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus, commodi quae voluptates rerum expedita ipsa numquam reiciendis eum iste ullam voluptas, perferendis blanditiis distinctio, laboriosam quo ut sit molestiae consequuntur.</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus, commodi quae voluptates rerum expedita ipsa numquam reiciendis eum iste ullam voluptas, perferendis blanditiis distinctio, laboriosam quo ut sit molestiae consequuntur.</p>
              </div>
              <div className="col-4 item mb-3">
                <h5>Résidence IMMO KIN</h5>
                <div className="map"></div>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Detail
