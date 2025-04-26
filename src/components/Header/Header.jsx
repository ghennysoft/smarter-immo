import React, { useState } from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import { MenuIcon, User2Icon } from 'lucide-react'

const HeaderComponent = ({children}) => {

  const [openMenu, setOpenMenu] = useState(false);
  const [openLog, setOpenLog] = useState(false);

  return (
    <header>
        <div className="container">
          <nav className="nav justify-content-between align-items-center pt-lg-4 pb-1">
            <div className="d-flex align-items-center ">
              <img src="/logo-smarter-immo.png" width={100} alt="logo" style={{marginTop: "-25px"}} /> &nbsp; &nbsp; &nbsp;
              <ul className="nav pt-1 d-none d-lg-flex">
                <li className="nav-item"><Link to={"/"} className="nav-link">Accueil</Link></li>
                <li className="nav-item"><Link to={"/properties"} className="nav-link">Propriétés</Link></li>
                <li className="nav-item"><a href="/" className="nav-link">A propos</a></li>
                <li className="nav-item"><a href="/" className="nav-link">Contact</a></li>
              </ul>
            </div>
            <div className="d-flex position-relative pt-2">
              <span className='menuIconResp d-lg-none'><MenuIcon onClick={()=>{setOpenMenu(!openMenu)}} /></span> &nbsp;&nbsp;&nbsp;
              <span className='menuIconResp d-md-none'><User2Icon onClick={()=>{setOpenLog(!openLog)}} /></span>
              <ul className={`nav pt-1 d-lg-none ${openMenu?'open':'close'}`}>
                  <li className="nav-item"><Link to={"/"} className="nav-link">Accueil</Link></li>
                  <li className="nav-item"><Link to={"/properties"} className="nav-link">Propriétés</Link></li>
                  <li className="nav-item"><a href="/" className="nav-link">A propos</a></li>
                  <li className="nav-item"><a href="/" className="nav-link">Contact</a></li>
                </ul>
              <div className={`btns ${openLog?'open':'close'}`}>
                <Link to={'/register'} className='py-2 px-3 bg-primary'>S'inscrire</Link>
                <Link to={'/login'} className='py-2 px-3' style={{backgroundColor: 'rgb(247, 135, 6)', color: '#fff'}}>Se&nbsp;connecter</Link>
              </div>
            </div>
          </nav>
          
          {children}
        </div>
    </header>
  )
}

export default HeaderComponent
