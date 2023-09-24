import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../style/login.css'
import axios from 'axios'
import {useNavigate} from 'react-router'

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
    <div className='login'>
      
<form action="" className='form'>
<h1 >UserLogin</h1>  

    <input type="email" placeholder='Enter the UserName'  value={email} onChange={(e)=>{SetEmail(e.target.value)}} /> <br />
    <br />
    <input type="password" placeholder='Enter the password' value={password} onChange={(e)=>{SetPassword(e.target.value)}}  /><br /><br />
    <button id='button' onClick={userlogin}>Login</button>

    <p>New User?Click here  <Link to='/register'>Register</Link></p>
    <p>If Admin ?Login <Link to='/adminlogin' > Admin Login</Link></p>
</form>

    </div>
  )
}

export default  UserLogin