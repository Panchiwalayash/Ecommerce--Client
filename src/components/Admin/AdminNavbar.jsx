import React from 'react'
import { useNavigate } from "react-router-dom";

const AdminNavbar = () => {

  const navigate=useNavigate()
  const handleLogout=(e)=>{
    localStorage.clear()
    navigate('/admin/signin')
  }
  return (
    <div className='h-[7vh] flex bg-[#383838] text-light justify-between items-center px-4 '> 
      <div className=' text-xl tablet:text-lg' >Admin</div>
      <button className='bg-danger text-center py-[3px] rounded-[5px] px-2' onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default AdminNavbar

