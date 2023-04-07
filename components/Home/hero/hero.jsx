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
								Take a step closer to your {/*<Heroafter subtitle='dream' />*/} dream <span className='sp-1'>job</span>
							</div>

							<div className='pr-20 hero-mintext'>
								{/*Get matched easily with recruiters who see value in your experience amidst other great career opportunities we offer you the best possible to your career*/}

								Connect with top recruiters around the globe that are excited to work with you and get hired by top companies and organisations in the world.
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

					<div className='col-lg-6 hero-img'>
						<div>
							<img src='/images/crb1.png' className='' />
						</div>
					</div>
				</div>
			</div>

		</>
	)
}

export default Hero