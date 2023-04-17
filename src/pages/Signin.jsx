import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'
import ApiContext from '../context/Apis/apiContext';
import { useNavigate } from 'react-router-dom';

function Signin() {

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
          const response=await axios.post(`${host}/api/auth/signin`,detail)
          const token=response.data.userToken
          localStorage.setItem('userToken',token)
          navigate('/')
          
      } catch (error) {
          alert(error)
      }
    }

  return (
      <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
          <div className="w-full p-6 m-auto tablet:border-none tablet:shadow-none bg-light border-royal-blue border-2 rounded-md shadow-md lg:max-w-xl max-w-[500px]">
              <h1 className="text-3xl font-semibold text-center text-royal-blue underline">
                 Sign in
              </h1>
              <form className="mt-6">
                  <div className="mb-2">
                      <label
                          for="email"
                          className="block text-lg tablet:text-sm font-semibold text-gray"
                          >
                          Email:
                      </label>
                      <input
                          onChange={e=>setEmail(e.target.value)}
                          type="email"
                          className="block w-full px-4 py-2 mt-2 text-gray bg-light border rounded-md  focus:ring-gray-light focus:outline-none text-sm focus:ring focus:ring-opacity-40"
                      />
                  </div>
                  <div className="mb-2">
                      <label
                          for="password"
                          className="block text-lg tablet:text-sm font-semibold text-gray"
                          >
                          Password:
                      </label>
                      <input
                          onChange={e=>setPassword(e.target.value)}
                          type="password"
                          className="block w-full px-4 py-2 mt-2 text-gray bg-white border rounded-md f focus:ring-gray-light  focus:outline-none focus:ring focus:ring-opacity-40"
                      />
                  </div>
                  <a
                      href="#"
                      className=" text-sm text-royal-blue hover:underline"
                  >
                      Forget Password?
                  </a>
                  <div className="mt-4">
                      <button className="w-full px-4 py-2 tracking-wide text-light transition-colors duration-200 transform bg-royal-blue rounded-md hover:scale-105 focus:outline-none focus:bg-purple-600 "
                      onClick={handleSubmit}>
                          Login
                      </button>
                  </div>
              </form>

              <p className="mt-8 text-sm font-light text-center text-gray-700">
                  {" "}
                  Don't have an account?{" "}
                  <Link
                      to='/signup'
                      className="font-medium text-royal-blue hover:underline"
                  >
                      Sign up
                  </Link>
              </p>
              <p className=" mt-4 text-sm font-light text-center text-gray-700">
                  {" "}
                  Login as Admin?{" "}
                  <Link
                      to='/admin/signin'
                      className="font-medium text-royal-blue hover:underline"
                  >
                      Admin
                  </Link>
              </p>
          </div>
      </div>
  )
}

export default Signin


