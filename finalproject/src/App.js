import logo from './logo.svg';
// import './App.css';
import Homepage from './Components/Homepage';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import ContactUs from './Components/ContactUs';
import UserLogin from './Components/UserLogin';
import AboutUs from './Components/AboutUs';
import Navbar from './Components/Navbar';
import UserSignUp from './Components/UserSignUp';
import AdminLogin from './Components/AdminLogin';
import AdminSignUp from './Components/AdminSignUp';
import LandingHomePage from './Components/LandingHomePage';
import Error from './Components/Error';
import AdminHomePage from './Components/AdminHomePage';


function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/about' element={<AboutUs/>}/>
        <Route path='/contact' element={<ContactUs/>}/>
        <Route path='/userlogin' element={<UserLogin/>}/>
        <Route path='/register' element={<UserSignUp/>}/>
        <Route path='/adminlogin'  element={<AdminLogin/>}/>
        <Route path='/adminsignup/*' element={<AdminSignUp/>}/>
        <Route path='/landinghomepage/*' element={<LandingHomePage/>}/>
        <Route path='/*' element={<Error/>}/>
        <Route path='/adminhomepage/*' element={<AdminHomePage/>}/>
      </Routes>
      </BrowserRouter>
     </div>
  );
}

export default App;
