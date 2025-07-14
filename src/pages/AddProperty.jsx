import './Detail.css'
import HeaderComponent from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import { useState } from 'react'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { apiURL } from '../utils/variables'

const AddProperty = () => {

  const {currentUser} = useSelector(state=>state.user);
  
  const navigate = useNavigate();

  const [error, setError] = useState('');

  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState([]);
  console.log(images);
  
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    main_image: null,
    price: '',
    city: '',
    address: '',
    property_type: '',
    annonce_type: '',
    long: '',
    larg: '',
    bedrooms: 0,
    bathrooms: 0,
    equipments: '',
  });
  console.log(formData);
  formData?.images?.forEach(i=>console.log(i))
  
  const handleSubmit = async () => {
    setLoading(true)
    
    const myFormData = new FormData();
    myFormData.append('title', formData.title);
    myFormData.append('description', formData.description);
    myFormData.append('main_image', formData.main_image);
    myFormData.append('price', formData.price);
    myFormData.append('city', formData.city);
    myFormData.append('address', formData.address);
    myFormData.append('property_type', formData.property_type);
    myFormData.append('annonce_type', formData.annonce_type);
    myFormData.append('long', formData.long);
    myFormData.append('larg', formData.larg);
    myFormData.append('bedrooms', formData.bedrooms);
    myFormData.append('bathrooms', formData.bathrooms);
    myFormData.append('equipments', formData.equipments);

    if(images?.length !== 0){
      images?.forEach((file)=>{
        myFormData.append('images', file);
      })
    };
    


    axios({
      method: "post",
      url: `${apiURL}/properties/`,
      withCredentials: true,
      headers: {
        'Content-Type': 'multipart/form-data',
        'Accept': 'application/json',
        'Authorization': `Bearer ${currentUser.access}`,
      },
      data: myFormData,
    })
    .then((res)=>{
      navigate('/myProperties');
      setLoading(false);
      console.log(res.data);
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
                        <option value="maison">Maison</option>
                        <option value="appartement">Appartement</option>
                        <option value="studio">Studio</option>
                        <option value="villa">Villa</option>
                        <option value="terrain">Terrain</option>
                        <option value="commercial">Local commercial</option>
                      </select>
                    </label>
                  </div>
                  <div className="col-md-6 p-0">
                    <label className='pb-4 d-block px-1' htmlFor="annonce_type">
                      Type d'annonce *
                      <select name="annonce_type" id="annonce_type" defaultValue={""} onChange={(e) => {setFormData({...formData, annonce_type: e.target.value})}} className='form-control p-3 mt-2'>
                        <option value="" disabled>---------- choisir ----------</option>
                        <option value="À louer">À louer</option>
                        <option value="À vendre">À vendre</option>
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
                  <div className="col-md-6 p-0">
                    <label className='pb-4 d-block px-1' htmlFor="long">
                      Longueur
                      <input type="text" id='long' name='long' onChange={(e) => {setFormData({...formData, long: e.target.value})}} className='form-control p-3 mt-2' />
                    </label>
                  </div>
                  <div className="col-md-6 p-0">
                    <label className='pb-4 d-block px-1' htmlFor="larg">
                      Largeur
                      <input type="text" id='larg' name='larg' onChange={(e) => {setFormData({...formData, larg: e.target.value})}} className='form-control p-3 mt-2' />
                    </label>
                  </div>
                  <div className="col-md-6 p-0">
                    <label className='pb-4 d-block px-1' htmlFor="bedroom">
                      Chambres
                      <input type="text" id='bedroom' name='bedroom' onChange={(e) => {setFormData({...formData, bedrooms: e.target.value})}} className='form-control p-3 mt-2' />
                    </label>
                  </div>
                  <div className="col-md-6 p-0">
                    <label className='pb-4 d-block px-1' htmlFor="bathroom">
                      Salle de bain
                      <input type="text" id='bathroom' name='bathroom' onChange={(e) => {setFormData({...formData, bathrooms: e.target.value})}} className='form-control p-3 mt-2' />
                    </label>
                  </div>
                  <div className="col-12 p-0">
                    <label className='pb-4 d-block px-1' htmlFor="equipments">
                      Autres caractéristiques
                      <input type="text" id='equipments' name='equipments' onChange={(e) => {setFormData({...formData, equipments: e.target.value})}} className='form-control p-3 mt-2' />
                    </label>
                    <small className="text-muted">Séparez-les par une virgule. Ex: Piscine, Jardin, Cuisine, Garage</small>
                  </div>
                </div>
              </div>

              <div className="col-12 mb-5">
                <div className="row m-0">
                  <h4 style={{fontWeight: 'bolder', marginBottom: '30px'}}>Images</h4>
                  <div className="col-md-4 p-0">
                    <label className='pb-4 d-block px-1' htmlFor="main_image">
                      Image principale
                      <input type="file" id='main_image' name='main_image' onChange={(e) => {setFormData({...formData, main_image: e.target.files[0]})}} className='form-control p-3 mt-2' required />
                    </label>
                  </div>
                  &nbsp;&nbsp;&nbsp;
                  <div className="col-md-4 p-0">
                    <label className='pb-4 d-block px-1' htmlFor="images"> 
                      Autres images
                      <input type="file" multiple id='images' name='images' onChange={(e) => {setImages([...e.target.files])}} className='form-control p-3 mt-2' required />
                    </label>
                  </div>
                </div>
              </div>

              <div className="col-12">
                <button type="button" className='btn btn-primary p-3' onClick={handleSubmit}>Publier la propriété</button>
                {/* {
                  loading
                  ? <button type="button" className='btn btn-primary p-3 text-muted'>Publication en cours...</button>
                  : <button type="button" className='btn btn-primary p-3' onClick={handleSubmit}>Publier la propriété</button>
                } */}
              </div>
            </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default AddProperty;
