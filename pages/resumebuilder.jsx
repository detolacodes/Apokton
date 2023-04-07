import React, {useState, useEffect, useRef} from 'react'
import { Fragment } from 'react'
import Navbar from '../components/navbar'
import Hero from '../components/ResumeBuilder/hero/hero'
import Preview from '../components/ResumeBuilder/preview/preview'
import Template from '../components/ResumeBuilder/template/template'
import Experts from '../components/ResumeBuilder/experts/experts'
import Testimonials from '../components/ResumeBuilder/testimonials/testimonials'
import FAQ from '../components/ResumeBuilder/faq/faq'
import Footer from '../components/footer'


const Resume = () =>{

  return(

      <>
        <Navbar/>
        <Hero/>
        <Preview/>
        <Template/>
        <Experts/>
        <Testimonials/>
        <FAQ/>
        <Footer/>


      </>

  )
}

export default Resume