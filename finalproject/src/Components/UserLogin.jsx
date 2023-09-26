import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../style/login.css'
import axios from 'axios'
import {useNavigate} from 'react-router'
import image from '../assets/forgot-password-concept-illustration_114360-1123.avif'

const  UserLogin=()=> {
  let [email,SetEmail]=useState("")
  let [password,SetPassword]=useState("")
  let navigate=useNavigate()

  let userlogin=(e)=>{
    e.preventDefault()
    axios.post(`http://localhost:7302/user/verify-by-phone?email=${email}&password=${password}`)
    .then(()=>{
      alert("verified successgully")
      navigate('/landinghomepage')

    }).catch((error)=>{
      alert("invalid email or password")
    console.log(error)
    })
  }
  return (
    
    <div id='big'>   
       <div className='register'>
      <div className='col-1'>
      <h2 id='title' >UserLogin</h2>  
    <span id='enjoy' > Enjoy the Service</span>
      
     <form action="" id='form' className='flex flex-col  '>
  
    <input type="email" placeholder='Enter the UserName' id='in' value={email} onChange={(e)=>{SetEmail(e.target.value)}} /> <br />
    <br />
    <input type="password" placeholder='Enter the password' id='id' value={password} onChange={(e)=>{SetPassword(e.target.value)}}  /><br /><br />
    <button id='btn' onClick={userlogin}>Login</button>

    <p>New User?Click here  <Link to='/register'>Register</Link></p>
    <p>If Admin ?Login <Link to='/adminlogin' > Admin Login</Link></p>
</form>
</div>
<div className='col-2' >
  <img src={image} alt="" />
     
     </div>

    </div>
    </div>

  )
}

export default  UserLogin