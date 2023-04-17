import React, { useContext, useEffect, useState } from 'react'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import Navbar from '../components/Navbar';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ApiContext from '../context/Apis/apiContext';
import Sidebar from '../components/Sidebar';
import axios from 'axios';
import ProductSection from '../components/User/ProductSection';
import { useNavigate } from 'react-router-dom';

const SearchPage = () => {
  const [searchText,setSearchText]=useState(``)
  const navigate=useNavigate()
  const context = useContext(ApiContext)
  const { getProducts,host,setProducts,products } = context

  useEffect(() => {
    getProducts()
  }, [0])
  const handleSearch=async()=>{
    try {
      const response=await axios.get(`${host}/api/product/search/?q=${searchText}`)
      setProducts(response.data.products)
      navigate(`/search?q=${searchText}`)
      
    } catch (error) {
      alert(error)
    }
  }
  return (
    <div>
      <Navbar searchText={searchText} setSearchText={setSearchText} handleSearch={handleSearch} />
      <div className=' search-section w-[80%] m-auto p-1 px-2 my-[2vh] tablet:my-[1.5vh] border-dark border-2 flex items-center rounded-xl justify-around searchbar:hidden' >
        <FontAwesomeIcon icon={faMagnifyingGlass} onClick={handleSearch} />
        <input type="text" placeholder='Find Product' value={searchText} onChange={e=>setSearchText(e.target.value)} className='mobile:text-sm w-[90%] outline-none' />
      </div>
      <div className="main px-3" style={{ display: "flex" }}>
        <div className="sidebar mr-3 min-w-[250px] tablet:hidden" style={{ flex: 1 }}><Sidebar /></div>
        <div className="productSection p-3" style={{ flex: 5.5 }}>{products.length===0?"No Product":<ProductSection />}</div>
      </div>
    </div>
  )
}

export default SearchPage