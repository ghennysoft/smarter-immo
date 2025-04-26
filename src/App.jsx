import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Detail from './pages/Detail';
import Properties from './pages/Properties';
import Register from './pages/register';
import Login from './pages/login';

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
