import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faCartShopping,
  faClipboard,
  faMagnifyingGlass,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import Slidebar from "./Slidebar";
import { Link, useNavigate } from "react-router-dom";

const Navbar = (props) => {

  const navigate=useNavigate()

  const { searchText, setSearchText, setUser } = props
  const [open, setopen] = useState(false)

  const funSidebar = () => {
    setopen(!open)
  }

  const handleLogout=()=>{
    console.log("first")
    alert('Do you want to Logout')
    localStorage.clear()
    console.log("second")
    navigate('/')
    
  }

  return (
    <div className="nav-main w-full flex h-[7vh] tablet:h-[6vh] justify-between items-center p-4 z-50 text-light bg-dark fixed top-0">
      <Link to='/'>
        <div className="flex items-center">
          {/* <img src="/images/logo.png" className="object-contain w-[100px] " alt="" /> */}
        <div className="left text-xl tablet:text-base mobile:text-sm">Ecommerce</div> 
        </div>
        </Link>
      <div className="mid w-1/2 flex justify-center items-center gap-2 tablet:hidden">
        <input className="w-3/5 h-7 rounded-lg  outline-none text-dark p-3 text-sm" value={searchText} onChange={e => setSearchText(e.target.value)} />
        <FontAwesomeIcon icon={faMagnifyingGlass}  />
      </div>
      <FontAwesomeIcon icon={faBars} className="hidden tablet:block hover:scale-110 w-5 h-5" onClick={funSidebar} />
      <div className={`absolute hidden  ${!open && 'left-[-80vw]'} ${open && 'left-0'} tablet:block  mobile:${!open && 'left-[-100vw]'} mobile:${open && 'left-[0vw]'} top-[6vh]`} style={{ transition: '.5s ease' }}><Slidebar /></div>
      <div className={`right flex gap-8 justify-end tablet:hidden`}>
          <Link to={localStorage.getItem('userToken')?`/cart`:`/signin`}><div className="nav-cart hover:text-cart hover:cursor-pointer">
          <FontAwesomeIcon className="mr-2" icon={faCartShopping} />
          <span>Cart</span>
        </div></Link> 
        <Link to={localStorage.getItem('userToken')?`/order/`:`/signin`}><div className="nav-cart hover:text-[#36a2ee] hover:cursor-pointer">
          
        <FontAwesomeIcon className=" pr-2" icon={faClipboard} />
            <span>Orders</span>
        </div></Link> 
        {localStorage.getItem('userToken')
          ? <div className="nav-signin hover:text-danger hover:cursor-pointer">
            <FontAwesomeIcon className="mr-2" icon={faRightFromBracket} />
            <span onClick={handleLogout}>Logout</span>
          </div>
          : <Link to='/signin'><div className="nav-signin hover:text-signin hover:cursor-pointer">
            <FontAwesomeIcon className="mr-2" icon={faUser} />
            <span>Signin</span>
          </div></Link>}
      </div>
    </div>
  );
};

export default Navbar;
