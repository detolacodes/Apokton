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
							<div className='hero-text2'>
								Prepare for top positions at your dream <span className='sp-13'>companies</span>
							</div>

							<div className='pr-20 hero-mintext'>
								{/*Get matched easily with recruiters who see value in your experience amidst other great career opportunities we offer you the best possible to your career*/}

								Acquire real time experience while waiting for that job or opportunity, top companies don't hire the mediocres or the inexperienced, they hire the best of the best
							</div>

							<div className='w-40'>
								<button className='herobtn rounded mt-25'>
									Get Started
								</button>
							</div>
						</div>
					</div>

					<div className='col-lg-6  hero-img'>
						<img src='https://media.istockphoto.com/id/1285083853/photo/3d-illustration-of-smiling-happy-man-pointing-finger-at-blank-screen-laptop-computer-cartoon.jpg?s=612x612&w=0&k=20&c=Z7mKWVfi_-h6epufRBZ4sNJEtY0voJnLilWRTin-FuI=' className='' />
					</div>
				</div>
			</div>

		</>
	)
}

export default Hero