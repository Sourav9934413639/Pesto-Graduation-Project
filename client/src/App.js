
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Login from './Pages/Login';
// import Register from './Pages/Register';
import ResetPassword from './Pages/ResetPassword';
import Home from './Pages/Home';
import PaymentPage from './Pages/PaymentPage';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import About from './Pages/About';
import ContactUs from './Pages/ContactUs';
import Profile from './Pages/Profile';
import ServicesPage from './Pages/Services/Services';
// import Cleaning from './Pages/Services/Cleaning';
// import RegistrationForm from './Pages/Registration';
//import SignInForm from './Pages/SignIn';
import { useContext, useEffect } from 'react';
import { Context } from './index';
import axios from 'axios';
import {Toaster} from 'react-hot-toast'
import MemberShipDetails from './Pages/PricingMap/MembershipDetails';
import CitySelection from './Pages/PricingMap/CitySelection';
import WorkShiftAndDate from './Pages/PricingMap/WorkShiftAndDate';
import RegistrationForm from './Pages/Register';
import SignInForm from './Pages/Login';
import ServicesDescription from './Pages/Services/ServicesDescription'
import ServiceSelection from './Pages/PricingMap/Serviceselection';
import DetailsRegardingBooking from './Pages/PricingMap/DetailsRegardingBooking'
import Admin from './Pages/Admin'
import SummaryPage from './Pages/SummaryPage';

function App() {
  const {setUser,setIsAuthenticated,setLoading}=useContext(Context)
  useEffect(()=>{
    setLoading(true);
    axios.get('http://localhost:4000/api/v1/userDetails',{withCredentials:true}).then(res=>{
      setUser(res.data.user);
      console.log(res.data.user)
      setIsAuthenticated(true);
      setLoading(false);
  }).catch((error)=>{
    console.log(error)
    setUser({});
    setIsAuthenticated(false);
    setLoading(false);
  })
    
  },[setIsAuthenticated,setLoading,setUser])
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/home' element={<Home/>} />
          <Route path='/login' element={<SignInForm/>} />
          <Route path='/register' element={<RegistrationForm/>} />
          <Route path="/api/v1/password/reset/:token" element={<ResetPassword />} />
          <Route path="/paymentsuccess" element={<PaymentPage/>} />
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<ContactUs/>}/>           
          <Route path='/profile' element={<Profile/>}/>
          <Route path="/services/All services" element={<ServicesPage/>}/>
          <Route path='/location' element={<CitySelection/>}/>
          <Route path='/membershipDetails' element={<MemberShipDetails/>}/>
          <Route path='/WorkShiftAndDate' element={<WorkShiftAndDate/>}/>
          <Route path="/Services/:title" element={<ServicesDescription />}></Route>
          <Route path='/CitySelection'  element={<CitySelection />}></Route>
          <Route path='/ServiceSelection' element={<ServiceSelection />}></Route>
          <Route path='/DetailsRegBooking' element= {<DetailsRegardingBooking/>} ></Route>
          <Route path='/summary' element= {<SummaryPage/>} ></Route>

          <Route path='/Admin' element= {<Admin/>} ></Route>
          

        </Routes>
        <Footer/>
        <Toaster/>
      </BrowserRouter>
    </div>
  );
}

export default App;