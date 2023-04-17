import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Product from './pages/Product';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import AdminLogin from './pages/AdminLogin';
import Cart from './pages/Cart'
import Checkout from './pages/Checkout';
import AdminHome from './pages/AdminHome';
import Order from './pages/Order';
// import SearchPage from './pages/SearchPage'

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route exact path='/product/:id' element={<Product/>}/>
          <Route exact path='/signin' element={<Signin/>}/>
          <Route exact path='/signup' element={<Signup/>}/>
          <Route exact path='/admin/signin' element={<AdminLogin/>}/>
          {/* <Route exact path='/search' element={<SearchPage/>}/> */}
          <Route exact path='/cart' element={<Cart/>}/>
          <Route exact path='/cart/checkout/:id' element={<Checkout/>}/>
          <Route exact path='/admin/' element={<AdminHome/>}/>
          <Route exact path='/order/' element={<Order/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App  