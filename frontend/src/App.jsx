import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Footer from './Components/Footer/Footer'
import Contact from './Pages/Contact/Contact'
import Franchise from './Pages/Franchise/Franchise'
import MobileApp from './Pages/MobileApp/MobileApp'
import Navbar from './components/Navbar/Navbar'

function App() {

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/franchise' element={<Franchise/>} />
      <Route path='/mobile-app' element={<MobileApp/>} />
    </Routes>
    <Footer/>
    </>
  )
}

export default App
