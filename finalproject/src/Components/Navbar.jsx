import React from 'react'
import { Link } from 'react-router-dom'
import '../style/navbar.css'
import InfoIcon from '@mui/icons-material/Info';
import CallIcon from '@mui/icons-material/Call';
import LoginIcon from '@mui/icons-material/Login';


const Navbar = () => {
  return (
    <div className='navbar'>
        <div>
            <h1> AbhiTravels</h1>
        </div>
        <div className='options'>
          
        <Link to='/about' ><InfoIcon id='about'/>About Us</Link>
        <Link to='/contact' ><CallIcon id='contact'/>Contact Us</Link>
        <Link to='/userlogin' ><LoginIcon id='login'/> Login </Link>
        

</div>
    </div>
  )
}

export default Navbar