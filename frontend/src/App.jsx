import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Footer from './Components/Footer/Footer';
import Contact from './Pages/Contact/Contact';
import Franchise from './Pages/Franchise/Franchise';
import MobileApp from './Pages/MobileApp/MobileApp';
import Navbar from './components/Navbar/Navbar';
import MenuPage from './Pages/MenuPage/MenuPage';
import DrinkSeriesPage from "./Pages/DrinkSeriesPage/DrinkSeriesPage";
import Locations from './Pages/Locations/Locations.jsx';
import Dashboard from './Pages/Dashboard/Dashboard.jsx';
import Request from './Pages/FranchiseRequests/Request.jsx';
import AddSeries from './Pages/AddSeries/AddSeries.jsx';
import FranchiseLocation from './Pages/AddFranchiseLocation/FranchiseLocation.jsx';
import AllNewsletter from './Pages/AllNewsletterEmails/AllNewsletter.jsx';
import AddDrinks from './Pages/AddDrinks/AddDrinks.jsx';
import DashboardMenu from './Pages/DashboardMenu/DashboardMenu.jsx';

function App() {
  const location = useLocation();
  const isDashboard = location.pathname.includes('/dashboard');

  return (
    <>
      {!isDashboard && <Navbar />}
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/franchise' element={<Franchise />} />
        <Route path='/mobile-app' element={<MobileApp />} />
        <Route path='/menu' element={<MenuPage />} />
        <Route path='/menu/:drink' element={<DrinkSeriesPage />} />
        <Route path='/locations' element={<Locations />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/dashboard/requests' element={<Request />} />
        <Route path='/dashboard/addseries' element={<AddSeries />} />
        <Route path='/dashboard/location' element={<FranchiseLocation />} />
        <Route path='/dashboard/newsletters' element={<AllNewsletter />} />
        <Route path='/dashboard/add-drinks' element={<AddDrinks />} />
        <Route path='/dashboard/menu' element={<DashboardMenu />} />

      </Routes>
      {!isDashboard && <Footer />}
    </>
  );
}

export default App;
