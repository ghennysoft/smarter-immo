import './Detail.css'
import HeaderComponent from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import { useState } from 'react'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const AddProperty = () => {

  const {currentUser} = useSelector(state=>state.user);
  
  const navigate = useNavigate();

  const [error, setError] = useState('');

  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    image: null,
    property_type: '',
    annonce_type: '',
    price: '',
    area: '',
    bedrooms: 0,
    bathrooms: 0,
    address: '',
    city: '',
  });
  console.log(formData);
  
  const handleSubmit = async () => {
    setLoading(true)
    axios({
        method: "post",
        url: "http://127.0.0.1:8000/api/properties/",
        withCredentials: true,
        headers: {
          "Authorization": `Token ${currentUser.token}`,
        },
        data: formData,
    })
    .then((res)=>{
      navigate('/');
      setLoading(false);
    })
    .catch((err)=>{
      console.log(err);
      
      setLoading(false);
      setError("Erreur de publication, vérifiez que tous les champs sont bien remplis")
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
                <h1 style={{fontWeight: 'bolder'}}>Ajouter une propriété</h1>
                <p className='text-muted pb-2'>Remplissez le formulaire ci-dessous pour publier votre propriété</p>
                {
                  error && <span className="alert alert-danger p-2">{error}</span>
                }
              </div>

              <div className="col-12 mb-5">
                <h4 style={{fontWeight: 'bolder', marginBottom: '30px'}}>Informations générales</h4>
                <div className="row m-0">
                  <div className="col-md-6 p-0">
                    <label className='pb-4 d-block px-1' htmlFor="title">
                      Titre de l'annonce * 
                      <input type="text" id='title' name='title' onChange={(e) => {setFormData({...formData, title: e.target.value})}} className='form-control p-3 mt-2' required placeholder='Ex: Villa moderne avec piscine' />
                    </label>
                  </div>
                  <div className="col-md-6 p-0">
                    <label className='pb-4 d-block px-1' htmlFor="price">
                      Prix *
                      <input type="number" id='price' name='price' onChange={(e) => {setFormData({...formData, price: e.target.value})}} className='form-control p-3 mt-2' required placeholder='Ex: 300000' />
                    </label>
                  </div>
                  <div className="col-md-6 p-0">
                    <label className='pb-4 d-block px-1' htmlFor="property_type">
                      Type de propriété *
                      <select name="property_type" id="property_type" defaultValue={""} onChange={(e) => {setFormData({...formData, property_type: e.target.value})}} className='form-control p-3 mt-2'>
                        <option value="" disabled>---------- choisir ----------</option>
                        <option value="House">Maison</option>
                        <option value="Appartment">Appartement</option>
                        <option value="Studio">Studio</option>
                        <option value="Villa">Villa</option>
                        <option value="Land">Terrain</option>
                        <option value="Commercial">Local commercial</option>
                      </select>
                    </label>
                  </div>
                  <div className="col-md-6 p-0">
                    <label className='pb-4 d-block px-1' htmlFor="annonce_type">
                      Type d'annonce *
                      <select name="annonce_type" id="annonce_type" defaultValue={""} onChange={(e) => {setFormData({...formData, annonce_type: e.target.value})}} className='form-control p-3 mt-2'>
                        <option value="" disabled>---------- choisir ----------</option>
                        <option value="For_rent">A louer</option>
                        <option value="To_sell">A vendre</option>
                      </select>
                    </label>
                  </div>
                  <div className="col-12 p-0">
                    <label className='pb-4 d-block px-1' htmlFor="description">
                      Description *
                      <textarea name="description" id="description" rows={6} onChange={(e) => {setFormData({...formData, description: e.target.value})}} className="form-control mt-2" placeholder='Décrivez votre propriété en détail...'></textarea>
                    </label>
                  </div>
                </div>
              </div>

              <div className="col-12 mb-5">
                <div className="row m-0">
                  <h4 style={{fontWeight: 'bolder', marginBottom: '30px'}}>Localisation</h4>
                  <div className="col-md-6 p-0">
                    <label className='pb-4 d-block px-1' htmlFor="city">
                      Ville *
                      <input type="text" id='city' name='city' onChange={(e) => {setFormData({...formData, city: e.target.value})}} className='form-control p-3 mt-2' required placeholder='Ex: Kinshasa' />
                    </label>
                  </div>
                  <div className="col-md-6 p-0">
                    <label className='pb-4 d-block px-1' htmlFor="adress">
                      Adresse complète *
                      <input type="text" id='adress' name='adress' onChange={(e) => {setFormData({...formData, address: e.target.value})}} className='form-control p-3 mt-2' required placeholder='Ex: 12A Avenu du Palmier Gombe' />
                    </label>
                  </div>
                </div>
              </div>

              <div className="col-12 mb-5">
                <div className="row m-0">
                  <h4 style={{fontWeight: 'bolder', marginBottom: '30px'}}>Caractéristiques</h4>
                  <div className="col-md-4 p-0">
                    <label className='pb-4 d-block px-1' htmlFor="bedroom">
                      Chambres
                      <input type="text" id='bedroom' name='bedroom' onChange={(e) => {setFormData({...formData, bedrooms: e.target.value})}} className='form-control p-3 mt-2' />
                    </label>
                  </div>
                  <div className="col-md-4 p-0">
                    <label className='pb-4 d-block px-1' htmlFor="bathroom">
                      Salle de bain
                      <input type="text" id='bathroom' name='bathroom' onChange={(e) => {setFormData({...formData, bathrooms: e.target.value})}} className='form-control p-3 mt-2' />
                    </label>
                  </div>
                  <div className="col-md-4 p-0">
                    <label className='pb-4 d-block px-1' htmlFor="area">
                      Surface (m²)
                      <input type="text" id='area' name='area' onChange={(e) => {setFormData({...formData, area: e.target.value})}} className='form-control p-3 mt-2' />
                    </label>
                  </div>
                  {/* <div className="col-12 p-0">
                    <label className='pb-4 d-block px-1' htmlFor="other">
                      Équipements et caractéristiques
                      <input type="text" id='other' name='other' onChange={(e) => {setFormData({...formData, title: e.target.value})}} className='form-control p-3 mt-2' />
                    </label>
                  </div> */}
                </div>
              </div>

              <div className="col-12 mb-5">
                <div className="row m-0">
                  <h4 style={{fontWeight: 'bolder', marginBottom: '30px'}}>Images</h4>
                  <div className="col-md-4 p-0">
                    <label className='pb-4 d-block px-1' htmlFor="images">
                      Choisir une image
                      <input type="file" id='images' name='images' onChange={(e) => {setFormData({...formData, image: e.target.files[0]})}} className='form-control p-3 mt-2' required />
                    </label>
                  </div>
                </div>
              </div>

              <div className="col-12">
                {
                  loading
                  ? <button type="button" className='btn btn-primary p-3 text-muted'>Publication en cours...</button>
                  : <button type="button" className='btn btn-primary p-3' onClick={handleSubmit}>Publier la propriété</button>
                }
              </div>
            </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default AddProperty;
