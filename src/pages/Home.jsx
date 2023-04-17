import React, { useContext, useEffect, useState } from "react";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Navbar from "../components/User/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ApiContext from "../context/Apis/apiContext";
import Sidebar from "../components/User/Sidebar";
import axios from "axios";
import ProductSection from "../components/User/ProductSection";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const context = useContext(ApiContext);
  const { getProducts, host, setProducts, products } = context;

  const [searchText, setSearchText] = useState(``);
  const [user,setUser]=useState("")

  useEffect(()=>{
    const getUser=async()=>{
      if(!localStorage.getItem("userToken")){
        return
      }
      const res=await axios.get(`${host}/api/auth/getuser`,{
        headers:{
          "userToken":localStorage.getItem("userToken")
        }
      })
      setUser(res.data.userName)
    }
    getUser()
  },[user])
  useEffect(() => {
    const search = async () => {
     
      const response = await axios.get(
        `${host}/api/product/search/?q=${searchText}`
      );
      setProducts(response.data.products);
    };
    search();
  }, [searchText]);

const handleSearch=()=>{
  
}
  return (
    <div>
      <Navbar searchText={searchText} setSearchText={setSearchText} />
      <div className=" search-section w-[80%] m-auto p-1 px-2 my-[2vh] tablet:my-[1.5vh] relative top-[7vh] border-dark border-2 flex items-center rounded-xl justify-around searchbar:hidden">
        <FontAwesomeIcon icon={faMagnifyingGlass} onClick={handleSearch} />
        <input
          type="text"
          placeholder="Find Product"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="mobile:text-sm w-[90%] outline-none"
          />
      </div>
      <div className="main relative top-[7vh]">
          {user?<div className="h-[15vh] flex items-center pl-10 bg-[#eaeaea] text-3xl text-[#424242]">Hello <strong className="ml-2"> {user}</strong></div>:""}
        {/* <div
          className="sidebar  min-w-[250px] tablet:hidden"
          style={{ flex: 1 }}
        >
          <Sidebar />
        </div> */}
        <div className="productSection p-3" style={{ flex: 5.5 }}>
          <ProductSection />
        </div>
      </div>
    </div>
  );
};

export default Home;
