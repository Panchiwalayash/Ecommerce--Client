import React, { useContext, useEffect, useState } from 'react'
import Navbar from "../components/User/Navbar";
import ApiContext from '../context/Apis/apiContext';
import axios from 'axios';
import OrderItem from '../components/User/OrderItem'

const Order = () => {
  const context=useContext(ApiContext)
  const {host}=context

  const [orders,setOrders]=useState([])

  useEffect(()=>{
    const getorders=async()=>{
      const res=await axios.get(`${host}/api/order/getorder`,{
        headers:{
          userToken:localStorage.getItem('userToken')
        }
      })
      setOrders(res.data)
    }
    getorders()
  },[0])
  return (
    <div className='bg-[#d4d4d4] h-[100vh] overflow-y-scroll'>
      <Navbar/>
      <div className='mt-[6vh] '>
        <div className="top text-center font-bold mt-[2vh] text-2xl p-5">Your Orders</div>
        <div className="orderSection mb-10">
          {orders.map(order=>{
            return(<OrderItem key={order._id} order={order}/>)
          })}
        </div>

      </div>
    </div>
  )
}

export default Order