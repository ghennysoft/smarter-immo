import HeaderComponent from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const Profile = () => {
    const { signOut, user: data } = useAuth();
  
    const handleClick = async (e) => {
        e.preventDefault();
        signOut();
        // navigate('/');
    }
    
  return (
    <div className='About'>
      <HeaderComponent>
      </HeaderComponent>

      <main className="py-5">
            <div className="container detail-cour">
                <div className="row justify-content-center">
                  <div className="col-lg-8">
                    <div className="content">
                    <div className="d-flex gap-3 mb-3">
                      <div className='profile-picture' style={{width: '120px', height: '120px', borderRadius: '50%', background: '#ccc'}}></div>
                      <div className='d-flex flex-column mt-2'>
                        <h2 className="title m-0"><b>{data?.first_name} {data?.last_name}</b></h2>
                          
                        {/* Profile Data */}
                        <table className='mt-2'>
                          <tbody>
                            <tr>
                              <td>Email &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                              <td>: {data?.email}</td>
                            </tr>
                            <tr>
                              <td>Téléphone &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                              <td>: {data?.phone}</td>
                            </tr>
                            <tr>
                              <td>Genre &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                              <td>: {data?.gender?data?.gender:<em className='text-muted'><small>Non défini</small></em>}</td>
                            </tr>
                          </tbody>
                        </table>

                        {/* Menu */}
                        <br />
                        <h5><b>Mon compte</b></h5>
                        <ul className="list-group">
                          <li className="list-group-item">
                            <Link to={''} className="nav-link">Modifier le profile</Link>
                          </li>
                          <li className="list-group-item">
                            <Link to={''} className="nav-link">Changer le mot de passe</Link>
                          </li>
                          <li className="list-group-item">
                            <Link to={'/addProperty'} className="nav-link">Ajouter une propriété</Link>
                          </li>
                          <li className="list-group-item">
                            <Link to={'/myProperties'} className="nav-link">Mes propriétés</Link>
                          </li>
                          <li className="list-group-item">
                            <Link to={''} className="nav-link">Favories</Link>
                          </li>
                        </ul>
                        <button onClick={handleClick} style={{background: 'transparent', border: 'none', maxWidth: '150px'}} className='bg-danger text-white rounded py-1 px-2 my-2'>Deconnexion</button>

                      </div>
                    </div>
                    </div>
                  </div>
                </div>
            </div>
        </main>

      <Footer />
    </div>
  )
}

export default Profile
