import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/home';
import Notfound from './pages/Notfound';
import About from './pages/About';
import Product from './pages/Product';
import Products from './pages/Products';

function App() {

  return (
    <>
      <Link to="/" >Home</Link>
      <Link to="/about" >About</Link>
      <Link to="/products" >Products</Link>


      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/products' element={<Products />}/>
        <Route path='/product/:id' element={<Product />}/>
        <Route path='*' element={<Notfound />}/>
      </Routes>

    </>
  )
}

export default App
