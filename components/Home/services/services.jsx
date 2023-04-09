import React, {useState, useEffect, useRef} from 'react'
// import './services.css'


const Services = () =>{

	return(

		<>

			<div className='container mt-100'>
				<div className='row'>
					<div className='col-lg-12'>
						<div className='service-text'>
							What <span className='sp-2'>jobseekers & recruiters</span> gain from us
						</div>
						<div>
							We have created an healthy and transparent community of jobseekers and recruiters
						</div>
					</div>
				</div>
			</div>



			<div className='container mt-50'>
				<div className='row justify-content-center'>

					<div className='col-lg-4 flex-h-new2 px-5 cards'>
						<div>
							<div className='icon-bga w-12 p-2'>
								<i className='bi-file-pdf fa-2x'></i>
							</div>	
							<div className='desca my-3'>
								Build a unique resume...
							</div>	
							<div className='min-desca my-3'>
								We offer jobseekers the opportunity to create world class resumes with our own unique resume builder. A well built resume provides solid a foundation to kickstart your career and stand out from the rest.
							</div>	
						</div>

						<div>
							<div className='icon-bga w-12 p-2'>
								<i className='bi-people fa-2x'></i>
							</div>	
							<div className='desca my-3'>
								Hire qualified candidates...
							</div>	
							<div className='min-desca my-3'>
								At Apokton we match recruiters with the best of talents out there on all levels of career, internships, entry level, mid level and senior level. Our jobseekers are verified and proven to be effective.
							</div>	
						</div>

						<div>
							<button className='secondarybtn mr-5 rounded'>
								Get started
							</button>
							<button className='primarybtn text-white rounded'>
								<a href='/signup'>
									Sign up
								</a>
							</button>
						</div>
					</div>

					<div className='col-lg-4 flex-h-new2 px-5 mb-50 cards'>
						<div>
							<div className='icon-bga w-12 p-2'>
								<i className='bi-link fa-2x'></i>
							</div>	
							<div className='desca my-3'>
								Connect directly with recruiters...
							</div>	
							<div className='min-desca my-3'>
								At Apokton we make the communication between you and your potential employer as transparent as possible. You are also updated on the status on the status of your applications regularly. 
							</div>	
						</div>

						<div>
							<div className='icon-bga w-12 p-2'>
								<i className='bi-shield-check fa-2x'></i>
							</div>	
							<div className='desca my-3'>
								Hundred percent trust...
							</div>	
							<div className='min-desca my-3'>
								We build relationships between jobseekers and employers strictly based on trust and transparency. Our recruiters are assured on the validity and responsibility of any jobseeker they are matched with.
							</div>	
						</div>
					</div>

					<div className='col-lg-4 flex-v-new servicesimg cards'>
						<img src='/images/apk2.png' />
					</div>
				</div>
			</div>

		</>
	)
}

export default Services
