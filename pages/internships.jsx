import React, {useState, useEffect, useRef} from 'react'
import { Fragment } from 'react'
import Navbar from '../components/navbar'
import Hero from '../components/Internships/hero/hero'
import Template from '../components/Internships/template/template'
import Services from '../components/Internships/services/services'
import Experts from '../components/Internships/experts/experts'
import Newsletter from '../components/Internships/newsletter/newsletter'
import Footer from '../components/footer'


const Home = () =>{

  return(

      <>
        <Navbar/>
        <Hero/>
        <Template/>
        <Services/>
        <Experts/>
        <Newsletter/>
        <Footer/>


      </>

  )
}

export default Home