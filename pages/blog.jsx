import React, {useState, useEffect, useRef} from 'react'
import { Fragment } from 'react'
import Navbar from '../components/navbar'
import Blognews from '../components/Blog/blognews'
import Footer from '../components/footer'


const Blog = () =>{

  return(

      <>
        <Navbar/>
        <Blognews/>
        <Footer/>


      </>

  )
}

export default Blog