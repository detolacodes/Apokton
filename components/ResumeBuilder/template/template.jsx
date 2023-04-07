import React, {useState, useEffect, useRef} from 'react'
// import './template.css'

const Template = () =>{

	return(

		<>

			<div className='container mt-100'>
				<div className='row justify-content-center'>
					<div className='col-lg-6'>
						<div className='temp-big-text'>
							Choose from our professional template
						</div>	

						<div className='temp-small-text mt-4 w-75'>
							At Apokton we believe that first impressions matter, that's why we make sure you put your best forward with eye-catching resume designs that stand out from the rest
						</div>	

						<div>
							<button className='secondarybtn mt-5'>
								Select Template
							</button>
						</div>
					</div>

					<div className='col-lg-6'>
						<div className='temp-img'>
							<img src='/images/knt13.png' width='45%' className='' />
							<img src='/images/knt14.png' width='45%' className='' />
						</div>	
					</div>
				</div>
			</div>

		</>

	)

}


export default Template