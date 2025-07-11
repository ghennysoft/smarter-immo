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

function App() {
  
  const {currentUser} = useSelector(state=>state.user)

  return (
    <>
      {
        !currentUser
        ? <Routes>
            <Route path='*' element={<Navigate to='/' />}></Route>
            <Route path='/' element={<Home />}></Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/register' element={<Register />}></Route>
            <Route path='/properties' element={<Properties />}></Route>
            <Route path='/detail' element={<Detail />}></Route>
            <Route path='/about' element={<About />}></Route>
          </Routes>
        : <Routes>
            <Route path='*' element={<Navigate to='/' />}></Route>
            <Route path='/' element={<Home />}></Route>
            <Route path='/profile' element={<Profile />}></Route>
            {/* <Route path='/editProfile' element={<EditProfile />}></Route> */}
            <Route path='/properties' element={<Properties />}></Route>
            <Route path='/detail/:id' element={<Detail />}></Route>
            <Route path='/about' element={<About />}></Route>
            <Route path='/addProperty' element={<AddProperty />}></Route>
            <Route path='/myProperties' element={<MyProperties />}></Route>
          </Routes>
      }
    </>
  )
}

export default App
