import React, {useState, useEffect, useRef} from 'react'
// import './about.css'
import styles from '../../../styles/Blog.module.css'


const About = () =>{

	return(

		<>

			<div className='container mt-100'>
				<div className='row'>
					<div className='col-lg-12 text-r'>
						<div className='about-text'>
							About Our <span className='sp-3'>Company</span>
						</div>
					</div>
				</div>
			</div>



			<div className='container mt-10'>
				<div className='row justify-content-center'>

					<div className='col-lg-6 aboutimg'>
						<img src='https://www.assuredpartners.com/Portals/1/2020_Images/About-Us.jpg' />
						{/*<img src='https://img.freepik.com/free-photo/fun-3d-cartoon-teenage-kids_183364-81180.jpg' />*/}
					</div>

					<div className={`${styles.abt_text2} col-lg-6`}>
						<div className='mt-40'>
							The primary aim of Apokton is to create an enabling environment for employees and employers to trust themselves. 
							<p>
								We guide jobseekers on getting started in their careers at all levels, provide opportunities from internships to job openings, career talks, articles and blog posts.
							</p>
							<p>
								We also provide a comprehensive and user friendly resume builder to help you create the resume that will help you land your dream job
							</p>
						</div>
						<div>
							<button className='secondarybtn mt-30 rounded'>
								Get Started
							</button>
						</div>
					</div>
				</div>
			</div>


			<div className='container mt-100'>
				<div className='row'>
					<div className='col-lg-12'>
						<div className='about-text'>
							 Our <span className='sp-3'>Mission</span>
						</div>
					</div>
				</div>
			</div>



			<div className='container mt-10'>
				<div className='row justify-content-center'>

					<div className='col-lg-6 abt-text3'>
						<div className='mt-40'>
							Apokton hopes to bridge the gap between recruiters and job seekers and even still remain useful to both parties when they eventually become employer and employee. We hope to do this by providing not only job seeking tools but office and work management tools to help enhance productivity
						</div>
						<div>
							<button className='herobtn w-20 mt-30 rounded'>
								Get Started
							</button>
						</div>
					</div>

					<div className='col-lg-6 aboutimg flex-v-new'>
						<img src='https://media.istockphoto.com/id/1337044924/photo/the-characters-carry-a-piece-of-jigsaw-to-the-appropriate-gap.jpg?s=612x612&w=0&k=20&c=IKnzyiv-OgIiEhhwW8p_yDsN714yEsrXEdv1ImcQa4o=' />
					</div>

				</div>
			</div>


			<div className='container mt-100'>
				<div className='row'>
					<div className='col-lg-12 text-r'>
						<div className='about-text'>
							 Our <span className='sp-3'>Vision</span>
						</div>
					</div>
				</div>
			</div>



			<div className='container mt-10'>
				<div className='row justify-content-center'>

					<div className='col-lg-6 aboutimg flex-v-new'>
						<img src='https://media.istockphoto.com/id/897572902/photo/searching.jpg?b=1&s=170667a&w=0&k=20&c=QmnFzg-cu4QTdOhTPNFd2B4vslG4FbkrYj90yhE_bqc=' />
						{/*<img src='https://img.freepik.com/free-photo/fun-3d-illustration-cartoon-kid-with-vr-helmet_183364-81193.jpg' />*/}
					</div>


					<div className='col-lg-6 abt-text3'>
						<div className='mt-40'>
							Apokton believes in a future where jobseekers or newbies in their field no longer have to struggle for anything such as internships, access to round the clock job openings and opportunities and unlimited access to tools that help professional growth and development
						</div>
						<div>
							<button className='secondarybtn mt-30 rounded'>
								Get Started
							</button>
						</div>
					</div>

				</div>
			</div>

		</>

	)
}

export default About