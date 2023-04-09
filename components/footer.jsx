import React, {useState, useEffect, useRef} from 'react'
// import './footer.css'


const Footer = () =>{


	const date = new Date()
	const year = date.getFullYear()

	return(

		<>

			<div className='container-fluid  bg-default mt-100 pt-40 pb-20'>
				<div className='row footer justify-content-center'>
					<div className='col-lg-3 flex-h-new6 footer-1'>
						<div>
							<img src='/images/apk-crdbg-logo.PNG' width='160px' />
						</div>

						<div className='footer-1-icons flex-v1 mt-5'>
							<div className='flex-h'>
								<div>
									<i className='bi-telephone text-icon'></i>
								</div>
								<div className='ml-4 py-3 text-white'>
									0-8764-984-345	
								</div>
							</div>

							<div className='flex-h'>
								<div className='flex-h'>
									<div>
										<i className='bi-envelope  text-icon'></i>
									</div>
									<div className='ml-4 py-3 text-white'>
										Apokton@gmail.com
									</div>
								</div>
							</div>

							<div className='flex-h'>
								<div className='flex-h'>
									<i className='bi-geo-alt text-icon'></i>
									<div className='text-white ml-4'>
										Ilorin,
									</div>
									<div className='text-white ml-1'>
										Nigeria
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className='col-lg-8 flex-h-new4 footer-2'>
						<div className='footer-2-service'>
							<div className='footer-header'>
								Services
							</div>

							<div className='text-white footer-links'>
								<div className='mt-5'>
									<a href='/' className='text-white' >Get Help</a>	
								</div>

								<div className='mt-3'>
									<a href='/internships' className='text-white' >Hire Talent</a>
								</div>

								<div className='w-100 mt-3'>
									<a href='/resumebuilder' className='text-white' >Resume Builder</a>
								</div>
							</div>
						</div>

						<div className='footer-2-company'>
							<div className='footer-header'>
								Company
							</div>

							<div className='text-white footer-links'>
								<div className='mt-5'>
									<a href='/' className='text-white'>Blog</a>	
								</div>

								<div className='w-100 mt-3'>
									<a href='/about' className='text-white'>About Us</a>
								</div>
							</div>
						</div>

						<div className='footer-2-company'>
							<div className='footer-header'>
								Help
							</div>

							<div className='text-white footer-links'>
								<div className='mt-5'>
									<a href='/resumebuilder' className='text-white'>FAQs</a>	
								</div>

								<div className='w-100 mt-3'>
									<a href='/' className='text-white'>Contact Us</a>
								</div>
							</div>
						</div>

						<div className='footer-2-company'>
							<div className='footer-header'>
								Legal
							</div>

							<div className='text-white footer-links'>
								<div className='mt-5'>
									<a href='/' className='text-white'>Privacy Policy</a>
								</div>

								<div className='w-100 mt-3'>
									<a href='/' className='text-white'>Terms and conditions</a>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className='footer-border mt-5'></div>

				<div className='mt-30 pr-50 pl-50'>
					<div className='footer-end mt-3 text-white'>
						<div className='flex-h end-icons mt-5'>
							<div>
								<i className='bi-twitter text-white'></i>
							</div>
							<div className='ml-4'>
								<i className='bi-facebook text-white'></i>
							</div>
							<div className='ml-4'>
								<i className='bi-linkedin text-white'></i>
							</div>
						</div>

						<div className='mt-5 mx-4'>
							A product of Apokton
						</div>

						<div className='mt-5 text-center'>
							<i className='ri-copyright-line'></i> {year} Apokton Inc. All Rights Reserved
						</div>
					</div>
				</div>
			</div>

		</>
	)
}



export default Footer
