import React, {useState, useEffect, useRef} from 'react'
import { Fragment } from 'react'
import Navbar from '../components/navbar'
import Hero from '../components/About/hero/hero'
import Template from '../components/About/template/template'
import Experts from '../components/About/experts/experts'
import About from '../components/About/about/about'
import Footer from '../components/footer'


const Home = () =>{

  return(

      <>
        <Navbar/>
        <Hero/>
        <About/>
        <Experts/>
        <Footer/>


      </>

  )
}

export default Home