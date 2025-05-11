import React from 'react'
import './Detail.css'
import HeaderComponent from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import { Headphones, LucideUsersRound, NotebookTextIcon, Smile } from 'lucide-react'

const About = () => {
  return (
    <div className='About'>
      <HeaderComponent>
      </HeaderComponent>

      <div className="property py-5">
        <div className="container">
            <div className="row m-0">
              <div className="col-lg-6 item mb-3">
                <h4>Qui sommes-nous ?</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, voluptate delectus! Vitae, non eaque dolorum reprehenderit quam soluta magnam ex tempore tempora sit? Nihil esse ipsam aut eaque dolorem quis.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, voluptate delectus! Vitae, non eaque dolorum reprehenderit quam soluta magnam ex tempore tempora sit? Nihil esse ipsam aut eaque dolorem quis.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, voluptate delectus! Vitae, non eaque dolorum reprehenderit quam soluta magnam ex tempore tempora sit? Nihil esse ipsam aut eaque dolorem quis.</p>
              </div>

              <div className="col-lg-6 item mb-3">
                <div className="row" style={{minHeight: '200px'}}>
                  <div className="col-md-6">
                    <div className="row">
                    <div className="col-12 mb-2">
                      <img src='/images/about.jpg' className='w-100' style={{height: '160px', objectFit: 'cover'}} />
                    </div>
                    <div className="col-12 mb-2">
                      <img src='/images/about.jpg' className='w-100' style={{height: '160px', objectFit: 'cover'}} />
                    </div>
                  </div>
                  </div>
                  <div className="col-md-6 px-0">
                    <img src='/images/about.jpg' className='w-100 h-100' />
                  </div>
                </div>
              </div>

              <div className="col-12">
                <div className="row text-center mt-5 py-5">
                  <div className="col-md-6 col-lg-3 mb-3">
                    <Smile width={60} height={60} className='themeColor1' />
                    <h2 className='my-3'>50</h2>
                    <p>Lorem ipsum dolor sit amet.</p>
                  </div>
                  <div className="col-md-6 col-lg-3 mb-3">
                    <NotebookTextIcon width={60} height={60} className='themeColor1' />
                    <h2 className='my-3'>50</h2>
                    <p>Lorem ipsum dolor sit amet.</p>
                  </div>
                  <div className="col-md-6 col-lg-3 mb-3">
                    <Headphones width={60} height={60} className='themeColor1' />
                    <h2 className='my-3'>50</h2>
                    <p>Lorem ipsum dolor sit amet.</p>
                  </div>
                  <div className="col-md-6 col-lg-3 mb-3">
                    <LucideUsersRound width={60} height={60} className='themeColor1' />
                    <h2 className='my-3'>50</h2>
                    <p>Lorem ipsum dolor sit amet.</p>
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

export default About
