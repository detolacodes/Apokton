import React, {useState, useEffect, useRef} from 'react'
import { Fragment } from 'react'
import Navbar from '../components/navbar'
import Hero from '../components/Home/hero/hero'
import Services from '../components/Home/services/services'
import About from '../components/Home/about/about'
import Blog from '../components/Home/blog/blog'
import Newsletter from '../components/Home/newsletter/newsletter'
import Footer from '../components/footer'


const Home = () =>{

  return(

      <>
        <Navbar/>
        <Hero/>
        <Services/>
        <About/>
        <Blog/>
        <Newsletter/>
        <Footer/>


      </>

  )
}

export default Home