import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'
import React from 'react'

const CartElement = ({element,host,setCartElement}) => {

  const {name,imgUrl,quantity,price}=element

  const handleDeleteItem=async(e)=>{
      e.preventDefault()

      const detail={
        pid:element.productId
      }
      console.log(detail.pid)
      const headers={
        userToken:localStorage.getItem('userToken')
      }
      const response=await axios.post(`${host}/api/cart/deleteItem`,detail,{headers})
      console.log(response.data.cart.products)
      setCartElement(response.data.cart.products)
  }

  return (
    <div className='mb-3 flex border-b-2 border-gray-light'>
      <div className="element-image h-[75px] flex-1">
        <img className='h-full w-full object-contain' src={imgUrl} alt="" />
      </div>
      <div className="element-name text-[15px] text-bright-blue flex-1 m-auto text-center">{name}</div>
      <div className="element-price font-semibold flex-1 m-auto  text-center">{price}</div>
      <div className="element-quantity m-auto text-center flex-1">
        <input type="number" className='w-[50%] shadow-gray shadow-sm bg-gray-light sh font-semibold text-center' value={quantity} readOnly />
      </div>
      <div className="element-delete m-auto text-center flex-1 ">
      <FontAwesomeIcon className='hover:text-danger hover:cursor-pointer hover:scale-125' onClick={handleDeleteItem} icon={faTrash} />
      </div>
    </div>
  )
}

export default CartElement