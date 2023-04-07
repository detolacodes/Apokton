import React, {useState, useEffect, useRef} from 'react'
// import './hero.css'
import Heroafter from '../heroafter/heroafter'


const Hero = () =>{

	return(

		<>

			<div className='container mt-60'>
				<div className='row justify-content-center'>
					<div className='col-lg-6'>
						<div className='hero'>
							<div className='hero-text'>
								{/*Step up your job search with a Perfect Resume*/}

								Land top jobs faster with a perfect <span className='sp-13'>resume</span>
							</div>

							<div className='pr-20 hero-mintext'>
								{/*Get matched easily with recruiters who see value in your experience amidst other great career opportunities.
								We offer you the best possible to your career*/}

								Improve your chances of landing that dream job faster by building a perfect resume today. This is the first step to creating a nice first impression on potential employers
							</div>

							<div className='w-40'>
								<button className='herobtn rounded mt-25'>
									Sign up to get started
								</button>
							</div>
						</div>
					</div>

					<div className='col-lg-6 hero-img'>
						<img src='https://media.istockphoto.com/id/1222755058/photo/portrait-of-smiling-bearded-businessman-3d-illustration-of-cartoon-standing-male-character-in.jpg?s=612x612&w=0&k=20&c=vcI6HPV2ku2qR34yonUNoWUp9LRJbJ7hvdJs__YCXro=' className='' />
					</div>
				</div>
			</div>

		</>
	)
}

export default Hero