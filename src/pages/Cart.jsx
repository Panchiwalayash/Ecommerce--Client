import React, { useContext, useEffect, useState } from 'react'
import CartElememnt from '../components/User/CartElement'
import ApiContext from '../context/Apis/apiContext';
import axios from 'axios';
import Navbar from '../components/User/Navbar';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';


const Cart = () => {

  const context = useContext(ApiContext)
  const { host } = context
  const [cartElement, setCartElement] = useState([])
  const [id,setId]=useState('')

  const headers = {
    'userToken': localStorage.getItem('userToken')
  }
  useEffect(() => {
    const getCart = async () => {
      const response = await axios.get(`${host}/api/cart/get-element`, { headers })
      console.log(response.data.length)
      if(response.data.length!==0){
        setId(response.data[0]._id)
        setCartElement(response.data[0].products)
      }
      else{
        return
      }
    }
    getCart()
  }, [cartElement])

  let total = 0;
  for (let i = 0; i < cartElement.length; i++) {
    total += cartElement[i].price;
  }

  return (
    <div >
      <Navbar />
      <div className='relative top-[7vh]'>
      <Link to='/'>
        <div className='my-3 p-2 rounded-md bg-cart m-4 inline-block cursor-pointer text-light'>
          <FontAwesomeIcon className='mr-2' icon={faArrowLeft} />
          <span>Go Home</span>
        </div>
      </Link>
      <div className='flex-col w-full mt-4 items-center'>
        <div className="cart-productsection m-auto monitor:w-[55vw] laptop:w-[65vw] w-[90vw]">
          <h1 className='mb-8 text-3xl text-center font-semibold'>SHOPPING CART</h1>
          {cartElement.map(ele => {
            return (<CartElememnt host={host} setCartElement={setCartElement} element={ele} key={ele._id} />)
          })}
        </div>
        <div className="to-payment mt-[15vh] mb-[5vh] m-auto w-[55vw] laptop:w-[35vw] monitor:w-[25vw] h-[140px] rounded-lg  border-gray border">
          <div className="border-b border-gray">

          <div className="heading font-medium text-xl text-center my-2">TOTAL ({cartElement.length} ITEMS)</div>
          <div className=" mx-4 total-price font-bold text-xl mb-2">₹{total}</div>
          </div>
          {cartElement.length===0
            ?<div className='text-lg font-medium text-center mt-4 '>No Product in Cart</div>
            :<Link to={`/cart/checkout/${id}`}><div className=" w-[70%] m-auto text-center checkout-btn bg-lime-green py-2 px-3 rounded-md mt-2 text-light text-md shadow-kelly-green shadow-sm hover:cursor-pointer">Check Out</div></Link>
          }
        </div>
      </div>
    </div>
    </div>
  )
}

export default Cart