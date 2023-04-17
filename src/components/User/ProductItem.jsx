import React from "react";
import { useNavigate, useParams } from 'react-router-dom';
import '../../styles/productItem.css'

const ProductItem = ({ prod }) => {

  const navigate = useNavigate();
  const id=prod._id
  const viewProduct=async()=>{
    navigate(`/product/${id}`)
  }

  return (
    <div className="product-box w-[250px] h-[300px] border-b border-gray hover:scale-105 hover:cursor-pointer tablet:w-[100%] tablet:h-[200px]" onClick={viewProduct}>
      <div className="imgContainer w-[230px] h-[200px] tablet:w-[95%] tablet:h-full">
        <img
          src={prod.imgUrl}
          alt="product image"
          srcSet=""
          className="w-full h-full object-contain"
        />
      </div>
      <div className="w-full bg-white bottom-0 p-2 object-contain flex-col justify-around ">
        <div className="text-black text-center mb-2 text-sm font-semibold">{prod.name.length<25?`${prod.name}`:`${prod.name.substring(0,50)}...`}</div>
        <div className=" hidden tablet:block description text-sm">{prod.desc.length<35?`{prod.desc}`:`${prod.desc.substring(0,100)}...`}</div>
        <div className=" laptop:text-center mt-2 text-black font-bold bg-white text-lg">₹{prod.price}</div>
      </div>
    </div>
  );
};

export default ProductItem;
//
