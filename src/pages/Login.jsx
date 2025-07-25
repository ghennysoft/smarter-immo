import { useState } from 'react'
import './Log.css';
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { loginFailure, loginStart, loginSuccess } from '../redux/userSlice'
import HeaderComponent from '../components/Header/Header'
import { useAuth } from '../context/AuthContext';

const Login = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch();
        const { signIn } = useAuth();

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false) 

    const handleSubmit = async (e) => {
      e.preventDefault();
      dispatch(loginStart())
      setLoading(true)
      try {
        const resp = await signIn({email, password})
        dispatch(loginSuccess(resp))
        setLoading(false)
        navigate('/')
      } catch (error) {
        dispatch(loginFailure())
        setLoading(false)
      }
        
    }

  return (
    <div>
      <HeaderComponent />

      <div className="sign">
        <div className="row justify-content-center p-2">
          <div className="col-11 col-md-9 col-lg-6">
              <div className="row box">
                <div className="col-md-6 d-none d-md-block" style={{background: 'url("/images/about.jpg")'}}>
                </div>
                <div className="col-md-6 p-4 mt-3">
                    <h3 className="pb-3"><span className="red">Connectez-vous</span></h3>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="email">
                            Email
                            <input type="email" className="form-control" name="email" id="email" onChange={e=>setEmail(e.target.value)} required />
                        </label>
                        <label htmlFor="password">
                            Mot de passe
                            <input type="password" className="form-control" name="password" id="password" onChange={e=>setPassword(e.target.value)} required />
                        </label>
                        <p className="m-0" style={{textAlign: 'right'}}>
                          <small><Link to={''}>Mot de passe oublié</Link></small>
                        </p>
                        {
                            loading
                            ? <button className='my-2' type="button" style={{backgroundColor: "#aaa", border: "1px solid #aaa", color: "#fff"}} disabled>Chargement...</button>
                            : <button className='my-2' type="submit">Se connecter</button>
                        }
                        <br />
                        <small><Link to={'/register'} style={{color: 'inherit'}}>Je n'ai pas encore de compte</Link></small>
                    </form>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
