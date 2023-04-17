import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import ApiContext from "../context/Apis/apiContext";
import { useNavigate } from "react-router-dom";
import React from "react";

const AdminLogin = () => {
  
  const navigate=useNavigate()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const context=useContext(ApiContext)
    const {host}=context
    const handleSubmit=async(e)=>{
      e.preventDefault()
      try {
          const detail={
              email:email,
              password:password
          }
          const response=await axios.post(`${host}/admin/signin`,detail)
          const token=response.data.adminToken
          localStorage.setItem('adminToken',token)
          navigate('/admin')
          
      } catch (error) {
          alert(error)
      }
    }
  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
      <div className="w-full p-0 m-auto mobile:border-none tablet:w-full tablet:shadow-none bg-light border-[#ff5c5c] border-2 rounded-md shadow-md lg:max-w-xl max-w-[500px]">
        <h1 className="text-3xl font-semibold text-center text-[#ffffff] bg-[#ff5c5c] py-3">
          Sign in
        </h1>
        <form className="mt-6 px-6">
          <div className="mb-2">
            <label
              htmlFor="email"
              className="block text-lg tablet:text-sm font-semibold text-gray"
            >
              Email:
            </label>
            <input
              
              type="email"
              value={email}
              onChange={e=>{setEmail(e.target.value)}}
              className="block w-full px-4 py-2 mt-2 text-gray bg-light border rounded-md  focus:ring-gray-light focus:outline-none text-sm focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="password"
              className="block text-lg tablet:text-sm font-semibold text-gray"
            >
              Password:
            </label>
            <input
              value={password}
              onChange={e=>{setPassword(e.target.value)}}
              type="password"
              className="block w-full px-4 py-2 mt-2 text-gray bg-white border rounded-md f focus:ring-gray-light  focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <a href="#" className=" text-sm text-[#ff5c5c] hover:underline">
            Forget Password?
          </a>
          <div className="mt-4">
            <button
              className="w-full px-4 py-2 tracking-wide text-light transition-colors duration-200 transform bg-[#ff5c5c] rounded-md hover:scale-105 focus:outline-none focus:bg-purple-600 "
              onClick={handleSubmit}
            >
              Login
            </button>
          </div>
        </form>

        
        <p className=" my-4 text-sm font-light text-center text-gray-700">
          <Link
            to="/signin"
            className="font-medium text-[#ff5c5c] hover:underline"
            >
            Login as User?
          </Link>
        </p>
      </div>
    </div>
  );
};

export default AdminLogin;
