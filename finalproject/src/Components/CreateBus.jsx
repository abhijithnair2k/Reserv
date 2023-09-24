import axios from 'axios'
import React, { useState } from 'react'
import '../style/createbus.css'

const CreateBus = () => {
    let [name,setName] = useState("")
    let [from,setFrom] = useState("")
    let [to,setTo] = useState("")
    let [nos,setNos] = useState("")
    let [dop,setDop] = useState("")
  
    let data = {name,from,to,nos,dop}
    let admin= JSON.parse(localStorage.getItem('admin'))
  
    // console.log(admin);
    let submit =(e)=>{
      axios.post(`http://localhost:7302/bus/${admin.id}`,data).
      then((res)=>{
        console.log(res.data.messege);
        console.log("bus-added");
      }).catch((err)=>{
        console.log(err);
        console.log("Bus not added");
      })
      e.preventDefault()
    }


  return (
    <div className='createbus'>
        <form action="">
        
        <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} placeholder='Bus Name' /> <br /><br />
        <input type="text" value={from} onChange={(e)=>{setFrom(e.target.value)}} placeholder='From Location' /><br /><br />
        <input type="text" value={to} onChange={(e)=>{setTo(e.target.value)}} placeholder='To Location'/><br /><br />
        <input type="tel" value={nos} onChange={(e)=>{setNos(e.target.value)}} placeholder='No Of Seats'/><br /><br />
        <input type="date" value={dop} onChange={(e)=>{setDop(e.target.value)}} placeholder='Date of Departure' /><br /><br />
        {/* <button onClick={submit}>Submit</button> */}
        <input type="submit" value="Add Route" onClick={submit} />

      </form>



    </div>
  )
}

export default CreateBus