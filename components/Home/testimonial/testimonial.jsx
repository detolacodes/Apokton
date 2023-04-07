import React, {useState, useEffect, useRef} from 'react'
import './testimonial.css'


const Testimonial = () =>{

	return(

		<>

			<div className='container mt-100'>
				<div className='row justify-content-center text-center'>
					<div className='col-lg-12'>
						<div className='testimonial-text'>
							What others have <span className='sp-5'>gained</span>
						</div>
						<div>
							Read all about how Konectin has impacted other jobseekers, recruiters and helped them achieve their goals
						</div>
					</div>
				</div>
			</div>


			<div className='container-fluid mt-30'>
				 <div className='row justify-content-center'>
				 	<div className='col-lg-12'>
				 		{/*<img src='/images/knt9.png' width='100%' />*/}
				 	</div>
				 </div>
			</div>

		</>

	)
}

export default Testimonial