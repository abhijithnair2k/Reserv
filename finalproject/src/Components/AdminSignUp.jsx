import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

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
    
       alert ("submit successfully")
       console.log("hello")
  
    })
    .catch((error)=>{
      alert("invalid data")
      console.log(error)
    })
  }
  

  // console.log(email);
  // console.log(name);
  // console.log(aadhar);
  return (
    <div className='adminsignup'>
      <div className='formsignup'>
        <h2>Admin Sign Up</h2>
      <form action="">
        <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} placeholder='Enter Your Name' />
        <br /><br />
        
        <br /><br />
        <input type="tel" pattern='[0-9]{10}' value={phone} onChange={(e)=>{setPhone(e.target.value)}} placeholder='Enter your Phone' />
        <br /><br />
        <input type="email" placeholder='Enter your email' value={email} onChange={(e)=>{setEmail(e.target.value)}} />
        <br /><br />
        <input type="tel" pattern='[0-9]{12}' value={gst} onChange={(e)=>{setGst(e.target.value)}} placeholder='Enter your gst no' />
        <br /><br />
        <input type="password" placeholder='Enter your Password' value={password} onChange={(e)=>{setPassword(e.target.value)}} />
        <br /><br />
        <input type="submit" onClick={handleSubmit} />
    
        
      </form>
      </div>
    </div>
  )
}

export default AdminSignUp