import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../style/adminsignup.css'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

import immg from '../assets/stock-vector-black-thin-line-hand-holding-golden-key-icon-simple-outline-flat-style-trend-modern-logo-graphic-1921995167.jpg'

const AdminSignUp = () => {

    let  [name,setName] = useState  ('')

  let [phone,setPhone] = useState('')
  let [email,setEmail] = useState('')
  let [gst,setGst] = useState('')
  let [password,setPassword] = useState('')

  let data={name,phone,email,gst,password}

  let handleSubmit=()=>{
  
    axios.post('http://localhost:7302/admin',data)
    .then((res)=>{
      toast.success("Admin Signup success")
    
      //  alert ("submit successfully")
       console.log("hello")
  
    })
    .catch((error)=>{
      toast.error("failed to signup")

      // alert("invalid data")
      console.log(error)
    })
  }
  

  // console.log(email);
  // console.log(name);
  // console.log(aadhar);
  return (
    <div className='adminsignup'>
      <ToastContainer/>
      <div className='formsignup'>
        <div id='col-111'>
        
      <form action="" id='form1' className='flex flex-col'>
      <h2 id='title1'>Admin Sign Up</h2>
        <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} placeholder='Enter Your Name' />
        
        
        <br /><br />
        <input type="tel" pattern='[0-9]{10}' value={phone} onChange={(e)=>{setPhone(e.target.value)}} placeholder='Enter your Phone' />
        <br /><br />
        <input type="email" placeholder='Enter your email' value={email} onChange={(e)=>{setEmail(e.target.value)}} />
        <br /><br />
        <input type="tel" pattern='[0-9]{12}' value={gst} onChange={(e)=>{setGst(e.target.value)}} placeholder='Enter your gst no' />
        <br /><br />
        <input type="password" placeholder='Enter your Password' value={password} onChange={(e)=>{setPassword(e.target.value)}} />
        <br /><br />
        <input type="submit" id='bt2'  onClick={handleSubmit} />
    
        
      </form>

      </div>
      <div id='col-222'>
        <img src={immg} alt="" />
      </div>
      </div>
    </div>
  )
}

export default AdminSignUp