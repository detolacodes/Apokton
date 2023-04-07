import React, {useState, useEffect, useRef} from 'react'
// import './experts.css'

const Experts = () =>{

	return(

		<>

			<div className='container mt-200'>
				<div className='row justify-content-center'>

					<div className='col-lg-6'>
						<div className='temp-big-text'>
							Follow useful tips from industry experts 
						</div>	

						<div className='temp-small-text mt-4 w-75'>
							At Apokton we believe that first impressions matter, that's why we make sure you put your best forward with eye-catching resume designs that stand out from the rest
						</div>	

						<div>
							<button className='herobtn w-30 mt-5'>
								Build Resume Now
							</button>
						</div>
					</div>


					<div className='col-lg-6'>
						<div className='temp-img'>
							<img src='/images/knt12.png' width='80%' />
						</div>	
					</div>
				</div>
			</div>

		</>

	)

}


export default Experts