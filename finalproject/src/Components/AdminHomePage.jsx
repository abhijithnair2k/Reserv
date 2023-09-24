import React from 'react'
import AdminNavLinks from './AdminNavLinks'
import { Route, Routes } from 'react-router'
import CreateBus from './CreateBus'
import Reservation from './Reservation'
import UserList from './UserList'

const AdminHomePage = () => {
  return (
    <div> 

      <AdminNavLinks/>
      <Routes>
        
        <Route path='createbus' element={<CreateBus/>}/>
        <Route path='reservation' element={<Reservation/>}/>
        <Route path='userlist' element={<UserList/>}/>
 
      </Routes>

    </div>
  )      
}

export default AdminHomePage