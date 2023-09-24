import axios from 'axios'
import React, { useState } from 'react'
import '../style/usersignup.css'

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
    
     alert ("submit successfully")
     console.log("hello")

  })
  .catch((error)=>{
    alert("invalid data")
    console.log(error)
  })
}


  return (
    <div className='signup'>

        <form action="" className='up'>
            <input type="text"  value={name} onChange={(e)=>{SetName(e.target.value)}} placeholder='Enter your name'/>
            <br />
            <input type="date" value={date} onChange={(e)=>{SetDate(e.target.value)}} />
            <br />
            <input type="tel" placeholder='Enter the Phone number' pattern='[0-9]{10}' value={phone} onChange={(e)=>{SetPhone(e.target.value)}} />
            <br />
            <input type="email" placeholder='Enter the email'  value={email} onChange={(e)=>{SetEmail(e.target.value)}}/>
            <br />
            <input type="tel"  placeholder='Enter the Adhar Number' pattern='[0-9]{12}' value={adhar} onChange={(e)=>{SetAdhar(e.target.value)}}/>
            <br />
            <input type="password"  placeholder='Enter the password' value={password} onChange={(e)=>{SetPassword(e.target.value)}}/>
            <br />
            <input type="submit"  onClick={handleSubmit}/>
        </form>
    </div>
  )
}

export default UserSignUp