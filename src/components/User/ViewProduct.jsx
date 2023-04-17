import React, { useContext, useEffect, useState } from 'react'
import { useParams } from "react-router";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft
} from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom'
import '../../styles/viewProduct.css'
import ApiContext from '../../context/Apis/apiContext';

const ViewProduct = () => {

  const context = useContext(ApiContext)
  const { host } = context

  const [product,setProduct]=useState({})
  const [quantity,setQuantity]=useState(1)
  const [status,setStatus]=useState(true)

  const navigate=useNavigate()
  const id=useParams()

    useEffect(()=>{
        const update=async()=>{
            const response=await axios.get(`http://localhost:5000/api/product/get/${id.id}`,)
            setProduct(response.data.product)
        }
        update()
    },[product])

    const handleInputChange=(event)=> {
      event.preventDefault()
      const trimValue=event.target.value.trim()
      const newValue = event.target.value;
      if(trimValue === '' || newValue<0) {
        setQuantity(0)
      }
      else if(quantity===0){
        setQuantity(newValue.slice(1))
      }
      else if(product.quantity<newValue) {setStatus(false)}
      else {
        setStatus(true)
        setQuantity(newValue);
      }
    }

    const clickToCart=async()=>{
      if(!localStorage.getItem('userToken')){
        navigate('/signin')
      }
      else{
        if(quantity===0){
          alert("Quantity can't be zero")
          return
        }
        const headers = {
          'userToken': localStorage.getItem('userToken')
        }

        const productDetail={
          pid:product._id,
          quantity:quantity
        }
        const response=await axios.post(`${host}/api/cart/addItem`,productDetail,{headers})
        navigate('/cart')
      }
    }
  return (
    <div className="relative top-[7vh]">
    
      <Link to='/'>
        <div className='p-2 rounded-md bg-cart m-4 inline-block cursor-pointer text-light'>
          <FontAwesomeIcon className=' mr-2' icon={faArrowLeft} />
          <span>Go Home</span>
        </div>
      </Link>
      <div className="product-container flex  ">
        <div className='product-image ml-4 h-[55vh] w-[250px] '>
          <img className='w-[70%] h-[70%] object-contain m-auto' src={product.imgUrl} alt="" />
        </div>
        <div className="product-detail flex h-[100%]" >
          <div className="information p-2" >
            <div className="name text-center font-semibold text-2xl border-b-2 border-gray-light mt-4 pb-6">{product.name}</div>
            <div className="price text-xl font-bold border-b-2 border-gray-light p-4">Price: ₹{product.price}</div>
            <div className="desc py-4  ">{product.desc}</div>
          </div>
          <div className="add-to-cart flex justify-center tablet:w-full" >
            <div className="cart-add border h-[200px] w-[270px] rounded-sm border-gray-light">
              <div className="cart-add-section border-b border-gray-light">
                <div className="left">Price:</div>
                <div className="right mr-10">{(quantity)===0?product.price:quantity*product.price}</div>
              </div>
              <div className="cart-add-section border-b border-gray-light ">
                <div className="left">Status:</div>
                <div className="right mr-5">{status?`Available (${product.quantity-quantity})`:"Not Available"}</div>
              </div>
              <div className="cart-add-section border-b border-gray-light ">
                <div className="left">Quantity:</div>
                <div className="right mr-5">
                  <input type="number" className='w-[70px] bg-gray-light outline-none pl-2' name="quantity" id="quantity" value={quantity} onChange={handleInputChange} />
                </div>
              </div>
              <div className="cart-add-section">
                <button className='btn m-auto h-8 w-[80%]' onClick={clickToCart}>Add To Cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ViewProduct