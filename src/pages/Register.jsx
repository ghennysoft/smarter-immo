import './Log.css';
import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { loginFailure, loginStart, loginSuccess } from '../redux/userSlice';
import HeaderComponent from '../Components/Header/Header'

const Register = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [gender, setGender] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch(loginStart())
        setLoading(true)
        axios({
            method: "post",
            url: "http://127.0.0.1:8000/api/accounts/register/",
            withCredentials: false,
            data: {first_name: firstname, last_name: lastname, email, phone, gender, password}
        })
        .then((res)=>{
            
            axios({
                method: "post",
                url: "http://127.0.0.1:8000/api/accounts/login/",
                withCredentials: false,
                data: {email, password}
            })
            .then((resp)=>{
                dispatch(loginSuccess(resp.data))
                navigate('/')
                setLoading(false)
            })
            .catch((e)=>{
                dispatch(loginFailure())
                setLoading(false)
            }) 

            setLoading(false)
        })
        .catch((err)=>{
            setLoading(false)
        })
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
                  <div className="col-md-6 p-4">
                        <h3 className="pb-3"><span className="red">Enregistrez-vous</span></h3>
                        <form onSubmit={handleSubmit}>
                            <label htmlFor="firstname">
                                Prénom
                                <input type="text" className="form-control" name="firstname" id="firstname" onChange={e=>setFirstname(e.target.value)} required />
                            </label>
                            <label htmlFor="lastname">
                                Nom
                                <input type="text" className="form-control" name="lastname" id="lastname" onChange={e=>setLastname(e.target.value)} required />
                            </label>
                            <label htmlFor="email">
                                Email
                                <input type="email" className="form-control" name="email" id="email" onChange={e=>setEmail(e.target.value)} />
                            </label>
                            <label htmlFor="phone">
                                Phone
                                <input type="text" className="form-control" name="phone" id="phone" onChange={e=>setPhone(e.target.value)} required />
                            </label>
                            <label htmlFor="gender">
                                Genre
                                <select name="gender" id="gender" className="form-control" defaultValue={""} onChange={e=>setGender(e.target.value)} required>
                                    <option value="" disabled>---------- choisir ----------</option>
                                    <option value="M">M</option>
                                    <option value="F">F</option>
                                </select>
                            </label>
                            <label htmlFor="password">
                                Mot de passe
                                <input type="password" className="form-control" name="password" id="password" onChange={e=>setPassword(e.target.value)} required />
                            </label>
                            {
                                loading
                                ? <button className='my-2' type="button" disabled>Chargement...</button>
                                : <button className='my-2' type="submit">S'enregistrer</button>
                            }
                            <br />
                            <small><Link to={'/login'} style={{color: 'inherit'}}>J'ai déjà un compte</Link></small>
                        </form>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Register
