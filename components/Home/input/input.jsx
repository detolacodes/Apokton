import React, {useState, useEffect, useRef} from 'react'
import './input.css'



const Input = () =>{

	return(

		<>

			<div className='container'>
				<div className='row'>
					<div className='col-lg-12'>
						<div className='flex-h-new4 mt-100'>
							<div className='flex-2  input'>
								<input className='p-3 mt-1 rounded d-block w-100' />
							</div>

							<div className='flex-1 inp-button'>
								<button className='herobtn rounded w-70'>
									Get Started
								</button>
							</div>

							<div className='or mx-5'>
								or
							</div>

							<div className=' flex-1 google'>
								<img src='' />
								<button className='secondarybtn rounded'>
									Sign in with Google
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>

		</>

	)


}

export default Input