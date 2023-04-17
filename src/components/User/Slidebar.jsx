import { faCartShopping, faClipboard, faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import Sidebar from "./Sidebar";
import { useNavigate } from "react-router-dom";

const Slidebar = () => {


  const navigate = useNavigate();

  const handleHome = () => {
    navigate('/')
  };

  const handleCart = () => {

    if(!localStorage.getItem('userToken')){
      navigate('/signin')
    }
    else{
      navigate('/cart/')
    }
  };

  const handleorder = () => {
    
    if(!localStorage.getItem('userToken')){
      navigate('/signin')
    }
    else{
      navigate('/order/')
    }

  };

  return (
    <div className="w-[60vw] h-[94vh] top-0 tablet:top-[6vh] mobile:w-[80vw] fixed bg-dark text-light border-t">
      <div className="text-xl p-[10px] pl-[20px] border-b pb-[10px] border-gray">
            Hello,
      </div>
      <div
            className={ `text-light text-base p-[15px] hover:cursor-pointer mb-4 mt-4 hover:bg-[#6d6d6d]`
            }
            onClick={handleHome}
          >
            <FontAwesomeIcon className=" pr-2" icon={faHouse} />
            <span>Home</span>
          </div>
          <div
            className={
                 `text-light  text-base p-[15px] hover:cursor-pointer mb-4 hover:bg-[#6d6d6d]`
            }
            onClick={handleCart}
          >
            <FontAwesomeIcon className=" pr-2 " icon={faCartShopping} />
            <span>Cart</span>
          </div>
          <div
            className={ `text-light text-base p-[15px] hover:cursor-pointer mb-4 hover:bg-[#6d6d6d]`
            }
            onClick={handleorder}
          >
            <FontAwesomeIcon className=" pr-2" icon={faClipboard} />
            <span>Orders</span>
          </div>
      {/* <div className="category-section">
        <Sidebar/>
      </div> */}
    </div>
  );
};

export default Slidebar;
