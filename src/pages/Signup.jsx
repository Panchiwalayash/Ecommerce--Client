import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import ApiContext from '../context/Apis/apiContext'

const Signup = () => {

  const context=useContext(ApiContext)
  const {host}=context

  const navigate=useNavigate()

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassowred, setConfirmPasswored] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit=async(e)=>{
    e.preventDefault()
    if(password!==confirmPassowred){
      alert("password dont match")
    }
    try {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('email', email);
      formData.append('password', password);
      formData.append('image', image);
      const response=await axios.post(`${host}/api/auth/signup`,formData)
      navigate('/signin')
    } catch (error) {
      alert(error)
    }
  }

  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
    <div className="w-full p-6 m-auto tablet:border-none tablet:shadow-none bg-light border-kelly-green border-2 rounded-md shadow-md lg:max-w-xl max-w-[500px]">
        <h1 className="text-3xl font-semibold text-center text-lime-green underline">
           Sign up
        </h1>
        <form className="mt-6">
            <div className="mb-2">
                <label
                    htmlFor="name"
                    className="block text-lg tablet:text-sm font-semibold text-gray"
                    >
                    Name:
                </label>
                <input
                  onChange={e=>setName(e.target.value)}
                    type="text"
                    className="block w-full px-4 py-2 mt-2 text-gray border-gray bg-light border rounded-md focus:border-purple-400 focus:ring-gray-light focus:outline-none text-sm focus:ring focus:ring-opacity-40"
                    required
                />
            </div>
            <div className="mb-2">
                <label
                    htmlFor="email"
                    className="block text-lg tablet:text-sm font-semibold text-gray"
                    >
                    Email:
                </label>
                <input
                  onChange={e=>setEmail(e.target.value)}
                    type="email"
                    className="block w-full px-4 py-2 mt-2 text-gray border-gray bg-light border rounded-md focus:border-purple-400 focus:ring-gray-light focus:outline-none text-sm focus:ring focus:ring-opacity-40"
                    required
                />
            </div>
            <div className="mb-2">
              <label htmlFor="image" className="block mb-2 text-lg tablet:text-sm font-semibold text-gray">
                Image:
                </label>
              <input type="file" id="image" className="w-full px-3 py-2 text-gray rounded" onChange={e=>{setImage(e.target.files[0])}} required />
            </div>
            <div className="mb-2">
                <label
                    htmlFor="password"
                    className="block text-lg tablet:text-sm font-semibold text-gray"
                    >
                    Password:
                </label>
                <input
                  onChange={e=>setPassword(e.target.value)}
                    type="password"
                    className="block w-full px-4 py-2 mt-2 text-gray border-gray bg-white border rounded-md focus:border-purple-400 focus:ring-gray-light focus:outline-none focus:ring focus:ring-opacity-40"
                    minLength={5}
                    required
                />
            </div>
            <div className="mb-2">
                <label
                    htmlFor="confirm-password"
                    className="block text-lg tablet:text-sm font-semibold text-gray"
                    >
                    Confirm-Password:
                </label>
                <input
                  onChange={e=>setConfirmPasswored(e.target.value)}
                    type="password"
                    className="block w-full px-4 py-2 mt-2 text-gray border-gray bg-white border rounded-md focus:border-purple-400 focus:ring-gray-light focus:outline-none focus:ring focus:ring-opacity-40"
                    minLength={5}
                    required
                />
            </div>
            <div className="mt-4">
                <button className="w-full px-4 py-2 tracking-wide text-light transition-colors duration-200 transform bg-lime-green rounded-md hover:scale-105 focus:outline-none focus:bg-purple-600 " onClick={handleSubmit}>
                    Signup
                </button>
            </div>
        </form>

        <p className="mt-8 text-sm font-light text-center text-gray-700">
            {" "}
            Already have an account?{" "}
            <Link
                to='/signin'
                className="font-medium text-lime-green hover:underline"
            >
                Sign in
            </Link>
        </p>
       
    </div>
</div>
  )
}

export default Signup