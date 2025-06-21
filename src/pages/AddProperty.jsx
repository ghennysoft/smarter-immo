import './Detail.css'
import HeaderComponent from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

const AddProperty = () => {

  return (
    <div className='About'>
      <HeaderComponent>
      </HeaderComponent>

      <div className="property py-5">
        <div className="container" style={{maxWidth: '800px'}}>
            <div className="row m-0">
              <div className="col-12 text-center mb-5">
                <h1 style={{fontWeight: 'bolder'}}>Ajouter une propriété</h1>
                <p className='text-muted'>Remplissez le formulaire ci-dessous pour publier votre propriété</p>
              </div>

              <div className="col-12 mb-5">
                <h4 style={{fontWeight: 'bolder', marginBottom: '30px'}}>Informations générales</h4>
                <div className="row m-0">
                  <div className="col-md-6 p-0">
                    <label className='pb-4 d-block px-1' htmlFor="title">
                      Titre de l'annonce * 
                      <input type="text" id='title' name='title' className='form-control p-3 mt-2' required placeholder='Ex: Villa moderne avec piscine' />
                    </label>
                  </div>
                  <div className="col-md-6 p-0">
                    <label className='pb-4 d-block px-1' htmlFor="price">
                      Prix *
                      <input type="number" id='price' name='price' className='form-control p-3 mt-2' required placeholder='Ex: 300000' />
                    </label>
                  </div>
                  <div className="col-md-6 p-0">
                    <label className='pb-4 d-block px-1' htmlFor="type_property">
                      Type de propriété *
                      <select name="type_property" id="type_property" className='form-control p-3 mt-2' defaultValue={'house'}>
                        <option value="house">Maison</option>
                        <option value="Appartment">Appartement</option>
                        <option value="studio">Studio</option>
                        <option value="villa">Villa</option>
                        <option value="land">Terrain</option>
                      </select>
                    </label>
                  </div>
                  <div className="col-md-6 p-0">
                    <label className='pb-4 d-block px-1' htmlFor="type_annonce">
                      Type d'annonce *
                      <select name="type_annonce" id="type_annonce" className='form-control p-3 mt-2' defaultValue={'for_rent'}>
                        <option value="for_rent">A louer</option>
                        <option value="to_sell">A vendre</option>
                      </select>
                    </label>
                  </div>
                  <div className="col-12 p-0">
                    <label className='pb-4 d-block px-1' htmlFor="description">
                      Description *
                      <textarea name="description" id="description" rows={6} className="form-control mt-2" placeholder='Décrivez votre propriété en détail...'></textarea>
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
                      <input type="text" id='city' name='city' className='form-control p-3 mt-2' required placeholder='Ex: Kinshasa' />
                    </label>
                  </div>
                  <div className="col-md-6 p-0">
                    <label className='pb-4 d-block px-1' htmlFor="adress">
                      Adresse complète *
                      <input type="text" id='adress' name='adress' className='form-control p-3 mt-2' required placeholder='Ex: 12A Avenu du Palmier Gombe' />
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
                      <input type="text" id='bedroom' name='bedroom' className='form-control p-3 mt-2' />
                    </label>
                  </div>
                  <div className="col-md-4 p-0">
                    <label className='pb-4 d-block px-1' htmlFor="bathroom">
                      Salle de bain
                      <input type="text" id='bathroom' name='bathroom' className='form-control p-3 mt-2' />
                    </label>
                  </div>
                  <div className="col-md-4 p-0">
                    <label className='pb-4 d-block px-1' htmlFor="area">
                      Surface (m²)
                      <input type="text" id='area' name='area' className='form-control p-3 mt-2' />
                    </label>
                  </div>
                  <div className="col-12 p-0">
                    <label className='pb-4 d-block px-1' htmlFor="other">
                      Équipements et caractéristiques
                      <input type="text" id='other' name='other' className='form-control p-3 mt-2' />
                    </label>
                  </div>
                </div>
              </div>

              <div className="col-12 mb-5">
                <div className="row m-0">
                  <h4 style={{fontWeight: 'bolder', marginBottom: '30px'}}>Images</h4>
                  <div className="col-md-4 p-0">
                    <label className='pb-4 d-block px-1' htmlFor="images">
                      Choisir des images
                      <input type="file" id='images' name='images' className='form-control p-3 mt-2' />
                    </label>
                  </div>
                </div>
              </div>

              <div className="col-12">
                <button type="button" className='btn btn-primary p-3'>Publier la propriété</button>
              </div>
            </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default AddProperty;
