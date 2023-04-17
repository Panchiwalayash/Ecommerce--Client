import React, { useContext, useEffect } from 'react'
import ApiContext from '../../context/Apis/apiContext'
import ProductItem from './ProductItem'


const ProductSection = () => {

    const context=useContext(ApiContext)
    const {products}=context 


  return (

    <div className='w-full gap-3 tablet:gap-1 tablet:flex-col tablet:items-center flex flex-wrap justify-around '>
     {products.length==0?<h1 className='pt-8 text-gray text-2xl font-semibold'>No Product found</h1>:``}
        {products.map((prod)=>{
            return (<ProductItem key={prod._id} prod={prod}/>)
        })}
    </div>
  )
}

export default ProductSection