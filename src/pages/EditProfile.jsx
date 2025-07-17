import './Detail.css'
import HeaderComponent from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import { useState } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { loginSuccess } from '../redux/userSlice'
import { apiURL } from '../utils/variables'

const EditProfile = () => {
    const {currentUser} = useSelector(state=>state.user)
    const userData = currentUser?.user;
    
  const navigate = useNavigate();
    const dispatch = useDispatch();

  const [error, setError] = useState('');

  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    first_name: userData?.first_name || '',
    last_name: userData?.last_name || '',
    phone: userData?.phone || '',
    gender: userData?.gender || '',
    email: userData?.email || '',
    image: userData?.image || null,
  });
  console.log(formData);
  
  
  const handleSubmit = async () => {
    setLoading(true)
    const myFormData = new FormData();
    myFormData.append('first_name', formData.first_name);
    myFormData.append('last_name', formData.last_name);
    myFormData.append('phone', formData.phone);
    myFormData.append('gender', formData.gender);
    myFormData.append('email', formData.email);
    myFormData.append('image', formData.image);

    axios({
        method: "put",
        url: `${apiURL}/api/accounts/profile-edit/`,
        withCredentials: true,
        headers: {
          'Content-Type': 'multipart/form-data',
          "Authorization": `Token ${currentUser.token}`,
        },
        data: myFormData,
    })
    .then((res)=>{
      dispatch(loginSuccess(res.data))
      navigate('/profile');
      setLoading(false);
    })
    .catch((err)=>{
      console.log(err);
      
      setLoading(false);
      setError("Erreur de mise à jour, vérifiez que tous les champs sont bien remplis")
    })
  }

  return (
    <div className='About'>
      <HeaderComponent>
      </HeaderComponent>

      <div className="property py-5">
        <div className="container" style={{maxWidth: '800px'}}>
            <div className="row m-0">
              <div className="col-12 text-center mb-5">
                <h1 style={{fontWeight: 'bolder'}}>Modifier le profile</h1>
                {
                  error && <span className="alert alert-danger p-2">{error}</span>
                }
              </div>

              <div className="col-12 mb-5">
                <h4 style={{fontWeight: 'bolder', marginBottom: '30px'}}>Informations générales</h4>
                <div className="row m-0">
                  <div className="col-md-6 p-0">
                    <label className='pb-4 d-block px-1' htmlFor="first_name">
                      Prenom
                      <input type="text" id='first_name' name='first_name' value={formData?.first_name} onChange={(e) => {setFormData({...formData, first_name: e.target.value})}} className='form-control p-3 mt-2' required />
                    </label>
                  </div>
                  <div className="col-md-6 p-0">
                    <label className='pb-4 d-block px-1' htmlFor="last_name">
                      Nom
                      <input type="text" id='last_name' name='last_name' value={formData?.last_name} onChange={(e) => {setFormData({...formData, last_name: e.target.value})}} className='form-control p-3 mt-2' required />
                    </label>
                  </div>
                  <div className="col-md-6 p-0">
                    <label className='pb-4 d-block px-1' htmlFor="phone">
                      Téléphone
                      <input type="text" id='phone' name='phone' value={formData?.phone}  onChange={(e) => {setFormData({...formData, phone: e.target.value})}} className='form-control p-3 mt-2' required />
                    </label>
                  </div>
                  <div className="col-md-6 p-0">
                    <label className='pb-4 d-block px-1' htmlFor="gender">
                      Genre
                      <select name="gender" id="gender" value={formData?.gender} onChange={(e) => {setFormData({...formData, gender: e.target.value})}} className='form-control p-3 mt-2' required>
                        <option value="" disabled>---------- choisir ----------</option>
                        <option value="M">M</option>
                        <option value="F">F</option>
                      </select>
                    </label>
                  </div>
                  <div className="col-md-6 p-0">
                    <label className='pb-4 d-block px-1' htmlFor="email">
                      Email
                      <input type="email" id='email' name='email' value={formData?.email} onChange={(e) => {setFormData({...formData, email: e.target.value})}} className='form-control p-3 mt-2' required />
                    </label>
                  </div>
                </div>
              </div>

              <div className="col-12 mb-5">
                <div className="row m-0">
                  <h4 style={{fontWeight: 'bolder', marginBottom: '30px'}}>Photo de profile</h4>
                  <div className="col-md-4 p-0">
                    <label className='pb-4 d-block px-1' htmlFor="image">
                      {/* Choisir une image */}
                      <input type="file" id='image' name='image' onChange={(e) => {setFormData({...formData, image: e.target.files[0]})}} className='form-control p-3 mt-2' />
                    </label>
                  </div>
                </div>
              </div>

              <div className="col-12">
                {
                  loading
                  ? <button type="button" className='btn btn-primary p-3 text-muted'>Mise à jour en cours...</button>
                  : <button type="button" className='btn btn-primary p-3' onClick={handleSubmit}>Mettre à jour</button>
                }
              </div>
            </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default EditProfile;
