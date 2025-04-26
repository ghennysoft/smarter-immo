import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Detail from './pages/Detail';
import Properties from './pages/Properties';
import Register from './pages/Register';
import Login from './pages/Login';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/properties' element={<Properties />}></Route>
        <Route path='/detail' element={<Detail />}></Route>
      </Routes>
    </>
  )
}

export default App
