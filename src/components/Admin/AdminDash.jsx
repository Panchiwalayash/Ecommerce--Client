import React, { useContext, useEffect, useState } from 'react'
import ApiContext from '../../context/Apis/apiContext'
import axios from 'axios'

const AdminDash = () => {

  const context=useContext(ApiContext)
  const {host}=context
  const [data,setData]=useState({})

  useEffect(()=>{
    const getanalytic=async()=>{
      const res=await axios.get(`${host}/admin/analytic`,{
        headers:{
          adminToken:localStorage.getItem("adminToken")
        }
      })
      setData(res.data)
    }
    getanalytic()
  },[data])

  return (
    <div>
      <div className="top flex p-4 justify-start gap-10 flex-wrap m-[-8px] bg-[#e9e9e9]">
        <div className='w-[150px] p-5 text-xl border-4 text-center border-[#cfcfcf] font-semibold rounded-full shadow-lg'>Users:<span >{data.userNo}</span></div>
        <div className='w-[150px] p-5 text-xl border-4 text-center border-[#cfcfcf] font-semibold rounded-full shadow-lg'>Orders:{data.orderNo}</div>
        <div className='w-[150px] p-5 text-xl border-4 text-center border-[#cfcfcf] font-semibold rounded-full shadow-lg'>Product:{data.productNo}</div>
      </div>
    </div>
  )
}

export default AdminDash