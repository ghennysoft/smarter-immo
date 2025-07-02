import './Detail.css'
import HeaderComponent from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import { BadgeCheckIcon, Headphones, Home, LucideUsersRound, NotebookTextIcon, Smile, Users } from 'lucide-react'

const About = () => {
  return (
    <div className='About'>
      <HeaderComponent>
      </HeaderComponent>

      <div className="property py-5">
        <div className="container">
            <div className="row m-0">
              <div className="col-lg-6 item mb-3">
                <h1 style={{fontWeight: 'bold', marginBottom: '20px'}}>Qui sommes-nous ?</h1>
                <p>
                  Chez ImmoElite, nous croyons que chaque client mérite un service d'exception. Notre mission est de transformer votre recherche immobilière en une expérience positive et enrichissante.
                </p>
                <p>
                  Nous nous engageons à vous offrir une expertise pointue, une transparence totale et un accompagnement personnalisé tout au long de votre projet.
                </p>

                <ul style={{lineHeight: '3rem'}}>
                  <li>Expertise locale approfondie</li>
                  <li>Service client personnalisé</li>
                  <li>Transparence dans toutes nos transactions</li>
                  <li>Innovation technologique</li>
                </ul>
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

              <div className="col-12 stats">
                <div className="row text-center mt-5 py-5">
                  <div className="col-md-6 col-lg-3 mb-3">
                    <Home width={60} height={60} className='themeColor1' />
                    <h2 className='my-3'>+50</h2>
                    <p>Propriétés vendus</p>
                  </div>
                  <div className="col-md-6 col-lg-3 mb-3">
                    <Users width={60} height={60} className='themeColor1' />
                    <h2 className='my-3'>3</h2>
                    <p>Années d'expériences</p>
                  </div>
                  <div className="col-md-6 col-lg-3 mb-3">
                    <BadgeCheckIcon width={60} height={60} className='themeColor1' />
                    <h2 className='my-3'>98%</h2>
                    <p>Taix de satisfaction</p>
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
