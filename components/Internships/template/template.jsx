import React, {useState, useEffect, useRef} from 'react'
// import './template.css'

const Template = () =>{

	return(

		<>

			<div className='container mt-100'>
				<div className='row justify-content-center'>

					<div className='col-lg-6'>
						<div className='temp-img'>
							<img src='/images/knt2.png' width='60%' className='' />
						</div>	
					</div>

					<div className='col-lg-6'>
						<div className='temp-big-text'>
							Diverse recruiters upload internship positions on our platform daily
						</div>	

						<div className='temp-small-text mt-4 w-75'>
							All you have to do is stay tuned and jump on the opportunities as soon as they pop up. Apply and follow up on your applications for free.
						</div>	

						<div>
							<button className='secondarybtn mt-5'>
								See internships
							</button>
						</div>
					</div>
				</div>
			</div>

		</>

	)

}


export default Template