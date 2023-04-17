import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import ApiContext from '../../context/Apis/apiContext'


const AdminUser = () => {

  const context=useContext(ApiContext)
  const {host}=context

  const [searchUser,setSearchUser]=useState(``)
  const [user,setUser]=useState([])

  useEffect(()=>{
    const getusers=async()=>{
      try {    
        const headers={
          adminToken:localStorage.getItem('adminToken')
        }
        const response=await axios.get(`${host}/admin/getuser/?u=${searchUser}`,{headers})
        setUser(response.data)
      } catch (error) {
        alert(error)
      }
    }
    getusers()

  },[searchUser])

  return (
    <div className=' min-h-full bg-[#f8f8f8] p-2'>
      <div className=' text-2xl font-bold mb-3'>Users</div>
      <div className="p-3 m-5 bg-light">
        <div className='text-lg p-2 border border-gray-light mb-5'>
          <input className=' outline-none w-full' type="text" placeholder='Search' value={searchUser} onChange={e=>setSearchUser(e.target.value)} /></div>
        <div className='flex flex-wrap justify-around'>
          {user.map(user=>{
            return (
              <div className='w-[230px] h-[300px] shadow-md shadow-dark-gray m-3' key={user._id}>
                <div className="background absolute bg-[#f1d0bc] h-[100px] w-[230px]"></div>
                <div className="top flex justify-center mt-[50px]">
                  <img className='rounded-full h-[100px] w-[100px] relative border-2 border-light' src={user.userImg} alt="" />
                </div>
                <div className="bottom h-[130px]" style={{display:"flex",flexDirection:'column',alignItems:"center",justifyContent:'space-evenly'}}>
                  <div className="name font-bold text-lg">{user.name}</div>
                  <div className="email text-md">{user.email}</div>
                  <div className='py-1 px-2 border border-dark w-[80px] hover:cursor-pointer text-center rounded-[4px]'>Profile</div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default AdminUser