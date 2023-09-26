import axios from 'axios'
import React, { useState } from 'react'
import '../style/usersignup.css'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

import  pic from '../assets/passengers-waiting-bus-city-queue-town-road-flat-vector-illustration-public-transport-urban-lifestyle_74855-8493.avif'

const UserSignUp = () => {

let[name,SetName]=useState("")
let[date,SetDate]=useState("")
let[phone,SetPhone]=useState("")
let[email,SetEmail]=useState("")
let[adhar,SetAdhar]=useState("")
let[password,SetPassword]=useState("")
let data={name,date,phone,email,adhar,password}
let handleSubmit=()=>{
  
  axios.post('http://localhost:7302/user',data)
  .then((res)=>{
    
    //  alert ("submit successfully")
    toast.success("User SignUp Successful ")
     console.log("hello")

  })
  .catch((error)=>{
    // alert("invalid data")
    toast.error("invalid Details")
    console.log(error)
  })
}


  return (
    <div id='bigg'>
    
        <div className='signn'>
          <ToastContainer/>
          <div className='col-11'>
           
        <form action=""  id='formm' className=' flex  flex-col'>
        <h2 id='titleee' >UserSign Up</h2>
           <span id='enjoyy' >Create New Account</span>
            <input type="text"  value={name} onChange={(e)=>{SetName(e.target.value)}} placeholder='Enter your name'/>
            <br />
            <input type="date" id='date' value={date} onChange={(e)=>{SetDate(e.target.value)}} />
            <br />
            <input type="tel" placeholder='Enter the Phone number' pattern='[0-9]{10}' value={phone} onChange={(e)=>{SetPhone(e.target.value)}} />
            <br />
            <input type="email" placeholder='Enter the email'  value={email} onChange={(e)=>{SetEmail(e.target.value)}}/>
            <br />
            <input type="tel"  placeholder='Enter the Adhar Number' pattern='[0-9]{12}' value={adhar} onChange={(e)=>{SetAdhar(e.target.value)}}/>
            <br />
            <input type="password"  placeholder='Enter the password' value={password} onChange={(e)=>{SetPassword(e.target.value)}}/>
            <br />
            <input type="submit"  id='btnb' onClick={handleSubmit}/>
        </form>
        </div>
        <div className='col-22'>
          <img src={pic} alt="" />
        </div>
        
        
        </div>
    </div>
  )
}

export default UserSignUp