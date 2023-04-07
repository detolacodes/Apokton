import React, {useState, useEffect, useRef} from 'react'
// import './experts.css'

const Experts = () =>{

	return(

		<>

			<div className='container mt-100'>
				<div className='row justify-content-center'>

					<div className='col-lg-6'>
						<div className='temp-big-text'>
							Follow useful tips from industry experts 
						</div>	

						<div className='temp-small-text mt-4 w-75'>
							We also provide useful advices and guidelines on which companies or industries to venture in depending on your field and passion
						</div>	

						<div>
							<button className='secondarybtn mt-5'>
								See internships
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