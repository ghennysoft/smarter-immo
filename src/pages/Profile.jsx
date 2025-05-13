import React, { useEffect, useState } from 'react'
import HeaderComponent from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import { Headphones, LucideUsersRound, NotebookTextIcon, Smile } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { loginFailure, logout } from '../redux/userSlice'

const Profile = () => {
    const {currentUser} = useSelector(state=>state.user)
    const userData = currentUser?.user
  
    const navigate = useNavigate();
    const dispatch = useDispatch();
  
    const handleClick = async (e) => {
        e.preventDefault();
        axios({
            method: "post",
            url: "http://127.0.0.1:8000/api/accounts/logout/",
            withCredentials: false,
            headers: {
              "Authorization": `Token ${currentUser.token}`,
            }
        })
        .then((res)=>{
            dispatch(logout())
            navigate('/')
            console.log(res)
        })
        .catch((err)=>{
            dispatch(loginFailure())
            console.log(err.response)
        })        
    }

    const [datas, setDatas] = useState([]) 
    useEffect(()=>{
        const getProfileData = async () => {
            const resp = await axios({
                method: "get",
                url: "http://127.0.0.1:8000/api/accounts/profile/",
                withCredentials: true,
                headers: {
                  "Authorization": `Token ${currentUser.token}`,
                },
            });
            setDatas(resp.data)
            return resp.data
        }
        getProfileData();
    }, [currentUser.token])

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
                      <div className='d-flex flex-column'>
                        <h3><b>{userData?.email}</b></h3>
                        <button onClick={handleClick} style={{background: 'transparent', border: 'none', maxWidth: '150px'}} className='bg-danger text-white rounded py-1 px-2 my-1'>Deconnexion</button>
                        { userData.is_superuser && <Link to={'/add-item'}>Ajouter une maison</Link> }
                      </div>
                    </div>
                      <h2 className="title">{userData.first_name} {userData.last_name}</h2>
                      <table>
                        <tbody>
                          <tr>
                            <td>Email &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                            <td>: {userData.email}</td>
                          </tr>
                          <tr>
                              <td>Téléphone &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                              <td>: {userData.phone}</td>
                          </tr>
                          <tr>
                              <td>Genre &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                              <td>: {userData.gender?userData.gender:<em className='text-muted'><small>Non défini</small></em>}</td>
                          </tr>
                          <tr>
                              <td>Profession &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                              <td>: {userData.profession?userData.profession:<em className='text-muted'><small>Non défini</small></em>}</td>
                          </tr>
                        </tbody>
                      </table>
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
