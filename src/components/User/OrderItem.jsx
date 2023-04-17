import React, { useEffect } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileInvoice } from '@fortawesome/free-solid-svg-icons';

const OrderItem = ({ order }) => {

  return (
    <div className=' min-w-[450px] px-5 py-3 mt-5 rounded-md w-[75vw] border bg-light border-gray-light m-auto'>
      <div className="item-top border-b-2 border-gray-light">
        <div className="up-container flex justify-between my-3">
          <div className="orderId text-xl font-semibold">Order ID: {order.orderId}</div>
          <div className='px-2 py-1 border border-gray-light rounded-sm hover:cursor-pointer'>
            <FontAwesomeIcon icon={faFileInvoice} />
            <span className='ml-2'>Invoice</span>
          </div>
        </div>
        <div className="order-date pb-3 text-gray text-xs">Order date: {order.date}</div>
      </div>
      <div className="item-bottom py-3 ">
        <div className="head text-lg font-semibold">Item List:</div>
        <div className="list py-3">
          {order.productlist.map(ele => {
            return (
              <div className='w-[700px] tablet:w-[450px] mb-3 flex justify-between items-center m-auto border-b border-gray-light pb-2' key={ele._id}>
                <div className="left flex items-center">
                  <div className="img w-[100px] p-2 shadow-md">
                    <img src={ele.imgUrl} alt="" className='m-auto object-contain ' />
                  </div>
                  <div className="ele-name m-5  float-left text-base font-medium text-gray">{ele.name}</div>
                </div>
                <div className="right">
                  <div className="price text-base font-bold">₹{ele.price}</div>
                  <div className="quantity float-right text-xs font-semibold text-gray">Qty: {ele.quantity}</div>
                </div>
              </div>
            )
          })}
        <div className='text-center text-lg pt-3 font-semibold'>Total Price: ₹{order.totalCost}</div>
        </div>
      </div>

    </div>
  )
}

export default OrderItem