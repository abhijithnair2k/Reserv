import React from 'react'
import { Link } from 'react-router-dom'
import '../style/adminnavlink.css'


const AdminNavLinks = () => {
  return (
    <div className='adminnavlink'>

        <Link to='/adminhomepage/userlist' >User List </Link>
        <Link to='/adminhomepage/reservation' > Reservation</Link>
        <Link to='/adminhomepage/createbus' > Add Bus </Link>


    </div>
  )
}

export default AdminNavLinks