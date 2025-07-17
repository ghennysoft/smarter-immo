import React, { useState } from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import { MenuIcon, User2Icon } from 'lucide-react'
import { useSelector } from 'react-redux'

const HeaderComponent = ({children}) => {
  
  const {currentUser} = useSelector(state=>state.user);
  
  const [openMenu, setOpenMenu] = useState(false);
  const [openLog, setOpenLog] = useState(false);

  return (
    <header>
        <div className="container">
          <nav className="nav justify-content-between align-items-center pt-lg-1 pb-1">
            <div className="d-flex align-items-center ">
              <Link to={"/"}><img src="/logo-smarter-immo.png" width={100} alt="logo" style={{marginTop: "-25px"}} /></Link> &nbsp; &nbsp; &nbsp;
              <ul className="nav pt-1 d-none d-lg-flex">
                <li className="nav-item"><Link to={"/"} className="nav-link">Accueil</Link></li>
                <li className="nav-item"><Link to={"/properties"} className="nav-link">Propriétés</Link></li>
                <li className="nav-item"><Link to={"/about"} className="nav-link">A propos</Link></li>
                <li className="nav-item"><Link to={"/"} className="nav-link">Contact</Link></li>
              </ul>
            </div>
            <div className="d-flex position-relative pt-2">
              <span className='menuIconResp d-lg-none'><MenuIcon onClick={()=>{setOpenMenu(!openMenu)}} /></span> &nbsp;&nbsp;&nbsp;
              {
                !currentUser
                ? <span className='menuIconResp d-md-none'><User2Icon onClick={()=>{setOpenLog(!openLog)}} /></span>
                : <Link to={'/profile'} className='menuIconResp d-md-none'><User2Icon /></Link>
              }
              <ul className={`nav pt-1 d-lg-none ${openMenu?'open':'close'}`}>
                <li className="nav-item"><Link to={"/"} className="nav-link">Accueil</Link></li>
                <li className="nav-item"><Link to={"/properties"} className="nav-link">Propriétés</Link></li>
                <li className="nav-item"><Link to={"/about"} className="nav-link">A propos</Link></li>
                <li className="nav-item"><Link to={"/"} className="nav-link">Contact</Link></li>
                {
                  currentUser?.user?.is_superuser &&
                  <li className="nav-item"><Link to={"/add"} className="nav-link">Ajouter</Link></li>
                }
              </ul>
              {
                !currentUser
                ? <div className={`btns mt-1 ${openLog?'open':'close'}`}>
                    <Link to={'/register'} className='py-2 px-3 bg-primary'>S'inscrire</Link>
                    <Link to={'/login'} className='py-2 px-3' style={{backgroundColor: 'rgb(247, 135, 6)', color: '#fff'}}>Se&nbsp;connecter</Link>
                  </div>
                : <div className={`btns mt-1 ${openLog?'open':'close'}`}>
                    <Link to={'/profile'} className='py-2 px-3' style={{backgroundColor: 'rgb(247, 135, 6)', color: '#fff'}}>Profile</Link>
                  </div>
              }
            </div>
          </nav>
          
          {children}
        </div>
    </header>
  )
}

export default HeaderComponent
