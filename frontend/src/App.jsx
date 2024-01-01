import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Footer from './Components/Footer/Footer'
import Contact from './Pages/Contact/Contact'
import Franchise from './Pages/Franchise/Franchise'
import MobileApp from './Pages/MobileApp/MobileApp'
import Navbar from './components/Navbar/Navbar'
import MenuPage from './Pages/MenuPage/MenuPage'
import DrinkSeriesPage from "./Pages/DrinkSeriesPage/DrinkSeriesPage"
import Locations from './Pages/Locations/Locations.jsx'
function App() {

  return (
    <>
    <Navbar/>
    <Routes>
      <Route exact path='/' element={<Home/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/franchise' element={<Franchise/>} />
      <Route path='/mobile-app' element={<MobileApp/>} />
      <Route path='/menu' element={<MenuPage/>} />
      <Route path='/menu/:drink' element={<DrinkSeriesPage/>} />
      <Route path='/locations' element={<Locations/>} />

    </Routes>
    <Footer/>
    </>
  )
}

export default App
