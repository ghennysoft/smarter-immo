import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Detail from './pages/Detail';
import Properties from './pages/Properties';
import Register from './pages/Register';
import Login from './pages/Login';
import About from './pages/About';
import Profile from './pages/Profile';
import { useSelector } from 'react-redux';
import AddProperty from './pages/AddProperty';
import MyProperties from './pages/MyProperties';
import EditProfile from './pages/EditProfile';
import PrivateRoute from './components/Auth/PrivateRoute';

function App() {
  
  const {currentUser} = useSelector(state=>state.user)
  
  // Deconnecter l'utilisateur si le token expire
  // if(new Date(currentUser?.expiry).toString() < new Date().toString()){
  //   localStorage.clear();
  // }
  
  return (
    <>
      <Routes>
            <Route path='*' element={<Navigate to='/' />}></Route>
            <Route path='/' element={<Home />}></Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/register' element={<Register />}></Route>
            <Route path='/properties' element={<Properties />}></Route>
            <Route path='/detail/:id' element={<Detail />}></Route>
            <Route path='/about' element={<About />}></Route>
            
            <Route path='/profile' element={<PrivateRoute>
                                <Profile />
                            </PrivateRoute>}></Route>
            {/* <Route path='/editProfile' element={<EditProfile />}></Route> */}
            <Route path='/addProperty' element={<PrivateRoute>
                                <AddProperty />
                            </PrivateRoute>}></Route>
            <Route path='/myProperties' element={<PrivateRoute>
                                <MyProperties />
                            </PrivateRoute>}></Route>
      </Routes>
    </>
  )
}

export default App
