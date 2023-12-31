import axios from 'axios'
//const axios = require('./lib/axios.js');
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../style/adminlogin.css'
import {useNavigate} from 'react-router'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import admin  from "../assets/adminn.png"

const AdminLogin = (e) => {
    let navigate=useNavigate()
    let[email,SetEmail]=useState("")
    let[password,SetPassword]=useState("")
    let adminlogin=(e)=>{
      e.preventDefault()
        axios.post(`http://localhost:7302/admin/verify-by-phone?email=${email}&password=${password}`)
        .then((res)=>{
          localStorage.setItem('admin',JSON.stringify(res.data.data))
          
            console.log("Success");
            
            toast.success("Admin verified")
            navigate('/adminhomepage')
        }).catch((e)=>{
          // alert("invalid email or password")
          toast.error("invalid admin details")
          console.log(e);
        })
        e.preventDefault()
      }

     return (
   <div className='adminlogin'>
          <ToastContainer/>
 
      <div className='formlogin'>
    
        <div id='ad'>
     
      <form action="" id='forme'>
      <h2 id='head'>Admin Login</h2>
          
          <input type="email" placeholder='Enter your email' value={email} onChange={(e)=>{SetEmail(e.target.value)}} />
          <br />
          <input type="password" placeholder='Enter your Password' value={password} onChange={(e)=>{SetPassword(e.target.value)}} />
          <br /><br />

          <button id='bt1' onClick={adminlogin}>Login</button>
          <p id='p'>New Admin? Click here for <Link to='/adminsignup'>Register</Link></p>
        </form>
        </div>
        <div id='pho'>
          <img src={admin} alt="" />
        </div>
      </div>
    </div>
  )
}

export default AdminLogin