import React, {useState, useEffect, useRef} from 'react'
// import './hero.css'
// import Heroafter from '../heroafter/heroafter'


const Hero = () =>{

	return(

		<>

			<div className='container mt-60'>
				<div className='row justify-content-center'>
					<div className='col-lg-6'>
						<div className='hero'>
							<div className='hero-text'>
								Bringing you closer to your dream <span className='sp-1'>job</span>
							</div>

							<div className='pr-80 hero-mintext'>
								{/*Get matched easily with recruiters who see value in your experience amidst other great career opportunities we offer you the best possible to your career*/}

								We create an environment that is suitable and convenient for you and recruiters to meet, negotiate and become one.
							</div>

							<div className='w-40'>
								<button className='herobtn rounded mt-25'>
									<a href='/signup'>
										Get Started
									</a>
								</button>
							</div>
						</div>
					</div>

					<div className='col-lg-6  hero-img'>
						<img src='https://media.istockphoto.com/id/1411530128/photo/3d-illustration-of-cartoon-characters-talking-and-discussing-communication-and-talking.jpg?s=612x612&w=0&k=20&c=K2WWE1kVnO2QgvIEuLFOUn9XVh5VAs2gsd60BKGDwF0=' className='' />
					</div>
				</div>
			</div>

		</>
	)
}

export default Hero